export default {
    miniBootcamp:(state)=>{
        return {
            isLoading:state.isLoading,
            list:state.list,
            isError:state.isError
        }
    }
}