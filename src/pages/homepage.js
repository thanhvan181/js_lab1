// import loGo from "../components/logo";
// import meNu from "../components/menu";

// import banner from "../components/banner";
// import actives from "../components/actives";
// import news from "../components/news";
// import footer from "../components/footer";
// import dangky from "../components/danky";
import navbars from "../components/navbars";
import hero from "../components/hero";
import mens from "../components/mens";
import womens from "../components/womens";
import newletter from "../components/newletter";
const HomePage = {
    render() {
        return /* html */ `
        
        
        ${navbars.render()}
        ${hero.render()}
        ${mens.render()}
        ${womens.render()}
        ${newletter.render()}
         </div>
        
        `;
    },

};
export default HomePage;