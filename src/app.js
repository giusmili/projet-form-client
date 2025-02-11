document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const btn_submit = document.getElementsByTagName("input")[3];

  /* objet */

  const userForm = {
    inputName: document.querySelectorAll('input[type="text"]')[0],
    inputLastName: document.querySelectorAll('input[type="text"]')[1],
    age: document.getElementsByTagName("input")[2],
    target: document.querySelector(".msg"),

    userWatch() {
      if (
        this.inputName.value &&
        this.inputLastName.value &&
        this.age.value &&
        this.age.value >= 16 &&
        !isNaN(this.age.value)
      ) {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
        this.target.classList.remove("error");
        this.target.classList.add("appear");
        this.target.innerText = `Bonjour voici les infos saisies : ${this.inputName.value}, ${this.inputLastName.value}, ${this.age.value} ans`;
        document.location.assign("dashboard.html")
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "Alert",
        });
        this.target.classList.add("error");
        this.target.classList.add("appear");
        this.target.innerText = `Tous les champs sont obligatoires!!!`;
      }
    },
  };

  btn_submit.addEventListener("click", (e) => {
    e.preventDefault();

    userForm.userWatch();
  });
});
