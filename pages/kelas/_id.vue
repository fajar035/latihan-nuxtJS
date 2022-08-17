<template>
  <div>
    <div v-if="kelas.isLoading">
      <Loading />
    </div>
    <div v-else class="container mx-auto font-open lg:px-20">
      <div class="w-full lg:py-10">
        <div class="flex flex-col-reverse lg:flex-row">
          <div class="w-full py-16 lg:w-[60%]">
            <p
              class="text-[#46505C] text-5xl text-center lg:text-start font-semibold"
            >
              {{ kelas.detailKelas.title }}
            </p>

            <ul class="grid grid-cols-2 gap-5 pl-5 my-10 list-disc list-inside">
              <li
                v-for="(item, idx) in kelas.detailKelas.syllabus"
                :key="idx"
                class="text-[#EF6807] w-full text-xl"
              >
                <p class="text-[#46505C] inline text-base lg:text-xl">
                  {{ item }}
                </p>
              </li>
            </ul>

            <NuxtLink
              to="/register"
              class="flex justify-center items-center bg-[#EF6807] hover:bg-[#ca5400] hover:shadow-md text-white w-[155px] h-[46px] rounded-md ml-5 lg:ml-0"
            >
              Daftar Sekarang
            </NuxtLink>
          </div>

          <div class="flex items-center justify-center w-full p-20 lg:w-[40%]">
            <img
              src="@/static/images/carosel/01-btpn.e89dd14.svg"
              alt="card"
              width="266"
              height="368"
            />
          </div>
        </div>
      </div>

      <div class="w-full gap-20 lg:flex">
        <div
          class="w-fulllg:w-[40%] flex justify-center items-center mb-16 lg:mb-0"
        >
          <img src="@/static/img1.png" alt="img" width="360" height="192" />
        </div>

        <div class="w-full lg:w-[60%] text-center lg:text-start p-5 lg:p-0">
          <p class="text-[#1F2A36] text-2xl font-semibold mb-10">
            Lebih dari sekedar bootcamp
          </p>
          <p class="text-[#1F2A36] text-xl">
            Di bootcamp Fazztrack, kamu akan belajar bersama dengan teman teman
            yang passionate dan mentor yang akan membimbing kamu ke tujuan kamu.
            Kamu juga bisa membangun networking yang baik untuk masa depanmu
            dari teman setim dan mentor kami yang berasal dari industri.
          </p>
        </div>
      </div>

      <div class="w-full gap-20 my-20 text-center lg:flex-col">
        <p class="text-[#1F2A36] text-2xl font-semibold mb-5">
          Timeline Pembelajaran
        </p>
        <p class="text-[#1F2A36] text-xl mb-20">
          Kamu akan mempelajari materi sesuai kurikulum dengan timeline sebagai
          berikut :
        </p>
        <div
          v-for="(item, idx) in kelas.detailKelas.timeline"
          :key="idx"
          class="block mb-10 md:flex text-start"
        >
          <div class="w-full lg:w-[30%] flex justify-center">
            <p class="text-[#EF6807] text-xl font-semibold">{{ item.week }}</p>
          </div>
          <div class="w-full lg:w-[70%] mt-5 p-5 lg:mt-0 lg:p-0">
            <p class="text-[#1F2A36] text-xl font-semibold mb-5 lg:mb-3">
              {{ item.title }}
            </p>
            <p class="text-[#46505C] text-sm">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="w-full text-center">
        <p class="text-[#1F2A36] text-2xl font-semibold mb-5">
          Penjadwalan Dalam Kelas
        </p>
        <p class="text-[#46505C] text-xl">
          Berikut jadwal kamu selama mengikuti bootcamp di Fazztrack :
        </p>

        <div class="w-full p-5 my-10">
          <img
            src="@/static/images/jadwal.svg"
            alt="img"
            height="385"
            class="object-cover object-center"
          />
        </div>
      </div>
    </div>

    <div
      class="w-full bg-[#FFF3E4] flex justify-center items-center flex-col h-[218px]"
    >
      <p
        class="text-[#1F2A36] font-semibold text-2xl mb-10 text-center p-5 lg:p-0 font-open"
      >
        Tunggu Apa Lagi ? gabung Bersama Kami ?
      </p>
      <NuxtLink
        to="/register"
        class="flex justify-center items-center bg-[#EF6807] hover:bg-[#ca5400] hover:shadow-md text-white w-[155px] h-[46px] rounded-md font-open"
      >
        Daftar Sekarang
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Loading from '@/components/Atom/loading.vue';

export default {
  name: 'DetailPage',
  components: {
    Loading,
  },
  layout: 'template',
  data() {
    return {
      idKelas: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters({
      kelas: 'kelas/detailKelas',
    }),
  },
  mounted() {
    const { id } = this.$route.params;
    this.getDetail(id);
  },
  methods: {
    ...mapActions({
      getDetail: 'kelas/getDetail',
    }),
  },
};
</script>
