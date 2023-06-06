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



//Diff two arrays

function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(elem => !arr1.includes(elem) || !arr2.includes(elem))
  
  }
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//seek and destroy

function destroyer(arr) {
  let removevalue = Array.from(arguments).slice(1);
  return arr.filter((value)=>{
    return !removevalue.includes(value);
  })
 }
 
 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


 //
 function whatIsInAName(collection, source) {
  let newarr = [];
  for(let i = 0 ; i<collection.length ; i++){
    let presentThere = true;
    for(let sourceElement in source){
      if(collection[i][sourceElement] !== source[sourceElement]){
         presentThere = false;
      }
    }
    if(presentThere){
      newarr.push(collection[i]);
    }
  }
  return newarr;
 }
 
 console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

 //to get this-is-spinal-tap
 function spinalCase(str) {
  
 return str.replace(/([a-z])([A-Z])|[\s|_]+/g, '$1-$2').toLowerCase();
  
 
}

console.log(spinalCase('This_IsSpinal Tap'));

//to replace jumped with leaped
function myReplace(str, before, after) {
  let jumpindex = str.indexOf(before);
  console.log(jumpindex);
  if(str[jumpindex] == str[jumpindex].toUpperCase()){
    let replacedWord = str.replace(before , after[0].toUpperCase()+after.slice(1));
    return replacedWord ; 
  }else{
    let replacedWord = str.replace(before , after.toLowerCase());
    return replacedWord ; 
  }
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));

//Dna pairing
function pairElement(str) {
  let newArr = [];
  for(let i = 0 ; i<str.length ; i++){
  if(str[i] === "A")newArr.push(["A" , "T"]);
  if(str[i] === "T")newArr.push(["T" , "A"]);
  if(str[i] === "C")newArr.push(["C" , "G"]);
  if(str[i] === "G")newArr.push(["G" , "C"]);
 
  }
  return newArr;
}



console.log(pairElement("GCG"));

//merge array and sort it and eliminate duplicates
function uniteUnique(arr) {
  return [...arguments].flat().filter((item , index ,arr)=>arr.indexOf(item) === index);
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


//convert into html tags
function convertHTML(str) {
  let newString = str.split("");
   for(let i= 0 ; i<newString.length ; i++){
   switch(newString[i]){
     case "&":
     newString[i] = "&amp;";
     break ; 
     case "<":
     newString[i] = "&lt;";
     break;
     case ">":
     newString[i] = "&gt;";
     break;
     case '"':
     newString[i] = "&quot;";
     break;
     case "'":
     newString[i] = "&apos;";
     break;
   }
   }
   newString = newString.join("");
   return newString;
 }


 console.log(convertHTML("Dolce & Gabbana")); 

 //sum of all odd fibonacci number

 function sumFibs(num) {
  if(num<=0){
    return 0;
  }
  let a = 0;
  let b =1;
  let sum=0 ;
  while(b<=num){
    if(b%2 !== 0){
      sum = sum+b;
    }
    
  
  b = b+a;
  a= b-a;
}
 
  return sum;
 }
 
 console.log(sumFibs(4));

 

 //sum of all prime numbers
function sumPrimes(num) {
  let  arr = [];
  if (num <= 1) return
  for (let i = 2; i <= num; i++)
    if (!arr.some(val => i % val === 0)) arr.push(i) //The Array.some() method checks if any of the elements in an array pass a test (provided as a function).
  return arr.reduce((a, b) => a + b)
  }
  
  console.log(sumPrimes(10));

  //smallest common number

  function smallestCommons(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let array = []
//   Creating a full array of all values in the range
    for (min; min<=max; min++){
        array.push(min)
     }
//Creating the function that .every will operate on
    const lowestCommon = (currentValue) => n % currentValue === 0;
    let common = false
    let n = max* (max-1)
// Checking whether the first value for n is the lowestCommon Multiple
   common =  array.every(lowestCommon)
//Checking for a true result from the array
    while (common === false){
         n++
         common =  array.every(lowestCommon)
    }
    return n
}
  console.log(smallestCommons([1,5]));


  //Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
  
function dropElements(arr, func) {
    while(arr.length && !func(arr[0])){
      arr.shift();
    }
    return arr ; 
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  //flatten an array

  function steamrollArray(arr) {
  
    return arr.flat(3);
      
    }
    
    console.log(steamrollArray([1, [2], [3, [[4]]]]));

    //to change into string

    function binaryAgent(str) {
      let string = str.split(" ");
      let txt = [];
      for(let i = 0 ; i<string.length ; i++){
        txt.push(String.fromCharCode(parseInt(string[i] , 2))) //String.fromCharCode changes unicode(decimal) to strings  whereas parseInt
      }
      return txt.join("");
    }
    
    console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

    //Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

//In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

//In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

//remember, you can access object properties through either dot notation or [] notation.
    
function truthCheck(collection, pre) {
      return collection.every((element)=>{
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
      })
    }
    
    console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));

    
    //Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.



    function addTogether(arg1,arg2) {
      if(arguments.length<=1){
      if(Number.isInteger(arg1)) { return function(b){
       if(Number.isInteger(b))  return arg1+b;
        }
        }
     
      }
       if(Number.isInteger(arg1) && Number.isInteger(arg2)){
           let sum = arg1 + arg2;
           return sum;
         }else{
           return undefined;
         }
     }
     
     console.log(addTogether(2,3));