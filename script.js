




let arr = [
  { id: 1, name: 'Anuj', age: 22, profession: 'developer' },
  { id: 2, name: 'Shikha', age: 25, profession: 'developer' },
  { id: 3, name: 'Anushka', age: 20, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  const developers = arr.filter(person => person.profession === 'developer');
  const developerNames =  developers.map(person => person.name);
  console.log('Developer Name:', developerNames);
}

function addData() {
  //Write your code here, just console.log
  const newData = {id: 3, name: 'Harry', age: 22, profession: 'HR'};
  arr.push(newData);
  console.log('New Data Added:', newData);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredData = arr.filter(person => person.profession !== 'admin');
  console.log('Array with Admins removed:', filteredData);
  
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    {id: 5, name: 'Ashish', age: 23, profession: 'lawyer'},
    {id: 6, name: 'Sagar', age: 26, profession: 'IAS'}
  ];

  const concatenatedArray = arr.concat(newArr);
  console.log('Concatanated Array:', concatenatedArray);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
