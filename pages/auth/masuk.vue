<template>
    <div>
        <form @submit.prevent="handleSubmit" >
            <div>
                <input v-model="form.email" type="text">
            </div>
            <div>
                <input v-model="form.password" type="password">
            </div>
            <div>
                <button>submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'MasukPage',
    data() {
        return {
            form:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        async handleSubmit () {
            // console.log(this.form.email);
            try {
                await this.$auth.loginWith('local',{
                    data:this.form
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>