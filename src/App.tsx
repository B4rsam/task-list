import { isMobile } from "./utils/isMobile.ts";
import colorPalette from "#/public/styles/colorPalette.ts";
import { Container, Typography } from "@mui/material";
import { createContext } from "react";
import useViewController from "@/useViewController.tsx";
import { AuthPage, TaskList } from "@/pages";

export const TaskProvider = createContext({});

function App() {
    const { page } = useViewController();

    return (
        <>
            <Container
                sx={{
                    backgroundColor: `${!isMobile ? colorPalette.component.main.background : "rgba(0,0,0,0)"}`,
                    maxWidth: "600px",
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    padding: "16px",
                }}
            >
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
                {page === 0 ? <AuthPage /> : <TaskList />}
            </Container>
        </>
    );
}

export default App;
