import { useState } from "react";
import { pages } from "@/interfaces/authPage.interfaces.ts";

interface userValue {
    username?: string;
    password?: string;
}
const useViewController = () => {
    const [page, setPage] = useState<pages>(0);
    const INITIAL_STATE = {
        username: undefined,
        password: undefined,
    };
    const [modalValue, setValue] = useState<userValue>(INITIAL_STATE);
    const [error, setError] = useState<boolean>(false);
    const handleInput = (field: 0 | 1, value: string) => {
        switch (field) {
            case 0:
                setValue({
                    ...modalValue,
                    username: value,
                });
                break;
            case 1:
                setValue({
                    ...modalValue,
                    password: value,
                });
                break;
        }
    };
    const loginSubmit = (data: any) => {
        console.log(data);
    };

    return {
        page,
        setPage,
        handleInput,
        loginSubmit,
    };
};

export default useViewController;
