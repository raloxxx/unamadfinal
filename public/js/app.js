$(document).ready(() => {
  $("#alertSuccess").hide();
  $("#alertDanger").hide();
  $("#iconMenu").on("click", () => {
    $("#menu").toggleClass("active");
  });
});

var btn = document.getElementById("btn");

btn.addEventListener("click", enviar);

function enviar(e) {
  e.preventDefault();

  var name = document.getElementById("name");
  var lastName = document.getElementById("lastName");
  var dni = document.getElementById("dni");
  var email = document.getElementById("email");
  var universidad = document.getElementById("university");

  if (dni.value.length != 8 || dni.value.length == 0) {
    danger.setAttribute("style", "display:none");

    danger.setAttribute("style", "display:block");
    danger.innerHTML = "El dni debe tener 8 digitos y es necesario";

    return false;
  } else {
    axios
      .post("https://unamadserver.herokuapp.com/", {
        name: name.value,
        lastName: lastName.value,
        dni: dni.value,
        email: email.value,
        universidad: universidad.value
      })
      .then(res => {
        name.value = "";
        lastName.value = "";
        dni.value = "";
        email.value = "";
        universidad.value = "";

        if (res.data.status) {
          $("#alertSuccess").show();
          $("#alertDanger").hide();

          setTimeout(() => {
            $("#alertSuccess").hide();
          }, 2000);
        } else {
          $("#alertSuccess").hide();
          $("#alertDanger").show();
        }
      })
      .catch(err => {});
  }

  return false;
}
