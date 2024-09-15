import {MainButtonTypes} from "../../interfaces/buttons.ts";
import {FC} from "react";
import { IconButton } from "@mui/material";
import colorPalette from "../../constants/colorPalette.ts";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from '@mui/icons-material/Done';

interface IMobileButton {
    type: MainButtonTypes;
    status?: boolean;
    onClick: () => void;
}
const MobileButton: FC<IMobileButton> = ({ type, status, onClick }) => {
    switch(type) {
        case "complete":
            return (
                <IconButton
                    onClick={onClick}
                    sx={{
                        width: "28px",
                        height: "28px",
                        marginBottom: "6px",
                        marginLeft: "4px",
                        backgroundColor: `${status ? colorPalette.button.mainBackgroundColor : colorPalette.button.auxBackgroundColor}`,
                        color: `${status ? colorPalette.button.mainColor : colorPalette.button.auxColor}`,
                    }}
                >
                    <DoneIcon />
                </IconButton>
            );
        case "addButton":
        default:
            return (
                <IconButton
                    onClick={onClick}
                    sx={{
                        width: "28px",
                        height: "28px",
                        backgroundColor: colorPalette.button.mainBackgroundColor,
                        color: colorPalette.button.mainColor,
                        position: "absolute",
                        right: "48px",
                        top: "12px",
                    }}
                >
                    <AddIcon />
                </IconButton>
            );
    }
};

export default MobileButton;
