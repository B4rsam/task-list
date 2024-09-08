import {TextField} from "@mui/material";
import {FC} from "react";

interface ITextField {
    label: string;
}
const TaskInput: FC<ITextField> = ({label}) => {
    return (
        <TextField
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
