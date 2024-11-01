export function showLoader(loader){
    loader.style.display = 'block';
}

export function hideLoader(loader){
    loader.style.display = 'none';
}

export function createImages(images) { //функция создания галлереи
    
    return images.map(image => {
    return `<li class = 'gallery-item'>
      <a class='gallery-link' href='${image.webformatURL}'>
      <img
        class='gallery-image'
        src=${image.webformatURL}
        data-source='${image.largeImageURL}'
        alt='${image.tags}'
        />
      </a>
      <ul>
      <li>
      <h3>Likes</h3>
      <p>${image.likes}</p>
      </li>
      <li>
      <h3>Views</h3>
      <p>${image.views}</p>
      </li>
      <li>
      <h3>Comments</h3>
      <p>${image.comments}</p>
      </li>
      <li>
      <h3>Downloads</h3>
      <p>${image.downloads}</p>
      </li>
      </ul>
      </li>
  `
    }).join("")
  }