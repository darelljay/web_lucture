// const name = "yeji";
// const age = 17;
// console.log(typeof name);

// console.log(typeof age);

// const arr = [1, 2, 3]; // type??? -> object

// console.log(typeof arr);

// const tmp = null; // type -> object

// console.log(tmp);

// null -> 0 취급
// undefined -> NaN 취급

// let tmp;
// console.log(tmp + 123);

// let tmp = 11 + "yeji"; // "11yeji"
// console.log(String(tmp));

// console.log(Boolean(!!"yeji")); // true
// console.log(Boolean(!!"")); // false

// console.log(isNaN(11)); // isNaN -> false : 숫자라는 뜻!
// console.log(isNaN(11 + "yeji")); // isNaN -> true

// console.log(Number.isNaN(11)); // isNaN -> false : 숫자라는 뜻!
// console.log(Number.isNaN(11 + "yeji")); // isNaN -> true

// function example() {
//   return condition1
//     ? value1
//     : condition2
//     ? value2
//     : condition3
//     ? value3
//     : value4;
// }

// const condition = checkCondition(c);

// function example2() {
//   if (condition1) {
//     return value1;
//   } else if (condition2) {
//     return value2;
//   } else if (condition3) {
//     return value3;
//   } else {
//     return value4;
//   }
// }

// // 조건식 ? 참일때의 값 : 거짓일때의 값
// const ex3 = condition1 ? (a === 0 ? "zero" : "positive") : "negative";

// function greeting(isLogin) {
//   const name = isLogin ? getName() : "이름없음";

//   return `안녕하세요 ${name}`;
// }

// function greeting2(isLogin) {
//    if(isLogin){
//     return `안녕하세요 ${getName()}`
//    }

//     return `안녕하세요 이름없음`;

//   }

if ("string".length > 0) {
  console.log("빈 문자열이 아님");
}

if (!isNaN(10)) {
  console.log("숫자가 맞음");
}

const bool = true;
if (bool === true) {
  console.log("참");
}

if ("string".length) {
  console.log("빈 문자열이 아님");
}

if (10) {
  console.log("숫자가 맞음");
}

const bool2 = true;
if (bool2) {
  console.log("참");
}

function printName(name) {
  if (!name) {
    console.log("아무도 없네요");
  } else {
    console.log(`반갑습니다 ${name}님!`);
  }
}

console.log(true && false && "과연?");

console.log(true || false || "이번에는?");

function callAPI() {
  // ...........

  const data = "_____";

  //   if (data) {
  //     return data;
  //   } else {
  //     return "fetching...";
  //   }

  //   return data ? data : "fetching....";
  return data || "fetching....";
}

// 유저가 로그인을 했고! 유저가 이름이 유의미하다면! 이름을 표시 아니면 '이름없음'
const customer = {
  name: "yeji",
  age: 20,
};
const isLogined = true;

function getActiveUserName(isLogin, user) {
  let user_name;
  let user_age;

  if (isLogin) {
    if (user) {
      if (user.name) {
        user_name = user.name;
        user_age = user.age;
      } else {
        user_name = "이름없음";
      }
    }
  }

  return { user_name, user_age };
}

function sum1(a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  return a + b;
};

// function 함수이름 ( 매개변수, ...) {
//     수행할 코드
// }
console.log(getActiveUserName(isLogined, customer));

function getUserName() {
  if (isLogin && user) {
    return user.name || "이름없음";
  }
}

if (!Number.isNaN(3)) {
  console.log("숫자입니다~!");
}

const arr = [1, 2, 3];

const objArr = { 0: 1, 1: 2, 2: 3, length: 3 };

console.log(Array.isArray(arr));
console.log(Array.isArray(objArr));

console.log(arr.length);

arr.length = 0; // []
console.log(arr.length);
console.log(arr);

// const confirmBtn = document.getElementsByTagName("button")[0];
// const cancelBtn = document.getElementsByTagName("button")[1];
// const resetBtn = document.getElementsByTagName("button")[2];

const [confirmBtn, cancelBtn, resetBtn] =
  document.getElementsByTagName("button");

const originArray = ["123", "456", "789"];

const newArray = originArray;

originArray.push(10);
originArray.push(20);
originArray.push(30);

console.log(originArray);
console.log(newArray);

// 유사 배열 객체

const arr1 = ["hello", "javascript"];
console.log(arr1);

const objLikeArr = { 1: "hello", 0: "javascript", length: 5 };
const converted = Array.from(objLikeArr);
console.log(objLikeArr);
console.log(converted);
