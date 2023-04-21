import { breads } from "./products.js";

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





