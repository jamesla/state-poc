import type { AppProps } from 'next/app'
import { StoreProvider } from '../store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
