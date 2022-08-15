<template>
  <div>
    <section class="font-open">
      <!-- CAROUSEL -->
      <div
        class="flex flex-col-reverse flex-wrap items-center justify-center px-5 pt-10 mb-10 lg:px-40 gap-14 lg:flex-row lg:gap-0"
      >
        <div class="lg:w-[60%] w-full text-center lg:text-start">
          <p class="md:text-[48px] text-[25px] font-bold mb-3">
            Ubah Hidupmu Sekarang Juga
          </p>
          <p class="text-[20px] leading-7 mb-8">
            Belajar menjadi software engineer secara online/remote selama 3 - 6
            bulan sampai diterima kerja, tanpa bayar di depan (Cicil Setelah
            Kerja).
          </p>
          <button class="w-[155px] h-[46px] bg-[#EF6807] text-white rounded-md">
            Daftar Sekarang
          </button>
        </div>

        <div class="lg:w-[40%] flex justify-end items-center">
          <img
            src="@/static/images/carosel/01-btpn.e89dd14.svg"
            alt="card"
            height="368"
            width="266"
          />
        </div>
      </div>

      <!-- REKANAN PERUSAHAAN -->
      <div
        class="bg-[#F3F4F5] flex flex-col justify-center items-center p-10 w-full"
      >
        <p class="text-[24px] leading-9 font-semibold mb-5 text-center">
          500 lebih lulusan sudah dipercaya di lebih dari 500 perusahaan
        </p>
        <p class="text-[20px] leading-7 mb-10 text-center">
          Fazztrack menjamin lulusan mendapat kesempatan membagun karir di
          perusahaan impian.
        </p>
        <div class="w-[90%] flex flex-wrap gap-5 justify-center">
          <img
            src="@/static/images/perusahaan/tokopedia.e6def53.svg"
            alt="icon"
          />
          <img
            src="@/static/images/perusahaan/mandiri.d9f1f48.png"
            alt="icon"
          />
          <img src="@/static/images/perusahaan/bri.7d466d0.svg" alt="icon" />
          <img src="@/static/images/perusahaan/jenius.a8270a4.svg" alt="icon" />
          <img src="@/static/images/perusahaan/flip.851afcc.svg" alt="icon" />
          <img src="@/static/images/perusahaan/jne.0a48135.svg" alt="icon" />
          <img
            src="@/static/images/perusahaan/prudential.a23e2d6.svg"
            alt="icon"
          />
          <img src="@/static/images/perusahaan/molatv.ea61655.svg" alt="icon" />
          <img src="@/static/images/perusahaan/aia.7ccbb68.svg" alt="icon" />
          <img src="@/static/images/perusahaan/pintu.eb4a956.svg" alt="icon" />
          <img src="@/static/images/perusahaan/bibit.7c32a8b.svg" alt="icon" />
          <img
            src="@/static/images/perusahaan/stockbit.9979b1a.svg"
            alt="icon"
          />
          <img
            src="@/static/images/perusahaan/alodokter.4f00ccc.svg"
            alt="icon"
          />
          <img
            src="@/static/images/perusahaan/modalrakyat.5ad39da.svg"
            alt="icon"
          />
          <img src="@/static/images/perusahaan/bahaso.ad154cd.svg" alt="icon" />
          <img
            src="@/static/images/perusahaan/privyid.1b7bbd0.svg"
            alt="icon"
          />
          <img src="@/static/images/perusahaan/sirclo.7d776dd.svg" alt="icon" />
          <img
            src="@/static/images/perusahaan/teravin.3f4bae6.svg"
            alt="icon"
          />
          <img
            src="@/static/images/perusahaan/mitrais.04db949.png"
            alt="icon"
          />
          <img
            src="@/static/images/perusahaan/gameqoo.90ad1c4.svg"
            alt="icon"
          />
          <img src="@/static/images/perusahaan/grid.7783c53.svg" alt="icon" />
          <img src="@/static/images/perusahaan/sehati.2039247.png" alt="icon" />
          <img src="@/static/images/perusahaan/agros.326f1f3.svg" alt="icon" />
          <img
            src="@/static/images/perusahaan/kontrakhukum.88f8b29.png"
            alt="icon"
          />
        </div>
      </div>

      <!-- TESTIMONI ALUMNI -->
      <div class="flex items-center justify-center w-full p-10">
        <div
          class="w-[90%] text-center flex justify-center items-center flex-col"
        >
          <div
            class="flex items-center text-[24px] font-semibold leading-9 text-[#1F2A36 lg:w-[20%] justify-between mb-3"
          >
            <p>Alumni</p>
            <img :src="love" width="25" height="25" />
            <p>Fazztrack</p>
          </div>
          <p class="text-[20px] leading-7 text-[#46505C]">
            Testimoni alumni Fazztrack tentang bootcamp dan penyaluran kerja
            yang sudah mereka ikuti.
          </p>
        </div>
      </div>

      <div
        class="flex flex-wrap items-center justify-center w-full gap-5 p-5 lg:p-0 lg:mb-10"
      >
        <CardTestimoni
          v-for="(item, idx) in testimoni"
          :key="idx"
          :data="item"
        />
      </div>

      <!-- PILIHAN BOOTCAMP -->
      <div class="flex flex-col items-center justify-center px-5">
        <p class="text-[24px] leading-9 font-semibold text-[#1F2A36] mb-3">
          Pilihan Bootcamp Fazztrack
        </p>
        <p class="text-[20px] leading-7 text-center">
          Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun untuk
          kamu siap bekerja.
        </p>

        <div
          class="w-[90%] flex justify-center items-center flex-wrap gap-5 my-16"
        >
          <CardPilihanBootcamp
            v-for="(item, idx) in pilihanBootcamp"
            :key="idx"
            :data="item"
          />
        </div>
      </div>

      <!-- KEUNGGULAN BOOTCAMP -->
      <div class="flex flex-col items-center justify-center bg-[#1C417D]">
        <div class="w-[85%] text-white">
          <p class="text-[24px] leading-9 font-semibold mb-3 text-center my-10">
            Keunggulan Bootcamp Fazztrack
          </p>
          <p class="text-[20px] leading-7 text-center">
            Bootcamp Fazztrack akan membimbing kamu menjadi Software Engineer
            profesional sampai di salurkan kerja dengan berbagai keunggulan
            seperti berikut:
          </p>
          <div class="flex flex-wrap items-center justify-center gap-5 my-16">
            <CardKeunggulan
              v-for="(item, idx) in keunggulan"
              :key="idx"
              :data="item"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardTestimoni from '@/components/Molecules/CardTestimoni.vue'
import CardPilihanBootcamp from '@/components/Molecules/CardPilihanBootcamp.vue'
import CardKeunggulan from '@/components/Molecules/CardKeunggulan.vue'
import data from '@/static/data.js'
import love from '@/static/icons/love.svg'

export default {
  name: 'PageHome',
  components: {
    CardTestimoni,
    CardPilihanBootcamp,
    CardKeunggulan,
  },
  layout: 'template',
  data: () => ({
    testimoni: data.testimoni,
    pilihanBootcamp: data.pilihan,
    keunggulan: data.keunggulan,
    love,
  }),
}
</script>
