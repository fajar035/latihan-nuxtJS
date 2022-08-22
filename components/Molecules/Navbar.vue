<template>
  <nav class="sticky top-0 z-50 bg-white shadow-md font-open">
    <div class="relative flex items-center justify-between w-full h-16 lg:h-20">
      <!-- Logo -->
      <div
        class="flex items-center w-1/2 lg:w-[20%] h-full xl:pl-40 pl-10 lg:pl-20"
      >
        <NuxtLink to="/">
          <img src="@/static/fazztrack.svg" alt="logo" width="100" height="60"
        /></NuxtLink>
      </div>

      <!-- Menu & button large -->
      <div
        class="lg:flex justify-between items-center w-[70%] xl:w-[80%] h-full hidden xl:px-32"
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
                  <li v-for="(item, idx) in kelas.data" :key="idx" class="mb-5">
                    <NuxtLink :to="`/kelas/${item.id}`">
                      {{ item.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="px-10 mr-10 border-l-2 border-r-2 w-max">
                <p class="mb-8 text-[#8d959e] text-sm">MINI BOOTCAMP</p>
                <ul class="text-[#1F2A36] text-sm leading-5 font-semibold">
                  <NuxtLink to="/mini-bootcamp" class="flex">
                    <p class="mr-2">Lihat Semua</p>
                    <img
                      src="@/static/icons/arrowRightNav.svg"
                      alt="icon"
                      width="15"
                      height="15"
                    />
                  </NuxtLink>
                </ul>
              </li>
              <li class="pr-10 w-max">
                <p class="mb-8 text-[#8d959e] text-sm">VIDEO BELAJAR</p>
                <ul class="text-[#1F2A36] text-sm leading-5 font-semibold">
                  <NuxtLink to="/video-belajar" class="flex">
                    <p class="mr-2">Lihat Semua</p>
                    <img
                      src="@/static/icons/arrowRightNav.svg"
                      alt="icon"
                      width="15"
                      height="15"
                    />
                  </NuxtLink>
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
          v-if="!isLoggedIn"
          class="flex items-center justify-between w-[180px] h-full text-sm leading-5 font-bold mr-5"
        >
          <NuxtLink
            to="/auth/login"
            class="w-[88px] h-[46px] rounded-md font-open flex justify-center items-center border text-[#1F2A36]"
            >Masuk
          </NuxtLink>
          <NuxtLink
            to="/auth/register"
            class="w-[88px] h-[46px] rounded-md font-open flex justify-center items-center border hover:bg-[#1A3D75] bg-blue-500 text-white"
            >Daftar
          </NuxtLink>
        </div>
        <div
          v-else
          class="flex items-center justify-center w-[180px] h-full text-sm leading-5 font-bold"
        >
          <div
            class="w-[88px] h-[46px] rounded-md font-open flex justify-center items-center border bg-red-500 text-white hover:bg-red-600 cursor-pointer"
            @click="handleLogout"
          >
            logout
          </div>
        </div>
      </div>

      <!-- Menu & button small -->
      <!-- hamburger -->
      <div
        class="flex items-center justify-end w-1/2 pr-10 transition-transform cursor-pointer lg:hidden"
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
    </div>
    <!-- Menu -->
    <div
      id="menus"
      class="absolute flex-col items-start justify-between w-full h-screen transition-all duration-500 ease-in-out transform translate-x-full bg-white top-[70px] hidden"
    >
      <ul class="w-full h-[55%] overflow-y-scroll px-10">
        <li class="">
          <div
            class="flex items-center justify-between py-5 cursor-pointer"
            @click="handleMenuKelas"
          >
            <p>Kelas</p>
            <img
              v-if="!menus.kelas"
              src="@/static/icons/arrowDown.svg"
              alt="icon"
              width="20"
              height="20"
            />
            <img
              v-else
              src="@/static/icons/arrowUp.svg"
              alt="icon"
              width="20"
              height="20"
            />
          </div>
          <ul v-if="menus.kelas" class="p-5 rounded-md bg-slate-200">
            <li class="mb-5 text-[#8d959e] font-semibold">BOOTCAMP</li>
            <li
              v-for="(item, idx) in kelas.data"
              :key="idx"
              class="mb-5"
              @click="handleMenu"
            >
              <NuxtLink :to="`/kelas/${item.id}`">
                {{ item.title }}
              </NuxtLink>
            </li>
            <!-- <li class="mb-5">Fullstack Mobile</li>
            <li class="mb-5">backend Javaspring</li>
            <li class="mb-5">backend golang</li> -->
            <li class="mb-5 text-[#8d959e] font-semibold">MINI BOOTCAMP</li>
            <li class="mb-5" @click="handleMenu">
              <NuxtLink
                to="/mini-bootcamp"
                class="flex items-center justify-between"
              >
                <p>Lihat Semua</p>
                <img
                  src="@/static/icons/arrowRightNav.svg"
                  alt="icon"
                  width="20"
                  height="20"
                />
              </NuxtLink>
            </li>
            <li class="mb-5 text-[#8d959e] font-semibold">VIDEO BELAJAR</li>
            <li class="mb-5" @click="handleMenu">
              <NuxtLink
                to="/video-belajar"
                class="flex items-center justify-between"
              >
                <p>Lihat Semua</p>
                <img
                  src="@/static/icons/arrowRightNav.svg"
                  alt="icon"
                  width="20"
                  height="20"
                />
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <div
            class="flex items-center justify-between py-5 cursor-pointer"
            @click="handleMenuDukungan"
          >
            <p>Dukungan</p>
            <img
              v-if="!menus.dukungan"
              src="@/static/icons/arrowDown.svg"
              alt="icon"
              width="20"
              height="20"
            />
            <img
              v-else
              src="@/static/icons/arrowUp.svg"
              alt="icon"
              width="20"
              height="20"
            />
          </div>

          <ul v-if="menus.dukungan" class="p-5 rounded-md bg-slate-200">
            <li class="mb-5">Cicil Setelah Kerja (ISA)</li>
            <li class="mb-5">Carrer Ready</li>
            <li class="mb-5">FAQ</li>
          </ul>
        </li>
        <li>
          <div
            class="flex items-center justify-between py-5 cursor-pointer"
            @click="handleMenuTentang"
          >
            <p>Tentang</p>
            <img
              src="@/static/icons/arrowDown.svg"
              alt="icon"
              width="20"
              height="20"
            />
          </div>
          <ul v-if="menus.tentang" class="p-5 rounded-md bg-slate-200">
            <li class="mb-5 text-[#8d959e] font-semibold">ALUMNI</li>
            <li class="mb-5">Cerita Alumni</li>
            <li class="mb-5 text-[#8d959e] font-semibold">FAZZTRACK</li>
            <li class="mb-5">Sekilas Fazztrack</li>
          </ul>
        </li>
        <li class="flex items-center justify-between py-5 cursor-pointer">
          <p>Hire Our Graduates</p>
        </li>
      </ul>
      <!-- BUTTON AUTH -->
      <div
        v-if="!isLoggedIn"
        class="flex flex-col w-full h-[30%] gap-5 px-10 sticky bottom-0"
      >
        <NuxtLink
          to="/auth/login"
          class="w-full h-[60px] border bg-white flex font-semibold justify-center items-center"
          @click="handleMenu"
          >Masuk</NuxtLink
        >

        <NuxtLink
          to="/auth/register"
          class="w-full h-[60px] border bg-blue-500 flex font-semibold text-white justify-center items-center"
          @click="handleMenu"
          >Daftar</NuxtLink
        >
      </div>
      <div
        v-else
        class="flex flex-col w-full h-[30%] gap-5 px-10 sticky bottom-0"
      >
        <div
          class="w-full h-[60px] rounded-md font-open flex justify-center items-center border bg-red-500 text-white hover:bg-red-600 cursor-pointer"
          @click="handleLogout"
        >
          logout
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ComponentNavbar',
  data: () => ({
    shownMenus: false,
    isLoggedIn: false,
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
    this.isLoggedIn = this.$auth.$state.loggedIn;
  },
  methods: {
    ...mapActions({
      getData: 'kelas/getData',
    }),
    async handleLogout() {
      await this.$auth.logout();
      this.isLoggedIn = this.$auth.$state.loggedIn;
    },
    handleMenu() {
      this.shownMenus = !this.shownMenus;
      this.menus.kelas = false;
      this.menus.dukungan = false;
      this.menus.tentang = false;
      const menus = document.getElementById('menus');
      if (this.shownMenus) {
        menus.classList.add('translate-x-0');
        menus.classList.remove('translate-x-full');
        menus.classList.remove('hidden');
        menus.classList.add('flex');
      } else {
        menus.classList.remove('translate-x-0');
        menus.classList.add('translate-x-full');
        menus.classList.add('hidden');
        menus.classList.remove('flex');
      }
      this.$emit('onShowMenus', this.shownMenus);
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
