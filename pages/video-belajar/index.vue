<template>
  <div>
    <Navbar />
    <div
      class="px-5 pt-5 pb-5 md:px-10 md:pt-10 md:pb-8 lg:px-28 lg:pt-12 lg:pb-8"
    >
      <h3 class="text-xs font-medium lg:text-2xl">
        Jelajahi modulnya dan ubah masa depanmu
      </h3>
      <form
        class="flex items-center justify-between mt-10 input input-bordered"
        @submit.prevent="handleSearch"
      >
        <input
          v-model="param.search"
          type="text"
          placeholder="search"
          class="w-11/12 focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </div>
    <div v-if="videos.isLoading">
            <Loading />
        </div>
    <div v-else class="w-full px-5 pt-12 pb-10 bg-gray-200 lg:px-28">
      <div
        class="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10"
      >
        <CardVidio
          v-for="(item, index) in videos.list"
          :key="index"
          :data="item"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "@/components/Molecules/Navbar.vue";
import Footer from "@/components/Molecules/Footer.vue";
import CardVidio from "@/components/Molecules/CardVidio.vue";
import Loading from "@/components/Atom/loading.vue"
export default {
  name: "VidioBelajar",
  components: {
    Navbar,
    CardVidio,
    Footer,
    Loading
  },
  data() {
    return {
      param: {
        search: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      videos: "videoBelajar/videos",
    }),
  },
      mounted () {
        this.getVideos(this.param);
      },
  methods: {
    ...mapActions({
      getVideos: "videoBelajar/getVideos",
    }),
    handleSearch() {
      console.log(this.param.search);
      this.getVideos(this.param);
    },
  },
};
</script>
