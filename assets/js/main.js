let movieList = null;

const createStyle = () => {
    let headStyle = document.createElement('style');
    headStyle.innerHTML = `
        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
        }
        
        .wrapper {
            padding: 20px;
        }
        
        .movies {
            display: grid;
            grid-gap: 20px;
            grid-template-colums: repeat(auto-fill, minmax(200px, 1fr));
        }

        .movie {
            display: flex;
            alighn-items: center;
            justify-content: center;
            max-height: 320px;
            overflow: hidden;
        }
        
        .movies__image {
            width: 100%;
            object-fit: cover;
        }
    `;
    document.querySelector('head').appendChild(headStyle);
}

const createMarkup = () => {
    let movieWrapper = document.createElement('div');
    let movies = document.createElement('div');

    movieWrapper.classList.add('wrapper');
    movies.classList.add('movies');
    
    movieWrapper.appendChild(movies);
    document.querySelector('body').appendChild(movieWrapper);
    movieList = document.querySelector('.movies');//содержит ссылку на обертку
};

const addMovieToList = (movie) => {
    let item = document.createElement('div');
    let img = document.createElement('img');

    img.src = movie.Poster;

    item.classList.add('movie');
    img.classList.add('movie__image');

    item.appendChild(img);
    movieList.appendChild(item);
};

const getData = (url) => 
    fetch(url).then((res) =>res.json().then(json => json.Search));

createMarkup();
createStyle();

const s1 = 'Iron Man';
const s2 = 'Batman';
const s3 = 'Superman';

const ironman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=e94923bd&s=${s1}`);
const batman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=e94923bd&s=${s2}`);
const superman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=e94923bd&s=${s3}`);

//ironman.then((movies) => movies.forEach(movie => console.log(movie)));
//batman.then((movies) => movies.forEach(movie => console.log(movie)));
//superman.then((movies) => movies.forEach(movie => console.log(movie)));

//используем Promise.all что бы запросы выдавались упорядоченно
Promise.all([ironman, batman, superman]).then((res) => res.forEach((movie) => addMovieToList(movie)));