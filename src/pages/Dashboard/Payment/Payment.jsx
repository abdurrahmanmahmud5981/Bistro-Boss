import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from "./CheckOutForm";

// TODO:add key 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)

const Payment = () => {
  return (
    <div>
        <SectionTitle heading={'Payment'} subHeading={'Please pay to eat'}/>
        {/* payment gateway */}
        <div className="">
            <Elements stripe={stripePromise}>
                <CheckOutForm/>
            </Elements>
        </div>
    </div>
  )
}

export default Payment