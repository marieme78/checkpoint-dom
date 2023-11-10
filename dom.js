const pu1 = document.getElementById("pu1");
const pu2 = document.getElementById("pu2");
const pu3 = document.getElementById("pu3");
const sammba = document.getElementById("tyu")
const box1 = document.getElementsByClassName("box");
const pu = document.getElementsByClassName("pu");
var box = document.getElementsByClassName("box");
const trash = document.getElementsByClassName("faSolid");
const price = document.getElementsByClassName("price");
const value1=pu1.innerHTML
const value2=pu2.innerHTML
const value3=pu3.innerHTML
const value123= parseInt(value1+value2+value3) 
// console.log(value1)
// console.log(value2);
// console.log(value3);
// console.log(value123)
console.log(typeof(value123));
console.log(parseInt(value123))
// console.log(typeof(parseInt(value123)))
for (let i = 0; i < box.length; i++) {
  let bntPlus = box[i].children[4].children[2];
  let bntMoins = box[i].children[4].children[0];
  let samba = box[i].children[4].children[1];
  let total = box[i].children[3].children[1];
  let prixuni = box[i].children[2].children[1];
  let prixunit = parseInt(prixuni.innerText);
  let qty = parseInt(samba.innerText);
  let totalo = parseInt(total.innerText);
  //fonction pour les boutons + -
  bntPlus.addEventListener("click", function () {
    qty++;
    samba.innerText = qty;
    total.innerText = prixunit * qty;
    sammba.innerHTML=total.innerHTML
  });
  bntMoins.addEventListener("click", function () {
    qty--;
    if (qty <= 0) {
      qty = 0;
    }
    samba.innerText = qty;
    total.innerText = prixunit * qty;
    // sammba.innerHTML= value123
    sammba.innerHTML=total.innerHTML
  });

  //fonction pour like  et dislike
  let like = box[i].children[5].children[0].children[0];
  like.addEventListener("click", function () {
    if (like.style.color === "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}
//fonction pour supprimer un élments
let grandiv = document.getElementsByClassName("grandiv");
for (let i = 0; i < grandiv.length; i++) {
  let box = grandiv[i].children[0];
  let supprimer = document.getElementsByClassName("fa-trash");
  supprimer[i].addEventListener("click", function () {
    grandiv[i].removeChild(box);
  });
}
// function sum(){
//   for(let m=0;m<value123.length;m++);
//    let vava=value123.length
//   console.log(
//     vava
//   )
// }
function sum() {
  console.log (total)
  let somme=0
  for (let i = 0; i <total.length; i++) {
    console.log(total);
    let total = box[i].children[3].children[1];
    let prixunit = parseInt(prixuni.innerText);
    let qty = parseInt(samba.innerText);
     let ok=prixunit*qty
     ok=somme

    somme=total[i]++
    
  }
  return somme
}