
import { get, update } from "../../api/news"
import asideAdmin from "../../components/admin/asideAdmin"
const editproductAdmin ={
    async render(id) {
        const { data } = await get(id);
        console.log("bo may dang edit")
        return /* html */`
       
       ${asideAdmin.render()}

       <div>
       <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
       <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Edit New Product</h2>
       
   </div>

   <div class="mt-8 add_container ">
       <div class="bg-white py-8 px-6 shadow rounded-lg ">
       <form id="form-edit">
       <input type="text" 
       id="title-post" 
       class="border border-black" 
       placeholder="Title"  
       value="${data.title}"
       /> 
    <input type="text" 
       id="img-post" 
       class="border border-black"  
       placeholder="Image" 
       value="${data.img}"
       /> 
    <textarea name="" 
       id="desc-post" 
       cols="30" 
       rows="10" 
       class="border border-black"
       >${data.desc}</textarea>
       <button>edit</button>
       </form>
       </div>
   </div>
   </div>
   </div>
   </div>


   `
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post").value,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
}

        

export default editproductAdmin;