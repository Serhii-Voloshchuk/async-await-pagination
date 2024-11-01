console.log('Hello world')


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from "./js/pixabay-api";
import { showLoader, hideLoader, createImages } from "./js/render-functions";

const form = document.querySelector('.form')
const input = document.getElementById('input')

const gallery = document.querySelector('.gallery')
const btnLoadMore = document.querySelector('.btn')

form.addEventListener('submit', handleSearch)


class ButtonService { // класс управления состояния кнопкой
  constructor(buttonEL, hiddenClass) {
    this.buttonEL = buttonEL;
    this.hiddenClass = hiddenClass;
  }

  hide() {
    this.buttonEL.classList.add(this.hiddenClass);
  }

  show() {
    this.buttonEL.classList.remove(this.hiddenClass);
  }

  disable() {
    this.buttonEL.disabled = true;
  }

  enable() {
    this.buttonEL.disabled = false;
  }
}

const loadMoreBtn = new ButtonService(btnLoadMore, 'is-hidden')

loadMoreBtn.hide()

const params = {
  page: 1,
  per_page: 20,
  q:'',
  maxPage: 0,
}


async function handleSearch(event){
  event.preventDefault();
  gallery.innerHTML = '';

  const formCurrent = event.currentTarget;
  params.q = formCurrent.elements.query.value.trim()

  if(params.q === ''){
    iziToast.warning({
      title: 'Увага',
      message: 'Введіть запит',
    });
    formCurrent.reset()
    return
  }
  loadMoreBtn.show()
  loadMoreBtn.disable()

    params.page = 1

    try {


      
      const { images, totalResult } = await getImages();
      params.maxPage = Math.ceil(totalResult / params.per_page);
      gallery.innerHTML += createImages(images);
      
      if (params.maxPage > 1) {
        loadMoreBtn.enable();
        btnLoadMore.addEventListener('click', handleLoadMore);
      } else {
        loadMoreBtn.hide();
      }
    } catch (err) {
      console.error(`Помилка під час запиту: ${err.message}`);
    } finally {
      formCurrent.reset()
    }
  }

  async function handleLoadMore() {
    loadMoreBtn.disable();
    params.page += 1

    try {
      const {images} = await getImages(params);

      gallery.innerHTML = createImages(images);

    }catch (err) {
      iziToast.warning({
        title: 'Увага',
        message: `Помилка під час запиту: ${err.message}`
      });

    
    } finally {
      if(params.page === params.maxPage){
        loadMoreBtn.hide();
        loadMoreBtn.removeEventListener('click', handleLoadMore)
      } else {
        loadMoreBtn.enable()
      }
    }
  } 

