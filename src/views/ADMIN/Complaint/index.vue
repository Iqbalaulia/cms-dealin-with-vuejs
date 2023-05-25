<template>
  <Layout>
    <h5 class="header_name">{{ $route.meta.title }}</h5>
     <div class="row">
      <div class="col-md-12">
        <div class="card card_borderles">
          <h5 class="header_name">{{ $route.meta.title }}</h5>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
export default {
  name: "Home",
  components: {
    Layout: () => import("@/views/ADMIN/Layout"),
  },
};
</script>
