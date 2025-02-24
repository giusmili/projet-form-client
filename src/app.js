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
        const intervalId = setInterval(() => {
            console.log("executer");
          
            // Vous pouvez ajouter ici toute logique que vous souhaitez exécuter à intervalles réguliers
      
            // Arrêter l'intervalle et rediriger après un certain nombre d'exécutions ou une condition
            clearInterval(intervalId);
            document.location.assign("dashboard.html");
          }, 4000);
        
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
