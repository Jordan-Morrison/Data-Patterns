import React from 'react';
import SCLabsHeader from '../components/molecules/SCLabsHeader';
import GCHeader from '../components/molecules/GCHeader';
import Footer from '../components/organisms/Footer';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {

    return (
        <React.Fragment>
            <SCLabsHeader t={pageProps.t}/>
            <GCHeader t={pageProps.t} langLink={pageProps.langLink ? pageProps.langLink : pageProps.hasOwnProperty(t) && pageProps.t.locale ? pageProps.t.locale != "en" ? "/" : "/fr" : null}/>
            <Component {...pageProps} />
            <Footer infoPanel={pageProps.infoPanel} t={pageProps.t}/>
        </React.Fragment>
    )
};
