import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Login.module.css";

const Login = () => {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const [viewPassword, setVirePassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main>
        <section className={styles.section_login}>
          <div className={styles.content_login}>
            <h1>
              The Smartest Case offers a unique way to facilitate the sharing of
              your contact information.
            </h1>
            <h2>Get the smartest case and customize it.</h2>
          </div>

          <form className={styles.form_login} onChange={(e) => handleLogin(e)}>
            <h2>Login to your account</h2>
            <div>
              <input
                className="input"
                type="email"
                name=""
                placeholder="Email"
              />
            </div>
            <div className={styles.input_password}>
              {viewPassword === false ? (
                <>
                  <input
                    className="input"
                    type="password"
                    name=""
                    placeholder="Password"
                    value={state.password}
                    onChange={(e) =>
                      setstate({ ...state, password: e.target.value })
                    }
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eye-off"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#999"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={(e) => setVirePassword(true)}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="3" y1="3" x2="21" y2="21" />
                    <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                    <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                  </svg>
                </>
              ) : (
                <>
                  <input
                    className="input"
                    type="text"
                    name=""
                    placeholder="Password"
                    value={state.password}
                    onChange={(e) =>
                      setstate({ ...state, password: e.target.value })
                    }
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eye"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={(e) => setVirePassword(false)}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                  </svg>
                </>
              )}
            </div>
            <div className={styles.container_session}>
              <div className={styles.keep_session}>
                <input type="checkbox" name="" />
                <span>Keep me login</span>
              </div>
              <div>
                <Link to={"/signup"}>
                  <span>Recovery password</span>
                </Link>
              </div>
            </div>
            <div className="">
              <button className={styles.login_btn}>Log In</button>
            </div>
            <div className={styles.redirec_register}>
              <span>Dont have an account?</span>
              <Link to={"/signup"}>
                <span>Join free</span>
              </Link>
            </div>
          </form>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Login;
