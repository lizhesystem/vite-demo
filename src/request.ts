import axios from "axios";

const service = axios.create({})

service.interceptors.response.use(
  config => {
    return config
  }
)

export default service
