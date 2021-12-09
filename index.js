src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
console.log("Hello")

//creating a function/event that on click of the button display message
function fun() {  
  alert("HELLO, I AM GLAD TO SEE YOU ON MY PAGE!!!"
  );

}

  
  //creating a object that store basic information
  const myInfo = new Object();
  myInfo.name = 'Dino';
  myInfo.surname = 'Dobrunaj';
  myInfo.year = 2000;
  myInfo.placeOfBirth ='Sarajevo';
  myInfo.gender ='male';
  console.log(myInfo);
  
  //creating a array with three objects that store information about my education
  var education = ["Prva Osnovna skola Ilidza", "Eletronic High School Sarajevo", "International University Sarajevo"];
        
        for(var i in education)  {  
            document.write(education[i] + "<br>");
            console.log(education);
        }
  
  
  //creating a variable that set phone number to paragraph with id
  var num = "062/362-715";
  document.getElementById("dn").innerHTML = num;
  
  //JQUERY animation for logo in header
  $(document).ready(function () {
    function Bounce() {
        $("#myimg").animate({
            top: "200px",
            width: "200px"
        }, 1000, function () {
            $("#myimg").animate({
                top: "300px",
                width: "250px"
            }, 1000, Bounce)
        });
    }
    Bounce();
})

//if statement that sends a message based on the time of the day
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;

//function that check the time
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//function that display current time
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

//creating switch statement to show what day it is
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("d").innerHTML = "Today is " + day;

//creating a table using array
var myArray = [
  {'Date' : '2005-2014', 'TotalYears' : '9 years', 'Institution' : 'Prva Osnovna skola Ilidza', 'EducationLevel' : 'Primary School', 'Section' : 'General'},
  {'Date' : '2014-2018', 'TotalYears' : '4 years', 'Institution' : 'Electrical High School Sarajevo', 'EducationLevel' : 'High School', 'Section' : 'Telecommunication'},
  {'Date' : '2019-now', 'TotalYears' : '4 years', 'Institution' : 'International University Sarajevo', 'EducationLevel' : 'University', 'Section' : 'Software Engineering'},
  
]
buildTable(myArray)
function buildTable(data){
  var table = document.getElementById('myTable')

  for (var i = 0; i < data.length; i++){
      var row = `<tr>
                      <td>${data[i].Date}</td>
                      <td>${data[i].TotalYears}</td>
                      <td>${data[i].Institution}</td>
                      <td>${data[i].EducationLevel}</td>
                      <td>${data[i].Section}</td>
                </tr>`
      table.innerHTML += row

  }
}