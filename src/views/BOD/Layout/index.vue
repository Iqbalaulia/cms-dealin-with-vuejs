<template>
  <transition>
    <div class="wrapper">
      <!-- Top navigation tutorial -->
      <!-- <TopnavTutorial /> -->

      <!-- Sidebar -->
      <keep-alive>
        <Sidebar />
      </keep-alive>

      <!-- Page content -->
      <div id="content">
        <Topnav />

        <div class="container-fluid p-4 container-content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
// import { mapState } from 'vuex';
// import { _ } from 'vue-underscore';
export default {
  name: "App",
  props: {
    noSidebar: {
      type: Boolean,
      required: false,
    },
  },
  // computed: {
  //   ...mapState({
  //     introState: (state) => state.introState,
  //   }),
  // },
  data() {
    return {
      loadingshow: false,
      showtopbar: false,
      tutorial: false,
      contentClass: "",
    };
  },
  methods: {
    toggleSidebar() {
      if (!this.noSidebar) {
        this.$store.commit("updateState", {
          showsidebar: !this.$store.state.showsidebar,
        });
      }
    },

    checkContentClass() {
      this.contentClass = "";
      if (!this.$store.state.showsidebar || this.noSidebar) {
        this.contentClass = "nosidebar ";
      }
      if (this.tutorial) {
        this.contentClass += "disabled-div";
      }
    },
  },
  components: {
    Sidebar: () => import("./Sidebar"),
    Topnav: () => import("./Topnav"),
    // TopnavTutorial: () => import('./TopnavTutorial'),
  },
  mounted() {
    // let flag = 0;
    // this.tutorial = true;

    // if (this.introState.state1.length > 0) {
    //   flag++;
    // } else {
    //   if (this.introState.state1Done) {
    //     flag++;
    //   }
    // }

    // let valIntro = _.values(this.introState.state2);
    // valIntro = _.without(valIntro, false);

    // flag += valIntro.length;

    // if (flag == 7) {
    //   this.tutorial = false;
    // }

    // let routeName = this.$route.name;
    // let containIntro = routeName.includes('Intro');
    // if (!containIntro) {
    //   if (flag < 7) {
    //     this.tutorial = true;
    //   }
    // } else {
    //   this.tutorial = false;
    // }

    // kalo mobile hilangin sidebar defaultnya
    if (window.innerWidth <= 768) {
      this.$store.commit("updateState", {
        showsidebar: false,
      });
    }

    this.checkContentClass();
  },
};
</script>
