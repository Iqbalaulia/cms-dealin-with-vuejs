<template>
  <Layout>
    <div class="detail_verif">
      <router-link
        to="/verification/id-card"
        class="col-yellow-1 back_to font_poppins"
      >
        <i class="el-icon-arrow-left"></i> Back to Verification List
      </router-link>
      <h5 class="header_name mb-4 mt-3">Detail ID Card</h5>
      <div class="card card_borderles">
        <div class="card-header bg-white p-0">
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex">
                <div class="d-flex align-items-center">
                  <label for="" class="detail_verif_id"> ID 0001 </label>
                  <label class="font_poppins ml-2 btn_decline">Decline</label>
                </div>
                <div class="ml-auto">
                  <label for="" class="detail_verif_date">
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
                  <div class="col-md-8">
                    <div class="image_border">
                      <img
                        :src="require('@/assets/img/content/KTP.png')"
                        alt=""
                        v-once
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="image_border">
                      <img
                        :src="require('@/assets/img/content/Image.png')"
                        alt=""
                        v-once
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="row form_data">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="formGroupExampleInput">NIK</label>
                    <el-input
                      disabled
                      placeholder="Please Input"
                      v-model="input1"
                    >
                    </el-input>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Date Birth</label>
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
                    <label for="formGroupExampleInput">Address</label>
                    <el-input placeholder="Please Input" v-model="input1">
                    </el-input>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="formGroupExampleInput">District</label>
                    <el-input placeholder="Please Input" v-model="input1">
                    </el-input>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="formGroupExampleInput">City</label>
                    <el-input placeholder="Please Input" v-model="input1">
                    </el-input>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="formGroupExampleInput">State</label>
                    <el-input placeholder="Please Input" v-model="input1">
                    </el-input>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Status</label>
                    <el-select placeholder="Select">
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
        </div>
      </div>
      <div class="card card_borderles">
        <div class="row">
          <div class="col-md-12">
            <div class="card-body p-0">
              <div class="row form_data">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="formGroupExampleInput">The Reason</label>
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 4, maxRows: 6 }"
                      placeholder="Please input"
                      class=""
                      v-model="textarea"
                    >
                    </el-input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      textarea:'Foto KTP masih blur dan foto selfie masih blur. Silahkan ulangi kembali foto KTP dan foto selfie Anda. Jika ada pertanyaan lebih lanjut, silahkan hubungi cs@ijolan.com via email',
      showdataform: false,
      declineform: false,
    };
  },
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
      this.$router.push(`/verification/${row.id}/detail`);
      console.log(`---rw`, row);
    },
  },
  components: {
    Layout: () => import("@/views/ADMIN/Layout"),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Verification/index.scss";
</style>
