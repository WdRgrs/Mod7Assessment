//Write a function that takes an array of numbers that will return True if any two numbers in the list sum to 0, else return false.

//idea: Loop through an array.. if a number exists, check to see if the inverse(negative) of that number exists.


const arrTrue = [1, 2, 3, -2]; //Should return True
const arrFalse = [1, 2, -3, 4]; //Should return False
const twoZeros = [1, 2, 3, 0, 3, 0]; //should return True - 0 + 0 = 0
const finalTestFalse = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -10, -11, -12 , -13] //Should return false - has a wide range of positive and negative numbers and 0
const finalTestTrue = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -10, -11, -12 , -13, -9] //Should return true = 9, -9

function sumZero(arr) {
    let positiveNumbers = [];  //This array is holding on to all of the positive numbers
    let negativeNumbers = []; //This array is holding on to all of the negative numbers
    let zero = []; //This array is keeping track of 0's pressent in the array, two zero's will fire the True statement.. 0 + 0 = 0, weird I know.
    let zeroNumber = []; //This array is keeping track of how many times negative and positive numbers cancel eachother out

    //This for loop is reassigning numbers to either positive or negative or 0 arrays
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers.push(arr[i])
        } else if (arr[i] === 0) {
            zero.push(arr[i])
        } else {
            negativeNumbers.push(arr[i])
        }
    }

    //This for loop is looping each negative number through each positive number on the array.  If they cancel out a '1' will be pushed to the zeroNumber array
    for (let i = 0; i < positiveNumbers.length; i++) {
        for (j = 0; j < negativeNumbers.length; j++) {
            if (negativeNumbers[j] + positiveNumbers[i] === 0) {
              zeroNumber.push('1')
            }
        }
    }

    if (zero.length > 1) {              //Checking to see if there are two or more zero's, pulled from the parent array.  
        console.log(true);
        return true;
    } else if (zeroNumber.length > 0) { //Checking to see if there are any instances of two numbers cancelling eachother out from the positive/negative arrays
        console.log(true);
        return true;
    } else {                            //If none of the above instances were triggered, the function will return false
        console.log(false)
        return false
    }
}



//Tested each of the above arrays, yay!
sumZero(arrTrue);
sumZero(arrFalse);
sumZero(twoZeros);
sumZero(finalTestFalse);
sumZero(finalTestTrue);

//I think I could have simplified the code for space, instead of making 2 new arrays of positive and negative numbers, I could have simply made an array to catch positive or negative numbers and then looped that array through the original array to see if individual numbers would cancel eachother out, equalling zero.  By adding in 3 extra arrays the space complexity went up, but the time complexity was lowered because it is not checking against every index of the original array, it is just checking positive values against negative values.  