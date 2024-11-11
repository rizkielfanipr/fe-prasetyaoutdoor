import React from 'react';
import { useMediaQuery } from 'react-responsive'; // Importing useMediaQuery

const Testimonial = () => {
  // Hanya mengambil 2 testimonial pertama
  const testimonialsData = [
    {
      name: 'John Doe',
      title: 'Pecinta Alam',
      image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
      quote: {
        title: 'Pengalaman Outdoor yang Tak Terlupakan',
        body: '"Saya baru saja memesan paket camping dengan Prasetya Outdoor, dan itu adalah pengalaman yang tak terlupakan! Para pemandu sangat berpengetahuan dan lokasi campingnya benar-benar memukau. Sejak kami tiba, kami langsung merasa diterima dan siap untuk petualangan. Peralatan yang digunakan sangat berkualitas dan semua kegiatan terorganisir dengan sangat baik. Saya pasti akan memesan lagi untuk petualangan outdoor berikutnya!"'
      }
    },
    {
      name: 'Jane Smith',
      title: 'Penyelenggara Retret Perusahaan',
      image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
      quote: {
        title: 'Sempurna untuk Retret Team Building',
        body: '"Prasetya Outdoor mengorganisir retret team-building untuk perusahaan kami, dan semuanya melebihi ekspektasi. Kegiatan yang disusun sangat sesuai dengan berbagai tingkat keterampilan peserta. Fasilitatornya sangat profesional dan memastikan semua orang merasa terlibat. Tim kami tidak hanya bersenang-senang, tetapi juga membangun hubungan yang lebih kuat melalui tantangan outdoor. Sangat saya rekomendasikan untuk acara perusahaan atau team-building!"'
      }
    }
  ];

  // Media query hooks for mobile responsiveness
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className={`mb-4 font-press-start tracking-tight font-extrabold text-gray-900 dark:text-white ${isMobile ? 'text-lg' : 'text-4xl'}`}>
            Apa Kata Mereka?
          </h2>
          <p className={`mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 ${isMobile ? 'text-sm' : ''}`}>
            Jelajahi pengalaman yang dibagikan oleh klien kami yang telah menikmati petualangan outdoor terbaik bersama Prasetya Outdoor.
          </p>
        </div>
        <div className={`grid mb-8 lg:mb-12 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-8`}>
          {testimonialsData.map((testimonial, index) => (
            <figure
              key={index}
              className={`flex flex-col justify-center items-center p-6 text-center md:p-8 lg:px-8 rounded-lg border ${isMobile ? 'border-gray-300' : 'border-gray-200'} `}
            >
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className={`text-lg font-semibold text-gray-900 dark:text-white ${isMobile ? 'text-sm' : ''}`}>{testimonial.quote.title}</h3>
                <p className={`my-4 ${isMobile ? 'text-sm' : ''}`}>{testimonial.quote.body}</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-16 h-16 rounded-full" src={testimonial.image} alt="profile picture" />
                <div className={`space-y-0.5 font-medium dark:text-white text-left ${isMobile ? 'text-sm' : ''}`}>
                  <div>{testimonial.name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
