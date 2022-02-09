// import loGo from "../components/logo";
// import meNu from "../components/menu";

import banner from "../components/banner";
// import actives from "../components/actives";
// import news from "../components/news";
// import footer from "../components/footer";
// import dangky from "../components/danky";
import navbars from "../components/navbars";
import hero from "../components/hero";
import Mens from "../components/mens";
import womens from "../components/womens";
import newletter from "../components/newletter";
import footer from "../components/footer";

const HomePage = {
   async render() {
        return /* html */ `
        
        
        ${navbars.render()}
        ${banner.render()}
        ${await Mens.render()}
        
       
        ${footer.render()}
         </div>
        
        `;
    },

};
export default HomePage;