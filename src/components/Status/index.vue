<template>
  <ul class="default_status">
    <li
      class="default_status_list small-10"
      :class="items.status.type"
      :style="`${minWidth ? 'min-width:' + minWidth + 'px;' : ''}${
        maxWidth ? 'max-width:' + maxWidth + 'px;' : ''
      }`"
    >
      {{ items.status.name }}
    </li>
  </ul>
</template>

<script>
/**
 * Format items example
 * items: [
    { label: 'Guru', type: 'default' },
    { label: 'Lunas', type: 'success' },
    { label: 'Belum Dibayar', type: 'warning' },
    { label: 'Belum Dibayar', type: 'info' },
],

* Min width set min width tag
 */
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    minWidth: {
      type: String,
    },
    maxWidth: {
      type: String,
    },
  },
  name: "Status",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/Status/index.scss";
</style>
