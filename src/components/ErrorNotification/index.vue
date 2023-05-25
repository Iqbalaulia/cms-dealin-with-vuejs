<template>
  <div>
    <div class="default_alerts" v-if="alerts.length > 0">
      <el-alert
        v-for="(item, index) in alerts"
        :key="`alert_${index}`"
        :title="item.value"
        type="error"
        effect="dark"
        class="mb-2"
      ></el-alert>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    errors: {
      type: Object,
      required: true,
    },
  },
  name: 'ErrorNotification',
  data() {
    return {
      alerts: [],
    };
  },
  mounted() {
    // just assign error from server, component automatic format to array
    if (this.errors) {
      this.alerts = this.handleErrorApi(this.errors);
    }
  },
};
</script>
