export default {
    videos:(state)=>{
        return {
            isLoading:state.isLoading,
            list:state.list,
            isError:state.isError
        }
    }
}