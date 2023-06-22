import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Xcursions Pixel on Facebook
    import('react-facebook-pixel').then((x) => {
      x.default.init('801857154803217');
      x.default.pageView();
    });

  });

  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
