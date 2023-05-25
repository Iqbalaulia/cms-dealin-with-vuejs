<template>
  <Layout>
    <div class="detail_product">
      <router-link to="/verification" class="col-yellow-1 back_to font_poppins">
        <i class="el-icon-arrow-left"></i> Back to Verification List
      </router-link>
      <h5 class="header_name mb-4 mt-3">Detail Product</h5>
      <div class="card card_borderles">
        <div class="card-header bg-white p-0">
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex">
                <div class="">
                  <label for="" class="detail_product_id"> ID 0001 </label>
                </div>
                <div class="ml-auto">
                  <label for="" class="detail_product_date">
                    21 Nov 2021 at 10:00:00
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body pl-0 pr-0">
          <div class="row">
            <div class="col-md-7">
              <div class="image_identity">
                <label for="">Attachment</label>

                <div class="row">
                  <div class="col-md-6">
                    <div class="image_border">
                      <img
                        :src="require('@/assets/img/content/product.png')"
                        alt=""
                        v-once
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="image_border_product">
                          <img
                            :src="require('@/assets/img/content/product.png')"
                            alt=""
                            class="image_product"
                            v-once
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="image_border_product">
                          <img
                            :src="require('@/assets/img/content/product.png')"
                            alt=""
                            class="image_product"
                            v-once
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="image_border_product">
                          <img
                            :src="require('@/assets/img/content/product.png')"
                            alt=""
                            class="image_product"
                            v-once
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="image_border_product">
                          <img
                            :src="require('@/assets/img/content/product.png')"
                            alt=""
                            class="image_product"
                            v-once
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="image_border_product">
                          <img
                            :src="require('@/assets/img/content/product.png')"
                            alt=""
                            class="image_product"
                            v-once
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="image_border_product">
                          <img
                            :src="require('@/assets/img/content/product.png')"
                            alt=""
                            class="image_product"
                            v-once
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="row form_data">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <el-input
                      disabled
                      placeholder="Please Input"
                      v-model="input1"
                    >
                    </el-input>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Category</label>
                    <el-input placeholder="Please Input" v-model="input1">
                    </el-input>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Weight</label>
                    <el-input placeholder="Please Input" v-model="input1">
                    </el-input>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Label</label>
                    <el-input placeholder="Please Input" v-model="input1">
                    </el-input>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Description</label>
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 6, maxRows: 8 }"
                      placeholder="Please input"
                    >
                    </el-input>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="d-flex">
                    <div class="ml-auto">
                      <el-button class="btn btn_cancel btn-light border">
                        Cancel
                      </el-button>
                      <el-button
                        class="btn btn-warning font-weight-bold btn_primary"
                      >
                        Update
                      </el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex">
                <div class="p-2 ml-auto mr-auto">
                  <div class="approved">
                    <el-button
                      icon="el-icon-check"
                      @click="showdataform = true"
                      size="medium"
                      class="btn btn-success"
                    >
                      Approve
                    </el-button>
                    <el-button
                      @click="declineform = true"
                      icon="el-icon-close"
                      size="medium"
                      class="btn btn-danger"
                    >
                      Decline
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title=""
        :show="showdataform"
        width="40%"
        :onClose="() => (showdataform = false)"
      >
        <div class="text-center">
          <p class="modal_title font-weight-bold">Update Verification?</p>
          <p class="modal_information">
            Pastikan semua field verification yang <br />
            akan kamu unggah sudah terisi ya,
          </p>
          <img
            :src="require('@/assets/img/content/check_update.png')"
            alt=""
            v-once
          />
        </div>
        <br />
        <div class="row modal_button">
          <div class="col-md-12">
            <div class="d-flex">
              <div class="ml-auto mx-auto">
                <el-button
                  @click="showdataform = false"
                  size="medium"
                  class="btn btn-light border pl-4 pr-4 button_custome"
                >
                  Cancel
                </el-button>
                <el-button
                  size="medium"
                  class="btn btn-warning pl-4 pr-4 button_custome font-weight-bold"
                >
                  Update
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        title=""
        :show="declineform"
        width="30%"
        :onClose="() => (declineform = false)"
      >
        <div class="text-center">
          <p class="modal_title font-weight-bold">Explanation</p>
          <p class="modal_information">Jelaskan alasan ditolak?</p>
          <el-input type="textarea" :rows="4" placeholder="Please input">
          </el-input>
        </div>
        <br />
        <div class="row modal_button">
          <div class="col-md-12">
            <div class="d-flex">
              <div class="ml-auto mx-auto">
                <el-button
                  @click="declineform = false"
                  size="medium"
                  class="btn btn-light border pl-4 pr-4 button_custome"
                >
                  Cancel
                </el-button>
                <el-button
                  size="medium"
                  class="btn btn-danger pl-4 pr-4 button_custome font-weight-bold"
                >
                  Decline
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </Layout>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NewVerif",
  data() {
    return {
      options: [
        {
          value: "Single",
          label: "Single",
        },
      ],
      showdataform: false,
      declineform: false,
    };
  },
  computed: {
    ...mapState({
      verificationProductNew: (state) => state.verificationProductNew.data,
    }),
    listeners() {
      return {
        ...this.$listeners,
        ["row-click"]: this.openDetails,
      };
    },
  },
  methods: {
    ...mapActions("verificationProductNew", [""]),
    openModal() {
      this.showdataform = true;
    },
    openDetails(row) {
      this.$router.push(`/verification/${row.id}/detail`);
      console.log(`---rw`, row);
    },
  },
  components: {
    Layout: () => import("@/views/ADMIN/Layout"),
    Modal: () => import("@/components/Modal"),

    // Modal: () => import("@/components/Modal"),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Verification/index.scss";
</style>
