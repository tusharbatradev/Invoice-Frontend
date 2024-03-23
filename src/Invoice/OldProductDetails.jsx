import { Radio, FormControlLabel, Stack, Typography, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

function OldProductDetails() {
    const [selectedOption, setSelectedOption] = useState('');
    const [loading, setLoading] = useState(true);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Stack spacing={1} alignItems="flex-start" padding={'16px'}>
            {loading ?
                <Skeleton height={'25px'} width={'350px'} />
                :
                <Typography lineHeight={'25px'} fontFamily="Poppins" fontWeight={500}>
                    Is the customer selling an old product?
                </Typography>
            }

            {loading ?
                <Stack direction={'row'} spacing={'8px'}>
                    <Skeleton width={80} height={40} />
                    <Skeleton width={80} height={40} />
                </Stack>
                :
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
            }
        </Stack>
    );
}

export default OldProductDetails;
