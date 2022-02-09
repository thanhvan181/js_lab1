
// import axios from "axios";
import { getAll, remove } from "../../api/news";

const NewsAdmin = {

    async render() {
        const { data } = await getAll();
        console.log(data);

        return/*html */`
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
               
                ${data.map((post) => {
            console.log("post", post)
            return /* html */`
                
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                    </div>
                   
                </div>
                <td>
                <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                   ${post.title}
                </div>
                
                </div>
                </td>
                <td>
                <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                   ${post.desc}
                </div>
                
                </div>
                </td>
               
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               <a href="/admin/news/${post.id}/edit"> Edit</a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button data-id="${post.id}" class="btn btn-remove">Delete</button>
                </td>
                </tr >
                `}).join(" ")}
                    
                

               
                </tbody >
            </table >
            </div>
            </div>

       

       
   
        `
    },
    afterRender() {
        console.log("after")
        // lấy danh sách button sau khi render
        const buttons = document.querySelectorAll('.btn');
        // tạo vòng lặp cho nodelist button
        buttons.forEach(btn => {
            // lấy ID từ thuộc tính data-id của button
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                console.log("DELETE")
                const confirm = window.confirm("Ban co muon xoa bai viet nay khong?");
                if (confirm) {
                    // gọi hàm delete trong folder API và bắn id vào hàm
                    remove(id).then(() => {
                        console.log('Da xoa thanh cong');
                        btn.parentNode.parentNode.remove();
                    })
                }
            })
        });
    }

}
export default NewsAdmin