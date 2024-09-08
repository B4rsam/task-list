import {Box} from "@mui/material";
import TaskCard from "../TaskCard";
import TEST_TASK from "../../constants/example.ts";

const TaskList = () => {
    return (
        <Box>
            <TaskCard taskData={TEST_TASK} />
        </Box>
    )
}

export default TaskList;
