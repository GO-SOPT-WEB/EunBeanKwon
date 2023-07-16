import { toDos } from "./data.js";
import { calend } from "./cal.js";

localStorage.setItem("toDos", JSON.stringify(toDos))
localStorage.setItem("calend", JSON.stringify(calend))

//  데이터 불러오기 -Calendar
const CalSection = document.querySelector(".calc__container")
const CalList = calend.map((Cals) => {
    return`
<article class="day">
<p class="calc__week-title">${Cals.day}</p>
<div class="calc__do-num-title">
  <img src="./imgs/heart.png" alt="bgImg_heart" />
  <p class="calc__done-num">${Cals.completed}</p>
</div>
<p class="calc__day-num-title">${Cals.date}</p>
</article>
`
}).join(" ");
CalSection.insertAdjacentHTML("beforeend", CalList);

// 데이터 불러오기 - toDos
const toDosSection = document.querySelector(".to-dos-container");
const toDosList = toDos
  .map((toDoLi) => {
    const toDoThings = toDoLi.tasks
      .map((Things, index) =>
      `<div class="to-do__list-container">
      <input type="checkbox" id="check${toDoLi.id}${Things.id}" class="to-do__list-btn" ${Things.done ? "checked" : ""} />
      <label for="check${toDoLi.id}${Things.id}">
      </label>
        <li class="to-do__list">${Things.title}</li>
        </div>`)
      .join(" ");
    return `
    <article class="to-dos">
    <p class="to-do__title">
      ${toDoLi.title}
      <button type="button" class="to-do__btn">+</button>
    </p>
    <ul>
    ${toDoThings}
    </article>
`;
  }).join(" ");
  toDosSection.insertAdjacentHTML("beforeend", toDosList);

  // 미완료 할 일 개수 계산
  const countBox = () => {
  const uncheckedBoxes = checkBoxes.filter(checkBoxes => !checkBoxes.checked);
  const CalcNum = document.querySelector(".day:nth-child(6) .calc__done-num")
  CalcNum.innerHTML=`${uncheckedBoxes.length}`
}

// CheckBoxes에 이벤트 리스너 담기
const checkBoxes = Array.from(document.querySelectorAll(".to-do__list-btn"));
checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('click', countBox)
})


// 새 리스트 추가하는 모달 열고 항목 리턴
function openModal(event) {
    const modal = document.querySelector(".modal-background")
    modal.style.display = "flex";
    const parent = event.target.parentNode.parentNode
    const ul = parent.children[1]
}

const addTodoBtn = document.querySelectorAll(".to-do__btn")
addTodoBtn.forEach((addTodos) => {
    addTodos.addEventListener('click', openModal)
})




// submit NewTodos
function submitTodos() {
    const modal = document.querySelector(".modal-background")
    modal.style.display = "none";

    const newTodo = document.querySelector(".modal-input").value

    // 보여지게
    const newTodoParent = document.querySelector(".to-dos > ul")
    const newTodoList = `
    <div class="to-do__list-container">
        <input type="checkbox" class="to-do__list-btn">
    <label for="check11"></label>
        <li class="to-do__list">${newTodo}</li>
    </div>
    `
    newTodoParent.insertAdjacentHTML("beforeend", newTodoList);

    document.querySelector(".modal-input").value = '';
}

const submitBtn = document.querySelector(".modal-submit");
submitBtn.addEventListener('click',submitTodos)



const calButton = document.querySelector("#calButton");
calButton.addEventListener('click', () =>{
    window.location.href='/' 
})
const myButton =document.querySelector("#myButton");
myButton.addEventListener('click', () =>{
    window.location.href='/mycategory' 
})