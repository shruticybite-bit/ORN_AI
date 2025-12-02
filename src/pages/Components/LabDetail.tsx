import React from "react";
import { useParams } from "react-router-dom";
import { cyberLabs } from "../Components/LabPricing";
import Navbar from '../../pages/Components/Navbar';
import Footer from '../Components/Footer';

const LabDetail = () => {
  const { id } = useParams();
  const lab = cyberLabs.find((item) => item.id === Number(id));

  if (!lab) return <h2 className="text-center mt-20">Lab not found</h2>;

  return (
    <>
    <Navbar/>
     <div className="min-h-screen bg-white text-gray-900">

      {/* Banner */}
      <div className="relative w-full h-72">
        <img
          src={lab.image}
          alt={lab.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {lab.name}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8">

        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
          {lab.subtitle}
        </p>

        <p className="text-lg text-gray-700">
          {lab.longDesc}
        </p>

        {/* Features */}
        {lab.features && (
          <div className="p-5 bg-gray-50 rounded-xl border shadow-sm">
            <h2 className="text-2xl font-bold mb-3">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              {lab.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Syllabus */}
        {lab.syllabus && (
          <div className="p-5 bg-gray-50 rounded-xl border shadow-sm">
            <h2 className="text-2xl font-bold mb-3">Course Syllabus</h2>
            <ul className="list-decimal pl-5 space-y-2">
              {lab.syllabus.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default LabDetail;
