<template>
  <div class="verif_idcard">
    <Table
      ref="table"
      :tableData="verificationIdCardNew.items"
      :columns="verificationIdCardNew.columns_data"
      :listeners="listeners"
    >
      <span slot="id_data" slot-scope="{ row }">
        {{ row.id }}
      </span>
      <span slot="date" slot-scope="{ row }">
        {{ row.date | formatDateStandart }}
      </span>
      <span slot="attachment">
        <img
          class="verif_idcard_image"
          :src="require('@/assets/img/content/KTP.png')"
          alt=""
          v-once
        />
        <img
          class="ml-2 verif_idcard_ktp"
          :src="require('@/assets/img/content/Image.png')"
          alt=""
          v-once
        />
      </span>
      <span slot="name" slot-scope="{ row }"> {{ row.name }} </span>
      <span slot="date_birth" slot-scope="{ row }">
        {{ row.date_birh | formatDateTimeNonClock }}
      </span>
      <div slot="Status" slot-scope="{ row }">
        <Status :items="row" />
      </div>
    </Table>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NewVerif",
  computed: {
    ...mapState({
      verificationIdCardNew: (state) => state.verificationIdCardNew.data,
    }),
    listeners() {
      return {
        ...this.$listeners,
        ["row-click"]: this.openDetails,
      };
    },
  },
  methods: {
    ...mapActions("verificationNew", [""]),
    openModal() {
      this.showdataform = true;
    },
    openDetails(row) {
      this.$router.push(`/verification/id-card/${row.id}/detail`);
      console.log(`---rw`, row);
    },
  },
  components: {
    Table: () => import("@/components/Table"),
    Status: () => import("@/components/Status"),

    // Modal: () => import("@/components/Modal"),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Verification/index.scss";
</style>
