import axios from 'axios'

const Action = () =>async(dispatch)=>{
    try {
        const product = await axios.get('https://mywebsite-17yl.onrender.com/')

        const res = product.data
        dispatch({type:'success',payload:res})
    } catch (error) {
        dispatch({type:'fail',payload:error.message})
    }
}

export default Action