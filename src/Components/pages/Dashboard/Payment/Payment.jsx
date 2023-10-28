import { loadStripe } from "@stripe/stripe-js";
// import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCourse from "../../../hooks/useCourse";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [ classes ] = useCourse()
    const price = classes.reduce((sum, currentPrice) => {
        return sum + currentPrice.price;
    }, 0);
    console.log(classes);

    return (
        <div className="w-7/12 mx-auto my-16">
            {/* <Helmet>
                <title>TopSpin || Payment</title>
            </Helmet> */}

            <h2>Single Card Payment</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;