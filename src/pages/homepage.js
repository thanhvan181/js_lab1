import loGo from "../components/logo";
import meNu from "../components/menu";
// import searchInput from "../components/searchInput";
import banner from "../components/banner";
import actives from "../components/actives";
import news from "../components/news";
import footer from "../components/footer";

const HomePage = {
    render() {
        return /* html */ `
         <div class="max-w-5xl mx-auto">
         ${loGo.render()}
         ${meNu.render()}
         ${banner.render()}
         ${actives.render()}
         ${news.render()}
         ${footer.render()}


         </div>
        
        `;
    },

};
export default HomePage;