import { TextField } from "@mui/material";
import { FC } from "react";

interface IFieldInput {
    label?: string;
    name: string;
    type: string;
    placeholder?: string;
}
const FieldInput: FC<IFieldInput> = ({ label, name, type, placeholder }) => {
    return (
        <TextField
            label={label}
            placeholder={placeholder ?? label}
            name={name}
            type={type}
            fullWidth
            sx={{
                borderRadius: "10px",
                backgroundColor: "white",
                maxWidth: "448px",
                width: "100%",
            }}
        />
    );
};

export default FieldInput;
