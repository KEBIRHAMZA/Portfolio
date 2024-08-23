import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import global_en from './languages/en/global.json'
import global_fr from './languages/fr/global.json'
import i18next from "i18next"
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation : {escapeValue : false},
  lng : "en",
  resources : {
    en : {
      global : global_en
    },
    fr : {
      global : global_fr
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n = {i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
