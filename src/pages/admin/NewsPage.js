import NewsAdmin from "../../components/admin/NewsAdmin"
import asideAdmin from "../../components/admin/asideAdmin"

const NewsPage = {
   
    async render() {

        console.log("newadmin",  NewsAdmin.render());

        return /* html */`
        ${await NewsAdmin.render()}


        

       

        ${asideAdmin.render()}
        
        
       
        

        `
    },
    async afterRender() {
        return await NewsAdmin.afterRender();
       
    }
}
export default NewsPage