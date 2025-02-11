document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const inputName = document.querySelectorAll('input[type="text"]')[0];
  const inputLastName = document.querySelectorAll('input[type="text"]')[1];
  const age = document.getElementsByTagName("input")[2];
  const btn_submit = document.getElementsByTagName("input")[3];

  /* target */

  const target = document.querySelector(".msg");

  btn_submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputName.value && inputName.value && age.value) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });

      target.innerText = `Bonjour voici les infos saisies :  
                ${inputName.value}, ${inputLastName.value}, ${age.value} ans`;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Alert",
      });
    }
  });
});
