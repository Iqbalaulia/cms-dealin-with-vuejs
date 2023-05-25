<template>
  <div>
    <nav
      class="topbar_dealin navbar navbar-expand-lg navbar-light mb-3 topbar fixed-top bg-light"
    >
      <div class="container-fluid p-0">
        <button
          type="button"
          class="btn-logo-onklas"
          @click="toggleSidebar"
        ></button>
        <div class="ml-auto d-flex align-items-center user-info">
          <div class="mr-2 col-blue-1 body-14 user-name">
            <img
              :src="require('@/assets/img/icons/menu/notification.svg')"
              alt=""
            />
          </div>
          <div class="col-black-2 body-14">
            <b-nav pills class="user-menu">
              <img
                :src="require('@/assets/img/icons/menu/avatar.svg')"
                alt=""
                v-once
                class="mr-2"
              />
              <div>
                <span class="name_user">{{ name.slice(0, 20) + `...` }}</span>
                <br />
                <span class="name_role">BOD</span>
              </div>
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                toggle-class="nav-link-custom"
                right
              >
                <b-dropdown-item @click="$router.push('/profile')">
                  <i class="fas fa-user-circle mr-1" /> Profil
                </b-dropdown-item>
                <b-dropdown-item @click="logoutPage()"
                  ><i class="fas fa-arrow-right mr-1" />Keluar</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-nav>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["toggleSidebar", "tutorial"],
  name: "TopNav",
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  data() {
    return {
      name: "Muhammad iqbal aulia rafi",
      showModal: false,
    };
  },
  methods: {
    async logoutPage() {
      await this.$store.dispatch("logoutSystem");
      window.location.href = "/";
    },
  },
  components: {},
};
</script>
