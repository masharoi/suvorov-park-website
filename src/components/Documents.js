import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import ProfileForm from "./ProfileForm";
import Menu from "./Menu";

function Documents(props) {
  return (
    <div>
      <MyNavbar />
      <Menu sideBarItems={sideBarItems} content={props.content} selectedLink={props.selectedLink}/>
      <ProfileForm />
      <MyFooter />
    </div>
  );
}

var sideBarItems = [
  { id: 0, title: "Общая информация", link: "/documents-general" },
  {
    id: 1,
    title: "Основные показатели финансово-хозяйственной деятельности",
    link: "/financial-economic-activity"
  },
  { id: 2, title: "Сведения о выполняемых работах", link: "/work-performed" },
  {
    id: 3,
    title: "Порядок и условия оказания услуг",
    link: "/common-property"
  },
  { id: 4, title: "Сведения о стоимости работ", link: "/service-prices" },
  { id: 5, title: "Тарифы на коммунальные ресурсы", link: "/public-resources" }
];

export default Documents;
