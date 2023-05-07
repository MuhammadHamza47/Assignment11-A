//1. Write a JavaScript program to list the properties of a JavaScript object

var student = {

    name : "David Rayy",
    
    sclass : "VI",
    
    rollno : 12,
    i:'test',
    
};
for(let i in student)
console.log(student[i]);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.



var student = {

    name : "David Rayy",
    
    sclass : "VI",
    
    rollno : 12 };
    
    console.log("before delete",student)
    
    delete student.rollno;
    console.log("after delete",student);
    

    // 3. Write a JavaScript program to get the length of a JavaScript object.   



var student = {

    name : "David Rayy",
    
    sclass : "VI",
    
    rollno : 12 };
    
    var studentlength = Object.keys(student).length;
    
    
    console.log(studentlength);

    //4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   



var library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false
    }
  ];
  
  for (var i = 0; i < library.length; i++) {
    var book = library[i];
    var bookInfo = book.title + ' by ' + book.author;
  
    if (book.readingStatus) {
      console.log(bookInfo + ' is already read.');
    } else {
      console.log(bookInfo + ' is not read yet.');
    }
  }
  
  // 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   


class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      const pi = 3.14159265358979323846;
      const volume = pi * Math.pow(this.radius, 2) * this.height;
      return volume.toFixed(4);
    }
  }
  
  const cylinder = new Cylinder(3, 5);
  console.log(`The volume of the cylinder is ${cylinder.getVolume()}`);
  


 //6. Write a Bubble Sort algorithm in JavaScript.   

//Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,

//Sample Data: [6,4,0, 3,-2,1]

//Expected Output : [-2, 0, 1, 3, 4, 6]


let Data=[5,2,8,6,9,1,3,5,4,2]

sortingArray= Data.sort((a,b)=>(a-b))
console.log(sortingArray)

// Write a JavaScript program which returns a subset of a string.   

//Sample Data: dog

//Expected Output: ["d", "do", "dog", "o", "og", "g"]

function generateSubsets(str) {
    let subsets = [];
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        subsets.push(str.slice(i, j));
      }
    }
  
    return subsets;
  }
console.log( generateSubsets("dog"));  

 //8. Write a JavaScript program to create a Clock.   

// Note: The output will come every second.

// Expected Console Output :

// "14:37:42"

// "14:37:43"

// "14:37:44"

// "14:37:45"

// "14:37:46"

// "14:37:47"

function clock() { // user-defined
    // Get the current date and time
    var now = new Date();  // built-in function
  
    // Extract hours, minutes, and seconds from the date object
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Add a leading zero to single-digit hours, minutes, and seconds
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Build the clock string in the format HH:MM:SS
    var clockStr = hours + ":" + minutes + ":" + seconds;
  
    // Log the clock string to the console
    console.log(clockStr);
  }
  clock()
  
  
 // 9. Write a JavaScript program to calculate the area and perimeter of a circle.   

// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

function area(r){
    return 3.14*r*r
   }
   console.log("Area of a circle is:", area(60))
   
   
   function perimeter(r){
      
   return 2*3.14*r
   }
   console.log("the parimeter of a circle is :",perimeter(50));

   // 10. Write a JavaScript program to sort an array of JavaScript objects.   

// Sample Object :



var library = [ 

    {
 
        title:  'The Road Ahead',
 
        author: 'Bill Gates',
 
        libraryID: 1254
 
    },
 
    {
 
        title: 'Walter Isaacson',
 
        author: 'Steve Jobs',
 
        libraryID: 4264
 
    },
 
    {
 
        title: 'Mockingjay: The Final Book of The Hunger Games',
 
        author: 'Suzanne Collins',
 
        libraryID: 3245
 
    }];
  library.sort(function(a,b){
  return b.libraryID - a.libraryID;
  })
 console.log(library);
 
//11. Write a JavaScript function to print all the methods in an JavaScript object.

// Test Data :

// console.log(all_properties(Array));

// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

function getAllMethods(obj) {
    const props = Object.getOwnPropertyNames(obj);
    return props.filter(function(prop) {
      return typeof obj[prop] === 'function';
    });
  }
  
    
  
  console.log(getAllMethods(Array)); 
  // Output: ["from", "of", "isArray", ...and so on]

  // 12. Write a JavaScript function to parse an URL. 

function parseURL(url) {
    var parsed = new URL(url);
    return {
      protocol: parsed.protocol,
      host: parsed.host,
      hostname: parsed.hostname,
      port: parsed.port,
      pathname: parsed.pathname,
      search: parsed.search,
      hash: parsed.hash,
    };
  }
  var url = "https://www.example.com/path/to/file.html?id=123#section";
  var parsed = parseURL(url);
  
  console.log(parsed.protocol);
  console.log(parsed.host); 
  console.log(parsed.hostname);
  console.log(parsed.port); 
  console.log(parsed.pathname); 
  console.log(parsed.search); 
  console.log(parsed.hash);
    
  // 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties
function namesOfObject(obj) {
    return Object.keys(obj)
}
    
const person={
    Name:"hassan",
    class:10,
    Gender:"male"

}
keys= namesOfObject(person)
console.log(keys);

// 14. Write a JavaScript function to retrieve all the values of an object's properties.
function valuesOfobject(obj) {
    return Object.values(obj)
}
 const person1={
    Name:"Haseeb",
    Age: 19,
    gender: "male",
 }
 let values=valuesOfobject(person1)
 console.log(values);
    
 // 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

function entriesKeyvalues(obj) {
    return Object.entries(obj)
}
const person2={
    name:"Ali",
    age: 21,
    callification:"BSCS",

}

values =  entriesKeyvalues(person2)
console.log(values);
      
//16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

function functionObject(obj) {
    const entries={}
    for(const key in obj){
    entries[obj[key]]=key
    }
    return entries
}

let  obj={
    name:"Ahmad",
    city:"Faisalabad",
    gender:"Male",
}
values=functionObject(obj);
console.log(values);