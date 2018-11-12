import * as Firebase from 'firebase'

export const setSelectedAnswersFB = (formID, answers) => {
  Object.keys(answers).forEach(aKey => {
    const answer = answers[aKey]
    Firebase.database().ref('createdForms/'.concat(formID).concat('/entries/').concat(aKey).concat('/alreadyAnswered'))
      .set(true).then((e) => {
        console.log(aKey, answer)
      }).catch((e) => {
        console.error(e)
      })
  })
}
