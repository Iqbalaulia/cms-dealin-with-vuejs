<template>
  <div>
    <span
      class="small-10 d-block"
      :class="value ? 'col-green-1' : 'col-black-2'"
      v-if="label && label !== ''"
      >{{ label }}</span
    >
    <el-switch
      :value="value"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
      @change="change"
    >
    </el-switch>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
    },
    value: {
      type: Boolean,
    },
    activeColor: {
      type: String,
      default: function () {
        return "#FBC531";
      },
    },
    inactiveColor: {
      type: String,
      default: function () {
        return "#dadade";
      },
    },
    change: {
      type: Function,
      default: function () {
        return () => {};
      },
    },
  },
  name: "SlideSwitch",
  data() {
    return {
      dataValue: false,
    };
  },
  mounted() {
    this.dataValue = this.value;
  },
};
</script>
