<template>
  <div id="app">
    <counter :start-count="count" @latestCount="showCount"></counter>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
import counter from './components/counter.vue';

export default {
  name: 'app',
  components: {
    counter,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    showCount(count) {
      this.count = count;
    },
  },
};
</script>

<style>
</style>
