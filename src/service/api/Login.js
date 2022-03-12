import axios from "../../axios/axios";


const apiLogin = async (data) => {
    try {
      const result = await axios.post('/public/api/v1/auth/loginAdmin', data)
      return result && result.data;
    } catch (error) {
      return error && error.response && error.response.data;
    }
  };

  export {
      apiLogin
  }