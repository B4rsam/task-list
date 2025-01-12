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
            id={name}
            sx={{
                borderRadius: "10px",
                backgroundColor: "white",
            }}
        />
    );
};

export default FieldInput;
