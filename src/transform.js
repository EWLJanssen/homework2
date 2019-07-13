

const people = [
            {name: "Henry", age: 9}, 
            {name: "John", age: 20},
            {name: "Anna", age: 31}, 
            {name: "John", age: 32}, 
            {name: "Hank", age: 60},
]

function groupAdultsByAgeRange(person) {
        if (people.age < 21){
            return '20 and younger'
        }
        if (people.age >20){
            return '21-30'
        }
        if (people.age > 30){
            return '31-40'
        }
        if (people.age > 40){
            return '41-50'
        }
        if (people.age > 50) {
            return '51 and older'
        }
    }

const grouping = groupAdultsByAgeRange = (people) => {
        return person.filter(groupAdultsByAgeRange)
    }

module.exports = groupAdultsByAgeRange