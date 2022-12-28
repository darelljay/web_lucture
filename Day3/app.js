var age = 17;
var age = 18;

console.log(age)
// var 똑같은 이름의 변수를 2개를 선언해 주면 마지막에 있는것을 출력함 
// var를 쓰면 안되는 이유(1.값이 바뀌면 안되는 변수의 값 변경가능 2.반복문을 쓸떄 값을 기억하고 있음)

let cat_age = 3;
// 같은이름의 변수 선언 자체가 안됨
// 중괄호로 불리가 됨 


const cat_name = "gwiyomi"
// const는 값을 바꾸는것이 불가능함 따라서 생성과 동시에 초기화를 해줘야함(재할당이 불가능 함) 나머지 let var는 재할당이 가능함



let global = "전역";

if(global === "전역"){
    let global = "지역"
    console.log('global')
}
console.log(global)

//원시 자료형(기본 자료형)

const number = 20;
const name = `darells afe is ${number}`;

// null(값이 존재하지 않음) undefined(공간은 할당되었으나 값이 없음) Nan(숫자가 아니다)

const num1 = 1;
const num2 = 2;
const num3 = 3;

const arr = [1,2,3];

for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}
// 객체의 특징
// 1, 키값으로 ?지, Symbol이라는 일부 자료형만 허용
//2. 정렬과 관여 X
//3. 안의 데이터를 살펴보려면, 키값을 통해 배열을 얻어서 배열을 순회
//4. 키 값 사용 직접 사이즈를 판별

// Map
// 1.키값으로 모든~! 데이터 타입을 허용
// 2.삽입된 순서대로 정렬
// 3.map.size로 크기를 바로 알 수 있음
// 4.map 자세히

const student ={
    name:"darell",
    age: 17,
    height:180
}

console.log(student.name)

const arr1 = [1,1,0,0,3];

const setArr = new Set();
setArr.add(1)
setArr.add(1)
setArr.add(1)
setArr.add(1)
setArr.add(1)
setArr.add(1)
setArr.add(1)
setArr.add(1)


// 연산자
// 산술, 증감, 대입,  비교, 논리.(비트,Nullish)

//산술 
// a+b a-b a*b a/b a%b a**b

//증감
// ++ -- 

// 비교 연산자
// < > >= <= *= += /= %=

// == (단순 값 비교) vs  ===(자료형까지 비교)


// 논리
// AND && OR || NOT !

//삼항
//조건 ? 참일떄 실행결과: 거짓일떄 실행결과

console.log(setArr)

const nums = [10,20];
function sum(a,b){
    return a+b;
}

const studentMap = new Map();
studentMap.set("name","darell")

console.log(sum(...nums))

console.log(studentMap)

console.log(...arr)

if(arr === arr){
    // 참일떄 실행
}else if(arr[0]===1){
    //두번째 조건이 참일때 실행
}else{
    //거짓일떄 씰행
}

switch(arr[0]){
    case 1:
        //
        break;
    case 2:
        //
        break;    
    default:
        console.log("안녕하살법")
}