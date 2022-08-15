import axios from "axios"
export default {
    login(contex,data){
        return new Promise ((resolve,reject)=>{

            const URL= `${process.env.VUE_APP_API_URL}/user/auth/login`
            console.log("url",URL);
            axios.post(URL,data).then((response) => {
                console.log(response);
                resolve(response.data.data)
            }).catch((err) => {
                console.log(err);
                const message = err.response.data
                reject(message)
            })

        })
    }   
}