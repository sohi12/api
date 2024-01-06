


async function getMovies(category){

    var movies = []
    var response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=eaa86ae5ef2157748f0b8021bb6ec5df&language=en`)
    response = await response.json()
    movies = response.results
    var cols = ""
    for(var i = 0 ; i<movies.length; i++){
    cols +=
    ` <div class="col-md-3">
    <div class="movie p-2">
    <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" class="w-100" alt="">
        <h2>${movies[i].title}</h2>
        <p>${movies[i].overview}</p>
    </div>
 </div>`
    }
 document.querySelector(".row").innerHTML = cols
}
getMovies("top_rated")





var h3sElements = Array.from(document.querySelectorAll("nav h3"))
for(var i = 0 ; i<h3sElements.length; i++){
    h3sElements[i].addEventListener("click",  function (e) {
        var category = e.target.getAttribute("data-category")
        getMovies(category)
    })
        
    
}