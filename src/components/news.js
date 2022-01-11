import { data } from "../utils/data";

const news = {
    render() {
        return /* html */ `
        <div class="news">
          <h2 class="uppercase font-bold text-xl my-5 text-blue-800">
            Tin Tuc Hoc Tap
          </h2>
          <div class="grid md:grid-cols-3 gap-8" id="products">
          ${data.map((active) => `
          <div class="border p-5">
              <img src="${active.img}" alt="" />
              <h2 class="font-bold py-2"><a href="/details/${active.id}">${active.title}</a></h2>
              <p>
                ${active.desc}
              </p>
            </div>
          
          `).join(" ")}
            
            
          </div>
        </div>

        `;
    },
};
export default news;