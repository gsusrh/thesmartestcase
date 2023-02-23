import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useTransform  } from "framer-motion";

import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: "1",
      title: "Case Inteligente",
      image:
        "https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmaterial_piel_muestra.png?alt=media&token=0b45c1ae-328f-491e-8047-21d036b45ed2",
    },
    {
      id: "2",
      title: "Case Inteligente",
      image:
        "https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fnfc-payments.png?alt=media&token=c5468a7c-4fd5-40a0-bf95-60d1ab87abcf",
    },
  ];

  const Views = ({ view }) => {
    const [username, setusername] = useState("");
    const [business, setbusiness] = useState("");

    const inputRefPersonal = useRef(null);
    const inputRefBusiness = useRef(null);

    const handlePersonal = () => {
      inputRefPersonal.current.focus();
    };
    const handleBusiness = () => {
      inputRefBusiness.current.focus();
    };

    switch (view) {
      case "personal":
        return (
          <div className="plans-container personal">
            <div className="plans-container--title">
              <h3>Plan</h3>
              <h3>Personal</h3>
              <h4>Customizable smart case</h4>
                <div
                  className="viewLink-personal"
                  onClick={() => handlePersonal()}
                >
                  <span>since.bio/</span>
                  <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    ref={inputRefPersonal}
                  />
                </div>
                <div className="">
                  <button className="success_btn">Create your link</button>
                </div>

            </div>

            <div className="plans-container--description">
              <img
                className="invert"
                src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fnfc-payments.png?alt=media&token=c5468a7c-4fd5-40a0-bf95-60d1ab87abcf"
                alt=""
                width={40}
              />

              <div>
                <h4>Characteristics</h4>
                <p>Personalized link with a unique username</p>
                <p>NFC enabled for quick sharing</p>
                <p>Sleek and compact design for on-the-go use</p>
                <p>Durable case material to protect your phone</p>
                <p>Easy to update information on your link</p>
              </div>

              <div>

              </div>
            </div>
          </div>
        );
        break;
      case "business":
        return (
          <div className="plans-container business">
            <div className="plans-container--title">
              <h3>Plan</h3>
              <h3>Business</h3>
              <h4>Customizable smart case</h4>

              <div
                className="viewLink-business"
                onClick={() => handleBusiness()}
              >
                <input
                  type="text"
                  placeholder="business"
                  value={business}
                  onChange={(e) => setbusiness(e.target.value)}
                  ref={inputRefBusiness}
                />
                <span>.since.bio/</span>
              </div>
              <div className="">
                  <button className="success_btn">Create your domain</button>
              </div>

            </div>

            <div className="plans-container--description">
              <img
                className="invert"
                src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fnfc-payments.png?alt=media&token=c5468a7c-4fd5-40a0-bf95-60d1ab87abcf"
                alt=""
                width={40}
              />

              <div>
                <h4>Characteristics</h4>
                <p>Custom subdomain with your company name</p>
                <p>NFC enabled for quick sharing</p>
                <p>Sleek and compact design for on-the-go use</p>
                <p>Durable case material to protect your phone</p>
                <p>Create a link for each case for multiple employees</p>
                <p>Easy to update information on your link</p>
                <p>Advanced analytics and tracking for your links</p>
              </div>

            </div>
          </div>
        );
        break;

      default:
        <></>;
    }
  };

  const [view, setView] = useState("personal");
  
  const x = useMotionValue(0)
  const scale = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5])

  return (
    <>
      <main>
        <Header />
        <section className="section-initial">
          <div>
            <h1>
              The Smartest Case offers a unique way to facilitate the sharing of
              your contact information.
            </h1>
          </div>

          <div>
            {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmockup_base.png?alt=media&token=e8145251-43ba-4b51-9976-c6668d5f7279"
              alt=""
              width={200}
            /> */}
            <motion.img
            src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmockup_base.png?alt=media&token=e8145251-43ba-4b51-9976-c6668d5f7279"
            width={200}
            style={{ scale }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.05 }}
            />
            <img
              className="malla invert"
              src="https://thumbs.dreamstime.com/b/cuadr%C3%ADcula-de-forma-circular-malla-tiras-entrelazadas-elemento-c%C3%ADrculo-geom%C3%A9trico-ilustraci%C3%B3n-angular-semitonos-geom%C3%A9tricos-160263533.jpg"
              alt=""
              width={500}
            />
          </div>
          
        </section>

        <section className="section-nfc">

        <div className="loading-container">
            <div className="loading-circle loading-circle-1"></div>
            <div className="loading-circle loading-circle-2"></div>
            <div className="loading-circle loading-circle-3"></div>
        </div>

          <h2>
            The cases are equipped with nfc technology to share your
            personalized link.
          </h2>
          <div className="nfc-container">
            <h3>Sharing your link</h3>
            <div className="content">
              <div className="loader-circle">
                <img src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fsmartphone.png?alt=media&token=979da307-3e16-4845-83aa-1afa5cdf38cb" alt="" width={30} />
              </div>
              <div className="loader-line-mask">
                <div className="loader-line"> </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-plans">

          <ul>
            <li className={view === 'personal' ? 'active' : '' } onClick={() => setView("personal")}>
              <span>Plan</span>
              <span>Personal</span>
            </li>
            <li className={view === 'business' ? 'active' : '' } onClick={() => setView("business")}>
              <span>Plan</span>
              <span>Business</span>
            </li>
          </ul>

          <Views view={view} />
        </section>

        <section className="section-materials">
          <div className="list-cards">
            <div className="card-material">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmaterial_piel_muestra.png?alt=media&token=0b45c1ae-328f-491e-8047-21d036b45ed2"
                alt=""
                width={100}
              />
              <span>Leather Black</span>
            </div>

            <div className="card-material">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmaterial_piel_muestra_white.png?alt=media&token=2979fc31-8bfe-4150-9483-ef41dcb41e78"
                alt=""
                width={100}
              />
              <span>Leather White</span>
            </div>

            <div className="card-material">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmaterial_mate_muestra.png?alt=media&token=2c2788fa-188d-4a58-889d-fe13e9f7f42c"
                alt=""
                width={100}
              />
              <span>Mate Black</span>
            </div>

            <div className="card-material">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmaterial_mate_muestra_white.png?alt=media&token=5ea0a1d2-46fe-4dec-bf16-792756f5073d"
                alt=""
                width={100}
              />
              <span>Mate White</span>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Home;
