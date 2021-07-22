function navbar() {
  document.addEventListener("scroll", function(event) {
    var top = window.scrollY;
    console.log(top)
    if (top < 50) {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("item").style.color = "#fff";
      document.getElementById("item1").style.color = "#fff";
      document.getElementById("item2").style.color = "#fff";
      document.getElementById("item3").style.color = "#fff";
      document.getElementById("item4").style.color = "#fff";
      document.getElementById("toplogo1").style.display = "initial";
      document.getElementById("toplogo2").style.display = "none";
    } else {
      document.getElementById("navbar").style.backgroundColor = "white";
      document.getElementById("item").style.color = "#000";
      document.getElementById("item1").style.color = "#000";
      document.getElementById("item2").style.color = "#000";
      document.getElementById("item3").style.color = "#000";
      document.getElementById("item4").style.color = "#000";
      document.getElementById("toplogo1").style.display = "none";
      document.getElementById("toplogo2").style.display = "initial";
    }
  })
}

navbar()