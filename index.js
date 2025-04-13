document.addEventListener("DOMContentLoaded", function (event) {
  let btn = document.getElementById("show-hide");
  let containerDiv = document.getElementById("div-btn");

  btn.addEventListener("click", function () {
    containerDiv.style.display =
      containerDiv.style.display == "block" ? "none" : "block";
  });
});
