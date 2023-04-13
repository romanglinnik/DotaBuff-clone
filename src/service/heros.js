import axiosInstance from "../axios"

const heroesService =  {
  async getList() {
    const { data } = await axiosInstance.get('heroStats')
    return data
  },

  async getById(id) {
    const { data } = await axiosInstance.get(`heroStats`)
    return data
  }
}

export default heroesService