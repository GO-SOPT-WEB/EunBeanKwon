// 모달 구현

function openModal(e) {
  const modalContainer = e.parentNode.parentNode.querySelector(
    ".card-modal-container"
  );
  modalContainer.style.visibility = "visible";
  console.log(modalContainer);
}

function closeModal(e) {
  const modalContainer = e.parentNode.parentNode.querySelector(
    ".card-modal-container"
  );
  modalContainer.style.visibility = "hidden";
  console.log(modalContainer);
}

// 카테고리 태그 생성

function createCategoryTag(e) {}
