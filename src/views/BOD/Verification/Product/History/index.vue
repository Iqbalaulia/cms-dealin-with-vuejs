<template>
  <div class="new_product">
    <Table
      ref="table"
      :tableData="verificationProductHistory.items"
      :columns="verificationProductHistory.columns_data"
      :listeners="listeners"
    >
      <span slot="id" slot-scope="{ row }"> {{ row.id }} </span>
      <span slot="date" slot-scope="{ row }">
        {{ row.date | formatDateStandart }}
      </span>
      <span slot="photo">
        <img
          class="new_product_photo"
          :src="require('@/assets/img/content/product.png')"
          alt=""
          v-once
        />
      </span>
      <span slot="name" slot-scope="{ row }"> {{ row.name }} </span>
      <span slot="weight" slot-scope="{ row }"> {{ row.weight }} gram </span>
      <span
        slot="label"
        slot-scope="{ row }"
        :class="
          row.label === `Auction` ? `new_product_auction` : `new_product_barter`
        "
      >
        {{ row.label }}
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
      verificationProductHistory: (state) =>
        state.verificationProductHistory.data,
    }),
    listeners() {
      return {
        ...this.$listeners,
        ["row-click"]: this.openDetails,
      };
    },
  },
  methods: {
    ...mapActions("verificationProductHistory", [""]),
    openModal() {
      this.showdataform = true;
    },
    openDetails(row) {
      this.$router.push(`/verification/product/${row.id}/history`);
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
