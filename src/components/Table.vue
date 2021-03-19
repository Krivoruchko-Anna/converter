<template>
  <table class="table">
    <thead>
    <tr>
      <th class="table__header" label="Currency"><span>Currency</span></th>
      <th class="table__header" label="Selected currency">
        <select name="" id="" class="custom-select custom-select-sm">
          <option value="USD">USD</option>
          <option value="USD">RUB</option>
          <option value="USD">EUR</option>
        </select>
      </th>
    </tr>
    <tr>
      <td>
        <span>USD</span>
      </td>
      <td>
        <span>1</span>
      </td>
    </tr>
    </thead>
  </table>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .table {
    width: 100%;
    color: #758395;

    &__header {
      width: 50%;
    }
  }
</style>