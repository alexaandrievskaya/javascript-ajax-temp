// ES6 method Fetch - глобальная функция объекта window - он уже сделал запрос и вернул promise, then ьы получаем responce и его нужно преобразовать
const getData = (url) => fetch(url).then((res) =>res.json().then(json => json.Search));

const search = 'Iron Man';

getData(`http://www.omdbapi.com/?i=tt3896198&apikey=e94923bd&s=${search}`).then((movies) => movies.forEach(movie => console.log(movie))); //вывели циклом и распарсили на отдельные массивы




////AJAX + XMLHttpRequest + Promise (ES5)
//const getData = (url) => new Promise((resolve, reject) => {
//    let xhr = new XMLHttpRequest();
//
//    //инициализируем метод с соответсвующим запросом и строкой
//    xhr.open('GET', url); 
//
//    //метод - что будет выполняться когда данные получим
//    xhr.onload = () => {
//        //ставим обработку
//        if (xhr.status === 200) {
//            //парсим строку и преобразовуем в обычный обьект
//            let json = JSON.parse(xhr.response);
//            //возвращаем ответ
//            resolve(json.Search);
//        }else{
//            //здесь будет содержаться сообщение об ошибке
//            reject(xhr.statusText);
//        }
//    }; 
//    
//    // метод, что будет если ошибка при загрузке
//    xhr.onerror = (err) => reject(err);
//
//    // отправляем запрос
//    xhr.send(); 
//});
//
//const search = 'Iron Man';
//
////getData стала промисом и нам нужен then
//getData(`http://www.omdbapi.com/?i=tt3896198&apikey=e94923bd&s=${search}`).then((movies) => console.log(movies));
