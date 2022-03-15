import axios from "../../config/axios"

const apiGetProvince = async () => {
    return axios.get("/private/api/v1/province")

}

const apiGetAmper = async (id) => {
    return axios.get(`/private/api/v1/amper?id=`+id)
}

const apiGetDistrict = async (id) => {
    return axios.get(`/private/api/v1/district?id=`+id)
}

export {
    apiGetProvince,
    apiGetAmper,
    apiGetDistrict
}