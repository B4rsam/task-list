import { Box, Container, Typography} from "@mui/material";
import TaskList from "../TaskList";
import { MainButton } from "../../design-system";

const MainContainer = () => {
    return (
        <Container sx={{
            backgroundColor: "blue",
            maxWidth: "600px",
            width: "100%",
            maxHeight: "1024px",
            height: "100%",
            borderRadius: "20px",
            padding: "8px",
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
            }}>
                <Typography component="h1" variant="h3">
                    Task List
                </Typography>
                <MainButton type="addButton" content="Add Task" />
            </Box>
            <TaskList />
        </Container>
    );
}

export default MainContainer;
