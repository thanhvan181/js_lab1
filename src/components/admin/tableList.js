import { tableListData } from "../../utils/data";

const tableList = {
    render() {
        return /* html */ `
    <table class="table-auto">
        <thead>
            <tr>
            <th>id</th>
            <th>desc</th>
            <th>img</th>
            <th>title</th>
            <th>createdAt</th>
            </tr>
        </thead>
        <tbody>
            ${tableListData.map((i) => `<tr>
               <td>${i.id}</td>
               <td>${i.desc}</td>
               <td>${i.img}</td>
               <td>${i.title}</td>
               <td>${i.createdAt}</td>
               </tr>
               `)}
            
            
        </tbody>
    </table>

        `;
    },
};
export default tableList;