import Navigo from "navigo";
import HomePage from "./pages/homepage";
// import Tuyensinh from "./pages/tuyensinh";
// import Chuongtrinhdaotao from "./pages/chuongtrinhdaotao";
// import detailsPage from "./pages/detailsPage";
// import adminPage from "./pages/adminPage";
import signInPage from "./pages/signInPage";
import signUpPage from "./pages/signUpPage";
import dashboardPage from "./pages/admin/dashboardPage";
import NewsPage from "./pages/admin/NewsPage";

import addNewPage from "./pages/admin/addNewPage";
import editproductAdmin from "./pages/admin/editproductAdmin";
import detailsproductPageWoment from "./pages/admin/detailsproductPageWoment";


const router = new Navigo("/", { linksSelector: "a", hash: true });
const renders = async (content, id) => {
    if (content.render){
        document.querySelector("#app").innerHTML = await content.render(id);
    }
    if(content.afterRender) await content.afterRender(id);
};

router.on({
    // Neu user truy cap vao duong dan / thi se lam viec gi do

    "/":  () => {
        renders(HomePage);
    },
   
    "/singin": () => {
        renders(signInPage);
    },
    "/singup": () => {
        renders(signUpPage);
    },
    "/admin/dashboard": () => {
        renders(dashboardPage);
    },
    "/admin/news": () => {
        renders(NewsPage);
    },

    "/admin/news/add": () => {
        renders(addNewPage);
    },
    
    
    "/details/:id": ({ data }) => renders(detailsproductPageWoment, data.id),
    
    
    "/admin/news/:id/edit": ({ data }) => renders(editproductAdmin, data.id),




});
router.resolve();


// const getProduct = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             resolve([1, 2, 3, 4]);
//         } catch (error) {
//             reject("ket noi khong thanh cong");
            
//         }
        
//     }, 3000); 
// })
// const showProduct = async () => {
//     const result =  await getProduct();
//     const data = await [...result, 5]
//     console.log(data)
// }
// showProduct()


