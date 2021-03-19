<template>
  <div class="currencies">
    <TableComponent></TableComponent>
  </div>
</template>

<script>
import TableComponent from "../components/Table";

  export default {
    components: {
      TableComponent
    }
  }

</script>

<style lang="scss" scoped>
  .currencies {
    max-width: 800px;
    margin: 0 auto;
  }

</style>
