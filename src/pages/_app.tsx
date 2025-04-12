import { AppProps } from 'next/app';
import Script from 'next/script';
import '../pages/styles/global.css';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import { DashboardLayout } from '../components/Ui/Chatbot/ChatbotDashboard';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto px-1 md:px-1 bg-white text-black">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-PFTRMBCTFQ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PFTRMBCTFQ', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <div className="flex flex-col container mx-auto px-1 md:px-1 bg-white text-black">
        <Header />
        <main className="flex-grow">
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;