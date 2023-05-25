<template>
  <Layout>
    <h5 class="header_name">{{ $route.meta.title }}</h5>
    <div class="row add_event">
      <div class="col-md-12">
        <div class="card card_borderles">
          <div class="card-header mb-3 bg-white p-0 border-0">
            <div class="d-flex justify-content-center">
              <h5 class="header_name">Events Plan</h5>
              <div class="ml-auto">
                <el-button class="btn btn_cancel border"> Cancel </el-button>
                <el-button class="btn btn_warning" @click="openModal()">
                  Publish Event
                </el-button>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="row">
              <div class="col-md-4">
                <div class="add_event_left">
                  <div class="form-group">
                    <label for="formGroupExampleInput"
                      >Banner Images
                      <img
                        :src="require('@/assets/img/icons/info-circle.svg')"
                        alt=""
                        v-once
                    /></label>
                    <el-upload
                      class="upload-demo"
                      drag
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList"
                    >
                      <i class="el-icon-picture-outline"></i>
                      <div class="el-upload__text">
                        Drop your images here or <em>click to upload</em>
                      </div>
                      <!-- <div class="el-upload__tip" slot="tip">
                        jpg/png files with a size less than 500kb
                      </div> -->
                    </el-upload>
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput">Start Date</label>
                    <br />
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="Pick a day"
                      class="w-100"
                    >
                    </el-date-picker>
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput">End Date</label>
                    <br />
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="Pick a day"
                      class="w-100"
                    >
                    </el-date-picker>
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput">Visibility</label>
                    <p>
                      You can change the visibility of this event for the
                      customers.
                    </p>
                    <div class="visible d-flex">
                      <div class="content">
                        <img
                          :src="require('@/assets/img/icons/eye.svg')"
                          alt=""
                          v-once
                        />
                        <span class="ml-1">Visible</span>
                      </div>
                      <div class="tools ml-auto">
                        <SlideSwitch :value="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="add_event_right">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Event Name</label>
                    <el-input placeholder="Please input"></el-input>
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput">Title</label>
                    <el-input placeholder="Please input"></el-input>
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput">Start Date</label>
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 15, maxRows: 15 }"
                      placeholder="Please input"
                    >
                    </el-input>
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
                  Save
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
  name: "Home",

  computed: {
    ...mapState({
      dashboard: (state) => state.dashboard.data,
    }),
  },
  data() {
    return {
      fileList: {},
      showdataform: false,
    };
  },
  methods: {
    ...mapActions("dashboard", [""]),
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

    openModal() {
      this.showdataform = true;
    },
  },
  components: {
    Layout: () => import("@/views/ADMIN/Layout"),
    SlideSwitch: () => import("@/components/SlideSwitch"),
    Modal: () => import("@/components/Modal"),
  },
};
</script>
<style>
.el-upload-dragger {
  width: 100% !important;
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/Event/index.scss";
</style>
