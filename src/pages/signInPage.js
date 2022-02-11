import singIn from "../components/singIn";

const signInPage = {
  render() {
    return /* html */ `
        ${singIn.render()}
        `;
  },
  async afterRender() {
    return await singIn.afterRender();
  },
};
export default signInPage;