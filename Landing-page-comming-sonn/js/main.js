var counterDouwnDate = new Date();
counterDouwnDate = new Date(counterDouwnDate.getFullYear() +1 , counterDouwnDate.getMinutes() - 6 , 01);

var x = setInterval(function(){
    var now = new Date();
    var diff = counterDouwnDate - now;

    var month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    var day = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes =  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds =  Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("mon").innerHTML = month;
    document.getElementById("day").innerHTML = day;
    document.getElementById("hou").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}, 1000);


/* // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })() */

