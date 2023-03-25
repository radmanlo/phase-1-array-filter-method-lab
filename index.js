// Code your solution here

function findMatching(drivers, name){
    const findByName = []
    drivers.filter((driver) => {
        if (driver.toLowerCase() === name.toLowerCase())
            findByName.push(driver)
    })
    return findByName
}

function fuzzyMatch( drivers, character){
    const findByChar = []
    drivers.filter( (driver) => {
        let chars = ""
        for (let i = 0; i < character.length; i++){
            chars += driver.charAt(i)
        }
        if (character.toLowerCase() === chars.toLowerCase())
            findByChar.push(driver)
    } )
    return findByChar
}

function matchName( drivers, name){
    const findByName = []
    drivers.filter((driver) => {
        if (driver.name.toLowerCase() === name.toLowerCase())
            findByName.push(driver)
    })
    return findByName
}

