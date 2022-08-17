<template>
  <div>
    <div
      class="px-5 pt-5 pb-5 md:px-10 md:pt-10 md:pb-8 lg:px-28 lg:pt-12 lg:pb-8"
    >
      <h3 class="text-xs font-medium lg:text-2xl">
        Belajar bersama expert dan creator terpercaya
      </h3>
    </div>
    <div v-if="data.isLoading">
      <Loading />
    </div>
    <div v-else class="w-full px-5 pt-12 pb-10 bg-gray-200 lg:px-28">
      <div
        class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-10"
      >
        <CardMiniBootcamp
          v-for="(item, index) in data.list"
          :key="index"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CardMiniBootcamp from '@/components/Molecules/CardMiniBootcamp.vue';
import Loading from '@/components/Atom/loading.vue';
export default {
  name: 'MiniBootcamp',
  components: {
    CardMiniBootcamp,
    Loading,
  },
  layout: 'template',
  computed: {
    ...mapGetters({
      data: 'miniBootcamp/miniBootcamp',
    }),
  },
  mounted() {
    this.getMiniBootcamp();
  },
  methods: {
    ...mapActions({
      getMiniBootcamp: 'miniBootcamp/getMiniBootCamp',
    }),
  },
};
</script>
