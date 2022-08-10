import axios from "axios";

async function getPlacesData(type, sw, ne) {
   try {
      const { data: { data } } = await axios.get(
         `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
         {
            params: {
               bl_latitude: sw.lat,
               tr_latitude: ne.lat,
               bl_longitude: sw.lng,
               tr_longitude: ne.lng
            },
            headers: {
               'X-RapidAPI-Key': '74608c746bmshcb2596b50696f66p1da4a4jsn203be4e90ac0',
               'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
         });
      return data
   } catch (error) {
      console.log(error);
   }
}

export default getPlacesData;