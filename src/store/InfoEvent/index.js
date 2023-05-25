// import {
//   ApiGetRequest,
//   ApiPutRequest,
//   ApiDeleteRequest,
//   ApiPostRequest,
//   ApiPostMultipart,
// } from "@/utils/Api";
// import { Message } from "element-ui";

const state = {
  data: {
    columns_data: [
      {
        prop: "event",
        label: "Event",
        minWidth: "60",
        // sortable: true,
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "title",
        label: "Title",
        minWidth: "60",
        // sortable: true,
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "visible",
        label: "Visible",
        minWidth: "60",
        // sortable: true,
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "start_at",
        label: "Start At",
        minWidth: "60",
        // sortable: true,
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "end_at",
        label: "End At",
        minWidth: "60",
        // sortable: true,
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "created_at",
        label: "Created At",
        minWidth: "60",
        // sortable: true,
        "class-name": "body-14 col-black-2",
      },
      {
        fixed: "right",
        label: "",
        prop: "Aksi",
        width: "90",
        "class-name": "body-14 col-black-2",
      },
    ],
    items: [
      {
        id: 1,
        event: 112233,
        title: "2020-04-20",
        visible: false,
        start_at: 32231231232,
        end_at: "iqbal",
        created_at: "1970-04-20",
      },
    ],
  },
};

const mutations = {
  changeInfoEvent(state, payload) {
    state.data = Object.assign({}, state.data, payload);
  },
};

