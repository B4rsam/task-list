import { Box, Modal, Typography } from "@mui/material";
import { FC, useState } from "react";
import colorPalette from "../../constants/colorPalette.ts";
import { AuxButton, MainButton, TaskInput } from "../../design-system";
import { ITask } from "../../interfaces/task.ts";

interface IModal {
    handleModal: () => void;
    state: boolean;
    taskData: ITask;
    dummyEdit: (id: number, data: any) => void;
}

const EditModal: FC<IModal> = ({ handleModal, state, taskData, dummyEdit }) => {
    const [isComplete, setComplete] = useState<boolean>(false);
    const [modalValue, setValue] = useState<Partial<ITask>>(taskData);
    const [error, setError] = useState<boolean>(modalValue.todo === undefined || modalValue.todo === "");
    const handleClose = () => {
        setValue(taskData);
        setComplete(taskData.completed);
        setError(false);
        handleModal();
    };
    const handleInput = (func: 0 | 1, value: undefined | boolean | string) => {
        switch(func) {
            case 0:
                setValue({
                    ...modalValue,
                    todo: value as string,
                });
                if (value === "") {
                    setError(true);
                } else {
                    setError(false);
                }
                break;
            case 1:
                setValue({
                    ...modalValue,
                    completed: !isComplete,
                });
                setComplete(!isComplete);
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        if (modalValue.todo === "" || modalValue.todo === undefined) {
            setError(true);
        } else if (!error) {
            dummyEdit(taskData.id, modalValue as ITask);
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
                    boxShadow: `0 3px 1px ${colorPalette.component.secondary.shadow}`,
                    border: `1px solid ${colorPalette.component.secondary.border}`
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
                        alignItems: "center",
                    }}
                >
                    <TaskInput label="Todo" value={modalValue.todo} onChange={(e) => handleInput(0, e.target.value)} />
                    <Box
                        sx={{
                            marginBlock: "4px",
                        }}
                    />
                    <MainButton type="complete" onClick={() => handleInput(1, undefined)} status={isComplete} />
                </Box>
                <MainButton type="submit" content="Submit" onClick={handleSubmit} disabled={error} />
            </Box>
        </Modal>
    )
};

export default EditModal;
