import Layout from '../components/Layout'; 
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout 
      hideHeader={Component.hideHeader} 
      hideFooter={Component.hideFooter}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
