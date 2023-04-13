import axiosInstance from "../axios"

const teamsService =  {
  async getList() {
    const { data } = await axiosInstance.get('teams')
    return data
  },

  async getById(team_id) {
    const { data } = await axiosInstance.get(`teams/${team_id}`)
    return data
  }
}

export default teamsService