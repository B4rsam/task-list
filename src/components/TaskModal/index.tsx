import { Box, Modal, Typography } from "@mui/material";
import { FC, useState } from "react";
import colorPalette from "#/public/styles/colorPalette.ts";
import { AuxButton, MainButton, TextAreaCustom } from "../../design-system";
import { ITask, priorities } from "@/interfaces/task.ts";
// @ts-ignore
import { PrioritySelector } from "../../components";

interface IModal {
    handleModal: () => void;
    state: boolean;
    handleSubmit: (inTask: Partial<ITask>) => void;
}

const TaskModal: FC<IModal> = ({ handleModal, state, handleSubmit }) => {
    const INITIAL_STATE = {
        body: undefined,
    };
    const [modalValue, setValue] = useState<Partial<ITask>>(INITIAL_STATE);
    const [priority, setPriority] = useState<priorities>(0);
    const [error, setError] = useState<boolean>(true);
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
    const handleClose = () => {
        setValue(INITIAL_STATE);
        setPriority(0);
        setError(true);
        handleModal();
    };

    const onSubmit = () => {
        if (!error && modalValue.body && modalValue.body !== "") {
            handleSubmit({ ...modalValue, priority });
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
                    <AuxButton type="cancel" onClick={handleClose} />
                </Box>
                <Box
                    sx={{
                        marginTop: "16px",
                        marginBottom: "32px",
                        alignItems: "center",
                    }}
                >
                    <TextAreaCustom
                        placeHolder={"Enter Task Details..."}
                        onChange={(e: any) => handleInput(e.target.value)}
                    />
                    <Box
                        sx={{
                            marginBlock: "8px",
                        }}
                    />
                    <PrioritySelector value={priority} setValue={setPriority} />
                </Box>
                <MainButton type="submit" content="Submit" onClick={onSubmit} disabled={error} />
            </Box>
        </Modal>
    );
};

export default TaskModal;
