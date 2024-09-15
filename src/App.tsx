import {isMobile} from "./utils/isMobile.ts";
import colorPalette from "./constants/colorPalette.ts";
import {Box, Container, Typography} from "@mui/material";
import TaskModal from "./components/TaskModal";
import {MainButton, MobileButton} from "./design-system";
import {createContext, useState} from "react";
import useViewController from "./utils/useViewController.tsx";

export const TaskProvider = createContext();

function App() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleModal = () => {
        setShowModal(!showModal);
    }
    const {
        taskList,
        details,
        isLoading,
        dummyUpdate,
    } = useViewController();

  return (
    <>
        <Container sx={{
            backgroundColor: `${!isMobile ? colorPalette.component.main.background : "rgba(0,0,0,0)"}`,
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
                backgroundColor: `${!isMobile ? "rgba(0,0,0,0)" : colorPalette.component.main.background}`,
                position: `${!isMobile ? "relative " : "fixed"}`,
                paddingInline: `${!isMobile ? "0" : "16px"}`,
                paddingBlock: `${!isMobile ? "0" : "8px"}`,
                zIndex: "4500",
                top: "0",
                left: "0",
                right: "0",
                width: "100%",
            }}>
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
                <TaskModal handleModal={handleModal} state={showModal} dummyUpdate={dummyUpdate}/>
                {!isMobile ? <MainButton type="addButton" content="Add Task" onClick={handleModal}/> : <MobileButton type="addButton" onClick={handleModal}/>}
            </Box>
            {isMobile ? <Box sx={{ height: "32px" }}/> : null}
            <TaskProvider.Provider value={details}>
                {!isLoading ?
                    taskList :
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: colorPalette.textContent.taskLabel,
                            fontSize: "24px",
                        }}
                    >
                        Now Loading...
                    </Typography>
                }
            </TaskProvider.Provider>
        </Container>
    </>
  )
}

export default App

