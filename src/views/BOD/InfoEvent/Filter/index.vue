<template>
  <div class="filter_verif">
    <div class="row">
      <div class="col-md-2">
        <el-input placeholder="Search">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="col-md-4 ml-auto">
        <label class="mr-2">Date Range</label>
        <el-date-picker
          type="daterange"
          class="w-75"
          range-separator="-"
          start-placeholder="Start date"
          end-placeholder="End date"
        >
        </el-date-picker>
      </div>
      <div class="col-md-3">
        <label class="ml-2 mr-2">Show</label>
        <el-select placeholder="Select" class="w-60">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >
          </el-option>
        </el-select>
      </div>
      <div class="col-md-3">
        <label class="ml-2 mr-2">Short</label>
        <el-select placeholder="Select" class="w-60">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilterVerif",
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
          disabled: true,
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Verification/index.scss";
</style>
