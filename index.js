let moviesData = [
  {
    name: "Spider-Man:No Way Home",
    poster: "https://cdn.moviestillsdb.com/storage/posters/72/10872600_150.jpg",
    releaseDate: 2021,
    IMDBrating: 8.5,
  },
  {
    name: "The Batman",
    poster: "https://cdn.moviestillsdb.com/storage/posters/6e/1877830_150.jpg",
    releaseDate: 2022,
    IMDBrating: 8.2,
  },

  {
    name: "Avengers:Endgame",
    poster: "https://cdn.moviestillsdb.com/storage/posters/46/4154796_150.jpg",
    releaseDate: 2019,
    IMDBrating: 8.8,
  },

  {
    name: "The Northman",
    poster:
      "https://cdn.moviestillsdb.com/storage/posters/67/11138512_150.jpg",
    releaseDate: 2022,
    IMDBrating: 8.0,
  },

  {
    name: "Scream",
    poster: "https://cdn.moviestillsdb.com/storage/posters/a9/11245972_150.jpg",
    releaseDate: 2022,
    IMDBrating: 7.9,
  },

  {
    name: "Star wars:The Rise of Skywalkers",
    poster: "https://cdn.moviestillsdb.com/storage/posters/ce/2527338_150.jpg",
    releaseDate: 2019,
    IMDBrating: 8.4,
  },

  {
    name: "West side story",
    poster: "https://cdn.moviestillsdb.com/storage/posters/2b/3581652_150.jpg",
    releaseDate: 2021,
    IMDBrating: 8.1,
  },

  {
    name: "Morbius",
    poster: "https://cdn.moviestillsdb.com/storage/posters/52/5108870_150.jpg",
    releaseDate: 2022,
    IMDBrating: 8.6,
  },

  {
    name: "Dune",
    poster: "https://cdn.moviestillsdb.com/storage/posters/29/1160419_150.jpg",
    releaseDate: 2021,
    IMDBrating: 5.8,
  },
];

localStorage.setItem("movies", JSON.stringify(moviesData));

let movies = JSON.parse(localStorage.getItem("movies"));

function displayData(movies) {
  document.querySelector("#container").innerHTML = "";
  movies.forEach((movie) => {
    let movieCard = document.createElement("div");

    let poster = document.createElement("img");
    poster.src = movie.poster;

    let name = document.createElement("p");
    name.innerText = movie.name;

    let releaseDate = document.createElement("p");
    releaseDate.innerText = movie.releaseDate;

    let rating = document.createElement("p");
    rating.innerText = movie.IMDBrating;

    movieCard.append(poster, name, releaseDate, rating);

    document.querySelector("#container").append(movieCard);
  });
}
displayData(movies);

document.querySelector("#sort-lh").addEventListener("click", () => {
  movies.sort((a, b) => {
    return a.IMDBrating - b.IMDBrating;
  });
  displayData(movies);
});

document.querySelector("#sort-hl").addEventListener("click", () => {
  movies.sort((a, b) => {
    return b.IMDBrating - a.IMDBrating;
  });
  displayData(movies);
});
