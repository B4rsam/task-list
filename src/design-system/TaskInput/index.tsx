import { TextField } from "@mui/material";
import { FC } from "react";

interface ITextField {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}
const TaskInput: FC<ITextField> = ({ label, onChange, value = "" }) => {
    return (
        <TextField
            onChange={onChange}
            value={value}
            variant="outlined"
            label={label}
            sx={{
                borderRadius: "8px",
                backgroundColor: "white",
            }}
        />
    )
};

export default TaskInput;
