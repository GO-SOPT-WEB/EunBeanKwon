function breadlist() {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      const articleList = document.getElementById("cards");
      const breadsList = data.breads;
      for (let i = 0; i < breadsList.length; i++) {
        const bread = breadsList[i];

        const article = document.createElement("article");
        article.classList.add("section__card");

        const name = document.createElement("h3");
        name.textContent = bread.name;
        article.appendChild(name);

        const ul = document.createElement("ul");
        ul.classList.add("section__tag");
        article.appendChild(ul);

        for (let k = 0; k < bread.hashtags.length; k++) {
          const li = document.createElement("li");
          li.classList.add("section__tag-list");
          li.textContent = bread.hashtags[k];
          ul.appendChild(li);
        }

        const img = document.createElement("img");
        img.classList.add("section__img");
        img.src = "./imgs/" + bread.src;
        article.appendChild(img);

        const likebtn = document.createElement("button");
        likebtn.classList.add("section__like");
        likebtn.type = "button";
        likebtn.textContent = "♥";
        article.appendChild(likebtn);

        articleList.appendChild(article);
      }
    });
}
