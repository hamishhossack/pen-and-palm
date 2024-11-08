/* global process */
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Provider } from 'react-redux';

import '../style/scss/style.scss';
import { useStore } from '../store';
import commerce from '../lib/commerce';
import { setCustomer } from '../store/actions/authenticateActions';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialState);
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      // has API key
      setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY));
    }

    store.dispatch(setCustomer());

    commerce.products.list().then((res) => {
      store.dispatch({
        type: 'STORE_PRODUCTS',
        payload: res.data,
      });
    });

    commerce.categories.list().then((res) => {
      store.dispatch({
        type: 'STORE_CATEGORIES',
        payload: res.data,
      });
    });
  }, [store]);

  return (
    <Provider store={store}>
      <Component {...pageProps} stripe={stripePromise} />
    </Provider>
  );
};

export default MyApp;
