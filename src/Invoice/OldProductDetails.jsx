import { Radio, FormControlLabel, Stack, Typography } from "@mui/material";
import { useState } from "react";

function OldProductDetails() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Stack spacing={1} alignItems="flex-start" padding={'16px'}>
            <Typography fontFamily="Poppins" fontWeight={500}>
                Is the customer selling an old product?
            </Typography>

            <Stack direction={'row'} spacing={'8px'}>
                <FormControlLabel
                    control={<Radio sx={{
                        m: 0,
                        '&.Mui-checked': {
                            color: '#0c1526',
                        },
                    }} />}
                    label="Yes"
                    value="yes"
                    checked={selectedOption === 'yes'}
                    onChange={handleOptionChange}
                    sx={{ m: 0 }}
                />
                <FormControlLabel
                    control={<Radio sx={{
                        m: 0,
                        '&.Mui-checked': {
                            color: '#0c1526',
                        },
                    }} />}
                    label="No"
                    value="no"
                    checked={selectedOption === 'no'}
                    onChange={handleOptionChange}
                    sx={{ m: 0 }}
                />
            </Stack>
        </Stack>
    );
}

export default OldProductDetails;
