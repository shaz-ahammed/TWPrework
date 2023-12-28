/* below is the list of vehicles that passed a road for the last 7 days */

let carsPerDay = [12,20,18,9,4,21,5]

//without forEach
function forEachFunc(list, callBack){
    for (let i = 0; i < list.length; i ++){
        callBack(list[i])
    }
}


forEachFunc(carsPerDay, (car)=> console.log(`${car} passed the road`))

//with forEach

carsPerDay.forEach((car) => console.log(`${car} passed the road`))




// withouot map

function mapFunc(list, callBack){
    let doubleTheCar = []
    for (let i = 0; i < list.length; i ++){
        doubleTheCar.push(callBack(list[i]))
    }
    return doubleTheCar
}

let myMap = mapFunc(carsPerDay, (cars) => cars * 2)
console.log(myMap)


// with map

let double = carsPerDay.map((cars) => cars * 2)
console.log(double)


//without filter
function filterFunc(list, callBack){
    let moreThanTen = []
    for (let i = 0; i < list.length; i ++){
        if (callBack(list[i])){
        moreThanTen.push(list[i])
        }
    }
    return moreThanTen
}


let moreThanTenOnly = filterFunc(carsPerDay, cars => cars >= 10)
console.log(moreThanTenOnly)

//with filter

let moreThanTenOnly1 = carsPerDay.filter(cars => cars >= 10)
console.log(moreThanTenOnly1)




//without reduce


function reduceFunc(list, callBack){
    let total = 0;
    for (let index = 0; index < list.length; index++) {
        total = callBack(list[index], total)
    }
    return total
}

let totalCars1 = reduceFunc(carsPerDay, (cars, total) => cars + total)
console.log(totalCars1)

//with reduce

let totalCars = carsPerDay.reduce((total, perDay) => total + perDay,
    0)
    console.log(totalCars)