import React from 'react';
import { FaTools, FaHeadset, FaMountain, FaShieldAlt, FaDollarSign, FaClock } from 'react-icons/fa';

const Layanan = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold font-press-start text-gray-900 dark:text-white">
            Kenapa Memilih Prasetya Outdoor?
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Prasetya Outdoor menawarkan pengalaman luar ruangan yang tak tertandingi dengan peralatan berkualitas tinggi dan layanan pelanggan yang luar biasa.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {[
            {
              title: "Peralatan Berkualitas Tinggi",
              description: "Prasetya Outdoor menyediakan peralatan yang terbuat dari bahan berkualitas dan teruji untuk memastikan keamanan dan kenyamanan selama aktivitas luar ruangan.",
              icon: <FaTools className="w-4 h-4 text-white" />
            },
            {
              title: "Layanan Pelanggan yang Luar Biasa",
              description: "Tim kami siap membantu Anda dengan pertanyaan dan kebutuhan Anda, memastikan pengalaman yang menyenangkan dan memuaskan.",
              icon: <FaHeadset className="w-4 h-4 text-white" />
            },
            {
              title: "Pengalaman yang Tak Tertandingi",
              description: "Dengan pengalaman bertahun-tahun, kami tahu cara memberikan pengalaman luar ruangan yang aman dan menyenangkan.",
              icon: <FaMountain className="w-4 h-4 text-white" />
            },
            {
              title: "Keamanan Terjamin",
              description: "Kami mengutamakan keselamatan pelanggan dengan prosedur keamanan yang ketat dan peralatan yang terawat dengan baik.",
              icon: <FaShieldAlt className="w-4 h-4 text-white" />
            },
            {
              title: "Harga Kompetitif",
              description: "Kami menawarkan harga yang bersaing tanpa mengorbankan kualitas, sehingga Anda mendapatkan nilai terbaik untuk pengalaman luar ruangan Anda.",
              icon: <FaDollarSign className="w-4 h-4 text-white" />
            },
            {
              title: "Dukungan 24/7",
              description: "Kami menyediakan dukungan pelanggan sepanjang waktu, siap membantu Anda kapan saja.",
              icon: <FaClock className="w-4 h-4 text-white" />
            },
          ].map((item, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-lg">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#FFC61A] lg:h-12 lg:w-12">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;