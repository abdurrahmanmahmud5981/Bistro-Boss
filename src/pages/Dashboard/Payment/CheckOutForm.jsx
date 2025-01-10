import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((prev, current) => {
    return prev + current.price;
  }, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.name || "anonymous",
            email: user.email || "",
          },
        },
      });
    if (confirmError) {
      console.log("error in confirmeroor", confirmError);
      setError(confirmError.message);
      return;
    } else {
      console.log("payment intent ", paymentIntent);
      // add order to db
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id ", paymentIntent.id);
        setTransectionId(paymentIntent.id);
        const paymetn = {
          email: user.email,
          price: totalPrice,
          transectionId:paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };
        // TODO: add order to db  and update cart to empty
        const res = await axiosSecure.post("/payments", paymetn);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            title: "Payment Successful",
            icon: "success",
            confirmButtonText: "Continue Shopping",
          });
          navigate('/dashboard/paymentHistory');
        }
        console.log(res.data);
        
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary px-9 text-lg mt-6"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        {error && (
          <div>
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}
        {transectionId && (
          <div>
            <p className="text-green-600 text-lg">
              {" "}
              your transectionId is : {transectionId}
            </p>
          </div>
        )}{" "}
      </form>
    </div>
  );
};

export default CheckOutForm;
