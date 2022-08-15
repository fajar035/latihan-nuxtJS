<template>
  <div>
    <p>Detail Users {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserDetailPage',
  data: () => ({
    id: '',
  }),
  mounted() {
    this.id = this.$route.params.id
  },
}
</script>
