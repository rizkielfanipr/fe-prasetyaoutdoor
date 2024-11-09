import React, { Component } from 'react';

class Location extends Component {
  render() {
    // Ganti URL ini dengan URL embed Google Maps untuk lokasi yang sesuai
    const lokasiEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5166945622786!2d110.3854771!3d-7.8493919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x55dde9e6b4fbe605!2sPrasetya%20Outdoor%20(Rental%20%26%20Sewa%20Alat%20Camping%20Outdoor)!5e0!3m2!1sen!2sid!4v1605158365851!5m2!1sen!2sid";

    return (
      <div className="container mx-auto px-32 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bagian kiri: Teks rata kiri dengan padding */}
          <div className="flex flex-col p-6 bg-white rounded-lg">
            <h2 className="text-4xl font-bold font-press-start text-left mb-4">Lokasi Kami</h2>
            <p className="text-lg text-gray-700 text-left">
              Alamat kami berada di Prasetya Outdoor, yang menyediakan layanan rental dan sewa alat camping outdoor.
              Kami berada di dekat pusat kota, mudah dijangkau dengan berbagai moda transportasi.
            </p>
          </div>

          {/* Bagian kanan: Embed peta Google Maps menggunakan iframe */}
          <div className="w-full h-80 rounded-xl">
            <iframe
              src={lokasiEmbedUrl}  // URL embed peta dari Google Maps
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Lokasi Kami"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
