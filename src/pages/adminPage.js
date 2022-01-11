import tableList from "../components/admin/tableList";

const adminPage = {
    render() {
        return `
        <h1>Quan ly Admin</h1>
        ${tableList.render()}

       
        `;
    },

};
export default adminPage;