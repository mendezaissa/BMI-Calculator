
(function() {
  'use strict';
  window.addEventListener('load', function() {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });

  }, false);

} )();

//variable that stores the bmi category
var result = "";

//variable that stores the bmi number
var bmi = 0;

//calculate bmi function
function calculateBmi()
{
  //retrieves the value of id called pounds and stores it in variable 'pounds'
  var lbs = document.getElementById('pounds').value;

  //retrieves the value of id called inches and stores it in variable 'inches'
  var inch = document.getElementById('inches').value;

  //retrieves the value of id called feet and stores it in variable 'feet'
  var ft = document.getElementById('feet').value;

  //convert to integers
  var weight = parseInt(lbs);
  var inches = parseInt(inch);
  var ft = parseInt(ft);

  //converts # of feet to inches then adds to inches
  var height = (ft * 12) + inches;

  //calculates bmi
  bmi = (weight / ( height*height )) * 703;

  //truncates bmi down to one decimal point
  bmi = parseFloat(bmi.toFixed(1));
  console.log(bmi);

  //based on calculated bmi, result is assigned a value
  if(bmi < 18.5)
  {
    result = "Underweight";
    displayResults();
  }
  else if(bmi >= 18.5 && bmi <= 24.9)
  {
    result = "Normal";
    displayResults();
  }
  else if(bmi >= 25.0 && bmi <= 29.9)
  {
    result = "Overweight";
    displayResults();
  }
  else if(bmi >= 30.0)
  {
    result = "Obese";
    displayResults();
  }
}

function displayResults()
{
  console.log("displayResults");

  /*getsElementsByClassName returns an element collection, here we need to get the first
    element of the collection in order to be able to read & set property 'display' */
  var currentDisplay = document.getElementsByClassName('needs-validation');
  var newDisplay = currentDisplay[0].style.display = 'none';

  if(result == 'Obese')
  {
    //first paragraph
    var para1 = document.createElement("p");
    var node1 = document.createTextNode("For the information you entered: ");
    para1.appendChild(node1);

    var element1 = document.getElementById("mainPage");
    element1.appendChild(para1);

    //second paragraph
    var para2 = document.createElement("p");
    var node2 = document.createTextNode("Your BMI is " + bmi 
      + ", indicating your weight is in the " + result + 
      " category for people of your height.");
    para2.appendChild(node2);

    var element2 = document.getElementById("mainPage");
    element2.appendChild(para2);

    //third paragraph
    var para3 = document.createElement("p");
    var node3 = document.createTextNode("For your height, a normal weight range would be from 101 to 136 pounds");
    para3.appendChild(node3);

    var element3 = document.getElementById("mainPage");
    element3.appendChild(para3);

    //fourth paragraph
    var para4 = document.createElement("p");
    var node4 = document.createTextNode("People who are overweight or obese are " + 
      "at a higher risk for chronic conditions such as high blood pressure, diabetes, " +
      "and high cholesterol.");
    para4.appendChild(node4);

    var element4 = document.getElementById("mainPage");
    element4.appendChild(para4);
  }
  else if(result == 'Overweight')
  {
    //first paragraph
    var para1 = document.createElement("p");
    var node1 = document.createTextNode("For the information you entered: ");
    para1.appendChild(node1);

    var element1 = document.getElementById("mainPage");
    element1.appendChild(para1);

    //second paragraph
    var para2 = document.createElement("p");
    var node2 = document.createTextNode("Your BMI is " + bmi 
      + ", indicating your weight is in the " + result + 
      " category for people of your height.");
    para2.appendChild(node2);

    var element2 = document.getElementById("mainPage");
    element2.appendChild(para2);

    //third paragraph
    var para3 = document.createElement("p");
    var node3 = document.createTextNode("For your height, a normal weight range would be from 101 to 136 pounds");
    para3.appendChild(node3);

    var element3 = document.getElementById("mainPage");
    element3.appendChild(para3);

    //fourth paragraph
    var para4 = document.createElement("p");
    var node4 = document.createTextNode("People who are overweight or obese are " + 
      "at a higher risk for chronic conditions such as high blood pressure, diabetes, " +
      "and high cholesterol.");
    para4.appendChild(node4);

    var element4 = document.getElementById("mainPage");
    element4.appendChild(para4);
  }
  else if(result == 'Normal')
  {
    //first paragraph
    var para1 = document.createElement("p");
    var node1 = document.createTextNode("For the information you entered: ");
    para1.appendChild(node1);

    var element1 = document.getElementById("mainPage");
    element1.appendChild(para1);

    //second paragraph
    var para2 = document.createElement("p");
    var node2 = document.createTextNode("Your BMI is " + bmi 
      + ", indicating your weight is in the " + result + 
      " category for people of your height.");
    para2.appendChild(node2);

    var element2 = document.getElementById("mainPage");
    element2.appendChild(para2);

    //third paragraph
    var para3 = document.createElement("p");
    var node3 = document.createTextNode("For your height, a normal weight range would be from 101 to 136 pounds");
    para3.appendChild(node3);

    var element3 = document.getElementById("mainPage");
    element3.appendChild(para3);

    //fourth paragraph
    var para4 = document.createElement("p");
    var node4 = document.createTextNode("Maintaining a healthy weight may reduce the " + 
      "the risk of chronic diseases associated with overweight and obesity.");
    para4.appendChild(node4);

    var element4 = document.getElementById("mainPage");
    element4.appendChild(para4);
  }
  else if(result == 'Underweight')
  {
   //first paragraph
    var para1 = document.createElement("p");
    var node1 = document.createTextNode("For the information you entered: ");
    para1.appendChild(node1);

    var element1 = document.getElementById("mainPage");
    element1.appendChild(para1);

    //second paragraph
    var para2 = document.createElement("p");
    var node2 = document.createTextNode("Your BMI is " + bmi 
      + ", indicating your weight is in the " + result + 
      " category for people of your height.");
    para2.appendChild(node2);

    var element2 = document.getElementById("mainPage");
    element2.appendChild(para2);

    //third paragraph
    var para3 = document.createElement("p");
    var node3 = document.createTextNode("For your height, a normal weight range would be from 101 to 136 pounds");
    para3.appendChild(node3);

    var element3 = document.getElementById("mainPage");
    element3.appendChild(para3);

    //fourth paragraph
    var para4 = document.createElement("p");
    var node4 = document.createTextNode("Talk with your healthcare provider to " + 
      "determine possible causes of Underweight and if you need to gain weight.");
    para4.appendChild(node4);

    var element4 = document.getElementById("mainPage");
    element4.appendChild(para4); 
  }




}

