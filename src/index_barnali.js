class FamilyMember {
  constructor(surname, birthname, firstname) {
    this.surname = surname
    this.birthname = birthname
    this.firstname = firstname
    this.audios = []
    this.documents = []
  }

  addAudio(audio) {
    this.audios.push(audio)
  }

  addDocument(document) {
    this.documents.push(document)
  }
}

const barnali = new FamilyMember('Smollich', 'Gupta', 'Barnali')
const tim = new FamilyMember('Smollich', 'Smollich', 'Tim')

console.log(barnali, barnali.audio[0], barnali.document[0])
console.log(tim, tim.audio[0], tim.document[0])
