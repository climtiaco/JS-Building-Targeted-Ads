// get user's data
// get user's coordinates


// check time of day
function userTime() {
    const now = new Date()
    return now.getHours()
}

console.log(userTime());

// get user's time
function getMealTime(){
    const tod = userTime()
// The if statement way
    // if (tod > 20) {
    //     return 'late-night-snack'
    // } else if (tod > 16) {
    //     return 'dinner'
    // } else if (tod > 11) {
    //     return 'lunch'
    // } else {
    //     return 'Breakfast'
    // }

    return tod > 20 ? 'late-night-snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
}

console.log(getMealTime());


// helper functions


// build ads
// build ad 1
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(inner)
}

buildAd1()



// build ad 2


// event listeners
// on load, build ads
