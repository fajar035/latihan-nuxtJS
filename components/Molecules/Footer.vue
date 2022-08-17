<template>
  <div class="px-10 pt-10 max-h-max md:px-28 font-open">
    <div class="grid grid-cols-2 pb-5 md:grid-cols-5 md: md:w-full">
      <div>
        <img src="@/static/fazztrack.svg" class="w-28" alt="" />
        <h3 class="mt-10 text-sm">
          Fazztrack adalah program pelatihan yang berkomitmen untuk mencetak
          developer yang profesional dan memberikan kesempatan untuk berkarir di
          perusahaan ternama.
        </h3>
      </div>
      <div class="ml-5 md:ml-10">
        <h3 class="text-lg font-bold">kelas</h3>
        <h3 class="mt-8 text-sm">Fulstack Mobile</h3>
        <h3 class="mt-1 text-sm">Fulstack Website</h3>
        <h3 class="mt-1 text-sm">Backend Javaspring</h3>
        <h3 class="mt-1 text-sm">Cackend Golang</h3>
        <h3 class="mt-1 text-sm">Mini Bootcamp</h3>
        <h3 class="mt-1 text-sm">Vidio Belajar</h3>
      </div>
      <div class="mt-5 md:ml-5 md:mt-0">
        <h3 class="text-lg font-bold">Dukungan</h3>
        <h3 class="mt-8 text-sm">Cicilan Setelah Kerja (ISA)</h3>
        <h3 class="mt-1 text-sm">Career Ready</h3>
        <h3 class="mt-1 text-sm">FAQ</h3>
        <h3 class="mt-1 text-sm">Hire our Graduates</h3>
      </div>
      <div class="mt-5 ml-5 md:mt-0">
        <h3 class="text-lg font-bold">Tentang</h3>
        <h3 class="mt-8 text-sm">Cerita Alumni</h3>
        <h3 class="mt-1 text-sm">Sekilas Fazztrack</h3>
      </div>
      <div class="mt-5 md:ml-5 md:mt-0">
        <h3 class="text-lg font-bold">Sosial Media</h3>
        <div class="flex flex-row mt-8">
          <img src="@/static/img8.svg" alt="" />
          <h3 class="ml-3 text-sm">Instagram</h3>
        </div>
        <div class="flex flex-row mt-1">
          <img src="@/static/img10.svg" alt="" />
          <h3 class="ml-3 text-sm">Facebook</h3>
        </div>
        <div class="flex flex-row mt-1">
          <img src="@/static/img11.svg" alt="" />
          <h3 class="ml-3 text-sm">Youtube</h3>
        </div>
      </div>
    </div>
    <div class="flex justify-between mb-5 border-t-2">
      <div class="flex">
        <h3 class="text-[5px] font-bold lg:text-sm">&copy; 2022 Fazztrack.</h3>
        <h3 class="text-[5px] lg:text-sm">All Rights Reserved</h3>
      </div>
      <div class="flex">
        <div class="flex mr-5">
          <img
            src="@/static/img2.png"
            class="w-2 h-2 mr-2 lg:w-4 lg:h-4 lg:mr-2"
            alt=""
          />
          <h3 class="text-[5px] lg:text-sm">081248886455</h3>
        </div>
        <div class="flex mr-5">
          <img
            src="@/static/img3.svg"
            class="w-2 h-2 mr-2 lg:w-4 lg:h-4 lg:mr-2"
            alt=""
          />
          <h3 class="text-[5px] lg:text-sm">hello@faztrack.com</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>
