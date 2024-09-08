import { Button } from "@mui/material";
import { FC } from "react";
import { MainButtonTypes } from "../../interfaces/buttons.ts";
import colorPallete from "../../constants/colorPallete.ts";

interface ITaskButton {
    type: MainButtonTypes;
    content: string;
}
const MainButton: FC<ITaskButton> = ({ type, content }) => {
    switch(type) {
        case "complete":
            return (
                <Button >
                    {content}
                </Button>
            );
        case "addButton":
        default:
            return (
                <Button
                    variant="contained"
                    type="text"
                    startIcon=""
                    sx={{
                        backgroundColor: colorPallete.button.mainBackgroundColor,
                        color: colorPallete.button.mainColor,
                        paddingInline: "16px",
                        paddingBlock: "2px",
                        lineHeight: "0",
                        borderRadius: "8px",
                        fontWeight: "bold",
                    }}
                >
                    {content}
                </Button>
            );
    }
}

export default MainButton