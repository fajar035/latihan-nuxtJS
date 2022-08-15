<template>
  <div class="w-[542px] h-max border p-10 font-open rounded-md">
    <p>
      {{ data.quotes }}
    </p>

    <div class="mt-10 h-[100px] flex">
      <img
        :src="require(`@/static/images/testimoni-alumni/${data.foto}`)"
        alt="photo profile"
        class="mr-5"
      />
      <div class="flex flex-col justify-evenly">
        <p>{{ data.name }}</p>
        <p>{{ data.jabatan }}</p>
        <div class="flex">
          <img src="@/static/icons/instagram.png" alt="icon IG" class="mr-1" />
          <p>{{ data.ig }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentCardTestimoni',
  props: ['data'],
}
</script>
