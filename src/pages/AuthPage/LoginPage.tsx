import { Box, Typography } from "@mui/material";
import colorPalette from "#/public/styles/colorPalette.ts";
import { FC } from "react";
import { FieldInput, MainButton, MenuButton } from "@/design-system";
import { isMobile } from "@/utils/isMobile.ts";

interface ILoginPage {
    handleSubmit: (data: any) => void;
}
const LoginPage: FC<ILoginPage> = ({ handleSubmit }) => {
    const style = () => {
        if (isMobile) {
            return {
                paddingBlock: "32px",
                paddingInline: "24px",
                backgroundColor: colorPalette.component.main.background,
                borderRadius: "20px",
                height: "auto",
                maxHeight: "768px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
            };
        }
        return {
            paddingBlock: "32px",
            paddingInline: "16px",
            backgroundColor: `${isMobile ? colorPalette.component.main.background : "rgba(0,0,0,0)"}`,
            borderRadius: "20px",
            height: "auto",
            maxHeight: "768px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
        };
    };
    return (
        <Box sx={style()}>
            <form action={handleSubmit}>
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
                        marginBlock: "16px",
                    }}
                >
                    <FieldInput placeholder="Username" name="username" type="text" />
                    <Box sx={{ marginBlock: "4px" }} />
                    <FieldInput placeholder="Password" name="password" type="password" />
                </Box>
                {isMobile ? (
                    <MenuButton type="submit" content="Login" />
                ) : (
                    <MainButton type="submit" content="Login" />
                )}
            </form>
        </Box>
    );
};

export default LoginPage;
