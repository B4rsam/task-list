import { Box, Container, Typography } from "@mui/material";
import TaskList from "../TaskList";
import { MainButton } from "../../design-system";
import colorPalette from "../../constants/colorPalette.ts";
import useViewController from "../TaskList/useViewController.tsx";
import { createContext } from "react";

export const TaskProvider = createContext();

const MainContainer = () => {
    const {
        taskList,
        details,
        dummyUpdate,
        isLoading
    } = useViewController();

    return (
        <Container sx={{
            backgroundColor: "blue",
            maxWidth: "600px",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            padding: "16px",
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
            }}>
                <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                        color: colorPalette.textContent.main,
                        fontWeight: "bold",
                    }}
                >
                    Task List
                </Typography>
                <MainButton type="addButton" content="Add Task" />
            </Box>
            <TaskProvider.Provider value={details}>
                {taskList}
            </TaskProvider.Provider>
        </Container>
    );
}

export default MainContainer;
