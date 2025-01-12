import useViewController from "@/pages/AuthPage/useAuthController.tsx";
import SelectionPage from "@/pages/AuthPage/SelectionPage.tsx";
import LoginPage from "@/pages/AuthPage/LoginPage.tsx";
import SignupPage from "@/pages/AuthPage/SignupPage.tsx";

const AuthPage = () => {
    const { page, setPage, loginSubmit, signupSubmit } = useViewController();

    const currentPage = () => {
        switch (page) {
            case 1:
                return <LoginPage handleSubmit={loginSubmit} />;
            case 2:
                return <SignupPage handleSubmit={signupSubmit} />;
            case 0:
            default:
                return <SelectionPage handlePage={setPage} />;
        }
    };

    return <>{currentPage()}</>;
};

export default AuthPage;
