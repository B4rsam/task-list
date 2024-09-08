import { Box, Card, Typography } from "@mui/material";
import {FC, useContext, useState} from "react";
import AuxButton from "../../design-system/AuxButton";
import colorPalette from "../../constants/colorPalette.ts";
import { MainButton } from "../../design-system";
import { TaskProvider } from "../MainContainer";
import {editStatus} from "../../services/request";

interface ITaskCard {
    id: number;
    onEdit: (id: number, text: string) => void;
}
const TaskCard: FC<ITaskCard> = ({ id, onEdit }) => {
    const { getTaskData, handleDeletion } = useContext(TaskProvider);
    const taskData = getTaskData(id);
    const [status, setStatus] = useState<boolean>(taskData.completed);

    const handleCompletion = (id: number) => {
        editStatus(id, !status).then(() => setStatus(!status));
    };

    return (
        <Card
            id={taskData.id as string}
            sx={{
                paddingBlock: "8px",
                paddingInline: "16px",
                borderRadius: "8px",
                border: `solid 1px ${colorPalette.component.secondary.border}`,
                backgroundColor: colorPalette.component.secondary.background,
                marginBottom: "8px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        color: colorPalette.textContent.taskContent,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "normal",
                    }}
                >
                    {taskData.todo}
                </Typography>
                <Box
                    sx={{
                        alignItems: "flex-end",
                        display: "flex",
                    }}
                >
                    <AuxButton type="editButton" onClick={onEdit} id={taskData.id} />
                    <AuxButton type="deleteButton" onClick={handleDeletion} id={taskData.id} />
                    <MainButton type="complete" content="Completed" status={status} onClick={() => handleCompletion(taskData.id)}/>
                </Box>
            </Box>
        </Card>
    );
}

export default TaskCard;
