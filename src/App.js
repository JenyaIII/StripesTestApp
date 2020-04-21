import React from 'react';
import './App.css';

import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
	const stripe = useStripe();

	return (
		<form className="checkoutForm">
			<img
				className="checkoutObject"
				src="https://www.apple.com/v/mac/home/ao/images/overview/hero/macbook_air__csdfieli984m_large.jpg"
				alt="magazine"
			/>
			<h2>Price: $780 USD</h2>
			<CardElement />
			<button type="submit" disabled={!stripe} className="payThis">
				Pay
			</button>
		</form>
	);
};

const stripePromise = loadStripe('pk_test_4RNbN71ILTJjNN6KCTndGLDG00CmKwjOcX');

function App() {
	return (
		<div className="App">
			<h1>Stripe Billing System Page</h1>
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements>
		</div>
	);
}

export default App;
