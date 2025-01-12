import { useContext, useState } from "react";
import { pages } from "@/interfaces/authPage.interfaces.ts";
import { userLogin } from "@/services/auth.ts";
import { MainProvider } from "@/App.tsx";

const useViewController = () => {
    const [page, setPage] = useState<pages>(0);
    const handleAuth = useContext(MainProvider);
    const loginSubmit = (data: FormData) => {
        const finalData = {
            username: data.get("username"),
            password: data.get("password"),
        };
        userLogin(finalData).then(() => {
            // @ts-ignore
            handleAuth();
        });
    };

    return {
        page,
        setPage,
        loginSubmit,
    };
};

export default useViewController;
