import {Box, Button} from "@mui/material";
import { FC } from "react";
import { MainButtonTypes } from "../../interfaces/buttons.ts";
import colorPalette from "../../constants/colorPalette.ts";
import AddIcon from '@mui/icons-material/Add';

interface ITaskButton {
    type: MainButtonTypes;
    content: string;
    status?: boolean;
    onClick: (any) => void;
}
const MainButton: FC<ITaskButton> = ({ type, content, status, onClick }) => {
    switch(type) {
        case "complete":
            return (
                <Button
                    sx={{
                        width: "128px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        backgroundColor: `${status ? colorPalette.button.mainBackgroundColor : colorPalette.button.auxBackgroundColor}`,
                        color: `${status ? colorPalette.button.mainColor : colorPalette.button.auxColor}`,
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
                    type="text"
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