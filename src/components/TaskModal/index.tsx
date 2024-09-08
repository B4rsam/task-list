import { Box, Modal, Typography } from "@mui/material";
import { FC } from "react";
import colorPalette from "../../constants/colorPalette.ts";
import { AuxButton, MainButton, TaskCheckBox, TaskInput } from "../../design-system";

interface IModal {
    handleModal: () => void;
    state: boolean;
}

const TaskModal: FC<IModal> = ({ handleModal, state }) => {
    const handleSubmit = () => {
        console.log("a")
    };

    return (
        <Modal
            open={state}
            onClose={handleModal}
            sx={{
                zIndex: "4501",
            }}
        >
            <Box
                sx={{
                    width: "256px",
                    backgroundColor: colorPalette.component.secondary.background,
                    borderRadius: "8px",
                    marginTop: "24vh",
                    marginInline: "auto",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <Box sx={{ width: "34px" }} />
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            color: colorPalette.textContent.taskLabel,
                        }}
                    >
                        Add new Task
                    </Typography>
                    <AuxButton type="cancel" onClick={handleModal} />
                </Box>
                <Box
                    sx={{
                        marginBlock: "16px",
                    }}
                >
                    <TaskInput label="Todo"/>
                    <TaskCheckBox label="Completed"/>
                </Box>
                <MainButton type="submit" content="Submit" onClick={handleSubmit}/>
            </Box>
        </Modal>
    )
};

export default TaskModal;
