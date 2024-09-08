import { Box, Card, Typography } from "@mui/material";
import { ITask } from "../../interfaces/task.ts";
import { FC }  from "react";
import AuxButton from "../../design-system/AuxButton";

interface ITaskCard {
    taskData: ITask;
}
const TaskCard: FC<ITaskCard> = ({ taskData }) => {
    return (
        <Card id={taskData.id as string}>
            <Typography variant="h5" color="textPrimary">
                {taskData.label}
            </Typography>
            <Box>
                <Typography variant="body2" color="textSecondary">
                    {taskData.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {taskData.dueDate}
                </Typography>
            </Box>
            <Box>
                <AuxButton type="editButton" />
                <AuxButton type="deleteButton" />
            </Box>
        </Card>
    );
}

export default TaskCard;
