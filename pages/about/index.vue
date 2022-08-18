<template>
    <div>
        <h1>about</h1>
        <button class="btn" @click="handleLogout" >logout</button>
    </div>
</template>

<script>
export default {
    name:"AboutPage",
    methods: {
        async handleLogout(){
            await this.$auth.logout()
        }
    },
}
</script>