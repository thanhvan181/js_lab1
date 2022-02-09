// import addNews from "../../components/admin/addNews";
import axios from 'axios';
import asideAdmin from "../../components/admin/asideAdmin"
const addNewPage = {
    render() {
        console.log("RENDER add new")
        return /* html */`
       
       ${asideAdmin.render()}

       <div>
       <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
       <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Add New Product</h2>
       
   </div>

   <div class="mt-8 add_container ">
       <div class="bg-white py-8 px-6 shadow rounded-lg ">
       <form id="form-add-post">
           <input type="text" class="border border-black p-3" id="title-post" placeholder="Title"/><br />
           <div class="w-3xl grid grid-cols-2 gap-8">
                            <div><input type="file" class="border border-black" id="img-post" /></div>
                            <div><img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/></div>
                        </div>
           <textarea name="" cols="30" rows="10" class="border border-black p-3" id="desc-post" placeholder="Description"></textarea><br />
           <button>Thêm</button>
       </form>
       </div>
   </div>
   </div>
   </div>
   </div>


   `
    },
    afterRender() {




        // formAdd.addEventListener('submit', function (e) {
        //     e.preventDefault();
        //     const post = {
        //         title: document.querySelector('#title-post').value,
        //         img: document.querySelector('#img-post').value,
        //         desc: document.querySelector('#desc-post').value
        //     };

        //     console.log("FEtCH..........")
        //     fetch('http://localhost:3002/posts', {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json'
        //             // 'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         body: JSON.stringify(post)
        //     })
        // });
        const formAdd = document.querySelector("#form-add-post");
        // const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const CLOUDINARY_PRESET = "jkbdphzy";

        formAdd.addEventListener("submit", async function (e) {
            e.preventDefault();
            const file = imgPost.files[0];

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }
            })
            // call api thêm bài viết
            add({
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            });
        });
    
    }
}

    




export default addNewPage;