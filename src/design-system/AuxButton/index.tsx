import { AuxButtonTypes } from "@/interfaces/buttons.ts";
import { FC } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from '@mui/icons-material/Close';
import colorPalette from "@/constants/colorPalette.ts";
import { isMobile } from "@/utils/isMobile.ts";

interface IAuxButton {
    type: AuxButtonTypes;
    onClick: (id?: number, text?: string | undefined) => void;
    id?: number;
}
const AuxButton: FC<IAuxButton> = ({ type, onClick, id }) => {
    const handleEdit = (id: number) => {
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
                        position: "absolute",
                        top: "-5px",
                        right: `${!isMobile ? "-180px" : "-28vw" }`,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            )
        case "editButton":
            return (
                <IconButton
                    onClick={() => handleEdit(id as number)}
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
