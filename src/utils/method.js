import Vue from "vue";
// import axios from 'axios'
import numeral from "numeral";
import moment from "moment";
import { _ } from "vue-underscore";

let loadingInstance;
const globalMethods = Vue.mixin({
  methods: {
    getTranslateRole(roleName) {
      if (!roleName) return "";

      let translate = {
        "Head Master": "Kepala Sekolah",
        "Vice Principal": "Wakil Kepala Sekolah",
        Cooperative: "Koperasi",
        "School Finance": "Keuangan",
        "School Admin": "Admin",
        Teacher: "Guru",
        Conseuling: "Konseling",
        Librarian: "Pustakawan",
        SuperAdmin: "Super Admin",
        Student: "Pelajar",
      };

      if (translate[roleName]) {
        return translate[roleName];
      } else {
        return roleName;
      }
    },
    getFormatRole(role) {
      const dataRole = [];
      if (role) {
        console.log(`---role`, role);
        role.map((item) => {
          dataRole.push({
            label: item.name,
            type: "default",
          });
        });
      }

      return dataRole;
    },
    getCurrentDate() {
      return moment().locale("id").format("dddd, DD MMMM YYYY");
    },
    getFormatDateCard(date) {
      if (!date) return "";
      return moment(date).locale("id").format(", DD MMMM YYYY");
    },
    getCustomToolbarEditor() {
      return [
        [{ header: [false, 1, 2] }],
        ["bold", "italic", "underline"],
        [
          { align: "" },
          { align: "center" },
          { align: "justify" },
          { align: "right" },
        ],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      ];
    },
    getCustomToolbarCard() {
      return [
        ["bold", "italic", "underline"],
        [
          { align: "" },
          { align: "center" },
          { align: "justify" },
          { align: "right" },
        ],
        [{ list: "ordered" }, { list: "bullet" }],
      ];
    },
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    showNotif(type = "success", message = "") {
      this.$message({
        message: message,
        type: type,
      });
    },
    showLoading(text = "Loading", target = false) {
      loadingInstance = {};
      let options = {
        text: text,
        lock: true,
      };

      if (target) {
        options["target"] = target;
      }

      loadingInstance = this.$loading(options);
    },
    closeLoading() {
      setTimeout(() => {
        loadingInstance.close();
      }, 1000);
    },
    openModal(modalName) {
      this.$store.state.showModal = true;
      return this.$bvModal.show(modalName);
    },
    closeModal(modalName) {
      this.$store.state.showModal = false;
      return this.$bvModal.hide(modalName);
    },
    getDateMonthYear(
      year = moment().format("YYYY"),
      month = moment().format("MM")
    ) {
      const startDate = moment([year, month - 1, "01"]).format("YYYY-MM-DD");
      const daysInMonth = moment(startDate).daysInMonth();
      const dataJsonDate = [];

      for (let index = 1; index <= daysInMonth; index++) {
        dataJsonDate.push({
          days: moment([year, month - 1, index]).format("ddd"),
          date: moment([year, month - 1, index]).format("DD"),
          month: moment([year, month - 1, index]).format("MM"),
          year: moment([year, month - 1, index]).format("YYYY"),
        });
      }

      return dataJsonDate;
    },
    getNameFile(urlFile) {
      if (urlFile) {
        const nameFile = urlFile.split("/");
        return nameFile.length > 0 && nameFile
          ? nameFile[nameFile.length - 1]
          : "";
      } else {
        return "";
      }
    },
    async verificationTokenEmail(token) {
      let self = this;
      let config = {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      };
      let endPoint = `${self.globalVar.apiUrl}/school/verifikasi-email`;

      await self.$axios
        .post(
          endPoint,
          {
            token: token,
          },
          config
        )
        .then((res) => {
          console.log(res);
          //   if (res.data.data) {
          //     let tempSchool = res.data.data.school;
          //     let tempMajor = [];
          //     tempMajor.push({
          //       id: null,
          //       name: 'UMUM',
          //       key: null,
          //     });
          //     for (let i = 0; i < tempSchool.majors.length; i++) {
          //       tempMajor.push({
          //         id: tempSchool.majors[i].id,
          //         name: tempSchool.majors[i].name,
          //         key: tempSchool.majors[i].name,
          //       });
          //     }
          //     tempSchool.majors = tempMajor;
          //     self.$store.dispatch('updateSchool', tempSchool);
          //     if (self.$route.name == 'login') {
          //       window.location.href = '/dashboard';
          //     }
          //   }
        })
        .catch(() => {
          //   if (error) {
          //     self.$store.dispatch('updateSchool', {});
          //     self.$store.dispatch('updateUser', {});
          //     self.$store.dispatch('updateUserToken', '');
          //     self.$store.dispatch('updateIsDefaultPass', false);
          //     if (
          //       (self.$store.state.userToken == '' ||
          //         self.$store.state.userToken != '') &&
          //       self.$route.name != 'login'
          //     ) {
          //       window.location.href = '/';
          //     }
          //   }
        });
    },
    async getTokenKoperasi() {
      let self = this;
      let endPoint = `${self.globalVar.apiUrl}/school/cooperative/klaspay-token`;
      let tokenKoperasi = self.$store.state.tokenKoperasi;

      let { token, timeout } = tokenKoperasi;
      let timeNow = moment(new Date());
      let available = true;

      timeout = moment(timeout);
      if (token === "") {
        available = false;
      } else {
        // check setiap ada selisih waktu lebih dari 10 menit auto request token baru
        if (timeNow.diff(timeout, "minutes") > 10) {
          available = false;
        }
      }

      if (!available) {
        await self.$axios
          .get(endPoint, self.globalVar.headers)
          .then((res) => {
            if (res.data.data) {
              self.$store.dispatch("updateTokenKoperasi", {
                token: res.data.data.token,
                timeout: moment().format("YYYY-MM-DD HH:mm"),
              });
            }
          })
          .catch((error) => {
            if (error) {
              self.$store.dispatch("updateTokenKoperasi", {
                token: "",
                timeout: "",
              });
            }
          });
      }
    },
    async getcurrent() {
      let self = this;
      let endPoint = `${self.globalVar.apiUrl}/school/current`;

      await self.$axios
        .get(endPoint, self.globalVar.headers)
        .then((res) => {
          if (res.data.data) {
            let tempSchool = res.data.data.school;
            let tempMajor = [];

            tempMajor.push({
              id: null,
              name: "UMUM",
              key: null,
            });

            for (let i = 0; i < tempSchool.majors.length; i++) {
              tempMajor.push({
                id: tempSchool.majors[i].id,
                name: tempSchool.majors[i].name,
                key: tempSchool.majors[i].name,
              });
            }

            tempSchool.majors = tempMajor;

            self.$store.dispatch("updateSchool", tempSchool);
            if (self.$route.name == "login") {
              window.location.href = "/dashboard";
            }
          }
        })
        .catch((error) => {
          if (error) {
            self.$store.dispatch("updateSchool", {});
            self.$store.dispatch("updateUser", {});
            self.$store.dispatch("updateUserToken", "");
            self.$store.dispatch("updateIsDefaultPass", false);
            if (
              (self.$store.state.userToken == "" ||
                self.$store.state.userToken != "") &&
              self.$route.name != "login"
            ) {
              window.location.href = "/";
            }
          }
        });
    },
    handleErrorApi(errorMessage, returnType = "array") {
      if (errorMessage) {
        let sequence = 1;
        let message = [];
        let messageString = [];

        for (const [key, value] of Object.entries(errorMessage)) {
          let alertTemp = {
            index: sequence,
            key: key,
            value: value[0],
          };

          message.push(alertTemp);
          messageString.push(value[0]);
        }

        if (returnType == "string") {
          return messageString.join();
        }

        return message;
      }

      return "Opps! Ada kesalahan";
    },
    formatDateDefault(date) {
      if (date == null) {
        return null;
      }
      return moment(date).format("YYYY-MM-DD");
    },
    formatTime: function (time) {
      if (time) {
        return moment(time).format("HH:mm");
      } else {
        return null;
      }
    },
    validateFormatDateDefault(date) {
      if (date == null) {
        return "";
      }

      if (date.substring(0, 2) === "00") {
        return "";
      }

      return moment(date).format("YYYY-MM-DD") === "Invalid date"
        ? ""
        : moment(date).format("YYYY-MM-DD");
    },
    formatDateTimeDefault(date) {
      if (date == null) {
        return null;
      }
      return moment(date).format("YYYY-MM-DD HH:mm");
    },
    formatDateExcel: function (date) {
      return moment(date).format("YYYY-MM-DD");
    },
    formatYearMonth(date) {
      if (date == null) {
        return null;
      }
      return moment(date).format("YYYY-MM");
    },
    isNumber(event) {
      event = event ? event : window.event;
      var charCode = event.which ? event.which : event.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        event.preventDefault();
      } else {
        return true;
      }
    },
    formatTimestamp: function (time) {
      if (time) {
        return moment(time).format("DD MMMM YYYY");
      } else {
        return null;
      }
    },
    formatNumber(value) {
      let formatted = numeral(value).format("0,0");
      return formatted;
    },
    formatNumberDecimal(value) {
      let formatted = numeral(value).format("0,0.[00]");
      return formatted;
    },
    formatNumberDecimalDiscount(value) {
      let formatted = numeral(value).format(
        "0,0.[000000000000000000000000000000]"
      );
      return formatted;
    },
    parseNumber(value) {
      if (value == null) {
        value = 0;
      }
      value = value.toString();
      let parse = parseInt(value.replace(/,/g, ""));
      return parse;
    },
    parseFloat(value) {
      value = value.toString();
      let parse = parseFloat(value.replace(/,/g, ""));
      return parse;
    },
    forceFileDownload(response, filename = "image.png") {
      var url = window.URL.createObjectURL(new Blob([response.data]));
      var link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    },
    formatDateTimeInvoice: function (date) {
      if (date) {
        return moment(date).format("YYYY-MM-DD HH:mm");
      } else {
        return null;
      }
    },
    checkRole: function (role) {
      let sessionRole = this.$store.state.user.role;
      let existRole = _.where(sessionRole, { name: role });
      if (existRole.length > 0) {
        return true;
      }
      return false;
    },
    decimalInput: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    removeSpace: function (text) {
      return text.replace(/ /g, "_");
    },
    checkProduct: function (product) {
      let sessionProduct = this.$store.state.school.products;
      let existProduct = _.where(sessionProduct, { name: product });
      if (existProduct.length > 0) {
        return true;
      }
      return false;
    },
    handleImageAddedEditor: function (
      file,
      Editor,
      cursorLocation,
      resetUploader
    ) {
      let self = this;
      let config = {
        Authorization: self.globalVar.headers.Authorization,
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      };

      let formData = new FormData();
      formData.append("image", file);

      self.$axios
        .post(
          `${self.globalVar.apiUrl}/school/web/content/image/store`,
          formData,
          config
        )
        .then((response) => {
          let url = response.data.data.image_url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch((error) => {
          let message = "Opps! Ada kesalahan.";

          if (error.response) {
            if (error.response.data.errors) {
              message = self.handleErrorApi(
                error.response.data.errors,
                "string"
              );
            }

            self.$Swal.fire("Alert!", message, "warning");
          }
          self.$Progress.fail();
        });
    },
    handleImageRemovedEditor: function (
      file,
      Editor,
      cursorLocation,
      resetUploader
    ) {
      let self = this;
      let formData = {
        image_url: file,
      };

      self.$axios
        .post(
          `${self.globalVar.apiUrl}/school/web/content/image/delete`,
          formData
        )
        .then((response) => {
          if (response.data) {
            resetUploader();
          }
        })
        .catch((error) => {
          let message = "Opps! Ada kesalahan.";

          if (error.response) {
            if (error.response.data.errors) {
              message = self.handleErrorApi(
                error.response.data.errors,
                "string"
              );
            }

            self.$Swal.fire("Alert!", message, "warning");
          }
          self.$Progress.fail();
        });
    },
    checkElementExist(text) {
      if (text.includes("<p>")) {
        return true;
      } else {
        return false;
      }
    },
    getMonthIndo(idx) {
      let month = [
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      return month[idx];
    },
    romanize(num) {
      if (isNaN(num)) return NaN;
      var digits = String(+num).split(""),
        key = [
          "",
          "C",
          "CC",
          "CCC",
          "CD",
          "D",
          "DC",
          "DCC",
          "DCCC",
          "CM",
          "",
          "X",
          "XX",
          "XXX",
          "XL",
          "L",
          "LX",
          "LXX",
          "LXXX",
          "XC",
          "",
          "I",
          "II",
          "III",
          "IV",
          "V",
          "VI",
          "VII",
          "VIII",
          "IX",
        ],
        roman = "",
        i = 3;
      while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
      return Array(+digits.join("") + 1).join("M") + roman;
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    getErrorForField(field, errors) {
      if (!errors && !errors.length) {
        return false;
      }
      let filtered = errors.filter((error) => {
        return error.path[0] === field;
      });
      if (filtered.length) {
        return filtered[0].message;
      }
    },
  },
  filters: {
    formatDayMonth: function (time) {
      if (time) {
        return moment(time).format("DD MMMM");
      } else {
        return null;
      }
    },
    formatDateStandart: function (time) {
      if (time) {
        return moment(time).format("DD/MM/YYYY");
      } else {
        return null;
      }
    },
    formatMonthYear: function (time) {
      if (time) {
        return moment(time).format("MMMM YYYY");
      } else {
        return null;
      }
    },
    removeHtml: function (string) {
      let dataString = string.replace(/<\/?[^>]+>/gi, " ");
      dataString = dataString.substring(0, 50);
      return dataString;
    },
    formatDateTime: function (date) {
      if (date) {
        let result = moment(date).format("DD/MM/YYYY HH:mm");
        if (result === "Invalid date") {
          result = moment(+date).format("DD/MM/YYYY HH:mm"); // convert to int
          if (result.indexOf("1970") !== -1) {
            result = "Invalid date";
          }
        }

        return result;
      } else {
        return null;
      }
    },

    formatDateTimestamp: function (date) {
      if (date) {
        let tgl = date * 1000;
        let result = moment(tgl).format("DD/MM/YYYY");
        return result;
      } else {
        return null;
      }
    },
    formatDate: function (date) {
      if (date) {
        return moment(date).format("DD/MM/YYYY");
      } else {
        return null;
      }
    },
    formatTime: function (time) {
      if (time) {
        return moment(time).format("HH:mm");
      } else {
        return null;
      }
    },
    formatTimeSecond: function (time) {
      if (time) {
        return moment(time).format("HH:mm:ss");
      } else {
        return null;
      }
    },
    formatNumber: function (value) {
      let formatted = numeral(value).format("0,0");
      return formatted;
    },
    formatNumberDecimal: function (value) {
      let formatted = numeral(value).format("0,0.[00]");
      return formatted;
    },
    getImageName: function (url) {
      var str = url;
      var res = str.split("/");
      var idx = res.length - 1;

      return res[idx];
    },
    getImageExtension: function (item) {
      var str = item.image;
      var res = str.split("/");
      var idx = res.length - 1;

      res = res[idx].split(".");

      return item.type + "." + res[1];
    },
    substringText: function (text, length = 100) {
      if (text.length <= length) {
        return text;
      }
      return text.substring(0, length) + ". . .";
    },
    removeUnderscore: function (text) {
      return text.replace(/_/g, " ");
    },
    romanize(num) {
      if (isNaN(num)) return NaN;
      var digits = String(+num).split(""),
        key = [
          "",
          "C",
          "CC",
          "CCC",
          "CD",
          "D",
          "DC",
          "DCC",
          "DCCC",
          "CM",
          "",
          "X",
          "XX",
          "XXX",
          "XL",
          "L",
          "LX",
          "LXX",
          "LXXX",
          "XC",
          "",
          "I",
          "II",
          "III",
          "IV",
          "V",
          "VI",
          "VII",
          "VIII",
          "IX",
        ],
        roman = "",
        i = 3;
      while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
      return Array(+digits.join("") + 1).join("M") + roman;
    },
    formatDateTimeNonClock: function (date) {
      if (date) {
        return moment(date).format("D MMMM YYYY");
      } else {
        return null;
      }
    },

    formatDateTimeWithClock: function (date) {
      if (date) {
        return moment(date).format("D MMMM YYYY, HH:mm");
      } else {
        return null;
      }
    },

    formatDateWithDay: function (date) {
      const changeDay = {
        Sunday: "Minggu",
        Monday: "Senin",
        Tuesday: "Selasa",
        Wednesday: "Rabu",
        Thursday: "Kamis",
        Friday: "Jumat",
        Saturday: "Sabtu",
      };

      if (date) {
        const dataDay = moment(date).format("dddd");
        const conInd = changeDay[dataDay];

        return conInd
          ? conInd + ", " + moment(date).format("DD MMMM YYYY")
          : "";
      } else {
        return null;
      }
    },
    changeAlphabet: function (data) {
      const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];

      if (alphabet[data]) {
        return alphabet[data].toUpperCase();
      } else {
        return "";
      }
    },
  },
});

export default globalMethods;
