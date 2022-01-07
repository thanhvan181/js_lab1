import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });

router.on({
    // Neu user truy cap vao duong dan / thi se lam viec gi do

    "/": () => console.log("home page"),
    "/about": () => console.log("about page"),
});
router.resolve();