const superagent = require('superagent');

const getTatooineResidents = () => {
    return new Promise((resolve, reject) => {
        resolve(
                superagent
                    .get('https://swapi.co/api/planets/1/')
                    .then(response => (response.body.residents))
                    .catch(error => (error.status, error.message))
        )
        reject("uhOh")
    })
}

const promiseMeAString = (data) => {
    return new Promise((resolve,reject) => {
        if(typeof data === "string") {
            resolve("You kept the Promise!")
        } else if (data === null) {
            reject("You have failed me!")
        }
    })
}

module.exports.getTatooineResidents = getTatooineResidents
module.exports.promiseMeAString = promiseMeAString