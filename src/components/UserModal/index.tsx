import { Box, Modal, Typography } from "@mui/material";
import { FC, useState } from "react";
import colorPalette from "#/public/styles/colorPalette.ts";
import { AuxButton, MainButton, TaskInput } from "../../design-system";
// @ts-ignore
import { userLogin } from "@/services/auth";

interface IUserModal {
    state: boolean;
    handleModal: () => void;
}
interface IModalValue {
    username: string | undefined;
    password: string | undefined;
}
const UserModal: FC<IUserModal> = ({ state, handleModal }) => {
    const INITIAL_STATE = {
        username: undefined,
        password: undefined,
    };
    const [modalValue, setValue] = useState<IModalValue>(INITIAL_STATE);
    const [error, setError] = useState<boolean>(false);
    const handleInput = (field: 0 | 1, value: string) => {
        switch (field) {
            case 0:
                setValue({
                    ...modalValue,
                    username: value,
                });
                break;
            case 1:
                setValue({
                    ...modalValue,
                    password: value,
                });
                break;
        }
        // if (modalValue.password === "" || modalValue.username === "" || modalValue.password === undefined || modalValue.username === undefined) {
        //     setError(true);
        // } else if (modalValue.password !== "" && modalValue.username !== "" && modalValue.password !== undefined && modalValue.username !== undefined) {
        //     setError(false);
        // }
    };
    const handleSubmit = () => {
        console.log(modalValue);
        if (!error) {
            userLogin(modalValue).finally(() => {
                setValue(INITIAL_STATE);
                setError(true);
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
                border: "none",
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
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        color: colorPalette.textContent.main,
                        fontWeight: "bold",
                    }}
                >
                    User Login
                </Typography>
                <AuxButton type="cancel" onClick={handleModal} />
                <Box
                    sx={{
                        marginBlock: "8px",
                    }}
                >
                    <TaskInput
                        label="Username"
                        onChange={(e) => handleInput(0, e.target.value)}
                        type="text"
                        value={modalValue.username}
                    />
                    <Box sx={{ marginBlock: "4px" }} />
                    <TaskInput
                        label="Password"
                        onChange={(e) => handleInput(1, e.target.value)}
                        type="password"
                        value={modalValue.password}
                    />
                </Box>
                <MainButton
                    type="submit"
                    onClick={handleSubmit}
                    content="Submit"
                    disabled={error}
                />
            </Box>
        </Modal>
    );
};

export default UserModal;
