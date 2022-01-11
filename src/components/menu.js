import { menuList } from "../utils/data";

const meNu = {
    render() {
        return /* html */`

        <nav class="bg-orange-500 px-3">
        <div>
         
          <ul class="flex" id="menu">
           ${menuList.map((menu) => `
          <li>
          <a
            href="${menu.links}"
            class="transition duration-200 ease-in-out block p-3 hover:bg-indigo-500 hover:text-white"
            >${menu.title}</a
          >
        </li>
          `).join("")}
         
            
          </ul>
         
         
         
          
         
        </div>
        
      </nav>
        `;
    },

};
export default meNu;