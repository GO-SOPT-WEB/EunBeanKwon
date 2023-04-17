import { breads } from "./products.js";

const articleList = document.querySelector("#cards");

const breadsList = breads.map((bread) => {
  const hashtags = bread.hashtags
    .map((tag) => `<li class="section__tag-list">${tag}</li>`)
    .join(" ");
  return `
    <article class="section__card">
      <h3>${bread.name}</h3>
      <ul class="section__tag">${hashtags} </ul>
      <img class="section__img" src="./imgs/${bread.src}"/>
      <button class="section__like" id="btn${bread.id}" type="button">♥</button>
    </article>
  `;
});

articleList.innerHTML = breadsList;
