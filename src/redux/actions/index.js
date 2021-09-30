import axios from 'axios';
import dotEnv from 'dotenv';
dotEnv.config();

export const { REACT_APP_HEADER_KEY, REACT_APP_API_KEY } = process.env;
export const URL_NOMADA = "https://whois.nomada.cloud/upload";
export const URL_IMAGES = "https://image.tmdb.org/t/p/w500";
export const FETCH_ACTOR = "GET_ACTOR";

const URL_THE_MOVIE_DB = "https://api.themoviedb.org/3/search/person";


export const fethActor = (actorName) =>{
    const URL_REQUEST = `${URL_THE_MOVIE_DB}?api_key=${REACT_APP_API_KEY}&language=es-MX&page=1&query=${actorName}`
    return async (dispatch) =>{
        try {
            const res = await axios(URL_REQUEST);
            dispatch({
                type: FETCH_ACTOR,
                payload: res.data
            })
        } catch (error) {
            console.error("Ocurrio un error en la request a movie_db", error);
        }
    }
}