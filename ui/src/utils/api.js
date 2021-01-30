import axios from 'axios'

const config = {
      baseURL: 'http://localhost:8080/submission'
}
    
export default axios.create(config)