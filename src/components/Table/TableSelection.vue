<template>
  <div>
    <div class="informasi_table" v-if="showPagination">
      <span class="small-12">Viewing {{ page }} of {{ total }}</span>
      <ul class="ml-auto">
        <li class="text-center">
          <a><i class="fa fa-arrow-left"></i></a>
        </li>

        <li class="text-center">
          <a class="text-center"><i class="fa fa-arrow-right mx-auto"></i></a>
        </li>
      </ul>
    </div>
    <el-table
      v-loading="loading"
      :data="tableData"
      v-bind="$attrs"
      v-on="listeners"
      stripe
      style="width: 99.5%"
      header-cell-class-name="bg-black-9 col-black-2 subheading-16 header_inti"
      :lazy="true"
      size="medium"
      @sort-change="
        ({ column, prop, order }) => sortChange(column, prop, order)
      "
      :empty-text="emptyText"
      @selection-change="handleSelectionChange"
      :span-method="spanMethod"
    >
      <slot name="columns">
        <el-table-column type="selection" width="55"> </el-table-column>

        <el-table-column
          :sortable="column.sortable ? 'custom' : false"
          v-for="column in columns"
          :key="column.prop"
          v-bind="column"
          :type="column.type"
        >
          <template slot-scope="{ row }">
            <slot :name="column.prop || column.type || column.label" :row="row">
              {{ row[column.prop] }}
            </slot>
          </template>
        </el-table-column>
      </slot>
    </el-table>

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
    handleSelectionChange: {
      type: Function,
      default: () => {},
    },
    columns: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    page: {
      type: Number,
    },
    total: {
      type: Number,
    },
    perPage: {
      type: Number,
    },
    loading: {
      type: Boolean,
    },
    getData: {
      type: Function,
      default: () => Promise.resolve([]),
      required: false,
    },
    listeners: {
      type: Object,
      default: () => {},
      required: false,
    },
    sortChange: {
      type: Function,
      default: () => {},
    },
    emptyText: {
      type: String,
      default: () =>
        "Pencarian tidak ditemukan, ubah kata / filter pencariannya.",
    },
    spanMethod: {
      type: Function,
      default: () => {},
    },
    showPagination: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/TableSelection/index.scss";
</style>
<style lang="css">
.header_inti {
  background-color: #fbc531 !important;
  font-family: "Poppins";
  font-weight: bold;
  color: #141414;
}
tr:first-child th:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

tr:last-child th:last-child {
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}
.el-table__row {
  font-family: "Poppins";
  color: #141414;
}

.non-active {
  color: #c8c8c8;
}
</style>
