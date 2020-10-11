console.log("hejka")
let przycisk1 = document.querySelector(".przycisk1");
let naglowek = document.querySelector(".naglowek");




//  przycisk1.addEventListener("click", () =>
//  {
//      naglowek.classList.toggle("naglowekred");
//      przycisk1.innerText = naglowek.classList.contains ("naglowekred") ? "wyświetl na czarno" : "wyświetl na czerwono";

//  });



przycisk1.addEventListener("click", () => {
    naglowek.classList.toggle("naglowekred");
    if (naglowek.classList.contains("naglowekred"))
    {
        przycisk1.innerText = "Wyświetl na czarno"
    }
    else {
        przycisk1.innerText = "Wyświetl na czerwono"
    }
 });