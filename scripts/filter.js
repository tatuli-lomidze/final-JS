function searchPlace() {
  let filterDiv = document.getElementsByClassName("filterDiv");
  let input = document.getElementById("placeInput").value.toLowerCase();

  for (let divElement of filterDiv) {
    let txtValue = divElement.textContent.toLowerCase();

    if (txtValue.includes(input)) {
      divElement.style.display = "flex";
    } else {
      divElement.style.display = "none";
    }
  }

  let staysContainer = document.querySelector(".stays-container");
  staysContainer.style.justifyContent = "center";
}



