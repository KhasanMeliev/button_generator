function maker_btn() {
  var widthBtn = document.getElementById("width").value;
  var heightBtn = document.getElementById("height").value;
  var textBtn = document.getElementById("text").value;
  var bg_colorBtn = document.getElementById("bg_color").value;
  var colorBtn = document.getElementById("color").value;
  document.getElementById("make_btn").style.width = widthBtn + "px";
  document.getElementById("make_btn").style.height = heightBtn + "px";
  document.getElementById("make_btn").innerHTML = textBtn;
  document.getElementById("make_btn").style.backgroundColor = bg_colorBtn;
  document.getElementById("make_btn").style.color = colorBtn;

  var output = `
     1. width: ${widthBtn};<br>
     2. height: ${heightBtn};<br>
     3. background-color: ${bg_colorBtn};<br>
     4. color: ${colorBtn};<br>
     5. content: '${textBtn}';<br>
      
    `;
  document.getElementById("output").innerHTML = output;
}

// const submit_btn = document.getElementById("submit");
// submit_btn.addEventListener("click", function () {
//   maker_btn();
// });
