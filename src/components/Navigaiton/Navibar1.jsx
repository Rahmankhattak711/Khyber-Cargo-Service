// import React from "react";
// import {
//   FaClock,
//   FaEnvelope,
//   FaPhone,
//   FaArrowAltCircleRight,
//   FaUnlock,
// } from "react-icons/fa";
// import { Select } from "antd";

// function Navibar1() {
//   return (
//     <nav class="top_nav h-8 bg-gray-700 flex justify-between items-center pl-10 pr-10">
//       {/* Left */}
//       <div className="left_nav flex justify-between items-center text-white gap-4">
//         <div className="email flex justify-center items-center gap-2 border-r-2 pr-4">
//           <FaEnvelope className="text-red-600 text-lg" />
//           mutocartoonkids@gmail.com
//         </div>
//         <div className="number flex justify-center items-center gap-2  border-r-2 pr-4">
//           <FaPhone className="text-red-600 text-lg" /> 03265226336
//         </div>
//         <div className="time flex justify-center items-center gap-2">
//           <FaClock className="text-red-600 text-lg" /> 9:00 AM To 8:00 PM
//         </div>
//       </div>
//       {/* Right */}
//       <div className="right_nav flex justify-between items-center text-white gap-8">
//         <div className="login flex justify-center items-center gap-2  border-r-2 pr-4">
//           <FaArrowAltCircleRight /> Login
//         </div>
//         <div className="customer flex justify-center items-center gap-2  border-r-2 pr-4">
//           <FaUnlock /> Registration
//         </div>
//         <div className="country">
//           <Select
//             labelInValue
//             defaultValue={{
//               value: "Pakistan",
//               label: "Pakistan",
//             }}
//             style={{
//               width: 120,
//             }}
//             // onChange={handleChange}
//             options={[
//               {
//                 value: "Pakistan",
//                 label: "Pakistan",
//               },
//               {
//                 value: "Afghanistan",
//                 label: "Afghanistan",
//               },
//             ]}
//           />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navibar1;


import React from "react";
import {
  FaClock,
  FaEnvelope,
  FaPhone,
  FaArrowAltCircleRight,
  FaUnlock,
} from "react-icons/fa";
import { Select } from "antd";

function Navibar1() {
  return (
    <nav className="top_nav bg-gray-700 lg:bg-gray-700 flex flex-col lg:flex-row justify-between items-center pl-4 lg:pl-10 pr-4 lg:pr-10">
      {/* Left */}
      <div className="left_nav flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white gap-2 lg:gap-4 lg:border-r-2 lg:pr-4">
        <div className="email flex justify-center items-center gap-2 lg:border-r-2 lg:pr-4">
          <FaEnvelope className="text-red-600 text-lg" />
          mutocartoonkids@gmail.com
        </div>
        <div className="number flex justify-center items-center gap-2 lg:border-r-2 lg:pr-4">
          <FaPhone className="text-red-600 text-lg" /> 03265226336
        </div>
        <div className="time flex justify-center items-center gap-2">
          <FaClock className="text-red-600 text-lg" /> 9:00 AM To 8:00 PM
        </div>
      </div>
      {/* Right */}
      <div className="right_nav flex flex-row justify-center items-center text-white gap-2">
        <div className="login flex justify-center items-center gap-2 lg:border-r-2 lg:pr-4">
          <FaArrowAltCircleRight /> Login
        </div>
        <div className="customer flex justify-center items-center gap-2 lg:border-r-2 lg:pr-4">
          <FaUnlock /> Registration
        </div>
        <div className="country mt-2 lg:mt-0">
          <Select
            labelInValue
            defaultValue={{
              value: "Pakistan",
              label: "Pakistan",
            }}
            style={{
              width: 120,
            }}
            options={[
              {
                value: "Pakistan",
                label: "Pakistan",
              },
              {
                value: "Afghanistan",
                label: "Afghanistan",
              },
            ]}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navibar1;
