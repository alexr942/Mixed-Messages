//get a random number
function randomNumber(num) {
    let random = Math.floor(Math.random() * num);
    return random
}

const mealPlan = {
breakfast: ['Shreddies', 'lucky Charms', 'Coco pops', 'weetabix'],
lunch: ['Salad', 'toast', 'A Sandwhich', 'A Chicken Wrap' ],
dinner: ['Ribs', 'Fish and chips', 'pizza', 'pasta'],
}

let mealLayout = [];
  

for(let prop in mealPlan) {
  let menu = randomNumber(mealPlan[prop].length);

 switch(prop){
    case 'breakfast':
        mealLayout.push('for Breakfast you should have a bowl of ' + `${mealPlan[prop][menu]}`)
        break;
        case 'lunch':
           mealLayout.push('for lunch you should have ' + `${mealPlan[prop][menu]}`)
            break;
            case 'dinner':
                  mealLayout.push('for dinner you should have ' + `${mealPlan[prop][menu]}`)
                 break;
} 
}

console.log(mealLayout)
