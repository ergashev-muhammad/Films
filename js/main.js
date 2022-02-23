// Variables --------------------

const elFilmsList = document.querySelector('.film__list');
const elFilmTemplate = document.querySelector('#film-template').content;
const elGenreTemplate = document.querySelector("#film-genre-template").content;

// Rendering Genres -----------------

const renderGenres = (array, element) => {
    
    element.innerHTML = null;
    
    array.forEach((genre) => {
        const genreTemplate = elGenreTemplate.cloneNode(true);
        
        genreTemplate.querySelector(".film-genre").textContent = genre;

        element.appendChild(genreTemplate)
    });
    
    
};

// Rendering films --------------------

const renderFilms = (array, element) => {
    
    element.innerHTML = null;
    
    array.forEach((film) =>{
        
        const filmTemplate = elFilmTemplate.cloneNode(true);
        
        filmTemplate.querySelector(".film__title").textContent = film.title;
        filmTemplate.querySelector(".film__image").src = film.poster;
        filmTemplate.querySelector(".film__overview").textContent = film.overview;
        filmTemplate.querySelector(".film__time").textContent = normalizeDate(film.release_date);
        
        const elGenres = filmTemplate.querySelector(".film__genres");
        renderGenres(film.genres, elGenres);
        
        element.appendChild(filmTemplate);
    });
    
};

// Normalizing dates ------------------

const normalizeDate = (format) => {
    const date = new Date (format);
    const day = String(date.getDate()).padStart(2, 0);
    const month = String(date.getMonth() + 1).padStart(2, 0); 
    const year = date.getFullYear(); 
    
    return day +'.'+ month +'.'+ year;
};

renderFilms(films, elFilmsList)




