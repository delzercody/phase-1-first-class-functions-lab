// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = () => {return drivers.slice(0, 2)};
const returnLastTwoDrivers = () => {return drivers.slice(- 2)}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = (fare) => {return function(multiplier) {return fare * multiplier}}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function selectDifferentDrivers(){
    let selectedDrivers 
    if(Math.random() > 0.5){
        selectedDrivers = selectingDrivers[0]()
    }else{
        selectedDrivers = selectingDrivers[1]()
    }
    return selectedDrivers
} 