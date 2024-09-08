import { Grid2, Box } from "@mui/material";
import TaskCard from "../TaskCard";
import TEST_TASK from "../../constants/example.ts";
import useViewController from "./useViewController.tsx";

const TaskList = (taskList: any) => {

    return (
        <Box>
            {taskList}
        </Box>
    )
}

export default TaskList;
