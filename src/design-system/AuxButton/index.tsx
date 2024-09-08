import { AuxButtonTypes } from "../../interfaces/buttons.ts";
import { FC } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IAuxButton {
    type: AuxButtonTypes;
}
const AuxButton: FC<IAuxButton> = ({ type }) => {
    switch (type) {
        case "editButton":
            return (
                <IconButton>
                    <EditIcon />
                </IconButton>
            );
        case "deleteButton":
        default:
            return (
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            );
    }
}

export default AuxButton;
