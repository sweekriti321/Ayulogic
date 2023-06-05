// const tOut=(t)=>{
//   return new Promise((resolve , reject)=>{
//     setTimeout(()=> {resolve(`completed in ${t}`)
//   },t)
// })
// }
// tOut(100).then(result => console.log(result));
// Promise.allSettled([tOut (100) , tOut(200)])
// .then(result => console.log(result));

// const promises = [
//   Promise.resolve(1),
//   Promise.resolve(2),
//   Promise.reject(new Error('Error occurred')),
//   Promise.resolve(3)
// ];

// Promise.allSettled(promises)
//   .then(results => {
//     results.forEach(result => {
//       if (result.status === 'fulfilled') {
//         console.log(`Promise fulfilled with value: ${result.value}`);
//       } else {
//         console.log(`Promise rejected with error: ${result.value}`);
//       }
//     });
//   })
//   .catch(error => console.error(error));

//Repeat a String Repeat a String
function repeatString(str, num) {
  let c = "";
  for (let i = num; i > 0; i--) {
    c = c + str;
  }
  return c;
}

console.log(repeatString("abc", 3));

//turnacate a string
function truncateString(str, num) {
  if (str.length > num) {
    return str.substring(0, num) + "...";
  } else {
    return str;
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//farenheit to celsius
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(30));

//reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

//Factorial of 5
function factorialize(num) {
  let product = 1;
  for (num; num > 0; num--) {
    product = product * num;
  }
  return product;
}

console.log(factorialize(5));

//the longest word
function findLongestWordLength(str) {
  let longest = "";
  let words = str.split(" ");
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

//Confirm ending
function confirmEnding(str, target) {
  let a = str.length;
  let b = target.length;
  let c = str.substring(a - b, a);
  if (c === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));

//Finders Keepers
//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 == 0));

//to check if booWho is boolean primitive or not
function booWho(bool) {
  if (bool === true || bool === false) {
    //to check type use ===
    return true;
  } else {
    return false;
  }
}

console.log(booWho(null));

//textcase
function titleCase(str) {
  if (str.length == 0) {
    return str;
  }
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

//You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  let newarr = [...arr2];
  newarr.splice(n, 0, ...arr1);
  return newarr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//Remove all falsy values from an array. Return a new array; do not mutate the original array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

//Where do i belong
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

function getIndexToIns(arr, num) {
  let newarr = arr.concat(num);
  newarr.sort((a,b)=>a-b);   //(a,b)=>a-b sort in ascending order if (a,b)=>b-a then in descending order
  return newarr.indexOf(num) ; 
}

console.log(getIndexToIns([40, 60], 50));

//mutation 
//to check whether the characters of array2 belongs to characters of array1 or not 

function mutation(arr) {
  let upper = [];
 arr.forEach((element =>{
   upper.push(element.toUpperCase())
 }));
 let word2 = upper[1];
 let word1 = upper[0];
   
      for(let i = 0 ; i<word2.length ; i++){
     if(!word1.includes(word2[i])){
       return false;
     }
     else{
       return true;
     }
     }
    

}

console.log(mutation(["hello", "hey"]));

//chunkymonkey
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newarr = [];
  for(let i = 0 ; i<arr.length ; i+=size){
     newarr.push(arr.slice(i , i+size))
     }
     return newarr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));



