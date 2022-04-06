import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async(url) =>{
    const { data }  = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '6458cc278cmshe5ed3b32dd4dcd4p148df1jsnc26b42b21cb2'
          }
    });

    return data;
}