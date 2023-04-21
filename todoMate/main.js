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
      .map((Things) =>
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
