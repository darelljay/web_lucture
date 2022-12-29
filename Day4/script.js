const name = "darell";

const age = 17;
console.log(typeof name);

const arr = [1, 2, 3];

console.log(typeof arr);

console.log(typeof null); // null 은 object가 뜸 객체로 넘어가게 되면 쓰면안된다

// !NULL 은 True !!Null 은 False

const tmp = null + 123;
// null 은 다른 요소와 계산을 할때 null은 0으로 보기 떄문에 타입이 0이 된다
console.log(typeof tmp);

let temp;
console.log(temp);

// null = 0 취급
//undifined = Nan취급

console.log(!undefined === !null);
console.log(temp + 123);

let prac = 11 + "darell";

console.log(prac);

console.log(!"darell");
// false

console.log(!!"darell");
//true

console.log(!!""); //false

console.log(!isNaN(1)); // isNaN = false !isNan = True

console.log(Number.isNaN(11));
console.log(Number.isNaN(11 + "darell"));

function example() {
  return condition ? value1 : condition2 ? value2 : fuck;
}

function example2() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    fuckof;
  }
}

const ex3 = condition ? (a === 0 ? "zero" : "positive") : "neggative";

console.log(true && true && "과연");

console.log(true || false || "이번에는");

function callAPI() {
  const data = "_____";

  // return data ? data : "fetching...../"
  return data || "fetching";
}

// const usesr = {
//   name: "darell",
// };
// const islogin = true;
// if (islogin && usesr) {
//   console.log(usesr.name || "이름없음");
// }

// // function getActiveUserName(user, islogin){

// // }


const arr2 = [1,2,3]

arr2[2] = 10;
arr2[1] = 4;

arr2["index4"] = "string value";
arr2[{}] = [20,30]

const objarr = {0:1,1:2,2:3}

console.log(Array.isArray(arr2))
console.log(Array.isArray(objarr))

console.log(arr instanceof Array)


arr2.length = 10;

console.log(arr2)
console.log(arr2)

const [confirm,cacel,reset] =  document.getElementsByTagName("button")

const orginarray = ['123','456','789'];

const newArray = orginarray;

orginarray.push(10);
orginarray.push(20);
orginarray.push(30);

console.log(orginarray)
console,log(newArray)



// 화살표 함수 어디에 많이 쓰나!
// 함수 내에 콜백함수로 건네줄 떄 많이 사용

const array1 = ['a','b','c']

for(let index = 0; index< array1.lengh; index++){
    const element = array1[index]
    console.log(element)
}



array1.forEach((item)=> console.log(item))


// arrow function의 단점
console.log(this)


const student = {
    age:17,

    sayAge: function(){
        console
    }
}

student.sayAge();

