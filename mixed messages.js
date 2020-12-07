// this application will show random messages everytime it is loaded
var welcomeMessages = ["Wonderful Day", "Relaxed Day", "Great day", "Great Weekend", "Good rest of the week"]
var randomNumber = welcomeMessages[Math.floor(Math.random()* welcomeMessages.length)];



/*function randomWelcome(arr) {
for (let i = arr.length; i > 0; i--){
    const msg = Math.floor(Math.random() * welcomeMessages[i])
}return arr
    
}*/
console.log('I Hope You have a ' + randomNumber)
console.log('new change')


