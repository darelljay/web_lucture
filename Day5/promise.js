// jsd에서 비동기  구현
// 1. callback
// 2. promise (Es6 죠준 채택)
// 3. asynk & awake (Es8)

// 현재 작업을 비동기 적으로 처리하고 있는 상황
// 1.작업중 (pending) -> 성고 및 실패 여부가 결정되지 않은 promise 객체가 실행중
// 2.작업완료 & 성공 -> 작업완료! 성공했다~ + 값(resolve)
// 3.작업완료 & 실패 -> 작업완료! 실패.... + 왜 실패했는지 알려주는 에러 객체 (reject)

const p2 = new Promise(function (resolve, reject) {
  // 어렵고 복잡한 작업~~~
  setTimeout(() => resolve("p1 객체가 작업이 완료됨"), 3000);
  // 성공했을때
  resolve("p1 객체가 작업이 완료됨");

  //싷패했을때
  return reject(new Error("p1 처리중 에러 발생"));
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("p3 객체 생성 완료"));
});

const p4 = new Promise((reject) => {
  setTimeout(() => reject(new Error("p4객체생성 실패"), 1000));
});

p4.then(null, (reject) => console.log(reject));

// 작업이 완료된 후 어떻게 처리할지(소비서)
console.time("test");
//  모든 promise객체가 완료가 됬을때!
Promise.all([p2, p3]).then(([resolve1, resolve2]) => {
  console.log(resolve1, resolve2);
  console.timeEnd("test");
});

new Promise((resolve, reject) => {
  setTimeout(() => resolve("완료"), 1000);
  // setTimeout(()=>reject(new Error("에러 걸림")),4000)
})
  .finally(() => alert("promise가 준비됨"))
  .then((result) => alert(result));

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    alert(result);
    return result * 2;
  })
  .then(function (result) {
    alert(result);
    return result * 2;
  })
  .then(function (result) {
    alert(result);
    return result * 2;
  });

let promise = new promise(function (resolve, reject) {
  setTimeout(() => result(1), 1000);
});

promise.then(function (result) {
  alert(result);
  return result * 2;
});
