import axios from "axios";

const dndAPIUrl = "https://www.dnd5eapi.co";

const nameAPIKey = process.env.REACT_APP_NAME_API_KEY;
const nameAPIUrl = `https://www.behindthename.com/api/random.json?key=${nameAPIKey}`;

export const fetchClassData = async () =>{
  try {
    const res = await axios.get(`${dndAPIUrl}/api/classes`);
    return res.data.results;
  } catch (err) {
    console.log('there is an error: ', err);
  }
}
//these work, i just want to limit the amount of api calls im making
// export const fetchLanguageData = async () =>{
//   try {
//     const res = await axios.get(`${dndAPIUrl}/api/languages`);
//     return res.data.results;
//   } catch (err) {
//     console.log('there is an error: ', err);
//   }
// }

export const fetchRaceData = async () =>{
  try {
    const res = await axios.get(`${dndAPIUrl}/api/races`);
    return res.data.results;
  } catch (err) {
    console.log('there is an error: ', err);
  }
}

export const fetchAbilityScoreData = async () =>{
  try {
    const res = await axios.get(`${dndAPIUrl}/api/ability-scores`);
    return res.data.results;
  } catch (err) {
    console.log('there is an error: ', err);
  }
}

export const fetchNameList = async () =>{
  try {
    const res = await axios.get(`${nameAPIUrl}&number=6`);
    return res.data.names;
  } catch (err) {
    console.log('there is an error in the name api', err);
  }
}