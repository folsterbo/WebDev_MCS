//Анимация кольца
window.addEventListener("scroll",(e)=>{
  document.querySelector(".figure").style.transform = `rotate(${pageYOffset/3-45}deg)`
})

//Анимация перевернутой карты

const cardDown = document.querySelectorAll(".colomn-1");
const cardUp = document.querySelectorAll(".colomn-2");
const par = document.querySelectorAll(".colomn-2 p");

console.log(par)

for (let i = 0; i < cardDown.length; i++) {
  const down = cardDown[i];
  const up = cardUp[i];
  const p = par[i];
  down.addEventListener("click", function(){
    down.style.transform = "rotateY(90deg)";
    down.style.transition = "all 0.5s ease-out";
    up.style.transform = "rotateY(0deg)";
    up.style.transition = "all 0.5s ease-out 0.5s";  
      //выбор случайного параграфа
    p.innerHTML = divinationArr[Math.floor(Math.random()*divinationArr.length)];
    //document.querySelector(".random-2").innerHTML = divinationArr[Math.floor(Math.random()*divinationArr.length)];
    //document.querySelector(".random-3").innerHTML = divinationArr[Math.floor(Math.random()*divinationArr.length)];
  })
  up.addEventListener("click", function(){
    up.style.transform = "rotateY(90deg)";
    up.style.transition = "all 0.5s ease-out";
    down.style.transform = "rotateY(0deg)";
    down.style.transition = "all 0.5s ease-out 0.5s";    
  })  
}
