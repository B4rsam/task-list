import colorPalette from "#/public/styles/colorPalette.ts";
import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { priorities } from "@/interfaces/task.ts";

const PrioritySelector = ({
    value,
    setValue,
}: {
    value: priorities;
    setValue: (val: priorities) => void;
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography
                sx={{
                    color: colorPalette.textContent.main,
                }}
            >
                Task Priority:
            </Typography>
            <ToggleButtonGroup value={value}>
                <ToggleButton
                    sx={{
                        color: `${value === (2 as priorities) ? colorPalette.button.mainColor : colorPalette.button.mainBackgroundColor}`,
                        backgroundColor: `${value === (2 as priorities) ? colorPalette.button.mainBackgroundColor : colorPalette.button.auxBackgroundColor}`,
                    }}
                    value={2}
                    onClick={() => setValue(2 as priorities)}
                >
                    Low
                </ToggleButton>
                <ToggleButton
                    sx={{
                        color: `${value === (1 as priorities) ? colorPalette.button.mainColor : colorPalette.button.mainBackgroundColor}`,
                        backgroundColor: `${value === (1 as priorities) ? colorPalette.button.mainBackgroundColor : colorPalette.button.auxBackgroundColor}`,
                    }}
                    value={1}
                    onClick={() => setValue(1 as priorities)}
                >
                    High
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};

export default PrioritySelector;
