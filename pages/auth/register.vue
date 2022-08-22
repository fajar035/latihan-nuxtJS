<template>
  <div
    class="flex items-center justify-center w-screen h-screen my-32 font-open"
  >
    <div
      class="w-[648px] h-[800px] lg:border flex flex-col justify-center items-center"
    >
      <img
        src="@/static/icons/fazztrack-logo-color.svg"
        alt="icon fazztrack"
        width="100"
        class="mb-3"
      />
      <p
        class="md:text-[48px] sm:text-2xl leading-[72px] font-semibold mb-1 md:mb-3 lg:mb-7 lg:mt-5 text-center"
      >
        Buat akun Fazztrack
      </p>
      <p class="text-[14px]">
        Sudah punya akun Fazztrack ?
        <routerLink to="/auth/login" class="text-[#EF6807]"
          >Masuk disini</routerLink
        >
      </p>

      <!-- INPUT -->
      <div class="w-[85%] h-[70px] flex justify-between flex-col mt-16">
        <p class="text-[14px]">Nama Lengkap</p>
        <input
          type="text"
          name="fullname"
          placeholder="Masukan email anda"
          class="w-full h-[42px] p-3 rounded-md border text-[14px]"
        />
      </div>

      <div class="w-[85%] h-[70px] flex justify-between flex-col mt-5">
        <p class="text-[14px]">Email</p>
        <input
          type="email"
          name="email"
          placeholder="Masukan email anda"
          class="w-full h-[42px] p-3 rounded-md border text-[14px]"
        />
      </div>

      <div class="w-[85%] h-[70px] flex justify-between flex-col mt-5">
        <p class="text-[14px]">No. Handphone</p>
        <input
          type="number"
          name="handphone"
          placeholder="Masukan No. Handphone anda"
          class="w-full h-[42px] p-3 rounded-md border text-[14px]"
        />
      </div>

      <div class="w-[85%] h-[70px] flex justify-between flex-col mt-5">
        <p class="text-[14px]">Kata Sandi</p>
        <input
          type="password"
          name="password"
          placeholder="Masukan kata sandi anda"
          class="w-full h-[42px] p-3 rounded-md border text-[14px]"
        />
      </div>

      <div class="w-[85%] h-[70px] flex justify-between flex-col mt-5">
        <p class="text-[14px]">Konfirmasi Kata Sandi</p>
        <input
          type="password"
          name="password2"
          placeholder="Masukan ulang kata sandi anda"
          class="w-full h-[42px] p-3 rounded-md border text-[14px]"
        />
      </div>

      <div class="w-[85%] flex justify-between my-5">
        <div>
          <input
            id="forgot"
            type="checkbox"
            class="mr-2"
            @change="handlerAggree"
          />
          <label for="forgot" class="text-[16px] hover:cursor-pointer"
            >Saya menyetujui
            <span class="text-[#2557A7] font-bold"
              >Syarat dan Ketentuan</span
            ></label
          >
        </div>
      </div>

      <div class="w-[85%]">
        <button
          class="w-full h-[40px] font-semibold rounded-md bg-[#EF6807] text-white hover:shadow-md disabled:opacity-50 ease-in-out duration-500"
          type="button"
          :disabled="isDisable"
          @click="handlerLogin"
        >
          Daftar Fazztrack
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageRegister',
  auth: false,
  data: () => ({
    isDisable: true,
  }),
  methods: {
    handlerLogin() {
      this.$router.push('/');
    },
    handlerAggree() {
      this.isDisable = !this.isDisable;
    },
  },
};
</script>
