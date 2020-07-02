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

//calculate bmi
function calculateBmi()
{
  //retrieves the value of id called pounds and stores it in variable 'pounds'
  var pounds = document.getElementById('pounds').value;

  //retrieves the value of id called inches and stores it in variable 'inches'
  var inches = document.getElementById('inches').value;

  //retrieves the value of id called feet and stores it in variable 'feet'
  var feet = document.getElementById('feet').value;

  //convert to integers for computation
  
}