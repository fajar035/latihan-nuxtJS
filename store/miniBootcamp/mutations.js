export default {
    GET_MINIBOOTCAMP_PENDING : (state) => {
        state.isLoading =true
    },
    GET_MINIBOOTCAMP_FULFIELD:(state,payload)=>{
        state.isLoading=false
        state.isError=false
        state.list=payload
    },
    GET_MINIBOOTCAMP_REJECTED:(state)=>{
        state.isLoading =false
        state.isError=true
    },
}