import axios from 'axios';

const addNews = {

    render() {
        console.log("Render ADDD........")
        return /* html */`
       
        
       
        <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Add New Product</h2>
            
        </div>

        <div class="mt-8 add_container ">
            <div class="bg-white py-8 px-6 shadow rounded-lg ">
            <form id="form-add-post">
                <input type="text" class="border border-black p-3" id="title-post" placeholder="Title"/><br />
                <input type="text" class="border border-black mt-4 mb-4 p-3" id="img-post" placeholder="Img" /><br />
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
        // console.log("SELECt", document.querySelector('#form-add-post'));
        // const formAdd = document.querySelector('#form-add-post');
        // formAdd.addEventListener('submit', function (e) {
        //     e.preventDefault();
        //     const post = {
        //         title: document.querySelector('#title-post').value,
        //         img: document.querySelector('#img-post').value,
        //         desc: document.querySelector('#desc-post').value
        //     };

        //     console.log("Post data to AIP: ,.....")
        //     fetch('http://localhost:3002/posts', {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json'
        //             // 'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         body: JSON.stringify(post)
        //     })
        // });

        const formAdd = document.querySelector('#form-add-post');
        formAdd.addEventListener('submit', function(e){
            e.preventDefault();
            add({
                title: document.querySelector('#title-post').value,
                img: document.querySelector('#img-post').value,
                desc: document.querySelector('#desc-post').value
            });
        });
    }
}
export default addNews;