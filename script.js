function checkAge() {
  var date = new Date();
  var year = date.getFullYear();
  var formYear = document.getElementById("yearOfBirth");
  var res = document.querySelector("div#res");
  if (formYear.value.length == 0 || Number(formYear.value) > year) {
    alert("[ERRO] Insira um ano valido e tente novamente!");
  } else {
    var formSex = document.getElementsByName("radsex");
    var age = year - Number(formYear.value);
    var gender = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (formSex[0].checked) {
      gender = "Homem";
      if (age >= 0 && age <= 10) {
        // Child
        img.setAttribute("src", "menino_criança.png");
      } else if (age < 21) {
        // Teenager
        img.setAttribute("src", "homem_adolescente.png");
      } else if (age < 50) {
        // Adult
        img.setAttribute("src", "homem_adulto.png");
      } else {
        // Old Person
        img.setAttribute("src", "homem_idoso.png");
      }
    } else if (formSex[1].checked) {
      gender = "Mulher";
      if (age >= 0 && age <= 10) {
        // Child
        img.setAttribute("src", "menina_criança.png");
      } else if (age < 21) {
        // Teenager
        img.setAttribute("src", "mulher_adolescente.png");
      } else if (age < 50) {
        // Adult
        img.setAttribute("src", "mulher_adulta.png");
      } else {
        // Old Person
        img.setAttribute("src", "mulher_idosa.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gender} com ${age} anos.`;
    res.appendChild(img);
  }
}
