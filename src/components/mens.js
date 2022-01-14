
import { data } from "../utils/data";
const  Mens = {
  render() {
    return /* html */`
        <div class="my-20">
      <div class="flex flex-row justify-between my-5">
        <h2 class="text-3xl">Tin Tuc Hoc Tap</h2>
        <a href="#" class="flex flex-row text-lg hover:text-purple-700">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
   ${data.map((me) =>

      `
    <div class="shadow-lg rounded-lg">
    <a href="#">
      <img src="${me.img}" class="rounded-tl-lg rounded-tr-lg" />
    </a>
    <div class="p-5">
      <h3><a href="#">${me.title}</a></h3>
      
      <p>${me.desc}</p>
      <div class="flex flex-col xl:flex-row justify-between">
        <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
          
          Đọc thêm
        </a>
        <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="/details/${me.id}">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
         Xem chi tiết
        </a>
      </div>
    </div>
  </div>
    `).join("")}

      
      
      </div>
    </div> 

        `;
  },
};
export default Mens;