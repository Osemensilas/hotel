import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, hideHeader, hideFooter }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The Palm Haven Hotel" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="shortcut icon" href="" type="image/x-icon" />
      </Head>

      {!hideHeader && <Header />}

      <main id="main">{children}</main>

      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
