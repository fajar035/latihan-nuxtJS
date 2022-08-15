<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Molecules/Footer.vue';
import Navbar from '@/components/Molecules/Navbar.vue';
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
