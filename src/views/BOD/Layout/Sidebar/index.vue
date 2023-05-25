<template>
  <nav id="sidebar" :class="sidebarClass">
    <div class="sidebar-header">
      <div class="logo-ijolan">
        <img :src="require('@/assets/img/logo/Logo.png')" alt="" v-once />
      </div>
    </div>
    <ul class="list-unstyled components">
      <!-- <li
        v-for="(item, index) in menuBod.menu"
        :key="`menu_${index}`"
        :id="`menu-${item.name.toLowerCase()}`"
        :class="$route.name === item.name ? 'active' : ''"
      >
        <template>
          <router-link :to="item.link" class="body-14 col-black-2">
            <InlineSvg
              :src="require('@/assets/img/icons/menu/' + item.svg)"
              v-once
              v-if="item.svg && item.svg !== ''"
            />
            <i
              class="fas"
              :class="item.icon"
              v-if="item.icon && item.icon !== ''"
            />
            {{ item.name }}
          </router-link>
        </template>
      </li> -->
      <li :class="$route.name === `Dashboard` ? `active` : ``">
        <router-link :to="menuBod.menu[0].link" class="body-14 col-black-2">
          <InlineSvg
            :src="require('@/assets/img/icons/menu/' + menuBod.menu[0].svg)"
            v-once
            v-if="menuBod.menu[0].svg && menuBod.menu[0].svg !== ''"
          />
          <i
            class="fas"
            :class="menuBod.menu[0].icon"
            v-if="menuBod.menu[0].icon && menuBod.menu[0].icon !== ''"
          />
          {{ menuBod.menu[0].name }}
        </router-link>
      </li>
      <!-- <li :class="$route.name === `InfoEvent` ? `active` : ``">
        <router-link :to="menuBod.menu[1].link" class="body-14 col-black-2">
          <InlineSvg
            :src="require('@/assets/img/icons/menu/' + menuBod.menu[1].svg)"
            v-once
            v-if="menuBod.menu[1].svg && menuBod.menu[1].svg !== ''"
          />
          <i
            class="fas"
            :class="menuBod.menu[1].icon"
            v-if="menuBod.menu[1].icon && menuBod.menu[1].icon !== ''"
          />
          {{ menuBod.menu[1].name }}
        </router-link>
      </li>
      <li :class="$route.name === `Verification` ? `active` : ``">
        <el-collapse>
          <el-collapse-item name="1">
            <template slot="title">
              <div class="filter-icon">
                <div class="filter-icon-inner"></div>
              </div>
              <router-link :to="``" class="body-14 col-black-2 pr-0">
                <InlineSvg
                  :src="
                    require('@/assets/img/icons/menu/' + menuBod.menu[2].svg)
                  "
                  v-once
                  v-if="menuBod.menu[2].svg && menuBod.menu[2].svg !== ''"
                />
                <i
                  class="fas"
                  :class="menuBod.menu[2].icon"
                  v-if="menuBod.menu[2].icon && menuBod.menu[2].icon !== ''"
                />
                {{ menuBod.menu[2].name }}
              </router-link>
            </template>
            <template>
              <div class="ml-4">
                <router-link
                  :to="menuBod.menu[3].link"
                  class="body-14 col-black-2"
                >
                  Id Card
                </router-link>
                <router-link
                  :to="menuBod.menu[4].link"
                  class="body-14 col-black-2"
                >
                  Products
                </router-link>
              </div>
            </template>
          </el-collapse-item>
        </el-collapse>
      </li>
      <li :class="$route.name === `Users` ? `active` : ``">
        <router-link :to="menuBod.menu[5].link" class="body-14 col-black-2">
          <InlineSvg
            :src="require('@/assets/img/icons/menu/' + menuBod.menu[5].svg)"
            v-once
            v-if="menuBod.menu[5].svg && menuBod.menu[5].svg !== ''"
          />
          <i
            class="fas"
            :class="menuBod.menu[5].icon"
            v-if="menuBod.menu[5].icon && menuBod.menu[5].icon !== ''"
          />
          {{ menuBod.menu[5].name }}
        </router-link>
      </li> -->

      <!-- <li :class="$route.name === `Voucher` ? `active` : ``">
        <router-link :to="menuBod.menu[4].link" class="body-14 col-black-2">
          <InlineSvg
            :src="require('@/assets/img/icons/menu/' + menuBod.menu[4].svg)"
            v-once
            v-if="menuBod.menu[4].svg && menuBod.menu[4].svg !== ''"
          />
          <i
            class="fas"
            :class="menuBod.menu[4].icon"
            v-if="menuBod.menu[4].icon && menuBod.menu[4].icon !== ''"
          />
          {{ menuBod.menu[4].name }}
        </router-link>
      </li>
      <li :class="$route.name === `Complaint` ? `active` : ``">
        <router-link :to="menuBod.menu[4].link" class="body-14 col-black-2">
          <InlineSvg
            :src="require('@/assets/img/icons/menu/' + menuBod.menu[4].svg)"
            v-once
            v-if="menuBod.menu[4].svg && menuBod.menu[4].svg !== ''"
          />
          <i
            class="fas"
            :class="menuBod.menu[4].icon"
            v-if="menuBod.menu[4].icon && menuBod.menu[4].icon !== ''"
          />
          {{ menuBod.menu[4].name }}
        </router-link>
      </li>
      <li :class="$route.name === `Help` ? `active` : ``">
        <router-link :to="menuBod.menu[5].link" class="body-14 col-black-2">
          <InlineSvg
            :src="require('@/assets/img/icons/menu/' + menuBod.menu[5].svg)"
            v-once
            v-if="menuBod.menu[5].svg && menuBod.menu[5].svg !== ''"
          />
          <i
            class="fas"
            :class="menuBod.menu[5].icon"
            v-if="menuBod.menu[5].icon && menuBod.menu[5].icon !== ''"
          />
          {{ menuBod.menu[5].name }}
        </router-link>
      </li>

      <li :class="$route.name === `AboutApplication` ? `active` : ``">
        <router-link :to="menuBod.menu[6].link" class="body-14 col-black-2">
          <InlineSvg
            :src="require('@/assets/img/icons/menu/' + menuBod.menu[6].svg)"
            v-once
            v-if="menuBod.menu[6].svg && menuBod.menu[6].svg !== ''"
          />
          <i
            class="fas"
            :class="menuBod.menu[6].icon"
            v-if="menuBod.menu[6].icon && menuBod.menu[6].icon !== ''"
          />
          {{ menuBod.menu[6].name }}
        </router-link>
      </li>

      <li :class="$route.name === `Categories` ? `active` : ``">
        <router-link :to="menuBod.menu[7].link" class="body-14 col-black-2">
          <InlineSvg
            :src="require('@/assets/img/icons/menu/' + menuBod.menu[7].svg)"
            v-once
            v-if="menuBod.menu[7].svg && menuBod.menu[7].svg !== ''"
          />
          <i
            class="fas"
            :class="menuBod.menu[7].icon"
            v-if="menuBod.menu[7].icon && menuBod.menu[7].icon !== ''"
          />
          {{ menuBod.menu[7].name }}
        </router-link>
      </li>

      <li :class="$route.name === `Wallet` ? `active` : ``">
        <router-link :to="menuBod.menu[8].link" class="body-14 col-black-2">
          <InlineSvg
            :src="require('@/assets/img/icons/menu/' + menuBod.menu[8].svg)"
            v-once
            v-if="menuBod.menu[8].svg && menuBod.menu[8].svg !== ''"
          />
          <i
            class="fas"
            :class="menuBod.menu[8].icon"
            v-if="menuBod.menu[8].icon && menuBod.menu[8].icon !== ''"
          />
          {{ menuBod.menu[8].name }}
        </router-link>
      </li>

      <br />
      <li :class="$route.name === `Settings` ? `active` : ``">
        <div class="dropdown">
          <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">
            <InlineSvg
              :src="require('@/assets/img/icons/menu/' + menuBod.menu[9].svg)"
              v-once
              v-if="menuBod.menu[9].svg && menuBod.menu[9].svg !== ''"
            />
            {{ menuBod.menu[9].name }}</a
          >
          <div class="dropdown-menu">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Another action</a>
          </div>
        </div>
      </li> -->
    </ul>
  </nav>
</template>
<script>
import { mapState } from "vuex";
// import ListMenu from '@/router/menu';
import InlineSvg from "vue-inline-svg";
// import { _ } from 'vue-underscore';
export default {
  // props: ['showsidebar', 'tutorial'],
  name: "Sidebar",

  data() {
    return {
      sidebarClass: "",
      readyLoadMenu: false,
      menu: [],
    };
  },
  computed: {
    ...mapState({
      menuBod: (state) => state.menuBod.data,
    }),
  },
  components: {
    InlineSvg,
  },
  methods: {},
  async mounted() {
    // this.menu = this.menu.menu;
    // this.readyLoadMenu = true;
  },
  watch: {
    // showsidebar: function() {
    //   this.checkSidebarStatus();
    // },
    // tutorial: function() {
    //   this.checkSidebarStatus();
    // },
  },
};
</script>
<style lang="scss">
.el-collapse-item__header {
  border-bottom: 0 !important;
}
.el-collapse-item__content {
  padding-bottom: 0 !important;
}
.el-collapse {
  border-bottom: 0 !important;
  border-top: 0 !important;
}
</style>
