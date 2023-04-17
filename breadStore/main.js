import { breads } from "./products.js";

const articleList = document.querySelector("#cards");

const breadsList = breads.map((bread) => {
  const hashtags = bread.hashtags
    .map((tag) => `<li class="section__tag-list">${tag}</li>`)
    .join(" ");
  return `
    <article class="section__card">
      <div class="card-modal-container" > 
        <div> ${hashtags} </div>
        <button type="button" class="card-modal-close" onclick="closeModal(this)" >X</button>
      </div>
      <h3>${bread.name}</h3>
      <div>
        <ul class="section__tag">${hashtags} </ul>
        <button type="button" onclick="openModal(this)" class="section__tag-btn">+</button>
      </div>
      <img class="section__img" src="./imgs/${bread.src}" alt="${bread.name}/>
      <button type="button class="section__like" id="btn${bread.id}" ">♥</button>
    </article>
  `;
});

articleList.insertAdjacentHTML("beforeend", breadsList);
