// 'use client'
// import Image from "next/image";
// import { useState } from "react";
// import { FaUser, FaCar, FaWallet, FaBell, FaLock } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";

// interface SidebarProps {
//   setActiveView?: (view: string) => void; // Define the type of setActiveView
// }

// export default function Sidebar({ setActiveView }: SidebarProps) {
//   const [isPassengersOpen, setIsPassengersOpen] = useState(false); // State to toggle dropdown
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to toggle sidebar visibility

//   return (
//     <div >
//       {/* Mobile Toggle Button */}
//       <button
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         className="p-2 bg-gray-900 text-white fixed top-4 left-4 z-50 rounded-lg md:hidden"
//       >
//         ☰
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } transform transition-transform fixed md:translate-x-0 z-40 bg-gray-900 text-white h-screen flex-col p-4 overflow-y-auto max-h-screen`}
//     //  style={{height:'650px',width:'170px'}}
//       >
//         {/* User Info */}
//         <div className="flex items-center space-x-3 mb-6">
//           <Image src={require("../../img/user.png")} alt="User" className="w-12 h-12 rounded-full" width={60} // Width of the image
//             height={60} // Height of the image
//           />
//           <div>
//             <h2 className="text-xl font-semibold">Name : Munem </h2>
//             <p className="text-gray-400">Role : Admin</p>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav>
//           <ul className="space-y-4">
//             <li
//               onClick={() => setActiveView("Dashboard")}
//               className="text-lg flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2"
//             >
//               <MdDashboard />
//               <span>Dashboard</span>
//             </li>
//             <li
//               onClick={() => setActiveView("Reports")}
//               className="text-lg flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2"
//             >
//               <MdDashboard />
//               <span>Reports</span>
//             </li>
//             <li className="text-lg flex flex-col space-y-2">
//               <div
//                 onClick={() => {
//                   setActiveView("UsersList")
//                   setIsPassengersOpen(!isPassengersOpen)
//                 }} // Toggle dropdown
//                 className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2"
//               >
//                 <FaUser />
//                 <span>User</span>
//               </div>
//               {isPassengersOpen && (
//                 <ul className="pl-8 space-y-2 text-sm">
//                   <li
//                     onClick={() => setActiveView("UsersList")}
//                     className="hover:text-gray-400 cursor-pointer"
//                   >
//                     User List
//                   </li>
//                   <li
//                     onClick={() => setActiveView("AddDriver")}
//                     className="hover:text-gray-400 cursor-pointer"
//                   >
//                     Add Driver
//                   </li>
//                   <li
//                     onClick={() => setActiveView("AddPassenger")}
//                     className="hover:text-gray-400 cursor-pointer"
//                   >
//                     Add Passenger
//                   </li>
//                   {/* <li
//                     onClick={() => setActiveView("PassengerHistory")}
//                     className="hover:text-gray-400 cursor-pointer"
//                   >
//                     User History
//                   </li> */}
//                 </ul>
//               )}
//             </li>
//             {/* <li
//               onClick={() => setActiveView("main")}
//               className="text-lg flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2"
//             >
//               <FaCar />
//               <span>Drivers</span>
//             </li>
//             <li
//               onClick={() => setActiveView("dashboard")}
//               className="text-lg flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2"
//             >
//               <FaWallet />
//               <span>Wallets</span>
//             </li>
//             <li
//               onClick={() => setActiveView("main")}
//               className="text-lg flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2"
//             >
//               <FaBell />
//               <span>Notifications</span>
//             </li>
//             <li
//               onClick={() => setActiveView("dashboard")}
//               className="text-lg flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2"
//             >
//               <FaLock />
//               <span>Settings</span>
//             </li> */}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }

'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaCar, FaWallet, FaBell, FaLock } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

export default function Sidebar() {
  const [isPassengersOpen, setIsPassengersOpen] = useState(false); // State to toggle dropdown
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to toggle sidebar visibility
  const router = useRouter();

  const navigateTo = (view: string) => {
    router.push(`/?view=${view}`);
  };

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="p-2 bg-gray-900 text-white fixed top-4 left-4 z-50 rounded-lg md:hidden"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          transform transition-transform fixed md:translate-x-0 z-40 bg-gray-900 text-white h-screen flex-col p-4 overflow-y-auto max-h-screen`}
        style={{width:'19%'}}
      >
        {/* User Info */}
        <div className="flex items-center space-x-3 mb-6">
          <Image
            src={require('../../img/user.png')}
            alt="User"
            className="w-12 h-12 rounded-full"
            width={60}
            height={60}
          />
          <div>
            <h2 className="text-xl font-semibold">Name: Munem</h2>
            <p className="text-gray-400">Role: Admin</p>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-4">
            <li onClick={() => navigateTo('Dashboard')} className="text-lg flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2">
              <MdDashboard />
              <span>Dashboard</span>
            </li>
            <li onClick={() => navigateTo('Reports')} className="text-lg flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2">
              <MdDashboard />
              <span>Reports</span>
            </li>
            <li className="text-lg flex flex-col space-y-2">
              <div
                onClick={() => setIsPassengersOpen(!isPassengersOpen)}
                className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2"
              >
                <FaUser />
                <span>User</span>
              </div>
              {isPassengersOpen && (
                <ul className="pl-8 space-y-2 text-sm">
                  <li onClick={() => navigateTo('UsersList')} className="hover:text-gray-400 cursor-pointer">
                    User List
                  </li>
                  <li onClick={() => navigateTo('AddDriver')} className="hover:text-gray-400 cursor-pointer">
                    Add Driver
                  </li>
                  <li onClick={() => navigateTo('AddPassenger')} className="hover:text-gray-400 cursor-pointer">
                    Add Passenger
                  </li>
                </ul>
              )}
            </li>
            <li className="text-lg flex flex-col space-y-2">
              <div
                onClick={() => navigateTo('DetailedView')}
                className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer px-2 py-2"
              >
                <FaUser />
                <span>Rider Detail</span>
              </div>
              </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

