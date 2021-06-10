function clicked() {
  let div = document.getElementById("hidden");
  if (div.style.display == "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}
