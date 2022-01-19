import NewsAdmin from "../../components/admin/NewsAdmin"
import asideAdmin from "../../components/admin/asideAdmin"
import navbar_admin from "../../components/admin/navbarAdmin"
const NewsPage = {
    render() {
        return /* html */`
        ${NewsAdmin.render()}

        ${asideAdmin.render()}
        
        
       
        

        `
    }
}
export default NewsPage