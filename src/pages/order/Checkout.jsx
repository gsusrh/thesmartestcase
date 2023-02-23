import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Checkout = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section-process-payment">

          <h1>Checkout</h1>

          <div className="form-address">
          <h2>Shipping address</h2>
            <div className="form">  
                <div>
                    <label htmlFor=""></label>
                    <input className="input" type="text" name="" placeholder="First name" />
                </div>              
                <div>
                    <label htmlFor=""></label>
                    <input className="input" type="text" name="" placeholder="Last name" />
                </div>              
            </div>
            <div className="form">
                <div>
                    <label htmlFor=""></label>
                    <input className="input" type="text" name="" placeholder="Street address" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input className="input" type="text" name="" placeholder="Apt, suite, etc." />
                </div>
            </div>
            <div className="form">
                <div>
                    <label htmlFor=""></label>
                    <input className="input" type="text" name="" placeholder="City" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input className="input" type="text" name="" placeholder="State" />
                </div>
            </div>
            <div className="form">
                <div>
                    <label htmlFor=""></label>
                    <input className="input" type="text" name="" placeholder="Phone number" />
                </div>
            </div>
          </div>


          <hr className="hr" />

          <h2>Payment methods</h2>
          <div className="list-payment-methods">
            <img className="invert" src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fcredit-card.png?alt=media&token=388c82f0-a496-49ec-bdd7-d45b9a0a428a" alt="" width={40} />
            <img src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fpaypal.png?alt=media&token=71794464-5b6a-46a7-b2bb-49b65917abb3" alt="" width={60} />
            <img src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fstripe.png?alt=media&token=ae76f520-fab7-4af3-9d14-307bb9b88e4a" alt="" width={40} />
          </div>

          <hr className="hr" />

          <div className="container-payment">
            <div className="container-payment--cost">
              <span>Subtotal</span>
              <span>$30</span>
            </div>
            <div className="container-payment--cost">
              <span>Taxes</span>
              <span>$0</span>
            </div>
            <div className="container-payment--cost">
              <span>Total</span>
              <span>$30</span>
            </div>
            <div className="process-payment">
              <button className="process-payment--btn">Continue to checkout</button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Checkout;
