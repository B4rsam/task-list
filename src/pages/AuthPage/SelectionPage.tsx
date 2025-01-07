import { Box } from "@mui/material";
import { MenuButton } from "@/design-system";
import { FC } from "react";
import { pages } from "@/interfaces/authPage.interfaces.ts";
import { isMobile } from "@/utils/isMobile.ts";
import colorPalette from "#/public/styles/colorPalette.ts";

interface ISelectionPage {
    handlePage: (page: pages) => void;
}
const SelectionPage: FC<ISelectionPage> = ({ handlePage }) => {
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
        // @ts-ignore
        <Box sx={style()}>
            <MenuButton type="submit" onClick={() => handlePage(1)} content="Login" />
            <Box sx={{ marginBlock: "8px" }} />
            <MenuButton type="submit" onClick={() => handlePage(2)} content="Sign up" />
        </Box>
    );
};

export default SelectionPage;
