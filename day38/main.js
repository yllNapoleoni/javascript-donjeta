(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()

   var name = document.getElementsByClassName("form-body");
    console.log("name")
    console.log("email")
    console.log("position")
    console.log("password")

    function btn(){
     const name = document.getElementsByid("form-control").value;
     console.log(name)
     const email = document.getElementsByid("form-control").value;
     console.log(email)
     const position = document.getElementsByid("form-select mt-3").value;
     console.log(position)   
     const password = document.getElementsByid("form-control").value;
     console.log(password)
    }


