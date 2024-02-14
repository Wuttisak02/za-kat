import * as React from 'react';
import Typography from '@mui/material/Typography';

interface PageTitleProps {
    children?: React.ReactNode;
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <Typography component="h2" variant="h6" color="primary" sx={{pt: 4, pb: 4}}>
            {props.children}
        </Typography>
    );
}