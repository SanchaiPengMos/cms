import axios from "../../config/axios"

const apiLogin = async (data) => {
    
    return axios.post("/public/api/v1/login",data ,
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    
}   

  export {
      apiLogin
  }