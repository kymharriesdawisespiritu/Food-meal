import React from "react";
import { Link } from "react-router-dom";
function Services() {
  return (
    <>
      <div
        style={{
          marginTop: "11vh",
          marginBottom: "11vh",
          placeItems: "center",
        }}
      >
        <section className="py-20  ">
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Our Services</h1>
            <p className="text-lg mb-4">
              Discover the variety of services we offer to make your food
              experience unforgettable.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Food Delivery</h2>
            <p className="text-lg mb-4">
              Get your favorite food delivered right to your doorstep with our
              fast and reliable delivery service.
            </p>
            <ul className="list-disc ml-4 mb-4">
              <li>Fast delivery within 30 minutes</li>
              <li>Real-time tracking of your order</li>
              <li>Wide variety of cuisines to choose from</li>
            </ul>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Food Pickup</h2>
            <p className="text-lg mb-4">
              Order online and pick up your food at your convenience with our
              pickup service.
            </p>
            <ul className="list-disc ml-4 mb-4">
              <li>Order online and pick up at your convenience</li>
              <li>No delivery fees or minimums</li>
              <li>Easy and convenient pickup process</li>
            </ul>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Catering Services</h2>
            <p className="text-lg mb-4">
              Let us help you plan and execute your event with our catering
              services.
            </p>
            <ul className="list-disc ml-4 mb-4">
              <li>Customized menus for your event</li>
              <li>Professional and friendly staff</li>
              <li>Flexible catering options to fit your needs</li>
            </ul>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Get Started Today!</h2>
            <p className="text-lg mb-4">
              Ready to experience the best food platform? Sign up now and start
              ordering!
            </p>
            <Link
              to="/signin"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Signin
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
