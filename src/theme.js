import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
    ...(mode === 'dark' 
    ? {
        grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#434957",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        redAccent: {
          100: "#ffe6e6",
          200: "#ffcdce",
          300: "#ffb3b5",
          400: "#ff9a9d",
          500: "#ff8184",
          600: "#cc676a",
          700: "#994d4f",
          800: "#663435",
          900: "#331a1a"
        },
        greenAccent: {
          100: "#e2fbe3",
          200: "#c4f7c6",
          300: "#a7f4aa",
          400: "#89f08d",
          500: "#6cec71",
          600: "#56bd5a",
          700: "#418e44",
          800: "#2b5e2d",
          900: "#162f17"
        },
        blueAccent: {
            100: "#d7f0ff",
            200: "#afe2ff",
            300: "#88d3ff",
            400: "#60c5ff",
            500: "#38b6ff",
            600: "#2d92cc",
            700: "#226d99",
            800: "#164966",
            900: "#0b2433"
        },
    } : {
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
        },
        primary: {
            100: "#020305",
            200: "#080b12",
            300: "#0c101b",
            400: "#101624",
            500: "#fcfcfc",
            600: "#434957",
            700: "#727681",
            800: "#a1a4ab",
            900: "#fff",
        },
        redAccent: {
          100: "#331a1a",
          200: "#663435",
          300: "#994d4f",
          400: "#cc676a",
          500: "#ff8184",
          600: "#ff9a9d",
          700: "#ffb3b5",
          800: "#ffcdce",
          900: "#ffe6e6",
        },
        greenAccent: {
          100: "#162f17",
          200: "#2b5e2d",
          300: "#418e44",
          400: "#56bd5a",
          500: "#6cec71",
          600: "#89f08d",
          700: "#a7f4aa",
          800: "#c4f7c6",
          900: "#e2fbe3",
        },
        blueAccent: {
            100: "#0b2433",
            200: "#164966",
            300: "#226d99",
            400: "#2d92cc",
            500: "#38b6ff",
            600: "#60c5ff",
            700: "#88d3ff",
            800: "#afe2ff",
            900: "#d7f0ff",
        },
    })
})

//mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.blueAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[700],
                    light: colors.grey[100]
                },
                background: {
                    default: colors.primary[500],
                }
            } : {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.blueAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[700],
                    light: colors.grey[100]
                },
                background: {
                    default: "#fcfcfc",
                }
            })
        },
        typography: {
            fontFamily: ["Poppins", 'sans-serif'].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Poppins", 'sans-serif'].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Poppins", 'sans-serif'].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Poppins", 'sans-serif'].join(","),
                fontSize: 28,
            },
            h4: {
                fontFamily: ["Poppins", 'sans-serif'].join(","),
                fontSize: 24,
            },
            h5: {
                fontFamily: ["Poppins", 'sans-serif'].join(","),
                fontSize: 20,
            },
            h6: {
                fontFamily: ["Poppins", 'sans-serif'].join(","),
                fontSize: 15,
            },
            span: {
                fontFamily: ["Poppins", 'sans-serif'].join(","),
                fontSize: 10,
            },
        }
    };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
            setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}