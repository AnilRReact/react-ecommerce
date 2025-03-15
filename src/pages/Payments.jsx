import React, { useState } from "react";

const Payments = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Choose Payment Method</h1>
      <div className="border p-4 rounded-lg shadow-lg max-w-md">
        {/* UPI Options */}
        <button
          onClick={() => setSelectedPayment("PhonePe")}
          className={`w-full text-left p-3 border rounded mb-2 ${
            selectedPayment === "PhonePe" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          Pay via PhonePe
        </button>

        <button
          onClick={() => setSelectedPayment("Google Pay")}
          className={`w-full text-left p-3 border rounded mb-2 ${
            selectedPayment === "Google Pay" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          Pay via Google Pay
        </button>

        <button
          onClick={() => setSelectedPayment("Paytm")}
          className={`w-full text-left p-3 border rounded mb-2 ${
            selectedPayment === "Paytm" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          Pay via Paytm
        </button>

        {/* Credit Card Option */}
        <button
          onClick={() => setSelectedPayment("Credit Card")}
          className={`w-full text-left p-3 border rounded mb-2 ${
            selectedPayment === "Credit Card" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          Pay via Credit Card
        </button>

        {/* EMI Option */}
        <button
          onClick={() => setSelectedPayment("EMI")}
          className={`w-full text-left p-3 border rounded mb-2 ${
            selectedPayment === "EMI" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          EMI Payment
        </button>

        {/* Pay Later (SimplePay) Option */}
        <button
          onClick={() => setSelectedPayment("Pay Later")}
          className={`w-full text-left p-3 border rounded ${
            selectedPayment === "Pay Later" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          Pay Later (SimplePay)
        </button>

        {/* Payment Form */}
        {selectedPayment && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">{selectedPayment} Details</h2>

            {selectedPayment === "PhonePe" ||
            selectedPayment === "Google Pay" ||
            selectedPayment === "Paytm" ? (
              <input
                type="text"
                placeholder="Enter UPI ID or Phone Number"
                className="w-full p-2 border rounded mt-2"
              />
            ) : null}

            {selectedPayment === "Credit Card" && (
              <>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border rounded mt-2"
                />
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  className="w-full p-2 border rounded mt-2"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full p-2 border rounded mt-2"
                />
              </>
            )}

            {selectedPayment === "EMI" && (
              <select className="w-full p-2 border rounded mt-2">
                <option value="3">3 Months EMI</option>
                <option value="6">6 Months EMI</option>
                <option value="12">12 Months EMI</option>
              </select>
            )}

            {selectedPayment === "Pay Later" && (
              <p className="mt-2 text-gray-600">
                Pay Later with **SimplePay**. No interest for the first 30 days!
              </p>
            )}

            <button className="w-full mt-4 bg-green-500 text-white p-3 rounded hover:bg-green-600">
              Proceed to Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;
