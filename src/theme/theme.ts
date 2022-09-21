import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/barlow/700.css';
import '@fontsource/material-icons';

import { solarized } from './colors';

import { createTheme } from '@mui/material';


export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: solarized.cyan,
        },
        secondary: {
            main: solarized.yellow,
        },
        text: {
            primary: solarized.base1,
            secondary: solarized.base0,
        },
        background: {
            default: solarized.base03,
        },
        divider: solarized.base01,
    },
    components: {
        MuiSvgIcon: {
            defaultProps: {
                htmlColor: solarized.base1,
            },
        },
    },
    typography: {
        fontFamily: [
            'Barlow',
            'sans-serif',
        ].join(','),
        h1: {
            fontFamily: '"VisbyCFBold"',
        },
        h2: {
            fontFamily: '"VisbyCFBold"',
        },
        h3: {
            fontFamily: '"VisbyCFBold"',
        },
        h4: {
            fontFamily: '"VisbyCFBold"',
        },
        h5: {
            fontFamily: '"VisbyCFBold"',
        },
        h6: {
            fontFamily: '"VisbyCFBold"',
        },
        body2: {
            fontSize: "1.3rem",
        }
    },
});