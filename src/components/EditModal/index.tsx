import { Box, Modal, Typography } from "@mui/material";
import { FC, useState } from "react";
import colorPalette from "#/public/styles/colorPalette.ts";
import { AuxButton, MainButton, TextAreaCustom } from "@/design-system";
import { ITask } from "@/interfaces/task.ts";
import { PrioritySelector } from "@/components";

interface IModal {
    handleModal: () => void;
    state: boolean;
    taskData: ITask;
    handleEdit: (id: number, data: any) => void;
}

const EditModal: FC<IModal> = ({ handleModal, state, taskData, handleEdit }) => {
    const [modalValue, setValue] = useState<Partial<ITask>>(taskData);
    const [error, setError] = useState<boolean>(
        modalValue.body === undefined || modalValue.body === ""
    );
    const handleClose = () => {
        setValue(taskData);
        setError(false);
        handleModal();
    };
    const handleInput = (value: undefined | string) => {
        setValue({
            ...modalValue,
            body: value as string,
        });
        if (value === "") {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleSubmit = () => {
        if (modalValue.body === "" || modalValue.body === undefined) {
            setError(true);
        } else if (!error) {
            handleEdit(taskData.id, modalValue as ITask);
            setError(false);
            handleModal();
        }
    };

    return (
        <Modal
            open={state}
            onClose={handleClose}
            sx={{
                zIndex: "4501",
                paddingInline: "16px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    maxWidth: "512px",
                    width: "100%",
                    backgroundColor: colorPalette.component.secondary.background,
                    borderRadius: "8px",
                    marginTop: "24vh",
                    marginInline: "16px",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: `0 3px 1px ${colorPalette.component.secondary.shadow}`,
                    border: `1px solid ${colorPalette.component.secondary.border}`,
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
                            color: colorPalette.textContent.main,
                            fontWeight: "bold",
                        }}
                    >
                        Edit Task
                    </Typography>
                    <AuxButton type="cancel" onClick={handleClose} />
                </Box>
                <Box
                    sx={{
                        marginTop: "16px",
                        marginBottom: "32px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <TextAreaCustom
                        placeHolder={"Enter Task Details..."}
                        onChange={(e: any) => handleInput(e.target.value)}
                        value={taskData.body}
                    />
                    <Box
                        sx={{
                            marginBlock: "8px",
                        }}
                    />
                    <PrioritySelector />
                </Box>
                <MainButton
                    type="submit"
                    content="Submit"
                    onClick={handleSubmit}
                    disabled={error}
                />
            </Box>
        </Modal>
    );
};

export default EditModal;
