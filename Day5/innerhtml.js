// HTML문서에 직접 접근할 수 있게!

const submitBtn = document.getElementById("submit-btn");
console.log(submitBtn.style);

const hiddenBtn = document.getElementsByClassName("hidden");

const [divA, divB, divC] = document.getElementsByTagName("div");
console.log(divA);

const radioInputs = document.getElementsByName("animal");
console.log(radioInputs);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const [div1, div2, div3] = document.querySelectorAll("div");

div1.innerText = "영역 1";

div1.classList.toggle("t1");
div1.classList.add("color-red");

/*if(div1.classList.contains("color-red")){
    div1.classList.add("color-red")
}else{
    div1.classList.remove("color-red")
}*/

const newDiv = document.createElement("div");
newDiv.innerText = "추가된 영역!";
newDiv.className = "color-red";

const form = document.querySelector("form");
form.appendChild(newDiv);


// 브라우저->유저가 클릭,마우스를 


//키보드 -> 뭔가 입력됬을떄
//마우스 -> 클릭 "click"/ 마우스를 올렸을때
// form -> 제출했을때
const clickHandeler = () => console.log("클릭됨")
div1.addEventListener("click",clickHandeler())

div1.removeEventListener("click",clickHandeler)