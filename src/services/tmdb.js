const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

const ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

const tmdb_api = async(endpoint)=>{
    try{
        const response  = await fetch(`${BASE_URL}${endpoint}`,{
            headers:{
                accept: "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });
        if(!response.ok){
            throw new Error(`TMDB API error: ${response.status}`);
        }
        return response.json();
    }
    catch(error){
        console.error("Tmdb API Error:", error);
        throw error;
    }
}

export default tmdb_api;