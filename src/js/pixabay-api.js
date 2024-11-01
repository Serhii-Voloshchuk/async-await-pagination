import axios from "axios"

const BASE_URL = 'https://pixabay.com/api/' //pixabay читаем библиотеку

const API_KEY = '45071357-999033ebbf151b40dc2c05ece'

axios.defaults.baseURL = BASE_URL;

function getImages({ page = 1, per_page = 20, q = 'image'} = {
  page: 1,
  per_page: 15,
  q: 'image'
}){
  return axios 
  .get('', {
    params:{
      page,
      per_page,
      q,
      key: API_KEY
    }
 
  }). then(({ data }) => {
    return {
      images: data.hits, // Изображения находятся в поле "hits"
      totalResult: data.totalHits // Общее количество результатов
    };
  }).catch(error => {
    console.error('Ошибка при получении изображений:', error.message);
    throw error; // Перебрасываем ошибку, чтобы можно было обработать ее в вызывающем коде
  });
}

export {getImages}





// export function fetchImages(query){ // фетч на запрос на сервер

//     return fetch(`${URL}?key=${API_KEY}&q=${query}&image-type=photo&orientation=horizontal&safesearch=true`) //линк на бекенд, читаем библиотеку
//     .then((response) => {
//         if (!response.ok) {
//           throw new Error('Sorry, there are no images matching your search query. Please try again!');
//         }
//         return response.json();
//       });
//   }
  