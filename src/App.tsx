import './index.css'

import { QueryClientProvider } from 'node_modules/@tanstack/react-query/build/legacy'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
          <Helmet titleTemplate="%s | Pizzashop" />
          <Toaster richColors />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  )
}
