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
            placeholder={label}
            maxLength={128}
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
