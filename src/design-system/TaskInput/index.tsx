import { TextField } from "@mui/material";
import { FC } from "react";

interface ITextField {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type: string;
}
const TaskInput: FC<ITextField> = ({ label, onChange, value = "", type }) => {
    return (
        <TextField
            onChange={onChange}
            value={value}
            variant="outlined"
            placeholder={label}
            type={type}
            fullWidth
            sx={{
                borderRadius: "10px",
                backgroundColor: "white",
                maxWidth: "448px",
                width: "100%",
            }}
        />
    )
};

export default TaskInput;
