const ListMenu = () => {
  return [
    {
      name: "Dashboard",
      label: "Beranda",
      link: "/bod/dashboard",
      type: "menu",
      svg: "beranda.svg",
      icon: false,
      active: true,
      child: [],
      roles: ["super admin", "admin web", "admin mobile", "bod"],
      header: false,
    },
  ];
};
export default ListMenu;
