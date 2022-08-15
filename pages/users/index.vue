<template>
  <div
    class="w-screen h-screen flex justify-around items-center flex-col border"
  >
    <p>Halaman Users</p>
    <img
      src="@/static/fazztrack.svg"
      width="500"
      height="500"
      alt="fazztrack"
    />
    {{ getUsers() }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UsersPage',
  mounted() {
    this.getUsers()
  },
  methods: {
    ...mapActions({
      getUsers: 'users/getUsers',
    }),
  },
}
</script>
