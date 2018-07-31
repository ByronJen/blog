import axios from 'axios'

const instance = axios.create({
    baseURL:"https://rxy-blog.firebaseio.com"
})
// instance.defaults.headers.common['Authiorization'] = 'Token'

export default instance