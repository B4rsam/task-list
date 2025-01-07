import { Box, Card, Typography } from "@mui/material";
import { FC, useContext, useState } from "react";
// @ts-ignore
import AuxButton from "../../design-system/AuxButton";
import colorPalette from "../../../public/styles/colorPalette.ts";
import { MainButton, MobileButton } from "../../design-system";
import { TaskProvider } from "../../App.tsx";
import { editStatus } from "../../services/request.js";
import { isMobile } from "../../utils/isMobile.ts";
import { EditModal } from "../../components";

interface ITaskCard {
    id: number;
}
const TaskCard: FC<ITaskCard> = ({ id }) => {
    // @ts-ignore
    const { getTaskData, handleDeletion, dummyEdit } = useContext(TaskProvider);
    const taskData = getTaskData(id);
    const [status, setStatus] = useState<boolean>(taskData.status === "complete");
    const [modal, setModal] = useState<boolean>(false);

    const handleCompletion = (id: number) => {
        editStatus(id, !status).then(() => setStatus(!status));
    };

    const handleModal = () => {
        setModal(!modal);
    };

    const handlePriority = () => {
        switch(taskData.priority) {
            case 1:
                return colorPalette.priority.high;
            case 2:
                return colorPalette.priority.low;
            case 0:
            default:
                return colorPalette.priority.none;
        }
    };

    return (
        <Card
            id={taskData.id as string}
            sx={{
                paddingRight: "16px",
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
                <Box
                    sx={{
                        backgroundColor: handlePriority(),
                        width: "8px",
                        height: "60px",
                        marginRight: "8px",
                    }}
                />
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        color: colorPalette.textContent.taskContent,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "normal",
                        fontWeight : `${!isMobile ? "normal" : "bold"}`,
                        textAlign: "left",
                        marginBlock: "8px",
                    }}
                >
                    {taskData.body}
                </Typography>
                <Box
                    sx={{
                        alignItems: "flex-end",
                        display: "flex",
                        marginBlock: "8px",
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
