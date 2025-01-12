import { FC } from "react";
import colorPalette from "#/public/styles/colorPalette.ts";
import { Button } from "@mui/material";

interface IMenuButton {
    onClick?: () => void;
    content: string;
    disabled?: boolean;
    type?: string;
}
const MenuButton: FC<IMenuButton> = ({ onClick, disabled, content }) => {
    return (
        <Button
            variant="contained"
            disabled={disabled}
            startIcon=""
            onClick={onClick}
            type="submit"
            sx={{
                backgroundColor: colorPalette.button.mainBackgroundColor,
                color: colorPalette.button.mainColor,
                paddingInline: "16px",
                paddingBlock: "2px",
                lineHeight: "0",
                borderRadius: "8px",
                fontWeight: "bold",
                marginBlock: "2px",
                border: `1px solid ${colorPalette.component.main.border}`,
                boxShadow: `0 3px 1px ${colorPalette.button.mainShadow}`,
                display: "flex",
                alignItems: "center",
                height: "64px",
                width: "100%",
                maxWidth: "458px",
            }}
        >
            {content}
        </Button>
    );
};

export default MenuButton;
