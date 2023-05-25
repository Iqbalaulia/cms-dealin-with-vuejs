<template>
  <div class="header-table">
    <h5 class="subheading-20">{{ title }}</h5>
    <!-- <p class="body-16 col-black-4" v-if="subtitle && subtitle !== ''">
      {{ subtitle }}
    </p> -->
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
  name: 'PageName',
};
</script>
