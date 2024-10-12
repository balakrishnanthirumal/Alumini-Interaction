import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from './store/store'
const config = {
  initialColorMode: "light",  // Default to light mode
  useSystemColorMode: false,  // Ignore the user's system preference
};
const theme = extendTheme({ config });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <Provider store={store}>
    <App />
    </Provider>
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
