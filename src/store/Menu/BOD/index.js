// import { ApiPutRequest, ApiPostMultipart } from "@/utils/Api";
// import { Message } from "element-ui";

const state = {
  data: {
    menu: [
      {
        name: "Dashboard",
        link: "/bod/dashboard",
        name_path: "Dashboard",
        svg: "Filled.svg",
        icon: false,
        active: true,
      },
      // {
      //   name: "Info & Event",
      //   link: "/info-event",
      //   name_path: "InfoEvent",
      //   svg: "gift.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Verification",
      //   link: "/",
      //   name_path: "Verification",
      //   svg: "verification.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "VerificationIdCard",
      //   label: "Id Card",
      //   link: "/verification/id-card",
      //   type: "menu",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "VerificationProduct",
      //   label: "Product",
      //   link: "/verification/product",
      //   type: "menu",
      //   icon: false,
      //   active: true,
      // },

      // {
      //   name: "Users",
      //   link: "/users",
      //   name_path: "Users",
      //   svg: "users.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Voucher",
      //   link: "/voucher",
      //   name_path: "Voucher",
      //   svg: "tag.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Complaint",
      //   link: "/complaint",
      //   name_path: "Complaint",
      //   svg: "thumbs-down.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Help",
      //   link: "/help",
      //   name_path: "Help",
      //   svg: "headphones.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "About Application",
      //   link: "/about-applicaiton",
      //   name_path: "AboutApplication",
      //   svg: "info.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Categories",
      //   link: "/categories",
      //   name_path: "Categories",
      //   svg: "sliders.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Wallet",
      //   link: "/wallet",
      //   name_path: "Wallet",
      //   svg: "credit-card.svg",
      //   icon: false,
      //   active: true,
      // },

      // {
      //   name: "Settings",
      //   link: "/settings",
      //   name_path: "Settings",
      //   svg: "Settings.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Analytics",
      //   link: "/analisa-global",
      //   name_path: "Analytics",
      //   svg: "analisa.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Komentar",
      //   link: "/komentar",
      //   name_path: "Komentar",
      //   svg: "komentar.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Pengeluaran",
      //   link: "/pengeluaran",
      //   name_path: "Pengeluaran",
      //   svg: "finance.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Pendapatan",
      //   link: "/pendapatan",
      //   name_path: "Pendapatan",
      //   svg: "finance.svg",
      //   icon: false,
      //   active: true,
      // },
      // {
      //   name: "Feedback User",
      //   link: "/feedback-user",
      //   name_path: "FeedbackUser",
      //   svg: "analisa.svg",
      //   icon: false,
      //   active: true,
      // },
    ],
  },
};

const mutations = {
  changeMenuBod(state, payload) {
    state.data = Object.assign({}, state.data, payload);
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
