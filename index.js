// Code your solution here

function findMatching(drivers, name){
    return drivers.filter( driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch( drivers, character){
    return drivers.filter( driver => {
        let chars = ""
        for (let i = 0; i < character.length; i++){
            chars += driver.charAt(i)
        }
        return character.toLowerCase() === chars.toLowerCase()
    })
}

function matchName( drivers, name){
    return drivers.filter( driver => driver.name.toLowerCase() === name.toLowerCase())
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
console.log( findMatching( drivers, "bobby"))
console.log(drivers)

