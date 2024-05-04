import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider'
import App from 'app/App'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

import 'shared/config/i18n/i18n'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
)
