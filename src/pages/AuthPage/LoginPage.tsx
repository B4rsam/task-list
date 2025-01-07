import { Box, Typography } from "@mui/material";
import colorPalette from "#/public/styles/colorPalette.ts";
import { FC } from "react";
import { FieldInput, MainButton } from "@/design-system";

interface ILoginPage {
    handleSubmit: (data: any) => void;
}
const LoginPage: FC<ILoginPage> = ({ handleSubmit }) => {
    return (
        <Box
            sx={{
                maxWidth: "512px",
                width: "100%",
                borderRadius: "8px",
                marginInline: "16px",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <form onSubmit={handleSubmit}>
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
                <Box
                    sx={{
                        marginBlock: "8px",
                    }}
                >
                    <FieldInput placeholder="Username" name="label" type="text" />
                    <Box sx={{ marginBlock: "4px" }} />
                    <FieldInput placeholder="Password" name="password" type="password" />
                </Box>
                <MainButton type="submit" content="Login" />
            </form>
        </Box>
    );
};

export default LoginPage;
