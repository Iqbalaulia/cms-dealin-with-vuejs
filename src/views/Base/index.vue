<template>
  <div class="p-4">
    <h5 class="header_name">{{ $route.meta.title }}</h5>

    <div class="card card_borderles">
      <div class="card-body p-0">
        <h4>Page Name</h4>
        <PageName class="header_name" title="Complain" />
        <br />
        <br />
        <h4>Modal</h4>
        <el-button
          @click="openModal()"
          type="button"
          class="text-capitalize text-center btn btn-warning pt-1 pb-1"
        >
          Modal
        </el-button>
        <br />
        <br />
        <h4>Table</h4>
        <Table
          ref="table"
          :tableData="dashboard.items"
          :columns="dashboard.columns_data"
        >
          <span slot="name" slot-scope="{ row }"> {{ row.name }} </span>
          <span slot="date_birth" slot-scope="{ row }">
            {{ row.date_birh }}
          </span>

          <div slot="Status" slot-scope="{ row }">
            <Status :items="row" />
          </div>
        </Table>
        <!-- <Table
          :getData="getPelajar"
          ref="table"
          :columns="pelajar.columns"
          :tableData="pelajar.items"
          :page="pelajar.page"
          :total="pelajar.total"
          :perPage="pelajar.limit"
          :loading="pelajar.loading"
          :sortChange="sortColumnTable"
        /> -->
        <br />
        <h4>Tab</h4>
        <Tab
          :items="[
            {
              name: 'Bulanan',
              active: tabActive === 'Bulanan' ? true : false,
            },
            {
              name: 'Tahunan',
              active: tabActive === 'Tahunan' ? true : false,
            },
          ]"
          :clickItem="(activeTab) => (tabActive = activeTab)"
        />
        <br />
        <h4>Slide Switch</h4>
        <SlideSwitch :value="true" />
        <br />
        <h4>Table Selection</h4>
        <TableSelection
          ref="table"
          :tableData="dashboard.items"
          :columns="dashboard.columns_data"
        />
      </div>
    </div>
    <Modal
      title="Contoh"
      :show="showdataform"
      width="70%"
      :onClose="() => (showdataform = false)"
    >
    </Modal>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      tabActive: "Bulanan",
      showdataform: false,
    };
  },
  computed: {
    ...mapState({
      dashboard: (state) => state.dashboard.data,
    }),
  },
  methods: {
    ...mapActions("dashboard", [""]),
    openModal() {
      this.showdataform = true;
    },
  },
  components: {
    Table: () => import("@/components/Table"),
    PageName: () => import("@/components/PageName"),
    Status: () => import("@/components/Status"),
    Tab: () => import("@/components/Tab"),
    Modal: () => import("@/components/Modal"),
    SlideSwitch: () => import("@/components/SlideSwitch"),
    TableSelection: () => import("@/components/Table/TableSelection.vue"),
  },
};
</script>
