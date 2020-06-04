<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss">
.container {
  @apply bg-red-500;
  max-width: 1170px;
}
</style>