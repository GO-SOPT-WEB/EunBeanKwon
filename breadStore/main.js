import { breads } from "./products.js";

window.onload=initialPage();

// onload
function initialPage() {
  const checked = document.querySelectorAll(".category");
  checked.forEach(function(checkbox) {
    checkbox.checked = true;
    addCategoryTag(checkbox.id);
  });
  showCards();
}

// 배열 필터링
function filterBreadsByType(type) {
  const filteredBreads = breads.filter((bread) => bread.type === type);
  return filteredBreads.length > 0 ? filteredBreads : breads;
}

// 카드 뿌리기
function showCards(filterType) {
const showingList = filterBreadsByType(filterType);
const articleList = document.querySelector("#cards");
const breadsList = showingList
  .map((bread) => {
    const hashtags = bread.hashtags
      .map((tag) => `<li class="section__tag-list">${tag}</li>`)
      .join(" ");
    return `
    <article class="${bread.type}">
        <h3>${bread.name}</h3>
        <div>
        <div class="card-modal-container"> 
        <button type="button" class="card-modal-close">X</button>   
          <div> ${hashtags} </div>
        </div>
          <ul class="section__tag"> ${hashtags} </ul>
           <button type="button" class="section__tag-btn"> + </button>
        </div>
        <img class="section__img" src="./imgs/${bread.src}" alt="${bread.name}"/>
        <button type="button" class="section__like" id="btn">♥</button>
    </article>`;
  })
  .join(" ");

articleList.insertAdjacentHTML("beforeend", breadsList);
}

//카드들 삭제하기
function deleteCards(filterType) {
  const articleList = document.querySelectorAll(`.${filterType}`);
  articleList.forEach(article => article.parentNode.removeChild(article));
}

// 카테고리 태그 만들기
function addCategoryTag(addId) {
  let resultList = ``
  const categorySection = document.querySelector("#section__category");
  resultList = `
  <div id="tag-${addId}">${addId}<button class="typeTag" id="tag-btn-${addId}" type="button"> X</button></div>
  `;
  categorySection.insertAdjacentHTML("beforeend", resultList);
  const btn = document.getElementById(`tag-btn-${addId}`);
  btn.addEventListener("click",deleteTagByBtn(addId))

}

// 카테고리 태그 삭제하기
function deleteCategoryTag(deleteId) {
  const tagToDelete = document.querySelector(`#tag-${deleteId}`);
  tagToDelete.remove();
}

// X 버튼으로 태그 삭제하기
function deleteTagByBtn(addId) {
const checked = document.querySelectorAll(".category");
const btn = document.getElementById(`tag-btn-${addId}`);
  btn.addEventListener('click', function() {
  checked.forEach(function(checkbox) {
    if (checkbox.checked && checkbox.value == addId) {
      checkbox.checked = false;
      btn.parentNode.remove();
      deleteCards(addId);
    }
  });
});
}

// 체크 change에 따라 상태 변경 
const checked = document.querySelectorAll(".category");
let checkedId = "";
let onCheckBox = "";

checked.forEach(function(check) {
  check.addEventListener('change', function() {
    checkedId = this.id;
    onCheckBox = this;
    this.checked?showCards(checkedId):deleteCards(checkedId)
    this.checked?addCategoryTag(checkedId):deleteCategoryTag(checkedId)
  })
})

// 모달 구현
function openModal(event) {
  const modalBoxContainer = event.target.parentNode;
  const checkedModal = modalBoxContainer.querySelector(".card-modal-container")
  checkedModal.style.visibility = "visible";
}
const modalOpenBtn = document.querySelectorAll(".section__tag-btn")
modalOpenBtn.forEach((openBtn) => {
  openBtn.addEventListener('click',openModal) });


function closeModal(event) {
  const modalBox = event.target.parentNode;
  modalBox.style.visibility = "hidden";
}

const modalCloseBtn = document.querySelectorAll(".card-modal-close")
modalCloseBtn.forEach((closeBtn) => {
  closeBtn.addEventListener('click',closeModal) });
