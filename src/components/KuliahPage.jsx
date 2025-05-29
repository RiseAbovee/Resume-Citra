import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ScrollToHashElement from './ScrollToHashElement';

export default function KuliahPage() {
    const [lang, setLang] = useState('id');
    
      const toggleLanguage = () => {
        setLang(prev => (prev === 'id' ? 'en' : 'id'));
      };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">
            {lang === 'id' ? 'Perjalanan Kuliah' : 'College Journey'}
        </h1>
        
        <section className="mb-6">
            <h2 className="text-xl font-semibold">📘 Tugas & Proyek</h2>
            <ul className="list-disc list-inside text-gray-700">
            <li><Link to="/kuliah/proyek-pos" className="text-indigo-600 hover:underline">POS System</Link></li>
            <li><Link to="/kuliah/ai-assistant" className="text-indigo-600 hover:underline">AI Assistant</Link></li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold">🧠 Pembelajaran & Refleksi</h2>
            <p className="text-gray-700">
            {lang === 'id'
                ? 'Selama kuliah, saya mempelajari banyak hal dari pengembangan frontend, backend, sampai sistem informasi dan AI...'
                : 'During my studies, I explored frontend, backend, information systems, and artificial intelligence...'}
            </p>
        </section>

        <section id="organisasi">
            <h2 className="text-xl font-semibold">📸 Kenangan & Kegiatan</h2>
            <ul className="list-disc list-inside text-gray-700">
            <li>Lomba Business Plan Nasional (Juara 5)</li>
            <li>Event kampus, seminar, hackathon</li>
            <li>Organisasi kampus / komunitas</li>
            </ul>
        </section>
        </div>
    );
}
