import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import ImportedScripts from './ImportedScripts';

export default function Layout({ children }) {
    return (
        <div className="Layout">
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet" /> 
                <title>Joseph's Gallery</title>
            </Head>
            <Header />
            <div className="Content">
                {children}
            </div>
            <Footer />
            <ImportedScripts />
        </div>
    )
}