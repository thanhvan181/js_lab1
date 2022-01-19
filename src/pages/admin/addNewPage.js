import addNews from "../../components/admin/addNews";
import asideAdmin from "../../components/admin/asideAdmin"
const addNewPage = {
    render() {
       return /* html */`
       ${addNews.render()}
       ${asideAdmin.render()}

       `
    }
}
export default addNewPage