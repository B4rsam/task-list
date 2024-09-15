import { Box } from "@mui/material";
import s from "./textarea.module.css";
import { FC } from "react";
import { isMobile } from "../../utils/isMobile.ts";
interface ITextArea {
    placeHolder: string;
    onChange: (e: any) => void;
}
const TextAreaCustom: FC<ITextArea> = ({ placeHolder, onChange }) => {
    return (
        <Box
            sx={{
                padding: "8px",
                borderRadius: "10px",
                backgroundColor: "white",
                width: `${!isMobile ? "446px" : "80vw"}`,
            }}
        >
            <textarea className={s.textArea} placeholder={placeHolder} maxLength={128} rows={5} onChange={onChange}></textarea>
        </Box>
    );
};

export default TextAreaCustom;
