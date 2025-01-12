import { Box, Typography } from "@mui/material";
import { isMobile } from "@/utils/isMobile.ts";
import colorPalette from "#/public/styles/colorPalette.ts";
import { FieldInput, MainButton, MenuButton } from "@/design-system";
import { FC } from "react";

interface ISignupPage {
    handleSubmit: (data: any) => void;
    handleReturn: () => void;
}
const SignupPage: FC<ISignupPage> = ({ handleSubmit, handleReturn }) => {
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
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            color: colorPalette.textContent.main,
                            fontWeight: "bold",
                        }}
                    >
                        Sign Up
                    </Typography>
                    <MenuButton content="Back" onClick={handleReturn} />
                </Box>
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
                    <MenuButton type="submit" content="Signup" />
                ) : (
                    <MainButton type="submit" content="Signup" />
                )}
            </form>
        </Box>
    );
};

export default SignupPage;
