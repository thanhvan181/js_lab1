import Navigo from "navigo";
import HomePage from "./pages/homepage";
import Tuyensinh from "./pages/tuyensinh";
import Chuongtrinhdaotao from "./pages/chuongtrinhdaotao";
import detailsPage from "./pages/detailsPage";
import adminPage from "./pages/adminPage";

const router = new Navigo("/", { linksSelector: "a" });
const renders = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};

router.on({
    // Neu user truy cap vao duong dan / thi se lam viec gi do

    "/": () => {
        renders(HomePage);
    },
    "/tuyensinh": () => {
        renders(Tuyensinh);
    },
    "/chuongtrinhdaotao": () => {
        renders(Chuongtrinhdaotao);
    },
    "/goctuyensinh": () => {
        renders(Chuongtrinhdaotao);
    },
    "/tuyendung": () => {
        renders(Chuongtrinhdaotao);
    },
    "/details/:id": ({ data }) => {
        const { id } = data;
        renders(detailsPage.render(+id));
    },
    "/admin/": () => {
        renders(adminPage.render());
    },
});
router.resolve();