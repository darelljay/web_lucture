const grandma = document.querySelector(".grandma")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

const clickHandeler = (e) =>{
 alert(e.currentTarget.className)
 e.stopPropaganation
}

grandma.addEventListener("click",clickHandeler)
parent.addEventListener("click",clickHandeler)
child.addEventListener("click",clickHandeler)