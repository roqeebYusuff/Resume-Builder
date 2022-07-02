import "../styles/globals.css";
import "../styles/scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import 'notiflix/dist/notiflix-notify-aio-3.2.5.min.js'

import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
