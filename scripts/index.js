const galleryList = document.querySelector('.gallery__list');
const popup = document.querySelector('.popup');
const photoList = Array.from(document.querySelectorAll('.gallery__link'));
console.log(photoList);
const popupPhoto = document.querySelector('.popup__image');
const leftButton = document.querySelector('.popup__left-button');
const rightButton = document.querySelector('.popup__right-button');

function addListeners() {
  galleryList.addEventListener('click', handlePhotoClicked);
  leftButton.addEventListener('click', showPreviousPhoto);
  rightButton.addEventListener('click', showNextPhoto);
  popup.addEventListener('click', handleClosePopup);
}

function handlePhotoClicked(event) {
  event.preventDefault();

  const photoClicked = event.target.closest('.gallery__link');

  if (photoClicked) {
    const src = photoClicked.getAttribute('href');
    const altText = event.target.getAttribute('alt');

    popupPhoto.setAttribute('src', src);
    popupPhoto.setAttribute('alt', altText);

    openPopup(popup);
  }
}

function showPreviousPhoto() {
  const index = photoList.findIndex((link) => link.href === popupPhoto.src);
  const previousIndex = index - 1 <= 0 ? 0 : index - 1;
  const src = photoList[previousIndex].href;
  const altText = photoList[previousIndex].firstElementChild.alt;

  popupPhoto.setAttribute('alt', altText);
  popupPhoto.setAttribute('src', src);
}

function showNextPhoto() {
  const index = photoList.findIndex((link) => link.href === popupPhoto.src);
  const lastIndex = photoList.length - 1;
  const nextIndex = index + 1 >= lastIndex ? lastIndex : index + 1;
  const src = photoList[nextIndex].href;
  const altText = photoList[nextIndex].firstElementChild.alt;

  popupPhoto.setAttribute('alt', altText);
  popupPhoto.setAttribute('src', src);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleClosePopup(event) {
  const popup = event.currentTarget;
  const isPopupCloseButtonClicked = event.target.closest('.popup__close-button');
  const isOverlayClicked = event.target.classList.contains('popup');

  if (isPopupCloseButtonClicked || isOverlayClicked) {
    closePopup(popup);
  }
}

addListeners();
