import { isMobile } from "./utils/isMobile.ts";
import colorPalette from "#/public/styles/colorPalette.ts";
import { Container, Typography } from "@mui/material";
import { createContext } from "react";
import useViewController from "@/useViewController.tsx";
import { AuthPage, TaskList } from "@/pages";

// @ts-ignore
export const MainProvider = createContext();

function App() {
    const { page, handleAuth } = useViewController();

    return (
        <>
            <MainProvider.Provider value={handleAuth}>
                <Container
                    sx={{
                        backgroundColor: `${!isMobile ? colorPalette.component.main.background : "rgba(0,0,0,0)"}`,
                        borderRadius: "20px",
                        padding: "16px",
                    }}
                >
                    {page === 0 ? (
                        <>
                            <Typography
                                component="h1"
                                variant={!isMobile ? "h3" : "h4"}
                                sx={{
                                    color: colorPalette.textContent.main,
                                    fontWeight: "bold",
                                }}
                            >
                                Task List
                            </Typography>
                            <AuthPage />
                        </>
                    ) : (
                        <TaskList />
                    )}
                </Container>
            </MainProvider.Provider>
        </>
    );
}

export default App;
