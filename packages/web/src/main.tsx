import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import * as ReactDOM from 'react-dom/client'

import Router from './router'

import App from './app'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <App><Router></Router></App>
)
