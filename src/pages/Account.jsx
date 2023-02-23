import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Account.module.css";

const Views = ({ view }) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "jesus rodriguez",
  });

  switch (view) {
    case "personal":
      return (
        <>
          <h2>Personal info</h2>
          <hr className="hr" />
          <div className="form-address">
            <label htmlFor="">Full Name</label>
            <input
              className="inputSecound"
              type="text"
              name=""
              value={personalInfo.fullName}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, fullName: e.target.value })
              }
            />
            <label htmlFor="">Email</label>
            <input
              className="inputSecound"
              type="text"
              name=""
              value={personalInfo.fullName}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, fullName: e.target.value })
              }
            />
            <label htmlFor="">Password</label>
            <input
              className="inputSecound"
              type="text"
              name=""
              value={personalInfo.fullName}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, fullName: e.target.value })
              }
            />
          </div>
        </>
      );
      break;
    case "address":
      return (
        <>
          <h2>Address</h2>
          <hr className="hr" />
          <div className="form-address">
            <div className="form">
              <div>
                <label htmlFor=""></label>
                <input
                  className="input"
                  type="text"
                  name=""
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor=""></label>
                <input
                  className="input"
                  type="text"
                  name=""
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="form">
              <div>
                <label htmlFor=""></label>
                <input
                  className="input"
                  type="text"
                  name=""
                  placeholder="Street address"
                />
              </div>
              <div>
                <label htmlFor=""></label>
                <input
                  className="input"
                  type="text"
                  name=""
                  placeholder="Apt, suite, etc."
                />
              </div>
            </div>
            <div className="form">
              <div>
                <label htmlFor=""></label>
                <input
                  className="input"
                  type="text"
                  name=""
                  placeholder="City"
                />
              </div>
              <div>
                <label htmlFor=""></label>
                <input
                  className="input"
                  type="text"
                  name=""
                  placeholder="State"
                />
              </div>
            </div>
            <div className="form">
              <div>
                <label htmlFor=""></label>
                <input
                  className="input"
                  type="text"
                  name=""
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>
          <div className={styles.list_address}>
            <div>
              <div>Jesus Rodriguez</div>
              <div>8313 NW 68th St, Miami, FL 33166</div>
            </div>
          </div>
        </>
      );
      break;
    case "payments":
      return (
        <>
          <h2>Payments methods</h2>
          <hr className="hr" />
        </>
      );
      break;
    case "orders":
      return (
        <>
          <h2>Orders</h2>
          <hr className="hr" />
          <div className={styles.list_order}>
            <p>Orders list empty</p>
          </div>
        </>
      );
      break;
    default:
      return <></>;
      break;
  }
};

const Account = () => {
  const [view, setView] = useState("personal");

  return (
    <>
      <Header />
      <main>
        <section className={styles.section_profile}>
          <div className={styles.side_bar}>
            <nav className={styles.nav}>
              <ul>
                <li
                  className={view === "personal" ? styles.activate : ""}
                  onClick={() => setView("personal")}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="7" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </span>
                  <span>Personal info</span>
                </li>
                <li
                  className={view === "cases" ? styles.activate : ""}
                  onClick={() => setView("orders")}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-device-mobile"
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
                      <rect x="7" y="4" width="10" height="16" rx="1" />
                      <line x1="11" y1="5" x2="13" y2="5" />
                      <line x1="12" y1="17" x2="12" y2="17.01" />
                    </svg>
                  </span>
                  <span>Personal Cases</span>
                </li>
                <li
                  className={view === "domains" ? styles.activate : ""}
                  onClick={() => setView("orders")}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="9" />
                      <line x1="3.6" y1="9" x2="20.4" y2="9" />
                      <line x1="3.6" y1="15" x2="20.4" y2="15" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                  </span>
                  <span>Domains</span>
                </li>
                <li
                  className={view === "address" ? styles.activate : ""}
                  onClick={() => setView("address")}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-map-2"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="18" y1="6" x2="18" y2="6.01" />
                      <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                      <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                      <line x1="9" y1="4" x2="9" y2="17" />
                      <line x1="15" y1="15" x2="15" y2="20" />
                    </svg>
                  </span>
                  <span>Address</span>
                </li>
                <li
                  className={view === "payments" ? styles.activate : ""}
                  onClick={() => setView("payments")}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-wallet"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                      <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                    </svg>
                  </span>
                  <span>Payment methods</span>
                </li>
                <li
                  className={view === "orders" ? styles.activate : ""}
                  onClick={() => setView("orders")}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-truck-delivery"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="7" cy="17" r="2" />
                      <circle cx="17" cy="17" r="2" />
                      <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                      <line x1="3" y1="9" x2="7" y2="9" />
                    </svg>
                  </span>
                  <span>Orders</span>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.content_profile}>
            <Views view={view} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Account;
