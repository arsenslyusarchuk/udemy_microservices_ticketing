import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className='container'>
        <Component {...pageProps} currentUser={currentUser} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async appContext => {
  console.log('AppComponent.getInitialProps');
  const appProps = await App.getInitialProps(appContext);

  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  return {
    ...appProps,
    ...data
  };
};

export default AppComponent;
