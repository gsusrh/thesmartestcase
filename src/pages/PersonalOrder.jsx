import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../components/Header";

const PersonalOrder = () => {
  const materials = [
    {
      id: 1,
      name: "Leather Black",
      url: "https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FIphone_14_pro_max_case_leather_black.png?alt=media&token=9b77dea2-bc7d-4a39-aa76-450cbd13f29b",
      cover:
        "https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmaterial_piel_muestra.png?alt=media&token=0b45c1ae-328f-491e-8047-21d036b45ed2",
    },
    {
      id: 2,
      name: "Leather White",
      url: "https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FIphone_14_pro_max_case_leather_white.png?alt=media&token=d1035e85-7d02-44de-8aaf-6f1fa5db7ae3",
      cover:
        "https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmaterial_piel_muestra_white.png?alt=media&token=2979fc31-8bfe-4150-9483-ef41dcb41e78",
    },
    {
      id: 3,
      name: "Mate Black",
      url: "https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FIphone_14_pro_max_case_black.png?alt=media&token=44298dff-c04d-417e-ab58-1f4c21e5c79d",
      cover:
        "https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmaterial_mate_muestra.png?alt=media&token=2c2788fa-188d-4a58-889d-fe13e9f7f42c",
    },
    {
      id: 4,
      name: "Mate White",
      url: "https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FIphone_14_pro_max_case_white.png?alt=media&token=6a06f55a-72ea-4ca8-b83d-d0bc82e93fbb",
      cover:
        "https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fmaterial_mate_muestra_white.png?alt=media&token=5ea0a1d2-46fe-4dec-bf16-792756f5073d",
    },
  ];

  const [username, setusername] = useState("");

  const inputRefPersonal = useRef(null);
  const inputRefBusiness = useRef(null);

  const handlePersonal = () => {
    inputRefPersonal.current.focus();
  };

  const handleBusiness = () => {
    inputRefBusiness.current.focus();
  };

  const [selectedImageId, setSelectedImageId] = useState(1);
  const selectedImage = materials.filter(
    (image) => image.id === selectedImageId
  )[0];

  const [selectedCaseType, setSelectedCaseType] = useState(1);

  return (
    <>
      <Header />
      <main>
        <div className="changeOrderType">
          <Link className="text-business" to="/businessorder">
            Change to business order
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-replace"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#999999"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="3" width="6" height="6" rx="1" />
                <rect x="15" y="15" width="6" height="6" rx="1" />
                <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
                <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
              </svg>
            </i>
          </Link>
        </div>
        <section className="section-order">
          <h2>Generate your personalized link</h2>
          <div className="viewLink-personal" onClick={() => handlePersonal()}>
            <span>since.bio/</span>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              ref={inputRefPersonal}
            />
          </div>

          <hr className="hr" />

          <h2>Materials available</h2>

          <div className="container-view-material">
            <img src={selectedImage.url} alt="" width={200} />

            <div className="container-view-material--list">
              {materials.map((material) => (
                <div
                  className={
                    material.id === selectedImageId
                      ? "card-material activate"
                      : "card-material"
                  }
                  onClick={(e) => setSelectedImageId(material.id)}
                >
                  <img src={material.cover} alt="" width={60} />
                  <span>{material.name}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="hr" />

          <h2>Add your design</h2>
          <h4>Download template</h4>

          <button className="download-btn">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FAdobe_Photoshop_CC_icon.png?alt=media&token=fb4b5afd-0db0-4964-816d-87cfea42e550"
              alt=""
              width={20}
            />
            <span>Template file</span>
          </button>


          <h4>Upload design</h4>
          <button className="upload-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-file-upload"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <line x1="12" y1="11" x2="12" y2="17" />
              <polyline points="9 14 12 11 15 14" />
            </svg>
            <span>Upload design</span>
          </button>

          <hr className="hr" />

          <h2>Designs available</h2>
          <div className="container-case-type">
            <img
              onClick={(e) => setSelectedCaseType(1)}
              className={selectedCaseType === 1 ? "select" : ""}
              src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fleather_case_black.png?alt=media&token=d2f2185f-b284-44f7-910a-c20ed8a2921a"
              alt=""
              width={186}
            />
            <img
              onClick={(e) => setSelectedCaseType(2)}
              className={selectedCaseType === 2 ? "select" : ""}
              src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FIphone_14_pro_max_case.png?alt=media&token=d6e6f09d-a8e4-42e7-a020-588df7fcf49c"
              alt=""
              width={160}
            />
          </div>
          

          <div className="complete-order">
            <button className="complete-order--btn">Complete order</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default PersonalOrder;
