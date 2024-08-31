import { Box, Container, Typography} from "@mui/material";
import TaskList from "../TaskList";

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
            }}>
                <Typography component="h1" variant="h5">
                    Task List
                </Typography>
                <div>
                    add
                </div>
            </Box>
            <TaskList />
        </Container>
    )
}

export default MainContainer;
