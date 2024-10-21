let htmlButton = document.querySelector("#html");
let cssButton = document.querySelector("#css");
let pythonButton = document.querySelector("#python");
let javaButton = document.querySelector("#java");
let allButton = document.querySelector("#all-btn");

function TecnologiasSeleccionadas(allTecnogolias) {
  if (allTecnogolias) {
    let html = document.querySelector(".card.h-100.filterDiv.html.css");
    html.hidden = false;
    let spotify = document.querySelector(
      ".card.d-flex.h-100.filterDiv.html.python"
    );
    spotify.hidden = false;
    let javaCard = document.querySelector(".card.d-flex.h-100.filterDiv.java");
    javaCard.hidden = false;

    let java = document.querySelector(".hide1.card.d-flex.h-100");
    java.hidden = true;
  }
}

function tecnologiaHtml(html) {
  if (html) {
    let javaCard = document.querySelector(".card.d-flex.h-100.filterDiv.java");
    javaCard.hidden = true;
  }
}

function tecnologiaCss(css) {
  if (css) {
    let spotify = document.querySelector(
      ".card.d-flex.h-100.filterDiv.html.python"
    );
    spotify.hidden = true;

    let javaCard = document.querySelector(".card.d-flex.h-100.filterDiv.java");
    javaCard.hidden = true;
  }
}

function tecnologiaPython(python) {
  if (python) {
    let html = document.querySelector(".card.h-100.filterDiv.html.css");
    html.hidden = true;

    let javaCard = document.querySelector(".card.d-flex.h-100.filterDiv.java");
    javaCard.hidden = true;
  }
}

function tecnologiaJava(java) {
  if (java) {
    let html = document.querySelector(".card.h-100.filterDiv.html.css");

    html.hidden = true;

    let spotify = document.querySelector(
      ".card.d-flex.h-100.filterDiv.html.python"
    );
    spotify.hidden = true;
  }
}

allButton.addEventListener("click", () =>
  TecnologiasSeleccionadas(allButton)
);
htmlButton.addEventListener("click", () =>
  tecnologiaHtml(htmlButton)
);
cssButton.addEventListener("click", () => tecnologiaCss(cssButton));
pythonButton.addEventListener("click", () =>
  tecnologiaPython(pythonButton)
);
javaButton.addEventListener("click", () =>
  tecnologiaJava(javaButton)
);
