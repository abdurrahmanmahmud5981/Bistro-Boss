import axios from "axios"

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  
})
const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic