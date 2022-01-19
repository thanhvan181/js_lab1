import {data } from "../../utils/data"

const editproductAdmin ={
  
        render(id) {
            const result = data.find((da) => da.id === id);
            return /* html */`
            <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Edit New Product</h2>
            
        </div>

        <div class="mt-8 add_container ">
            <div class="bg-white py-8 px-6 shadow rounded-lg ">
            <form class="mb-0 space-y-6" action="#" method="POST">
                <div>
                <label for="email" class="block text-sm font-medium text-gray-700">News Image</label>
                <div class="mt-1">
                    <input id="email" name="email" type="file" autocomplete="email" required class="" value=${result.img} />
                </div>
                </div>

                <div>
                <label for="password" class="block text-sm font-medium text-gray-700">News Title</label>
                <div class="mt-1">
                    <input id="password" name="password" type="text" autocomplete="current-password" required class="" value=${result.title}  />
                </div>
                </div>
                <div>
                <label for="password" class="block text-sm font-medium text-gray-700">News Desc</label>
                <div class="mt-1">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="" value=${result.desc} />
                </div>
                </div>
                
                
               

                
                <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</button>
                </div>
            </form>
            </div>
        </div>
        </div>
        </div>
        </div>

            

        `
    }
}
export default editproductAdmin;