const actions = {
  // async getPelajar({ commit, state }, payload) {
  //   commit("changeDashboard", {
  //     loading: true,
  //   });
  //   if (payload) {
  //     await commit("changeDashboard", {
  //       page: payload || data.page,
  //     });
  //   }
  //   const { data } = state;
  //   const params = {
  //     limit: data.limit,
  //     page: data.page,
  //     show: data.currentStatus,
  //     sort_field: data.sortBy,
  //     sort_dir: data.sortType,
  //     q: data.filter,
  //   };
  //   if (
  //     data.majorSelected &&
  //     data.majorSelected !== "" &&
  //     data.majorSelected > 0
  //   ) {
  //     params.school_major_id = data.majorSelected;
  //   }
  //   if (
  //     data.currentKelas &&
  //     data.currentKelas !== "" &&
  //     data.currentKelas > 0
  //   ) {
  //     params.school_class_id = data.currentKelas;
  //   }
  //   const result = await ApiGetRequest(`school/student`, params);
  //   if (result.error) {
  //     Message({
  //       type: "error",
  //       message: result.error,
  //     });
  //     commit("changeDashboard", {
  //       loading: false,
  //     });
  //   } else {
  //     commit("changeDashboard", {
  //       items: result.data.data,
  //       total: result.data.meta.total,
  //       loading: false,
  //     });
  //     return {
  //       data: result.data.data,
  //       total: result.data.meta.total,
  //     };
  //   }
  // },
  // async getPelajarById({ commit, state, dispatch }, payload) {
  //   commit("changeDashboard", {
  //     loading: true,
  //   });
  //   const { data } = state;
  //   const result = await ApiGetRequest(`school/student/${payload.id}`);
  //   if (result.error) {
  //     Message({
  //       type: "error",
  //       message: result.error,
  //     });
  //     commit("changeDashboard", {
  //       loading: false,
  //     });
  //   } else {
  //     let newDataForm = data.dataForm;
  //     newDataForm = Object.assign({}, newDataForm, result.data.data.student);
  //     newDataForm = Object.assign({}, newDataForm, result.data.data);
  //     newDataForm["major_id"] =
  //       newDataForm &&
  //       newDataForm.student &&
  //       newDataForm.student.major &&
  //       newDataForm.student.major.id;
  //     let dataCities = await dispatch(
  //       "cities/getCities",
  //       newDataForm.province_id,
  //       { root: true }
  //     );
  //     let dataDistricts = await dispatch(
  //       "districts/getDistricts",
  //       newDataForm.city_id,
  //       { root: true }
  //     );
  //     commit("changeDashboard", {
  //       dataForm: newDataForm,
  //       cities: dataCities,
  //       districts: dataDistricts,
  //       id: payload.id,
  //       loading: false,
  //     });
  //   }
  // },
  // async resetAkunPelajar(context, payload) {
  //   const { formData, id } = payload;
  //   const result = await ApiPutRequest(`school/user/${id}/password`, formData);
  //   if (result.error) {
  //     Message({
  //       type: "error",
  //       message: result.error,
  //     });
  //     return false;
  //   } else {
  //     Message({
  //       type: "success",
  //       message: "Data password berhasil di reset",
  //     });
  //     return true;
  //   }
  // },
  // async deleteAkunPelajar(context, payload) {
  //   const { id } = payload;
  //   const result = await ApiDeleteRequest(`school/student/${id}`);
  //   if (result.error) {
  //     Message({
  //       type: "error",
  //       message: result.error,
  //     });
  //     return false;
  //   } else {
  //     Message({
  //       type: "success",
  //       message: "Akun telah dinonaktifkan",
  //     });
  //     return true;
  //   }
  // },
  // async restoreAkunPelajar(context, payload) {
  //   const { id } = payload;
  //   const result = await ApiPostRequest(`school/student/${id}/restore`, {});
  //   if (result.error) {
  //     Message({
  //       type: "error",
  //       message: result.error,
  //     });
  //   } else {
  //     Message({
  //       type: "success",
  //       message: "Akun telah diaktifkan kembali",
  //     });
  //     return true;
  //   }
  // },
  // async importExcelPelajar({ commit }, payload) {
  //   commit("changeDashboard", {
  //     loading: true,
  //   });
  //   const result = await ApiPostRequest(`school/student`, payload.formData);
  //   if (result.error) {
  //     Message({
  //       type: "error",
  //       message: result.error,
  //     });
  //     commit("changeDashboard", {
  //       loading: false,
  //     });
  //     return false;
  //   } else {
  //     commit("changeDashboard", {
  //       loading: false,
  //     });
  //     const items = result.data.data;
  //     // check kalo return respone ada error
  //     const errorItems = await items.filter((item) => {
  //       if (item.error) {
  //         return item;
  //       }
  //     });
  //     if (errorItems.length > 0) {
  //       commit("changeDashboard", {
  //         jsonData: errorItems,
  //       });
  //       let message = "";
  //       if (errorItems.length != payload.formData.length) {
  //         message = "Beberapa data gagal ditambahkan ke server";
  //       } else {
  //         message = "Data gagal ditambahkan ke server";
  //       }
  //       Message({
  //         type: "error",
  //         message: message,
  //       });
  //       return false;
  //     } else {
  //       Message({
  //         type: "success",
  //         message: "Data Pelajar berhasil ditambahkan",
  //       });
  //       return true;
  //     }
  //   }
  // },
  // async createPelajar({ commit, state }) {
  //   commit("changeDashboard", {
  //     loading: true,
  //     error: false,
  //   });
  //   const { data } = state;
  //   const result = await ApiPostRequest(
  //     `school/student/store-manual`,
  //     data.dataForm
  //   );
  //   if (result.error) {
  //     Message({
  //       type: "error",
  //       message: "Gagal menambahkan data, periksa kembali data anda",
  //     });
  //     commit("changeDashboard", {
  //       loading: false,
  //       error: result.errorList ? result.errorList : false,
  //     });
  //     return false;
  //   } else {
  //     commit("changeDashboard", {
  //       loading: false,
  //       error: false,
  //     });
  //     Message({
  //       type: "success",
  //       message: "Data Pelajar berhasil ditambahkan",
  //     });
  //     return result.data.data;
  //   }
  // },
  // async updatePelajar({ commit, state }) {
  //   commit("changeDashboard", {
  //     loading: true,
  //     error: false,
  //   });
  //   const { data } = state;
  //   if (data.dataForm && data.dataForm.nis_nik) {
  //     data.dataForm.nis_nik = data.dataForm.nis_nik.replace("onklas-", "");
  //   }
  //   if (data.dataForm && data.dataForm.nisn) {
  //     data.dataForm.nisn = data.dataForm.nisn.replace("onklas-", "");
  //   }
  //   if (data.dataForm && data.dataForm.nis) {
  //     data.dataForm.nis = data.dataForm.nis.replace("onklas-", "");
  //   }
  //   if (data.dataForm && data.dataForm.student && data.dataForm.student.nis) {
  //     data.dataForm.student.nis = data.dataForm.student.nis.replace(
  //       "onklas-",
  //       ""
  //     );
  //   }
  //   if (data.dataForm && data.dataForm.student && data.dataForm.student.nisn) {
  //     data.dataForm.student.nisn = data.dataForm.student.nisn.replace(
  //       "onklas-",
  //       ""
  //     );
  //   }
  //   if (
  //     data.dataForm &&
  //     data.dataForm.student &&
  //     data.dataForm.student.user &&
  //     data.dataForm.student.user.nis_nik
  //   ) {
  //     data.dataForm.student.user.nis_nik =
  //       data.dataForm.student.user.nis_nik.replace("onklas-", "");
  //   }
  //   const result = await ApiPutRequest(
  //     `school/student/${data.id}`,
  //     data.dataForm
  //   );
  //   if (result.error) {
  //     Message({
  //       type: "error",
  //       message: "Gagal mengubah data, periksa kembali data anda",
  //     });
  //     commit("changeDashboard", {
  //       loading: false,
  //       error: result.errorList ? result.errorList : false,
  //     });
  //     return false;
  //   } else {
  //     commit("changeDashboard", {
  //       loading: false,
  //     });
  //     Message({
  //       type: "success",
  //       message: "Data Pelajar berhasil diubah",
  //     });
  //     return true;
  //   }
  // },
  // async updateImageUser({ commit }, payload) {
  //   commit("changeDashboard", {
  //     loading: true,
  //   });
  //   const result = await ApiPostMultipart(
  //     `school/user/${payload.id}/profile-image`,
  //     payload.dataForm
  //   );
  //   if (result.error) {
  //     Message({
  //       type: "error",
  //       message: "Gagal mengubah gambar profil",
  //     });
  //     commit("changeDashboard", {
  //       loading: false,
  //       error: result.errorList || false,
  //     });
  //     return false;
  //   } else {
  //     commit("changeDashboard", {
  //       loading: false,
  //       error: false,
  //     });
  //     return true;
  //   }
  // },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
