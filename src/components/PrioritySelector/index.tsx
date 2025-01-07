import colorPalette from "#/public/styles/colorPalette.ts";
import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

const PrioritySelector = () => {
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
            <ToggleButtonGroup
                sx={{
                    backgroundColor: colorPalette.component.secondary.background,
                }}
            >
                <ToggleButton value={3}>Low</ToggleButton>
                <ToggleButton value={1}>High</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};

export default PrioritySelector;
