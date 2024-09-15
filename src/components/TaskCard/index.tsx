import { Box, Card, Typography } from "@mui/material";
import { FC, useContext, useState } from "react";
import AuxButton from "../../design-system/AuxButton";
import colorPalette from "../../constants/colorPalette.ts";
import { MainButton, MobileButton } from "../../design-system";
import {TaskProvider} from "../../App.tsx";
import { editStatus } from "../../services/request";
import { isMobile } from "../../utils/isMobile.ts";
import EditModal from "../EditModal";

interface ITaskCard {
    id: number;
}
const TaskCard: FC<ITaskCard> = ({ id }) => {
    const { getTaskData, handleDeletion, dummyEdit } = useContext(TaskProvider);
    const taskData = getTaskData(id);
    const [status, setStatus] = useState<boolean>(taskData.completed);
    const [modal, setModal] = useState<boolean>(false);

    const handleCompletion = (id: number) => {
        editStatus(id, !status).then(() => setStatus(!status));
    };

    const handleModal = () => {
        setModal(!modal);
    };

    return (
        <Card
            id={taskData.id as string}
            sx={{
                paddingBlock: "8px",
                paddingInline: "16px",
                borderRadius: "8px",
                border: `solid 1px ${colorPalette.component.secondary.border}`,
                backgroundColor: `${!isMobile ? colorPalette.component.secondary.background : colorPalette.component.main.background}`,
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
                        fontWeight : `${!isMobile ? "normal" : "bold"}`
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
                    <EditModal handleModal={handleModal} state={modal} taskData={taskData} dummyEdit={dummyEdit} />
                    <AuxButton type="editButton" onClick={handleModal} id={taskData.id} />
                    <AuxButton type="deleteButton" onClick={handleDeletion} id={taskData.id} />
                    {!isMobile ? <MainButton type="complete" content="Completed" status={status} onClick={() => handleCompletion(taskData.id)} /> : <MobileButton type="complete" status={status} onClick={() => handleCompletion(taskData.id)} />}
                </Box>
            </Box>
        </Card>
    );
}

export default TaskCard;
