import footerAdmin from "./footerAdmin";
import asideAdmin from "./asideAdmin";
import navbar_admin from "./navbarAdmin";
import titleBar from "./title_bar";
const dashboard = {
  render() {
    return /* html */`
        
   
    ${asideAdmin.render()}
    ${navbar_admin.render()}

    
      ${footerAdmin.render()}
      
      
        `
  }
}
export default dashboard;