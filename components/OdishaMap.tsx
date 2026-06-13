'use client';

import React, { useState } from 'react';

interface District {
  id: string;
  name: string;
  projects: number;
  students: number;
  volunteers: number;
  color: string;
}

const districts: District[] = [
  { id: 'baleshwar', name: 'Baleshwar', projects: 8, students: 120, volunteers: 15, color: '#dc2626' },
  { id: 'bhdr', name: 'Bhadrak', projects: 5, students: 85, volunteers: 10, color: '#f97316' },
  { id: 'cuttack', name: 'Cuttack', projects: 12, students: 180, volunteers: 25, color: '#dc2626' },
  { id: 'kendrapara', name: 'Kendrapara', projects: 4, students: 60, volunteers: 8, color: '#fbbf24' },
  { id: 'khurda', name: 'Khurdha', projects: 15, students: 200, volunteers: 30, color: '#dc2626' },
  { id: 'sambalpur', name: 'Sambalpur', projects: 6, students: 90, volunteers: 12, color: '#f97316' },
  { id: 'bargarh', name: 'Bargarh', projects: 5, students: 75, volunteers: 10, color: '#fbbf24' },
  { id: 'nuapada', name: 'Nuapada', projects: 3, students: 45, volunteers: 5, color: '#fca5a5' },
  { id: 'kalahandi', name: 'Kalahandi', projects: 4, students: 60, volunteers: 8, color: '#fbbf24' },
  { id: 'rayagada', name: 'Rayagada', projects: 3, students: 50, volunteers: 6, color: '#fca5a5' },
  { id: 'kandhamal', name: 'Kandhamal', projects: 2, students: 35, volunteers: 4, color: '#fca5a5' },
  { id: 'sundargarh', name: 'Sundargarh', projects: 6, students: 95, volunteers: 12, color: '#f97316' },
];

export function OdishaMap() {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const selected = selectedDistrict ? districts.find(d => d.id === selectedDistrict) : null;

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">Service Coverage Map</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Click on districts to see our impact</p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* SVG Map */}
          <div className="md:col-span-2">
            <svg
              viewBox="0 0 400 500"
              className="w-full max-w-2xl mx-auto drop-shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified Odisha Map - Districts visualization */}
              <defs>
                <style>{`
                  .district-path {
                    transition: all 0.3s ease;
                    cursor: pointer;
                    stroke: white;
                    stroke-width: 2;
                  }
                  .district-path:hover {
                    filter: brightness(1.2);
                  }
                  .district-text {
                    font-size: 11px;
                    font-weight: bold;
                    fill: white;
                    text-anchor: middle;
                    pointer-events: none;
                  }
                `}</style>
              </defs>

              {/* Background */}
              <rect width="400" height="500" fill="#f0f9ff" />

              {/* Districts - Simplified shapes */}
              {[
                { id: 'baleshwar', x: 350, y: 80, color: '#dc2626', label: 'BLW' },
                { id: 'bhdr', x: 340, y: 130, color: '#f97316', label: 'BDR' },
                { id: 'kendrapara', x: 310, y: 150, color: '#fbbf24', label: 'KDR' },
                { id: 'cuttack', x: 280, y: 180, color: '#dc2626', label: 'CTK' },
                { id: 'khurda', x: 260, y: 220, color: '#dc2626', label: 'KHD' },
                { id: 'sambalpur', x: 150, y: 200, color: '#f97316', label: 'SBP' },
                { id: 'bargarh', x: 130, y: 160, color: '#fbbf24', label: 'BRG' },
                { id: 'sundargarh', x: 100, y: 120, color: '#f97316', label: 'SDG' },
                { id: 'nuapada', x: 80, y: 250, color: '#fca5a5', label: 'NUA' },
                { id: 'kalahandi', x: 140, y: 300, color: '#fbbf24', label: 'KLH' },
                { id: 'rayagada', x: 180, y: 350, color: '#fca5a5', label: 'RYG' },
                { id: 'kandhamal', x: 240, y: 300, color: '#fca5a5', label: 'KND' },
              ].map((district) => (
                <g key={district.id}>
                  <circle
                    cx={district.x}
                    cy={district.y}
                    r="28"
                    fill={district.color}
                    className="district-path"
                    onClick={() => setSelectedDistrict(district.id)}
                    opacity={selectedDistrict === null || selectedDistrict === district.id ? 1 : 0.6}
                  />
                  <circle
                    cx={district.x}
                    cy={district.y}
                    r="28"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    className={`${selectedDistrict === district.id ? 'animate-pulse' : ''}`}
                  />
                  <text x={district.x} y={district.y} className="district-text" dominantBaseline="middle">
                    {district.label}
                  </text>
                </g>
              ))}

              {/* Legend */}
              <text x="20" y="480" className="text-xs fill-gray-600" fontSize="10">
                Red: High Impact | Orange: Medium | Yellow: Growing
              </text>
            </svg>
          </div>

          {/* Details Panel */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 h-fit">
            {selected ? (
              <div>
                <h3 className="text-2xl font-black text-red-600 mb-6">{selected.name}</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-600">
                    <div className="text-3xl font-black text-blue-600">{selected.projects}</div>
                    <div className="text-sm font-bold text-gray-700">Projects Conducted</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-600">
                    <div className="text-3xl font-black text-green-600">{selected.students}</div>
                    <div className="text-sm font-bold text-gray-700">Students Helped</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-600">
                    <div className="text-3xl font-black text-purple-600">{selected.volunteers}</div>
                    <div className="text-sm font-bold text-gray-700">Volunteers Active</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDistrict(null)}
                  className="w-full mt-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-bold hover:bg-gray-300 transition"
                >
                  Clear Selection
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🗺️</div>
                <p className="text-gray-600 font-semibold">Click on any district to view details</p>
                <div className="mt-6 space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-600"></span> High Impact (120+)</p>
                  <p className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500"></span> Medium (80-120)</p>
                  <p className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> Growing (50-80)</p>
                  <p className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-pink-300"></span> New Area (30-50)</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
