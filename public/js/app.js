$(document).ready(() => {

  $('#alertSuccess').hide();
  $('#alertDanger').hide();
  $('#iconMenu').on('click', () => {
    $('#menu').toggleClass('active');
  });
});


var btn = document.getElementById("btn");


btn.addEventListener("click", enviar)


function enviar(e) {

  e.preventDefault();


  var name = document.getElementById("name");
  var lastName = document.getElementById("lastName");
  var dni = document.getElementById("dni");
  var email = document.getElementById("email");
  var universidad = document.getElementById("university");
  var success = document.getElementById("success");
  var danger = document.getElementById("danger");


  if (dni.value.length != 8 || dni.value.length == 0) {
    danger.setAttribute("style", "display:none");

    danger.setAttribute("style", "display:block");
    danger.innerHTML = "El dni debe tener 8 digitos y es necesario";

    return false;
  } else {
    axios.post('http://localhost:3000/', {
      name: name.value,
      lastName: lastName.value,
      dni: dni.value,
      email: email.value,
      universidad: universidad.value
    }).then((res) => {
      console.log(res.data);
      name.value = '';
      lastName.value = '';
      dni.value = '';
      email.value = '';
      universidad.value = '';

      if (res.data.status) {
        $('#alertSuccess').show();
        $('#alertDanger').hide();

        setTimeout(() => {
          $('#alertSuccess').hide();
        }, 2000);
      } else {
        $('#alertSuccess').hide();
        $('#alertDanger').show();
      }


    }).catch((err) => {
    });
  }

  return false;
}
