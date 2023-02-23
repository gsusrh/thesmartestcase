import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Orders = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section-process-order">

          <h1>Order</h1>

          <div className="list-items">

            <div className="card-order">
                <img
                src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FIphone_14_pro_max_case_leather_black.png?alt=media&token=9b77dea2-bc7d-4a39-aa76-450cbd13f29b"
                alt=""
                width={100}
                />
                <div className="card-order--content">
                    <div>
                        <div className="card-order--title">
                            <h2 className="h2Personal">since.bio/gsusrh</h2>
                            <h2>30$</h2>
                        </div>
                        <div className="card-order-info">
                            <span>Type:</span>
                            <span>Personal</span>
                        </div>
                        <div className="card-order-info">
                            <span>Material:</span>
                            <span>Mate</span>
                        </div>
                        <div className="card-order-info">
                            <span>Color:</span>
                            <span>Black</span>
                        </div>
                    </div>

                    <div className="container-item-remove">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-bucket"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 9l-2 9a2 2.5 0 0 1 -2 2h-6a2 2.5 0 0 1 -2 -2l-2 -9z" />
                        <path d="M7 9a5 5 0 0 1 10 0" />
                        </svg>
                    </div>

                </div>
            </div>

            <div className="card-order">
                <img
                src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FIphone_14_pro_max_case_leather_black.png?alt=media&token=9b77dea2-bc7d-4a39-aa76-450cbd13f29b"
                alt=""
                width={100}
                />
                <div className="card-order--content">
                    <div>
                        <div className="card-order--title">
                            <h2 className="h2Business">empresa.since.bio</h2>
                            <h2>30$</h2>
                        </div>
                        <div className="card-order-info">
                            <span>Type:</span>
                            <span>Business</span>
                        </div>
                        <div className="card-order-info">
                            <span>Material:</span>
                            <span>Leather</span>
                        </div>
                        <div className="card-order-info">
                            <span>Color:</span>
                            <span>Black</span>
                        </div>
                        <div className="card-order-info">
                            <span>Units:</span>
                            <span>30</span>
                        </div>
                    </div>

                    <div className="container-item-remove">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-bucket"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 9l-2 9a2 2.5 0 0 1 -2 2h-6a2 2.5 0 0 1 -2 -2l-2 -9z" />
                        <path d="M7 9a5 5 0 0 1 10 0" />
                        </svg>
                    </div>

                </div>
            </div>

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

export default Orders;
