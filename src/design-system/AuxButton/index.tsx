import { AuxButtonTypes } from "../../interfaces/buttons.ts";
import {FC, ReactNode} from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IAuxButton {
    type: AuxButtonTypes;
}
const AuxButton: FC<IAuxButton> = ({ type, ...props }) => {
    switch (type) {
        case "editButton":
            return (
                <IconButton {...props as ReactNode}>
                    <EditIcon />
                </IconButton>
            );
        case "deleteButton":
        default:
            return (
                <IconButton {...props as ReactNode}>
                    <DeleteIcon />
                </IconButton>
            );
    }
}

export default AuxButton;
