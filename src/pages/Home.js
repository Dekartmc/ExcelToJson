import React, { useState } from "react";
import xlsx from 'xlsx';

import Logo from "../assets/img/Michael Flores Logo 600.png"

export default function Home(props) {

  const [ObjData, setObjData] = useState({});
  //const [MyJSON, setMyJSON] = useState("");

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        console.log(json);
        setObjData(json);

        //setMyJSON("Informacion copiada");

      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  return (

    <div className="w-full">
      <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
        <img
          alt=""
          class="bg w-full h-full object-cover object-center absolute z-0"
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <img
            alt=""
            src={Logo}
            class="h-24 w-24 object-cover" />
          <h1 class="text-2xl font-semibold">Convert Excel (xlsx) to Json</h1>
          <h2 class="text-sm font-semibold">
            <a href="https://michaelfs.com">www.michaelfs.com</a>
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="container mx-24 bg-white rounded shadow-lg">
          <div className="px-12 py-6">
            <div className="text-center">
              <label className="font-normal text-3xl text-grey-darkest leading-loose my-3 w-full" htmlFor="upload">Upload File</label>
              {/* <h1 className="font-normal text-3xl text-grey-darkest leading-loose my-3 w-full">Become a Stripe Partner today</h1> */}
              <div className="w-full text-center">
                <form action="#">
                  <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
                    <input
                      type="file"
                      name="upload"
                      id="upload"
                      onChange={readUploadFile}
                      className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none" />
                    {/* <button type="submit" className="appearance-none bg-indigo text-white text-base font-semibold tracking-wide uppercase p-3 rounded shadow hover:bg-indigo-light">Get started</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mx-24 rounded shadow-lg">
            <div className="py-5 bg-gray-50">
              <h1 className="text-2xl font-bold">Result:</h1>
              {/* <button onClick={() => navigator.clipboard.writeText({ MyJSON })}>
                Copy
              </button> */}
              <pre>
                <code>
                  {JSON.stringify(ObjData, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
