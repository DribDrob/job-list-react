// API:
// https://api.json-generator.com/templates/ZM1r0eic3XEy/data
// + token

import axios from 'axios';

// axios.defaults.baseURL = 'https://api.json-generator.com';
// const API_TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export async function getAllJobs() {
  // axios.defaults.headers.common.Authorization = `Bearer ${API_TOKEN}`;
  // const { data } = await axios.get(`/templates/ZM1r0eic3XEy/data`);
  const { data } = await axios.get(
    `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`
  );
  console.log(data);
  return data;
}
