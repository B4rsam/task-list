import { Grid2 } from "@mui/material";
import TaskCard from "../TaskCard";
import TEST_TASK from "../../constants/example.ts";
import useViewController from "./useViewController.tsx";

const TaskList = () => {
    const {
        handleUpdate,
    } = useViewController();
    console.log(handleUpdate())

    const handleGenerateTasks = () => {
    }
    return (
        <Grid2
            container
            spacing={1}
        >
            <Grid2 size={12}>
                <TaskCard taskData={TEST_TASK} />
            </Grid2>
            <Grid2 size={12}>
                <TaskCard taskData={TEST_TASK} />
            </Grid2>
            <Grid2 size={12}>
                <TaskCard taskData={TEST_TASK} />
            </Grid2>
            <Grid2 size={12}>
                <TaskCard taskData={TEST_TASK} />
            </Grid2>
            <Grid2 size={12}>
                <TaskCard taskData={TEST_TASK} />
            </Grid2>
        </Grid2>
    )
}

export default TaskList;
