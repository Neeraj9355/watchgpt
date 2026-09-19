import tmdb_api from "./tmdb";

export const getPopularMovies = async () =>{
    return tmdb_api("/movie/popular");
}
export const getTrendingMovies = async () =>{
    return tmdb_api("/trending/movie/week");
}
export const getTopRatedMovies = () => {
    return tmdb_api("/movie/top_rated");
};