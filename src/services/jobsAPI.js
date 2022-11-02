// API:
// https://api.json-generator.com/templates/ZM1r0eic3XEy/data
// + token

import axios from 'axios';

axios.defaults.baseURL = 'https://api.json-generator.com';
const { API_TOKEN } = process.env;
// const API_TOKEN = '8f517ea939a3e5bbc59bc55f9e33cbf1';

export async function getAllJobs() {
  axios.defaults.headers.common.Authorization = `Bearer ${API_TOKEN}`;
  const { data } = await axios.get(`/templates/ZM1r0eic3XEy/data`);
  console.log(data);
  return data;
}
