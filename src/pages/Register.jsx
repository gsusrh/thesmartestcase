import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from './Register.module.css'

const Register = () => {

  const [state, setstate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ""
  });

  const handleRegister = (e) => {
    e.preventDefault()
    if(state.password !== state.repeatPassword)
    {
      alert('Password no coincide')
    }    
  }

  return (
    <>
      <Header />
      <main>

        <section className={styles.section_register}>


            <div className={styles.content_register}>

              <h1>
                Start sharing your contact information in a modern and fast way.
              </h1>
              <h2>
                The Smartest Case offers a unique way to facilitate the sharing of
                your contact information.
              </h2>
              
            </div>

            <form className={styles.form_register} onSubmit={(e) => handleRegister(e)}> 
                <h2>
                  Create an account
                </h2>  
                <div className={styles.container_inputs}>
                    <input className="input" type="text" name="" placeholder="First name" value={state.firstName} onChange={(e) => setstate({...state, firstName: e.target.value})} />
                    <input className="input" type="text" name="" placeholder="Last name" value={state.lastName} onChange={(e) => setstate({...state, lastName: e.target.value})} />
                </div> 
                <div>
                    <input className="input" type="email" name="" placeholder="Email" value={state.email} onChange={(e) => setstate({...state, email: e.target.value})} />
                </div>              
                <div className={styles.container_inputs}>
                    <input className="input" type="password" name="" placeholder="Password" value={state.password} onChange={(e) => setstate({...state, password: e.target.value})} />
                    <input className="input" type="password" name="" placeholder="Repeat Password" value={state.repeatPassword} onChange={(e) => setstate({...state, repeatPassword: e.target.value})} />
                </div>  
                <div className={styles.container_option}>
                    <input type="checkbox" name="" />
                    <span>You agree to our Terms of Service and Privacy Policy</span>
                </div> 
                <div className="">
                  <button className={styles.login_btn} type="submit">Sign Up</button>
                </div>            
            </form>

        </section>

        <Footer />
      </main>
    </>
  );
};

export default Register;
