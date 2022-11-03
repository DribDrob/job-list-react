// API:
// https://api.json-generator.com/templates/ZM1r0eic3XEy/data
// + token

import axios from 'axios';

axios.defaults.baseURL = 'https://api.json-generator.com';
const API_TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export async function getAllJobs() {
  axios.defaults.headers.common.Authorization = `Bearer ${API_TOKEN}`;
  const { data: jobs } = await axios.get(`/templates/ZM1r0eic3XEy/data`);
  return jobs;
}

export async function getJobById(id) {
  const jobs = await getAllJobs();
  const jobById = jobs.find(job => job.id === id);
  return jobById;
}
