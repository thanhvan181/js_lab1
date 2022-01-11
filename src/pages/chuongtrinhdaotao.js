// import featureProduct from "../components/featureProduct";
import loGo from "../components/logo";
import meNu from "../components/menu";
import banner from "../components/banner";
import footer from "../components/footer";

const Chuongtrinhdaotao = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
        ${loGo.render()}
         ${meNu.render()}
         ${banner.render()}
         <div>Noi dung chuong trinh dao tao</div>
        
         ${footer.render()}
         </div>`;
    },
};
export default Chuongtrinhdaotao;