import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import XLSX from 'xlsx/xlsx.js';
import { useDropzone } from 'react-dropzone';

import Header from "../components/Header";

const BusinessOrder = () => {
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

  const [business, setbusiness] = useState("");

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

  const [order, setOrder] = useState([]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: '.xlsx',
    onDrop: (acceptedFiles) => {
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const products = XLSX.utils.sheet_to_json(firstSheet);
        setOrder(products);
      };
      acceptedFiles.forEach((file) => reader.readAsArrayBuffer(file));
    },
  });

  return (
    <>
      <Header />
      <main>
        <div className="changeOrderType">
          <Link className="text-personal" to="/personalorder">
            Change to personal order
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
          <h2>Create a subdomain with your business name</h2>
          <div className="viewLink-business" onClick={() => handleBusiness()}>
            <input
              type="text"
              placeholder="business"
              value={business}
              onChange={(e) => setbusiness(e.target.value)}
              ref={inputRefBusiness}
            />
            <span>.since.bio/</span>
          </div>

          <hr className="hr" />

          <h2>Case management</h2>
          <h4>Downloads</h4>

          <button className="download-btn">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FAdobe_Photoshop_CC_icon.png?alt=media&token=fb4b5afd-0db0-4964-816d-87cfea42e550"
              alt=""
              width={20}
            />
            <span>Template file</span>
          </button>
          <button className="download-btn">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FMicrosoft-Excel-Logo-2013.png?alt=media&token=ade81c24-3232-45fe-afbd-0b6c5fa4db7d"
              alt=""
              width={20}
            />
            <span>Mass order document</span>
          </button>

          <h4>Upload</h4>

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

          <div className="upload-btn" {...getRootProps()}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2FMicrosoft-Excel-Logo-2013.png?alt=media&token=ade81c24-3232-45fe-afbd-0b6c5fa4db7d"
              alt=""
              width={20}
            />
            <input  {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Load mass order details</p>
            )}
            <ul>
              {order.map((product) => (
                <li key={product.name}>
                  Name: {product.name}, Price: {product.price}, Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </div>

          <div className="complete-order">
            <button className="complete-order--btn">Complete order</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default BusinessOrder;
