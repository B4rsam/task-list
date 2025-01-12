// @ts-ignore
import { tokenAuth } from "@/services/auth.ts";
import { useEffect, useRef, useState } from "react";

const useViewController = () => {
    const firstRun = useRef<boolean>(true);
    const [state, setState] = useState<number>(0);
    const handleAuth = () => {
        tokenAuth()
            .then(() => {
                setState(1);
            })
            .catch(() => {
                setState(0);
            })
            .finally(() => {
                firstRun.current = false;
            });
    };

    useEffect(() => {
        if (firstRun.current) {
            handleAuth();
        }
    }, []);

    return {
        page: state,
        handleAuth,
    };
};

export default useViewController;
