<template>
  <div>
    <div class="informasi_table">
      <span class="small-12"
        >Total {{ page }} ditampilkan dari {{ total }} data</span
      >
      <slot name="pagination" :page="page" :total="total">
        <b-pagination
          v-model="page"
          :total-rows="total"
          :per-page="perPage"
          @change="getTableData"
          class="pagination ml-auto"
        ></b-pagination
      ></slot>
    </div>
    <el-table
      v-loading="loading"
      :data="tableData"
      v-bind="$attrs"
      v-on="listeners"
      stripe
      style="width: 100%"
    >
      <slot name="columns">
        <el-table-column
          :sortable="column.sortable ? 'custom' : false"
          v-for="column in columns"
          :key="column.prop"
          v-bind="column"
        >
          <template slot-scope="{ row }">
            <slot :name="column.prop || column.type || column.label" :row="row">
              {{ row[column.prop] }}
            </slot>
          </template>
        </el-table-column>
      </slot>
    </el-table>
    <div class="pagination_bawah">
      <slot name="pagination" :page="page" :total="total">
        <b-pagination
          v-model="page"
          :total-rows="total"
          :per-page="perPage"
          @change="getTableData"
          class="pagination mx-auto"
        ></b-pagination>
      </slot>
    </div>
    <!-- <slot name="pagination" :page="page" :total="total">
      <el-pagination
        v-model="page"
        :total="total"
        @current-change="getTableData"
        layout="prev, pager, next"
      >
      </el-pagination>
    </slot> -->
  </div>
</template>

<script>
export default {
  name: "DataTable",
  inheritAttrs: false,
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    getData: {
      type: Function,
      default: () => Promise.resolve([]),
      required: false,
    },
  },
  data() {
    return {
      tableData: [],
      page: 1,
      total: 10,
      perPage: 10,
      sortParams: [],
      loading: false,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        ["sort-change"]: this.onSortChange,
      };
    },
    rows() {
      return this.tableData.length;
    },
  },
  mounted() {
    this.getTableData();
    this.onSortChange();
  },
  methods: {
    async getTableData(page) {
      this.loading = true;
      let reqPage = page || this.page;

      try {
        let response = await this.getData({
          page: reqPage,
          sortParams: this.sortParams,
        });
        this.tableData = response.data;
        this.total = response.total;
      } finally {
        this.loading = false;
      }
    },
    onSortChange({ prop, order }) {
      if (prop !== null) {
        let shortOrder = order === "ascending" ? "asc" : "desc";
        this.sortParams = [`${prop}|${shortOrder}`];
      } else {
        this.sortParams = [];
      }
      this.getTableData();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/Table/index.scss";
</style>
