import loGo from "../components/logo";
import meNu from "../components/menu";

import banner from "../components/banner";

import footer from "../components/footer";

const Tuyensinh = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
        ${loGo.render()}
         ${meNu.render()}
         ${banner.render()}
         <div>Noi dung chuong tinh tuyen sinh</div>
        
         ${footer.render()}
         </div>`;
    },
};
export default Tuyensinh;