<template>
  <Layout>
    <h5 class="header_name">{{ $route.meta.title }}</h5>
    <div class="row">
      <div class="col-md-12">
        <div class="card card_borderles">
          <div class="card-header bg-white p-0 border-0">
            <div class="d-flex align-items-center">
              <h5 class="header_name">Events Plan</h5>
              <router-link
                :to="`/info-event/new-event`"
                class="ml-auto btn btn-event"
                >New Event</router-link
              >
            </div>
          </div>
          <div class="card-body p-0 mt-4">
            <FilterData />
            <TableSelect
              class="mt-4"
              ref="table"
              :tableData="dashboard.items"
              :columns="dashboard.columns_data"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState({
      dashboard: (state) => state.dashboard.data,
    }),
  },
  methods: {
    ...mapActions("dashboard", [""]),
  },
  components: {
    Layout: () => import("@/views/ADMIN/Layout"),
    FilterData: () => import("./Filter"),
    TableSelect: () => import("../../../components/Table/TableSelection.vue"),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Event/index.scss";
</style>
