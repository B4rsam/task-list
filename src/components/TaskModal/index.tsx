import { Box, Modal, Typography } from "@mui/material";
import { FC, useState } from "react";
import colorPalette from "@/constants/colorPalette.ts";
import { AuxButton, MainButton, TextAreaCustom } from "@/design-system";
import { ITask } from "@/interfaces/task.ts";
import { addTask } from "@/services/request.js";

interface IModal {
    handleModal: () => void;
    state: boolean;
    dummyUpdate: (inTask: ITask) => void;
}

const TaskModal: FC<IModal> = ({ handleModal, state, dummyUpdate }) => {
    const [isComplete, setComplete] = useState<boolean>(false);
    const INITIAL_STATE = {
        todo: undefined,
        completed: isComplete,
    };
    const [modalValue, setValue] = useState<Partial<ITask>>(INITIAL_STATE);
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
                .then((response: any) => {
                    dummyUpdate(response.data);
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
                    border: `1px solid ${colorPalette.component.secondary.border}`
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "left",
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
                        alignItems: "center",
                    }}
                >
                    <TextAreaCustom placeHolder={"Enter Task Details..."} onChange={(e) => handleInput(0, e.target.value)}/>
                    <Box
                        sx={{
                            marginBlock: "4px",
                        }}
                    />
                    {/*<MainButton type="complete" onClick={() => handleInput(1, undefined)} status={isComplete} />*/}
                </Box>
                <MainButton type="submit" content="Submit" onClick={handleSubmit} disabled={error} />
            </Box>
        </Modal>
    )
};

export default TaskModal;
