import axios from 'axios';

const instance = axios.create({
  // baseURL: "https://evsms.pttor.com/ptt_backend/"
  // baseURL: "https://evsms.pttor.com/ptt_backend_alpha/"
  // baseURL:"http://localhost:2004/"
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:9999/"

  

});

export default instance;