import { menuList } from "../utils/data";

const navbars = {
  render() {
    return /* html */`
       
        <div class="container mx-auto p-5">
        <div class="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
          <div class="flex flex-row justify-center">
            <div class="bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg"></div>
            <h1 class="text-3xl text-gray-600 ml-2">Logo</h1>
          </div>
          <div class="mt-2">
          ${menuList.map((menu) => ` <a href="${menu.links}" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">${menu.title}</a>
            `).join("")}
           
           
          </div>
        </div>
`;
  },
};
export default navbars;