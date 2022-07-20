const app = require('../src/app')
const request = require('supertest')

describe('Users endpoints', () => {
  it('post request to /users should create a user', async () => {
    const userToCreate = {
      firstName: 'SomeFirthName' + Date.now(),
      birthName: 'SomeBirthName' + Date.now(),
      lastName: 'SomeLastName' + Date.now(),
      email: 'SomeEmail' + Date.now(),
      password: 'SomePassword' + Date.now(),
    }

    const createdUser = (await request(app).post('/api/users').send(userToCreate)).body
    expect(createdUser.firstName).toBe(userToCreate.firstName)
    expect(createdUser.birthName).toBe(userToCreate.birthName)
    expect(createdUser.lastName).toBe(userToCreate.lastName)
    expect(createdUser.email).toBe(userToCreate.email)
    expect(createdUser.password).toBe(userToCreate.password)
  })

  it('get request to /users should list users', async () => {
    const userList = (await request(app).get('/api/users')).body
    const usersExist = userList.length > 0

    expect(usersExist).toBe(true)
  })
})

/* These tests are to see if the users are created correctly
 */
