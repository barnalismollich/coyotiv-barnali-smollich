import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import io from 'socket.io-client'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.withCredentials = true

Vue.use(Vuex)

const socket = io(process.env.VUE_APP_BASE_URL)

const mutations = {
  INCREMENT_COUNT: 'increment count',
  SET_USER: 'set user',
  SET_LIVE_STREAM: 'set live stream',
  ADD_LIVE_STREAM: 'add live stream',
  ADD_MESSAGE_TO_LIVE_STREAM: 'add message to live stream',
}

const store = new Vuex.Store({
  state: {
    count: 0,
    user: null,
    currentLiveStream: null,
    liveStreams: [],
    liveStreamMessages: [],
  },
  mutations: {
    [mutations.INCREMENT_COUNT](state) {
      state.count++
    },
    [mutations.SET_USER](state, user) {
      state.user = user
    },
    [mutations.SET_LIVE_STREAM](state, live) {
      state.currentLiveStream = live
    },
    [mutations.ADD_LIVE_STREAM](state, stream) {
      state.liveStreams.push(stream)
    },
    [mutations.ADD_MESSAGE_TO_LIVE_STREAM](state, message) {
      state.liveStreamMessages.push(message)
    },
  },
  actions: {
    incrementCount({ commit }) {
      commit(mutations.INCREMENT_COUNT)
    },
    async fetchUser(store, id) {
      const userRequest = await axios.get(`/api/users/${id}/json`)
      return userRequest.data
    },
    async fetchUsers() {
      const usersRequest = await axios.get('/api/users')
      return usersRequest.data
    },
    async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(mutations.SET_USER, user.data || null)
      return user.data
    },
    async login({ commit }, credentials) {
      // eslint-disable-next-line no-useless-catch
      try {
        const user = await axios.post('/api/account/session', credentials)
        commit(mutations.SET_USER, user.data)
      } catch (e) {
        throw e
      }
    },
    async register(store, user) {
      return axios.post('/api/account', user)
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_USER, null)
    },
    async goLive({ state, commit }) {
      socket.emit('go live', state.user._id, () => {
        commit(mutations.SET_LIVE_STREAM, state.user._id)
      })
    },

    async addLiveStream({ commit }, stream) {
      commit(mutations.ADD_LIVE_STREAM, stream)
    },
    async sendMessageToLiveStream({ state, commit }, body) {
      const message = {
        body,
        author: state.user.firstName,
      }
      commit(mutations.ADD_MESSAGE_TO_LIVE_STREAM, message)
      socket.emit('new message', state.currentLiveStream, message)
    },
    async joinStream({ commit }, stream) {
      socket.emit('join stream', stream)
      commit(mutations.SET_LIVE_STREAM, stream)
    },
  },
  modules: {},
})

// This file is amongst others important for the real time communication with socket.io

socket.on('new live stream', user => {
  store.dispatch('addLiveStream', user)
})

socket.on('new live stream message', message => {
  store.commit(mutations.ADD_MESSAGE_TO_LIVE_STREAM, message)
})

export default async function init() {
  await store.dispatch('fetchSession')
  return store
}
