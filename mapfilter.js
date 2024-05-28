//Question1
let arr = [43,53,23,45,8,3]
let resulT1 = arr.map(newfunction);

document.getElementById("para1").innerHTML = resulT1;
function newfunction(num) {
    return num*2;
}

//Question2
let arrNames = ["ammad","safi","tufail","shahab"]
let arrNames1 = arrNames.map(arrNames=>{
    let first1 = arrNames.charAt(0).toUpperCase();
    let newNames = arrNames.slice(1).toLowerCase();
    return first1+newNames;
});
document.getElementById("para2").innerHTML = arrNames;
document.getElementById("para3").innerHTML = arrNames1;

//Question3(a) colors question 
let colours = ["Red", "blue", "Pink" , "Purple"]
let newColours =  colours.map(Colour);
document.getElementById("para4").innerHTML = newColours ;
function Colour (Color){
    return Color;
}
// question3(b)
const present = colours.filter(element => element ==='Red');
document.getElementById("showresult").innerHTML= present;


//question4(a)
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];
let lastname = persons.map(people => people.lastname) 
    document.getElementById("para5").innerHTML = `${lastname}`;

//Question4(b)
const modifiedNames = persons.map(people => ({ ...people, lastname: "Mr " + people.lastname }));
const modifiedNamesString = modifiedNames.map(person => ` ${person.lastname}`);
document.getElementById("para6").innerHTML = modifiedNamesString;

//Question5
let nums = [2,34,35,22,66,34,3,6];
let newnums = nums.filter(nums => nums>5);
document.getElementById("para8").innerHTML = "Orignal Arry "+nums;
document.getElementById("para7").innerHTML= "Number that are greater then Five "+newnums;

//Question3 from 2nd assignment
let courses = ['javaScript' , 'CSS', 'HTML' , 'react js' , 'data structures and algorithms'];
let newcourses = courses.map (newpage);

document.getElementById("para9").innerHTML = newcourses ;

function newpage(n1){
    return n1;
}

//Question3(b) check if react js is part of it or not
let findJs = courses.filter(num1 => courses === 'react js' );

document.getElementById("para10").innerHTML = findJs;

