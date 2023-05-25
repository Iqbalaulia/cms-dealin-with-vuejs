<template>
  <Layout>
    <div class="d-flex">
      <h5 class="header_name">{{ $route.meta.title }}</h5>
      <el-date-picker
        type="daterange"
        range-separator="-"
        start-placeholder="Start date"
        end-placeholder="End date"
        class="ml-auto"
      >
      </el-date-picker>
    </div>

    <div class="content">
      <div class="content_bod_one">
        <div class="card mt-4 card_borderles">
          <div class="card-body p-0">
            <div class="header_card mb-2">
              <div class="row">
                <div class="col-md-6">
                  <label for=""> Ijolan Revenue Preview </label>
                </div>
                <div class="col-md-6 d-flex">
                  <el-button size="medium" class="ml-auto btn-blue-default">
                    <i class="fas fa-download mr-2"></i>
                    Download Report</el-button
                  >
                </div>
                <div class="col-md-12">
                  <div>
                    <span>Show overview</span>
                    <span class="ml-2 font-weight-bold text-black"
                      >01 Desember 2020 - 18 Desember 2021</span
                    >
                    <span class="ml-2 see_all"
                      >Detailed Stats
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- content -->

            <div class="content">
              <Tab
                :items="[
                  {
                    name: 'Overview',
                    active: tabActive === 'Overview' ? true : false,
                  },
                  {
                    name: 'Barter',
                    active: tabActive === 'Barter' ? true : false,
                  },
                  {
                    name: 'Auction/Bid',
                    active: tabActive === 'Auction/Bid' ? true : false,
                  },
                  {
                    name: 'Buy/Sell',
                    active: tabActive === 'Buy/Sell' ? true : false,
                  },
                ]"
                :clickItem="(activeTab) => (tabActive = activeTab)"
              />

              <div class="overview_content" v-if="tabActive === `Overview`">
                <v-chart class="chart" autoresize :option="option" />

                <div class="box_information">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="income">
                        <div class="money d-flex">
                          <span>Rp 12.500.000</span>
                          <span class="ml-auto">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div class="information d-flex">
                          <span>Income</span>
                          <div class="chart_info">
                            <img
                              class="ml-auto"
                              :src="
                                require('@/assets/img/icons/trending_blue.svg')
                              "
                              alt=""
                              v-once
                            />
                            <span class="ml-2">7.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="expense">
                        <div class="money d-flex">
                          <span>Rp 12.500.000</span>
                          <span class="ml-auto">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div class="information d-flex">
                          <span>Expense</span>
                          <div class="chart_info">
                            <img
                              class="ml-auto"
                              :src="
                                require('@/assets/img/icons/trending_red.svg')
                              "
                              alt=""
                              v-once
                            />
                            <span class="ml-2">7.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="margin">
                        <div class="money d-flex">
                          <span>Rp 12.500.000</span>
                          <span class="ml-auto">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div class="information d-flex">
                          <span>Margin</span>
                          <div class="chart_info">
                            <img
                              class="ml-auto"
                              :src="
                                require('@/assets/img/icons/trending_green.svg')
                              "
                              alt=""
                              v-once
                            />
                            <span class="ml-2">7.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="barter_content" v-if="tabActive === `Barter`"></div>
              <div class="bid_content" v-if="tabActive === `Auction/Bid`"></div>
              <div class="buy_content" v-if="tabActive === `Buy/Sell`"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="content_bod_two">
        <div class="row">
          <div class="col-md-7">
            <div class="card mt-4 card_borderles">
              <div class="card-body p-0">
                <div class="header_card mb-2">
                  <div class="row">
                    <div class="col-md-6">
                      <label for=""> Total Users </label>
                    </div>
                    <div class="col-md-6 d-flex">
                      <span class="ml-auto"
                        >See Detail Users
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="content_users">
                  <v-chart
                    class="chartUsers p-0"
                    autoresize
                    :option="optionUsers"
                  />

                  <span class="information">
                    Minim dolor in amet nulla laboris enim dolore consequatt.
                    Minim dolor in amet nulla laboris enim dolore consequatt.
                  </span>
                </div>
              </div>
            </div>
            <div class="content_informasi_users">
              <div class="users">
                <label for=""> Banned Users </label>
                <br />
                <span>Des 2020 - May 2021</span>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card mt-4 card_borderles">
              <div class="card-body p-0">
                <div class="header_card d-flex mb-2">
                  <label for=""> Transaction </label>
                </div>
                <v-chart
                  class="chart p-0"
                  autoresize
                  :option="optionTransaction"
                />
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
      tabActive: "Overview",
      showdataform: false,
      value: 4,
      option: {
        tooltip: {
          trigger: "axis",
        },
        color: ["#00C6CD", "#FF8008"],
        legend: {
          data: ["Income", "Expense"],
          bottom: "bottom",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "das"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Income",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Expense",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      },

      optionUsers: {
        tooltip: {
          trigger: "axis",
        },
        color: ["#0089ED", "#E1057C"],
        legend: {
          data: ["Income", "Expense"],
          top: "top",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "das"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Income",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true,
          },
          {
            name: "Expense",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
            smooth: true,
          },
        ],
      },

      optionTransaction: {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Walnut Brownie", 72.4, 53.9, 39.1],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
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
    Layout: () => import("@/views/BOD/Layout"),
    Tab: () => import("@/components/Tab"),
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
  height: 400px;
  width: 100%;
}

.chartUsers {
  height: 300px;
  width: 100%;
}
</style>
