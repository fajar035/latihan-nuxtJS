import axios from "axios"
export default {
    getMiniBootCamp(contex){
        contex.commit("GET_MINIBOOTCAMP_PENDING")
        const URL= `${process.env.VUE_APP_API_URL}/miniclass`
        console.log("url",URL);
        axios.get(URL).then((response) => {
            console.log(response);
            contex.commit("GET_MINIBOOTCAMP_FULFIELD",response.data.data)
        }).catch((err) => {
            console.log(err);
            contex.commit("GET_MINIBOOTCAMP_REJECTED")
        })
    }   
}