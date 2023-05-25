<template>
  <Layout>
    <h5 class="header_name">Product {{ $route.meta.title }}</h5>
    <div class="row">
      <div class="col-md-12">
        <div class="card card_borderles">
          <FilterVerif />
        </div>
        <div class="card card_borderles">
          <div class="card-body p-0">
            <Tab
              :items="[
                {
                  name: 'New',
                  active: tabActive === 'New' ? true : false,
                },
                {
                  name: 'History',
                  active: tabActive === 'History' ? true : false,
                },
              ]"
              :clickItem="(activeTab) => (tabActive = activeTab)"
            />

            <New class="mt-2" v-if="tabActive === 'New'" />
            <History class="mt-2" v-if="tabActive === 'History'" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      tabActive: "New",
    };
  },
  components: {
    Layout: () => import("@/views/ADMIN/Layout"),
    Tab: () => import("@/components/Tab"),
    New: () => import("./New"),
    History: () => import("./History"),
    FilterVerif: () => import("./Filter"),
  },
};
</script>
