import { AuxButtonTypes } from "../../interfaces/buttons.ts";
import { FC } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { editTask } from "../../services/request";
import CloseIcon from '@mui/icons-material/Close';
import colorPalette from "../../constants/colorPalette.ts";
import { isMobile } from "../../utils/isMobile.ts";

interface IAuxButton {
    type: AuxButtonTypes;
    onClick: (id?: number, text?: string | undefined) => void;
    id?: number;
}
const AuxButton: FC<IAuxButton> = ({ type, onClick, id }) => {
    const handleEdit = (id) => {
        // const input = prompt("Enter new task details:");
        // if (input != null) {
        //     editTask(id, input).then(() => {
        //         onClick(id, input);
        //     });
        // }
        // return;
        onClick(id);
    };

    switch (type) {
        case "cancel":
            return (
                <IconButton
                    onClick={() => onClick()}
                    sx={{
                        alignItems: "top",
                        color: colorPalette.component.main.background,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            )
        case "editButton":
            return (
                <IconButton
                    onClick={() => handleEdit(id)}
                    sx={{
                        color: `${!isMobile ? colorPalette.component.main.background : colorPalette.button.mainBackgroundColor}`,
                    }}
                >
                    <EditIcon />
                </IconButton>
            );
        case "deleteButton":
        default:
            return (
                <IconButton
                    onClick={() => onClick(id as number, undefined)}
                    sx={{
                        color: `${!isMobile ? colorPalette.component.main.background : colorPalette.button.mainBackgroundColor}`,
                    }}
                >
                    <DeleteIcon />
                </IconButton>
            );
    }
}

export default AuxButton;
