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
              :tableData="infoEvent.items"
              :columns="infoEvent.columns_data"
            >
              <div slot="visible" slot-scope="{ row }">
                <SlideSwitch :value="row.visible" />
              </div>
              <div slot="Aksi" slot-scope="{ row }">
                <el-tooltip placement="top" effect="light">
                  <div slot="content">
                    <div @click="editData(row.id)" class="p-2">
                      <img
                        :src="require('@/assets/img/icons/edit.svg')"
                        alt=""
                        v-once
                        class="mr-2"
                      />
                      Edit
                    </div>
                    <div @click="editData(row.id)" class="p-2">
                      <img
                        :src="require('@/assets/img/icons/eye-default.svg')"
                        alt=""
                        v-once
                        class="mr-2"
                      />
                      View
                    </div>
                    <div @click="editData(row.id)" class="p-2">
                      <img
                        :src="require('@/assets/img/icons/trash.svg')"
                        alt=""
                        v-once
                        class="mr-2"
                      />
                      Delete
                    </div>
                  </div>
                  <img
                    :src="require('@/assets/img/icons/more.svg')"
                    alt=""
                    v-once
                  />
                </el-tooltip>
              </div>
            </TableSelect>
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
      infoEvent: (state) => state.infoEvent.data,
    }),
  },
  methods: {
    ...mapActions("infoEvent", [""]),
    editData() {
      this.$router.push(`/dashboard`);
    },
  },
  components: {
    Layout: () => import("@/views/ADMIN/Layout"),
    FilterData: () => import("./Filter"),
    TableSelect: () => import("../../../components/Table/TableSelection.vue"),
    SlideSwitch: () => import("@/components/SlideSwitch"),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Event/index.scss";
</style>
