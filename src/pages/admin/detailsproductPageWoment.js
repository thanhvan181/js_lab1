
import { data } from "../../utils/data"
const detailsproductPageWoment = {
    render(id) {
        const result = data.find((da) => da.id === id);
        return /* html */`
        <div class="bg-white">
        <div class="pt-6">
          
          <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img src="${result.img}">
            </div>
            
          </div>
        
          
          <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
               ${result.title}
              </h1>
              <p>${result.desc}</p>
            </div>
          </div>
        
           
           
               
        
        </div>
        </div>
        `;
    },
}
export default detailsproductPageWoment;