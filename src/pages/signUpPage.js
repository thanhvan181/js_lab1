import SignUp from "../components/signUp";

const signUpPage = {
    render() {
        return /* html */`
        ${SignUp.render()}
        `;
    },
     afterRender() {
        return SignUp.afterRender();

    }
};
export default signUpPage;