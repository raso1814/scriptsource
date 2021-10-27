//css선택자 아무거나 가능
//처음 만나는 element를 가져옴
let container = document.querySelector(".container");
console.log(container);

let first1 = document.querySelector(".pagination li:first-child");
console.log(first1);

let first2 = document.querySelector(".pagination li:nth-child(2)");
console.log(first2);

let button = document.querySelector('[data-target="#navbarText"]');
console.log(button);

//전체요소 가져오기 Nodelist
let liList = document.querySelectorAll(".pagination li");
console.log(liList);

liList.forEach((element) => {
  console.log(element.innerText);
});

liList.forEach((element) => {
  console.log(element.innerHTML);
});
