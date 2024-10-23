import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import ImageDisplay from './ImageDisplay.jsx'
import { Description } from './Description.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Greeting /> */}
    {/* has to be capitalized! */}
    {/* <ImageDisplay /> */}
    {/* <Description /> */}
    <App />
  </StrictMode>,
)
