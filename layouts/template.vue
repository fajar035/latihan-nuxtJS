<template>
  <div class="relative">
    <div
      id="blur"
      class="absolute z-10 hidden w-full h-full bg-black bg-opacity-30"
    ></div>
    <Navbar @onShow="menus" />
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
  methods: {
    menus({ kelas, dukungan, tentang }) {
      const blur = document.getElementById('blur');
      if (kelas || dukungan || tentang) return blur.classList.remove('hidden');
      if (!kelas || !dukungan || !tentang) return blur.classList.add('hidden');
    },
  },
};
</script>
