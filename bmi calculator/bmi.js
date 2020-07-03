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

})();

var result = "";

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
  var bmi = (weight / ( height*height )) * 703;

  //truncates bmi down to one decimal point
  bmi = parseFloat(bmi.toFixed(1));
  console.log(bmi);

  //based on calculated bmi, result is assigned a value
  if(bmi < 18.5)
  {
    result = "Underweight";
  }
  else if(bmi >= 18.5 && bmi <= 24.9)
  {
    result = "Normal";
  }
  else if(bmi >= 25.0 && bmi <= 29.9)
  {
    result = "Overweight";
  }
  else if(bmi >= 30.0)
  {
    result = "Obese";
  }
  else
  {
    result = "Please check the accuracy of the information you entered. Try again."
  }

  alert(result);
}