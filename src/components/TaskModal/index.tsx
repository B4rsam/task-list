import { Box, Modal, Typography } from "@mui/material";
import { FC, useState } from "react";
import colorPalette from "../../constants/colorPalette.ts";
import { AuxButton, MainButton, TaskInput } from "../../design-system";
import { ITask } from "../../interfaces/task.ts";
import { addTask } from "../../services/request";
import useViewController from "../../utils/useViewController.tsx";

interface IModal {
    handleModal: () => void;
    state: boolean;
}

const TaskModal: FC<IModal> = ({ handleModal, state }) => {
    const [isComplete, setComplete] = useState<boolean>(false);
    const INITIAL_STATE = {
        todo: undefined,
        completed: isComplete,
    };
    const [modalValue, setValue] = useState<Partial<ITask>>(INITIAL_STATE);
    const {
        dummyUpdate,
    } = useViewController();
    const [error, setError] = useState<boolean>(modalValue.todo === undefined || modalValue.todo === "");
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
            addTask(modalValue)
                .catch()
                .then(() => {
                    dummyUpdate(modalValue);
                })
                .finally(() => {
                    setComplete(false);
                    setValue(INITIAL_STATE);
                    setError(false);
                    handleModal();
                });
        }
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
                        Add new Task
                    </Typography>
                    <AuxButton type="cancel" onClick={handleModal} />
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

export default TaskModal;
