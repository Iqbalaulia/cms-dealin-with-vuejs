<template>
  <div>
    <div class="informasi_table" v-if="showPagination">
      <span class="small-12">Viewing {{ page }} of {{ total }}</span>

      <!-- <slot name="pagination" :page="page" :total="total">
        <b-pagination
          :value="page"
          :total-rows="total"
          :per-page="perPage"
          @change="getData"
          class="pagination ml-auto"
        ></b-pagination
      >
     
      </slot> -->
      <!-- <ul class="ml-auto">
        <li
          class="text-center"
          :class="[currentPage === 1 ? 'btn-disabled non-active' : '']"
        >
          <a @click="goPage('prev')"><i class="fa fa-arrow-left"></i></a>
        </li>

        <li
          v-for="page in paging"
          :key="page"
          :class="[
            currentPage === page || page === '...' ? 'active btn-disabled' : '',
          ]"
        >
          <a @click="getData(page)">{{ page }}</a>
        </li>

        <li
          class="text-center"
          :class="[currentPage === lastPage ? 'btn-disabled non-active' : '']"
        >
          <a class="text-center" @click="goPage('next')"
            ><i class="fa fa-arrow-right mx-auto"></i
          ></a>
        </li>
      </ul> -->
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
      style="width: 99.5%"
      header-cell-class-name="bg-black-9 col-black-2 subheading-16 header_inti"
      :lazy="true"
      size="medium"
      class="table_inti"
      @sort-change="
        ({ column, prop, order }) => sortChange(column, prop, order)
      "
      :empty-text="emptyText"
      @selection-change="handleSelectionChange"
      :span-method="spanMethod"
      :row-class-name="rowClassName"
      @row-click="({ row, column, event }) => handleRow(row, column, event)"
    >
      <slot name="columns">
        <el-table-column
          :sortable="column.sortable ? 'custom' : false"
          v-for="column in columns"
          :key="column.prop"
          v-bind="column"
          :type="column.type"
          class="column_table"
        >
          <template slot-scope="{ row }">
            <slot :name="column.prop || column.type || column.label" :row="row">
              {{ row[column.prop] }}
            </slot>
          </template>
        </el-table-column>
      </slot>
    </el-table>
    <!-- <div class="pagination_bawah" v-if="showPagination">
      <slot name="pagination" :page="page" :total="total">
        <b-pagination
          :value="page"
          :total-rows="total"
          :per-page="perPage"
          @change="getData"
          class="pagination mx-auto"
        ></b-pagination>
      </slot>
    </div> -->
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
    handleRow: {
      type: Function,
      default: () => {},
    },
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
    rowClassName: {
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
@import "@/assets/scss/Table/index.scss";
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
