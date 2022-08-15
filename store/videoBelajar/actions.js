import axios from "axios"
export default {
    getVideos(contex,param){
        contex.commit("GET_VIDEOS_PENDING")
        const URL= `${process.env.VUE_APP_API_URL}/videos?search=${param.search}`
        console.log("url",URL);
        axios.get(URL).then((response) => {
            console.log(response);
            contex.commit("GET_VIDEOS_FULFIELD",response.data.data)
        }).catch((err) => {
            console.log(err);
            contex.commit("GET_VIDEOS_REJECTED")
        })
    }   
}