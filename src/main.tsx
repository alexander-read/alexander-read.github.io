import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import './styles/styles.css'
import App from './App'

// Mantine <Text> reads its size from the theme, not from body/CSS,
// so the base body-copy size is set here.
const theme = createTheme({
    fontFamily: '"Roboto", Inter, Helvetica, Arial, sans-serif',
    fontSizes: {
        xs: '0.8125rem',
        sm: '0.9375rem',
        md: '1.0625rem',
        lg: '1.1875rem',
        xl: '1.3125rem',
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>,
)