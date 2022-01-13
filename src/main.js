import Navigo from "navigo";
import HomePage from "./pages/homepage";
// import Tuyensinh from "./pages/tuyensinh";
// import Chuongtrinhdaotao from "./pages/chuongtrinhdaotao";
// import detailsPage from "./pages/detailsPage";
// import adminPage from "./pages/adminPage";
import signInPage from "./pages/signInPage";
import signUpPage from "./pages/signUpPage";
import dashboardPage from "./pages/dashboardPage";
import NewsPage from "./pages/NewsPage";
// import NewsPage from "./pages/adminPage";
import addNewPage from "./pages/addNewPage";
import detailsproductPageMen from "./pages/menproductpage";
import detailsproductPageWoment from "./pages/detailsproductPageWoment";


const router = new Navigo("/", { linksSelector: "a" });
const renders = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    // Neu user truy cap vao duong dan / thi se lam viec gi do

    "/": () => {
        renders(HomePage.render());
    },
    // "/tuyensinh": () => {
    //     renders(Tuyensinh.render());
    // },
    // "/chuongtrinhdaotao": () => {
    //     renders(Chuongtrinhdaotao.render());
    // },
    // "/goctuyensinh": () => {
    //     renders(Chuongtrinhdaotao.render());
    // },
    // "/tuyendung": () => {
    //     renders(Chuongtrinhdaotao);
    // },
    // "/details/:id": ({ data }) => {
    //     const { id } = data;
    //     renders(detailsPage.render(+id));
    // },
    // "/admin/": () => {
    //     renders(adminPage.render());
    // },
    "/singin": () => {
        renders(signInPage.render());
    },
    "/singup": () => {
        renders(signUpPage.render());
    },
    "/admin/dashboard": () => {
        renders(dashboardPage.render());
    },
    "/admin/news": () => {
        renders(NewsPage.render());
    },

    "/admin/news/add": () => {
        renders(addNewPage.render());
    },
    "/details/:id": ({ data }) => {
        const { id } = data;
        renders(detailsproductPageMen.render(+id));
    },
    "/details/:id": ({ data }) => {
        const { id } = data;
        renders(detailsproductPageWoment.render(+id));
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        renders(editproductAdmin.render(+id));
    },




});
router.resolve();