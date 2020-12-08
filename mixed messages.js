//  keys in it to be executed!
const mealPlan = {
breakfast: ['Shreddies', 'Bacon Roll', 'Coco pops', 'Sausage Roll'],
lunch: ['Salad', 'French Toast', 'Sandwhich', 'Chicken Wrap' ],
dinner: ['Ribs', 'Fish and chips', 'pizza', 'pasta'],
}
var randomNumber = mealPlan[Math.floor(Math.random()* mealPlan.length)];

/* for (let i = 0; i < mealPlan.length; i++){
return 'for Breakfast you will have' + `${breakfast}`
} */


switch(randomNumber){
    case mealPlan.breakfast:
        return 'for Breakfast you will have' `${randomNumber} ${mealPlan.breakfast}`
        break;
        case mealPlan.lunch:
            return 'for lunch you will have' `${randomNumber} ${mealPlan.lunch}`
            break;
            case mealPlan.dinner:
                return 'for dinner you should have ' `${randomNumber} ${mealPlan.dinner}`
}
console.log






// this application will show random messages everytime it is loaded
// this first code with welcome messages helped to get a very basic understanding of what i want to do going forward.
/*var welcomeMessages = ["Wonderful Day", "Relaxed Day", "Great day", "Great Weekend", "Good rest of the week"]
var randomNumber = welcomeMessages[Math.floor(Math.random()* welcomeMessages.length)];
*/









