<template>
  <Layout>
    <h5 class="header_name">{{ $route.meta.title }}</h5>

    <div class="content">
      <div class="content_section_one">
        <div class="row">
          <div class="col-md-6">
            <div class="content_section_one_idcard">
              <div class="card mt-4 card_borderles">
                <div class="card-body p-0">
                  <div class="header_card d-flex mb-2">
                    <label for=""> ID Card Verification </label>
                    <span class="ml-auto"
                      >See All Verifications
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                  </div>
                  <span class="description">
                    Minim dolor in amet nulla laboris enim dolore consequatt.
                    Minim dolor in amet nulla laboris enim dolore consequatt.
                  </span>
                  <div class="status_card mt-2">
                    <div class="d-flex justify-content-around">
                      <div class="pending">
                        <h2 class="number p-0 text-center">1</h2>
                        <span for="">Pending</span>
                      </div>
                      <div class="decline">
                        <h2 class="number text-center">2</h2>
                        <span for="">Decline</span>
                      </div>
                      <div class="approved">
                        <h2 class="number text-center">149</h2>
                        <span for="">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content_section_one_product">
              <div class="card mt-4 card_borderles">
                <div class="card-body p-0">
                  <div class="header_card d-flex mb-2">
                    <label for=""> Product Verification </label>
                    <span class="ml-auto"
                      >See All Verifications
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                  </div>
                  <span class="description">
                    Minim dolor in amet nulla laboris enim dolore consequatt.
                    Minim dolor in amet nulla laboris enim dolore consequatt.
                  </span>
                  <div class="status_card mt-2">
                    <div class="d-flex justify-content-around">
                      <div class="pending">
                        <h2 class="number p-0 text-center">1</h2>
                        <span for="">Pending</span>
                      </div>
                      <div class="decline">
                        <h2 class="number text-center">2</h2>
                        <span for="">Decline</span>
                      </div>
                      <div class="approved">
                        <h2 class="number text-center">149</h2>
                        <span for="">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content_section_two">
        <div class="row">
          <div class="col-md-6">
            <div class="content_section_two_rating">
              <div class="card mt-4 card_borderles">
                <div class="card-body p-0">
                  <div class="header_card d-flex mb-2">
                    <label for=""> Application Rating </label>
                    <img
                      class="ml-auto"
                      :src="require('@/assets/img/icons/pie-chart.png')"
                      alt=""
                      v-once
                    />
                  </div>

                  <div class="content">
                    <Tab
                      :items="[
                        {
                          name: 'iOS',
                          active: tabActive === 'iOS' ? true : false,
                        },
                        {
                          name: 'Android',
                          active: tabActive === 'Android' ? true : false,
                        },
                      ]"
                      :clickItem="(activeTab) => (tabActive = activeTab)"
                    />

                    <div class="ios_content mt-3" v-if="tabActive === `iOS`">
                      <label for="">Reviews</label>

                      <div class="ios_content_statistics d-flex">
                        <div class="number">
                          <p class="mb-0 number_statistics">2120</p>
                          <label class="number_text">Total Reviews</label>
                        </div>
                        <div class="rating ml-auto">
                          <el-rate class="rate" v-model="value"></el-rate>
                          <label class="rating_number">{{ value }} / 5</label>
                        </div>
                      </div>

                      <div class="ios_content_chart">
                        <div class="row">
                          <div class="col-md-6">
                            <v-chart
                              class="chart"
                              autoresize
                              :option="option"
                            />
                          </div>
                          <div class="col-md-6 pt-5">
                            <div class="list_rate d-flex align-items-center">
                              <div
                                class="rate_information d-flex align-items-center"
                              >
                                <div
                                  class="color"
                                  style="background: #0085ad"
                                ></div>
                                <span>5 stars</span>
                              </div>
                              <div class="rate_number ml-auto">755</div>
                            </div>

                            <div class="list_rate d-flex align-items-center">
                              <div
                                class="rate_information d-flex align-items-center"
                              >
                                <div
                                  class="color"
                                  style="background: #15a3ce"
                                ></div>
                                <span>4 stars</span>
                              </div>
                              <div class="rate_number ml-auto">755</div>
                            </div>

                            <div class="list_rate d-flex align-items-center">
                              <div
                                class="rate_information d-flex align-items-center"
                              >
                                <div
                                  class="color"
                                  style="background: #4ac1e6"
                                ></div>
                                <span>3 stars</span>
                              </div>
                              <div class="rate_number ml-auto">755</div>
                            </div>

                            <div class="list_rate d-flex align-items-center">
                              <div
                                class="rate_information d-flex align-items-center"
                              >
                                <div
                                  class="color"
                                  style="background: #92dbf1"
                                ></div>
                                <span>2 stars</span>
                              </div>
                              <div class="rate_number ml-auto">755</div>
                            </div>

                            <div class="list_rate d-flex align-items-center">
                              <div
                                class="rate_information d-flex align-items-center"
                              >
                                <div
                                  class="color"
                                  style="background: #f2f9fb"
                                ></div>
                                <span>1 stars</span>
                              </div>
                              <div class="rate_number ml-auto">755</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="ios_content_footer d-flex">
                        <span class="ml-auto"
                          >See All Verifications
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content_section_two_reviews">
              <div class="card mt-4 card_borderles">
                <div class="card-body p-0">
                  <div class="header_card d-flex mb-2">
                    <label for=""> User Reviews </label>
                    <span class="ml-auto"
                      >See All Verifications
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                  </div>
                  <label for="" class="last_rate">Last Ratings</label>
                  <div class="ratings">
                    <div class="ratings_header d-flex">
                      <el-rate
                        v-model="value"
                        class="rate"
                        disabled
                        text-color="#ff9900"
                      >
                      </el-rate>
                      <span class="ml-auto">2 days ago</span>
                    </div>
                    <div class="ratings_content mt-2">
                      <p class="mb-0">
                        Aplikasi ini sangat membantu saya ketika ingin menukar
                        barang-barang yang tidak terpakai. Selain dapat
                        menukarkan barang namun juga ada fitur auction.
                      </p>
                      <span>By Iqbal Aulia</span>
                    </div>
                  </div>

                  <div class="ratings">
                    <div class="ratings_header d-flex">
                      <el-rate
                        v-model="value"
                        class="rate"
                        disabled
                        text-color="#ff9900"
                      >
                      </el-rate>
                      <span class="ml-auto">2 days ago</span>
                    </div>
                    <div class="ratings_content mt-2">
                      <p class="mb-0">
                        Aplikasi ini sangat membantu saya ketika ingin menukar
                        barang-barang yang tidak terpakai. Selain dapat
                        menukarkan barang namun juga ada fitur auction.
                      </p>
                      <span>By Iqbal Aulia</span>
                    </div>
                  </div>

                  <div class="ratings">
                    <div class="ratings_header d-flex">
                      <el-rate
                        v-model="value"
                        class="rate"
                        disabled
                        text-color="#ff9900"
                      >
                      </el-rate>
                      <span class="ml-auto">2 days ago</span>
                    </div>
                    <div class="ratings_content mt-2">
                      <p class="mb-0">
                        Aplikasi ini sangat membantu saya ketika ingin menukar
                        barang-barang yang tidak terpakai. Selain dapat
                        menukarkan barang namun juga ada fitur auction.
                      </p>
                      <span>By Iqbal Aulia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content_section_three">
        <div class="row">
          <div class="col-md-12">
            <div class="card mt-4 card_borderles">
              <div class="card-body p-0">
                <div class="header_card d-flex mb-2">
                  <label for=""> User Reviews </label>
                  <el-button size="medium" class="ml-auto btn-white-default">
                    <i class="fas fa-download mr-2"></i>
                    Export</el-button
                  >
                </div>

                <div class="filter mt-3 mb-3">
                  <FilterDate />
                </div>

                <TableSelect
                  class="mt-4"
                  ref="table"
                  :tableData="dashboard.items"
                  :columns="dashboard.columns_data"
                >
                  <div slot="status" slot-scope="{ row }">
                    <el-button @click="row" class="btn btn-danger">
                      <i class="el-icon-close"></i>
                    </el-button>
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
                          Reply
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
                        
                      </div>
                      <img
                        :src="require('@/assets/img/icons/more.svg')"
                        alt=""
                        v-once
                      />
                    </el-tooltip>
                  </div>
                </TableSelect>

                <div class="row mt-2">
                  <div class="col-md-12">
                    <div class="d-flex content_footer">
                      <div class="ml-auto">
                        See All Verifications
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </div>
                    </div>
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
  name: "Home",
  data() {
    return {
      tabActive: "iOS",
      showdataform: false,
      value: 4,
      option: {
        textStyle: {
          fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
        },
        width: 250,
        height: 250,
        title: {
          text: "Reviews by rating",
          left: "left",
          color: "#000",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        labelLine: {
          show: false,
        },
        avoidLabelOverlap: false,
        color: ["#0085AD", "#15A3CE", "#4AC1E5", "#92DBF1", "#F2F9FB"],
        // legend: {
        //   orient: "vertical",
        //   right: 10,
        //   top: "bottom",
        //   data: [
        //     "Direct",
        //     "Email",
        //     "Ad Networks",
        //     "Video Ads",
        //     "Search Engines",
        //   ],
        // },
        series: [
          {
            name: "",
            type: "pie",
            radius: "60%",
            center: ["50%", "60%"],
            data: [
              { value: 400, name: "Direct" },
              { value: 310, name: "Email" },
              { value: 234, name: "Ad Networks" },
              { value: 135, name: "Video Ads" },
              { value: 100, name: "Search Engines" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
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
    Layout: () => import("@/views/ADMIN/Layout"),
    Tab: () => import("@/components/Tab"),
    FilterDate: () => import(`./Filter`),
    TableSelect: () => import("../../../components/Table/TableSelection.vue"),
  },
};
</script>
<style lang="css">
.el-rate__icon {
  font-size: 30px !important;
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/Dashboard/index.scss";
</style>
<style scoped>
.chart {
  height: 250px;
  width: 100%;
}
</style>
