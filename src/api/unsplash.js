import Unsplash from '../constants/unsplash'

export const fetchData = async () => {
    try{
        const response = await fetch(Unsplash.random_url)
        const data = await response.json()
        console.log(data)
        return data
    } catch (e) {
        console.log(e)
    }
}

