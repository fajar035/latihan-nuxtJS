<template>
  <div>
    <p>Halaman Users</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UsersPage',
  methods: {
    ...mapActions({
      getUsers: 'users/getUsers',
    }),
  },
  mounted() {
    this.getUsers()
  },
}
</script>
