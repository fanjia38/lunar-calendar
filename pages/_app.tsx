import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
