import { Box, Button } from "@mui/material";
import { FC } from "react";
import { MainButtonTypes } from "@/interfaces/buttons.ts";
import colorPalette from "@/constants/colorPalette.ts";
import AddIcon from '@mui/icons-material/Add';

interface ITaskButton {
    type: MainButtonTypes;
    content?: string;
    status?: boolean;
    onClick: () => void;
    disabled?: boolean;
}
const MainButton: FC<ITaskButton> = ({ type, content, status, disabled = false, onClick }) => {
    switch(type) {
        case "submit":
            return (
                <Button
                    variant="contained"
                    disabled={disabled}
                    startIcon=""
                    onClick={onClick}
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
                        height: "24px!important",
                        width: "100%",
                    }}
                >
                    {content}
                </Button>
            );
        case "complete":
            return (
                <Button
                    sx={{
                        width: "128px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        backgroundColor: `${status ? colorPalette.button.mainBackgroundColor : colorPalette.button.auxBackgroundColor}`,
                        color: `${status ? colorPalette.button.mainColor : colorPalette.button.auxColor}`,
                        boxShadow: `0 3px 1px ${status ? colorPalette.button.mainShadow : colorPalette.button.auxShadow}`,
                    }}
                    onClick={onClick}
                >
                    {status ? "Completed" : "Complete"}
                </Button>
            );
        case "addButton":
        default:
            return (
                <Button
                    variant="contained"
                    startIcon=""
                    onClick={onClick}
                    sx={{
                        backgroundColor: colorPalette.button.mainBackgroundColor,
                        color: colorPalette.button.mainColor,
                        paddingInline: "16px",
                        paddingBlock: "2px",
                        lineHeight: "0",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        marginBlock: "2px",
                        border: `1px solid ${colorPalette.component.secondary.border}`,
                        boxShadow: `0 3px 1px ${colorPalette.button.mainShadow}`,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <AddIcon />
                    <Box sx={{ marginInline: "3px" }}/>
                    {content}
                </Button>
            );
    }
}

export default MainButton