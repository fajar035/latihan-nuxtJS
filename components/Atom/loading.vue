<template>
  <div class="w-screen h-screen bg-[#F1F2F3] flex justify-center items-center">
    <img :src="loading" alt="isLoading" />
  </div>
</template>

<script>
import loading from '@/static/icons/loading.svg'
export default {
  name: 'ComponentLoading',
  data: () => ({
    loading,
  }),
}
</script>
