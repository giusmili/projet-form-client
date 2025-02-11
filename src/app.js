document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const btn_submit = document.getElementsByTagName("input")[3];
  
/* objet */

  const userForm = ({
    inputName: document.querySelectorAll('input[type="text"]')[0],
    inputLastName: document.querySelectorAll('input[type="text"]')[1],
    age: document.getElementsByTagName("input")[2],
    target: document.querySelector(".msg")
  })



  btn_submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (userForm.inputName.value && userForm.inputLastName.value && userForm.age.value && userForm.age.value >= 16 && !isNaN(userForm.age.value)) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
      userForm.target.classList.remove("error")
      userForm.target.classList.add("appear")
      userForm.target.innerText = `Bonjour voici les infos saisies : ${userForm.inputName.value}, ${userForm.inputLastName.value}, ${userForm.age.value} ans`;

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Alert",
      });
      userForm.target.classList.add("error")
      userForm.target.classList.add("appear")
      userForm.target.innerText = `Tous les champs sont obligatoires!!!`
    }
  });
});
