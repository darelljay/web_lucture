const loginInput = document.querySelector(".login-form input");
const loginbtn  = document.querySelector(".login-form button")
const greeting = document.querySelector("greeting");
const loginForm = document.querySelector(".login-form form")
const loginbtnsubmitHandeler = (event) => {
event.preventDefault();
const inputVal = loginInput.value;
  if (loginInput === "") {
    alert("값을 입력해주세요");
  } else if (loginInput > 15) {
    alert("15자 이내로 작성해 주세요");
  }
  loginForm.remove();
 const greeting =  document.createElement("div")
 greeting.innerText = `hello ${inputVal}`;
 document.body.appendChild(greeting);
}
console.log(loginInput);

loginForm.addEventListener("submit",loginbtnsubmitHandeler)