import axios from 'axios'

const resGuide = axios.create({
  baseURL: 'https://consultguides.onrender.com/'
})

export default resGuide