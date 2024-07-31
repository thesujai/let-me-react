// import dotenv from "dotenv";
// dotenv.config();
const apiKey = import.meta.env.VITE_NASA_API;
console.log(apiKey);
const getApod = async () => {

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const data = await response.json();
    return data;
};
export default getApod;