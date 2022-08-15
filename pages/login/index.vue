<template>
  <div class="flex justify-center w-screen h-screen my-14">
    <div class="w-10/12 pb-10 border-2 rounded-md h-max lg:w-1/2">
      <div class="flex flex-col items-center">
        <div class="mt-16">
          <img src="@/static/fazztrack.svg" alt="" />
        </div>
        <h3 class="mt-4 text-sm lg:text-2xl">Selamat Datang</h3>
        <h3 class="mt-1 text-xs lg:text-lg">
          belum punya akun Fazztrack ?
          <routerLink to="/register" class="text-orange-400"
            >Daftar disini</routerLink
          >
        </h3>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="flex flex-col ml-10 mr-10">
          <div class="flex items-center">
            <h6 class="mr-3 text-orange-400">&#42;</h6>
            <h3 class="mt-1 text-xs lg:text-lg">Email</h3>
          </div>
          <input
            v-model="form.email"
            class="pl-4 mt-3 border-2 border-gray-200 rounded-sm h-7 placeholder:text-xs lg:h-10"
            placeholder="email"
          />
        </div>
        <div class="flex flex-col mt-5 ml-10 mr-10">
          <div class="flex items-center">
            <h6 class="mr-3 text-orange-400">&#42;</h6>
            <h3 class="mt-1 text-xs lg:text-lg">Password</h3>
          </div>
          <input
            v-model="form.password"
            class="pl-4 mt-3 border-2 border-gray-200 rounded-sm h-7 placeholder:text-xs lg:h-10"
            placeholder="password"
          />
        </div>
        <div class="flex flex-row justify-between mt-5 px-11">
          <div class="flex items-center">
            <input type="checkbox" />
            <h3 class="ml-3 text-xs lg:text-sm">Ingat Akun Saya</h3>
          </div>
          <h3 class="text-xs lg:text-sm">Lupa Password</h3>
        </div>
        <div class="mt-4 px-11">
          <button
            tipe="submit"
            for="my-modal-6"
            class="w-full bg-orange-500 border-none btn hover:bg-orange-500 focus:bg-orange-500"
          >
            masuk
          </button>
        </div>
      </form>
      <h3 class="mt-4 text-xs text-center lg:text-sm">
        Atau Masuk Menggunakan
      </h3>
      <div class="mt-4 px-11">
        <button
          class="w-full text-black bg-white border-gray-200 btn hover:bg-gray-100 hover:border-none focus:bg-grey-200"
        >
          Goggle
        </button>
      </div>
    </div>
    <input id="my-modal-6" type="checkbox" class="modal-toggle" />
    <div class="modal w-full h-full sm:modal-bottom, sm:modal-midle">
      <div
        v-if="user.email"
        class="w-full px-10 pt-10 pb-10 mx-10 bg-white rounded-2xl sm:modal-box"
      >
        <h3 class="text-lg font-bold">User berhasil login!</h3>
        <p class="py-4">{{ user.email }}</p>
        <div class="flex justify-center w-full my-10">
          <img :src="user.profilePicture" class="h-52" alt="" />
        </div>
        <div class="modal-action">
          <label
            for="my-modal-6"
            class="bg-orange-500 btn"
            @click="handlerLogin"
            >kembali</label
          >
        </div>
      </div>
      <div
        v-else
        class="w-full px-10 pb-10 mx-10 bg-white rounded-2xl sm:modal-box"
      >
        <div class="flex flex-col items-center my-10">
          <div
            class="flex items-center justify-center w-24 h-24 mb-10 border-8 border-red-600 rounded-full"
          >
            <h3 class="text-6xl font-bold text-red-600">X</h3>
          </div>
          <h3 class="text-sm font-bold sm:text-lg">{{ message }}</h3>
        </div>
        <div class="modal-action">
          <label for="my-modal-6" class="bg-orange-500 btn">kembali</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',
  data() {
    return {
      modal: false,
      message: '',
      user: {},
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
    async handleLogin() {
      try {
        if (this.form.email === '') {
          document.getElementById('my-modal-6').checked = true;
          const message = (this.message = 'email belum terisi');
          return message;
        }
        if (this.form.password === '') {
          document.getElementById('my-modal-6').checked = true;
          const message = (this.message = 'password belum terisi');
          return message;
        }
        const result = await this.login(this.form);
        this.user = result;
        console.log(this.user);
        this.message = '';
        document.getElementById('my-modal-6').checked = true;
      } catch (error) {
        console.log(error.message);
        this.message = error.message;
        this.user = {};
        document.getElementById('my-modal-6').checked = true;
      }
    },
    handlerLogin() {
      this.$router.push('/');
    },
  },
};
</script>
