export default {
    GET_VIDEOS_PENDING : (state) => {
        state.isLoading =true
    },
    GET_VIDEOS_FULFIELD:(state,payload)=>{
        state.isLoading=false
        state.isError=false
        state.list=payload
    },
    GET_VIDEOS_REJECTED:(state)=>{
        state.isLoading =false
        state.isError=true
    },
}