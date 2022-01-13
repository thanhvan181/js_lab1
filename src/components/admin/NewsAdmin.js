

import { mensData } from "../../utils/data";
import { womentsData} from "../../utils/data";

const NewsAdmin = {
    render() {
        return `
        <div class="card ">
        <div class="card-content">
            <a href="/admin/news/add" class="new_container card-content rounded-none p-5 bg-green">Add News</a>
            <h1 class="new_container">Men Product</h1>
       
            <table >
                <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Image
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product_color
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product_size
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actives
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actives
                    </th>
                   
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
               
                ${mensData.map((item) => `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="${item.product_img}" alt="">
                    </div>
                   
                </div>
                <td>
                <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                   ${item.product_titile}
                </div>
                <div class="text-sm text-gray-500">
                   
                </div>
                </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${item.product_color}</div>
                <div class="text-sm text-gray-500">${item.title_details}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                   ${item.product_size}
                </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               <a href="/admin/news/:${item.id}/edit"> Edit</a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               <a> Delete</a>
                </td>
                </tr >
                `).join(" ")}
                    
                

               
                </tbody >
            </table >
            <h1 class="new_container">Woment Product</h1>
       
            <table >
                <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Image
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product_color
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product_size
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actives
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actives
                    </th>
                   
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
               
                ${womentsData.map((ke) => `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="${ke.product_img}" alt="">
                    </div>
                   
                </div>
                <td>
                <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                   ${ke.product_titile}
                </div>
                <div class="text-sm text-gray-500">
                   
                </div>
                </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${ke.product_color}</div>
                <div class="text-sm text-gray-500">${ke.title_details}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                   ${ke.product_size}
                </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               <a href="/admin/news/:${ke.id}/edit"> Edit</a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               <a> Delete</a>
                </td>
                </tr >
                `).join(" ")}
                    
                

               
                </tbody >
            </table >
            </div >
       
        </div>
        </div>
       
       

       
   
        `
    }

}
export default NewsAdmin