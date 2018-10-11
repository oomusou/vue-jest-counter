<template>
  <div>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: [
    'startCount',
  ],
  data() {
    return {
      count: this.startCount,
    };
  },
  methods: {
    increment() {
      this.count++;
      this.$emit('latestCount', this.count);
    },
  },
};
</script>

<style scoped>

</style>
