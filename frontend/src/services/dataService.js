import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/api/'

const dataService = async (endpoint) => {
  try {
    const response = await axios.get(endpoint)
    return response.data
  } catch (error) {
      if (error.message.includes('403')) {
        return 403
      }
    return []
  }
}

export default dataService