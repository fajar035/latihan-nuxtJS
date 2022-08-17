<template>
  <nav class="sticky top-0 z-20 bg-white shadow-sm font-open">
    <div class="flex items-center justify-between w-full h-20">
      <!-- Logo -->
      <div class="flex items-center w-1/2 lg:w-[20%] h-full lg:pl-28 pl-12">
        <!-- <p class="text-2xl font-semibold">logo</p> -->
        <img src="@/static/fazztrack.svg" alt="logo" width="100" height="60" />
      </div>

      <!-- Menu & button large -->
      <div
        class="lg:flex justify-between items-center md:w-[70%] lg:w-[80%] pl-10 h-full hidden"
      >
        <!-- Menus -->
        <ul class="flex gap-5">
          <li class="relative flex gap-2" @click="handleMenuKelas">
            <p class="font-semibold hover:cursor-pointer">Kelas</p>
            <img
              src="@/static/icons/arrowDown.svg"
              alt="icon"
              width="20"
              height="20"
              class="hover:cursor-pointer"
            />
            <ul
              v-if="menus.kelas"
              class="absolute flex justify-between w-auto h-auto p-5 bg-white rounded-sm top-16"
            >
              <li class="px-10 w-max">
                <p class="mb-8 text-[#8d959e] text-sm">BOOTCAMP</p>
                <ul class="text-[#1F2A36] text-sm leading-5 font-semibold">
                  <li class="mb-5">Fullstack Mobile</li>
                  <li class="mb-5">Fullstack Website</li>
                  <li class="mb-5">Backend Javapring</li>
                  <li class="mb-5">Backend Golang</li>
                </ul>
              </li>
              <li class="px-10 mr-10 border-l-2 border-r-2 w-max">
                <p class="mb-8 text-[#8d959e] text-sm">MINI BOOTCAMP</p>
                <ul class="text-[#1F2A36] text-sm leading-5 font-semibold">
                  <li class="mb-5">Digital Marketing</li>
                  <li class="mb-5">Cyber Security (Hacker/Bug Bounty)</li>
                  <li class="mb-5">QA Automation Engineer</li>
                  <li class="flex">
                    <p class="mr-2">Lihat Semua</p>
                    <img
                      src="@/static/icons/arrowRightNav.svg"
                      alt="icon"
                      width="15"
                      height="15"
                    />
                  </li>
                </ul>
              </li>
              <li class="pr-10 w-max">
                <p class="mb-8 text-[#8d959e] text-sm">VIDEO BELAJAR</p>
                <ul class="text-[#1F2A36] text-sm leading-5 font-semibold">
                  <li class="flex">
                    <p class="mr-2">Lihat Semua</p>
                    <img
                      src="@/static/icons/arrowRightNav.svg"
                      alt="icon"
                      width="15"
                      height="15"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="relative flex gap-2" @click="handleMenuDukungan">
            <p class="font-semibold hover:cursor-pointer">Dukungan</p>
            <img
              src="@/static/icons/arrowDown.svg"
              alt="icon"
              width="20"
              height="20"
            />
            <ul
              v-if="menus.dukungan"
              class="absolute p-5 bg-white rounded-sm w-max h-max top-16 text-[#1F2A36] text-sm leading-5 font-semibold"
            >
              <li class="mb-5">Cicil Setelah Kerja (ISA)</li>
              <li class="mb-5">Carrer Ready</li>
              <li class="mb-5">FAQ</li>
            </ul>
          </li>
          <li class="relative flex gap-2" @click="handleMenuTentang">
            <p class="font-semibold hover:cursor-pointer">Tentang</p>
            <img
              src="@/static/icons/arrowDown.svg"
              alt="icon"
              width="20"
              height="20"
            />
            <ul
              v-if="menus.tentang"
              class="absolute flex justify-between w-auto h-auto p-5 bg-white rounded-sm top-16"
            >
              <li class="px-10 w-max">
                <p class="mb-8 text-[#8d959e] text-sm">ALUMNI</p>
                <ul class="text-[#1F2A36] text-sm leading-5 font-semibold">
                  <li class="mb-5">Cerita alumni</li>
                </ul>
              </li>
              <li class="px-10 border-l-2 w-max">
                <p class="mb-8 text-[#8d959e] text-sm">FAZZTRACK</p>
                <ul class="text-[#1F2A36] text-sm leading-5 font-semibold">
                  <li class="mb-5">Sekilas Fazztrack</li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="flex gap-2 hover:cursor-pointer">
            <p class="font-semibold">Hire Our Graduates</p>
          </li>
        </ul>

        <!-- button -->
        <div
          class="flex items-center justify-between w-[180px] h-full text-sm leading-5 font-bold mr-10"
        >
          <NuxtLink
            to="/login"
            class="w-[88px] h-[46px] rounded-md font-open flex justify-center items-center border text-[#1F2A36]"
            >Masuk
          </NuxtLink>
          <NuxtLink
            to="/register"
            class="w-[88px] h-[46px] rounded-md font-open flex justify-center items-center border hover:bg-[#1A3D75] bg-blue-500 text-white"
            >Daftar
          </NuxtLink>
        </div>
      </div>

      <!-- Menu & button small -->
      <!-- hamburger -->
      <div
        class="flex items-center justify-end w-1/2 pr-12 transition-transform lg:hidden"
      >
        <img
          v-if="!shownMenus"
          src="@/static/icons/menu.svg"
          alt="icon"
          width="20"
          height="20"
          @click="handleMenu"
        />
        <img
          v-else
          src="@/static/icons/cross.svg"
          alt="icon"
          width="20"
          height="20"
          @click="handleMenu"
        />
      </div>

      <!-- Menu -->
      <div></div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ComponentNavbar',
  data: () => ({
    shownMenus: false,
    menus: {
      kelas: false,
      dukungan: false,
      tentang: false,
    },
  }),
  computed: {
    ...mapGetters({
      kelas: 'kelas/dataKelas',
    }),
  },
  mounted() {
    this.getData();
  },
  methods: {
    ...mapActions({
      getData: 'kelas/getData',
    }),
    handleMenu() {
      this.shownMenus = !this.shownMenus;
    },
    handleMenuKelas() {
      this.menus.kelas = !this.menus.kelas;
      this.menus.dukungan = false;
      this.menus.tentang = false;
      this.$emit('onShow', this.menus);
    },
    handleMenuDukungan() {
      this.menus.dukungan = !this.menus.dukungan;
      this.$emit('onShow', this.menus);
      this.menus.kelas = false;
      this.menus.tentang = false;
    },
    handleMenuTentang() {
      this.menus.tentang = !this.menus.tentang;
      this.$emit('onShow', this.menus);
      this.menus.kelas = false;
      this.menus.dukungan = false;
    },
  },
};
</script>
