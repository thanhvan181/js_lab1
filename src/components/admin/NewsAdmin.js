

import { data } from "../../utils/data";


const NewsAdmin = {
    render() {
        return `
        <div class="card ">
        <div class="card-content">
            <a href="/admin/news/add" class="new_container card-content rounded-none p-5 bg-green">Add News</a>
            <h1 class="new_container">News</h1>
       
            <table >
                <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Image
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Desc
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
               
                ${data.map((item) => `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="${item.img}" alt="">
                    </div>
                   
                </div>
                <td>
                <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                   ${item.title}
                </div>
                
                </div>
                </td>
                <td>
                <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                   ${item.desc}
                </div>
                
                </div>
                </td>
               
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               <a href="/admin/news/edit:${item.id}"> Edit</a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               <a> Delete</a>
                </td>
                </tr >
                `).join(" ")}
                    
                

               
                </tbody >
            </table >
            </div>
            </div>

       

       
   
        `
    }

}
export default NewsAdmin