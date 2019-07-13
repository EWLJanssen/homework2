const superagent = require('superagent');

function getTatooineResidents() {
    superagent
    .get('https://swapi.co/api/planets/1/')
    .then(res => {console.log(res.body.residents)
    .catch(error => console.log(error));  
    return superagent
})
}




function promiseMeAString() {
    promise = (string) => {
        return new Promise((resolve, reject) => {
            if ((string === 'I Promise!')){
                resolve('You kept the Promise!')
            } else {
                reject('You have failed me!')
            }
        }
    )}
promise(null)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))

}

module.exports = {
    getTatooineResidents,
    promiseMeAString,
}
