<template>
  <nav
    class="sticky top-0 z-10 text-sm bg-white navbar font-open lg:px-20 drop-shadow-md"
  >
    <div class="navbar-start lg:ml-10">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li tabindex="0">
            <a class="font-bold">
              Kelas
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 mt-3 bg-slate-50">
              <li v-for="(item, idx) in kelas.data" :key="idx">
                <router-link :to="`/kelas/${item.id}`">
                  {{ item.title }}
                </router-link>
              </li>
              <li>
                <router-link to="/mini-bootcamp">Mini Bootcamps</router-link>
              </li>
              <li>
                <router-link to="/video-belajar">Video Belajar</router-link>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a class="font-bold">
              Dukungan
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 mt-3 bg-slate-50">
              <li><a>Cicilan Setelah Kerja (ISA)</a></li>
              <li><a>Carrer Ready</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </li>
          <li tabindex="0">
            <a class="font-bold">
              Tentang
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 mt-3 bg-slate-50">
              <li><a>Cerita Alumni</a></li>
              <li><a>Sekilas Fazztrack</a></li>
            </ul>
          </li>
          <li><a class="font-bold">Hire Our Graduates</a></li>
        </ul>
      </div>
      <router-link to="/" class="p-5">
        <img
          src="@/static/icons/fazztrack-logo-color.svg"
          alt="icon_fazztrack"
          width="130"
        />
      </router-link>
    </div>
    <div class="hidden navbar-center lg:flex">
      <ul class="p-0 menu menu-horizontal">
        <li tabindex="0">
          <a class="font-bold">
            Kelas
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 mt-3 bg-slate-50">
            <li v-for="(item, idx) in kelas.data" :key="idx">
              <router-link :to="`/kelas/${item.id}`">
                {{ item.title }}
              </router-link>
            </li>
            <li>
              <router-link to="/mini-bootcamp">Mini Bootcamp</router-link>
            </li>
            <li>
              <router-link to="/video-belajar">Video Belajar</router-link>
            </li>
          </ul>
        </li>
        <li tabindex="0">
          <a class="font-bold">
            Dukungan
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 mt-3 bg-slate-50">
            <li><a>Cicilan Setelah Kerja (ISA)</a></li>
            <li><a>Carrer Ready</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </li>
        <li tabindex="0">
          <a class="font-bold">
            Tentang
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 mt-3 bg-slate-50">
            <li><a>Cerita Alumni</a></li>
            <li><a>Sekilas Fazztrack</a></li>
          </ul>
        </li>
        <li><a class="font-bold">Hire Our Graduates</a></li>
      </ul>
    </div>
    <div class="mr-10 navbar-end">
      <routerLink
        to="/login"
        class="h-[46px] w-[87px] rounded-md mr-5 flex justify-center items-center hover:cursor-pointer font-bold border border-slate-300"
        >Masuk</routerLink
      >
      <routerLink
        to="/register"
        class="h-[46px] w-[87px] bg-[#1A3D75] border-none rounded-md flex justify-center items-center text-white hover:cursor-pointer font-bold"
      >
        Daftar
      </routerLink>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ComponentNavbar',
  computed: {
    ...mapGetters({
      kelas: 'kelas/dataKelas',
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapActions({
      getData: 'kelas/getData',
    }),
  },
}
</script>
