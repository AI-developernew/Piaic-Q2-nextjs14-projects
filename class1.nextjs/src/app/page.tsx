import React from "react";
import Image from "next/image";
import panaverse from "../../public/assets/panaverse.png";
const page = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center bg-gradient-to-r from-blue-700 via-green-700 to-purple-500 w-full h-[570px] text-white">
        <p className="text-white text-5xl font-semibold px-36 py-16 leading-relaxed ">
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
          Karachi, Lahore, Islamabad, and Peshawar
        </p>
        <p className="text-[#c5c7c8] text-xl px-36 ">
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-14 ">
        <p className="text-[#36a05d]  text-5xl text-center ">
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
          Karachi, Lahore, Islamabad, and Peshawar
        </p>
        <Image src={panaverse} alt={"image"} />
        <p className="text-[#36a05d]  text-2xl text-center ">
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3 and Metaverse developers, designers, trainers,
          startup founders and service providers.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <iframe width="1000" height="500" src="https://www.youtube.com/embed/PKxSC4ZG3W0?si=H60K7uZsJYFbwyc8"
          title="YouTube video player" frame-border="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow-fullscreen>
          </iframe>
      </div>
      <div className="w-full ">
        <table className="min-w-full bg-white border border-gray-300 inline h-430">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Jane Doe</td>
              <td className="py-2 px-4 border-b">jane@example.com</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Jane Doe</td>
              <td className="py-2 px-4 border-b">jane@example.com</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Jane Doe</td>
              <td className="py-2 px-4 border-b">jane@example.com</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;