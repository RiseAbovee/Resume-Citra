import React, { useState } from 'react';

export default function Profile() {
  const [lang, setLang] = useState('id');

  const toggleLanguage = () => {
    setLang(prev => (prev === 'id' ? 'en' : 'id'));
  };

    return (
        <div className="min-h-screen bg-white p-6 md:p-12">
            <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl shadow-lg p-8">

                {/* Tombol Toggle Bahasa */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={toggleLanguage}
                        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                        {lang === 'id' ? 'Switch to EN' : 'Ganti ke ID'}
                    </button>
                </div>

                {/* Profil */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src="/images/profile.png"
                        alt="Foto Profil"
                        className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500"
                    />
                    <div>
                        <h1 className="text-3xl font-bold text-indigo-700">Citra Amalia Shiva</h1>
                        <p className="text-gray-600 mt-1">
                        {lang === 'id'
                            ? 'Mahasiswa Informatika | Web Developer | Pengajar'
                            : 'Informatics Student | Web Developer | Educator'}
                        </p>
                        <p className="mt-4 text-sm text-gray-600">
                        {lang === 'id'
                            ? 'Saya seorang mahasiswa informatika dengan minat besar dalam pengembangan web, edukasi, dan budaya Nusantara. Saya juga mengembangkan aplikasi kasir POS dan teknologi personal assistant berbasis AI.'
                            : "I'm an informatics student with a strong interest in web development, education, and Indonesian culture. I also develop POS cashier apps and AI-based personal assistant technology."}
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-indigo-600 mb-4">
                        {lang === 'id' ? 'Keahlian' : 'Skills'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Hard Skills */}
                        <div>
                            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                                {lang === 'id' ? 'Kemampuan Teknis' : 'Hard Skills'}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 text-sm text-gray-600  w-full gap-x-6">
                                <div className="font-semibold">{lang === 'id' ? 'Pemrograman' : 'Programming'}</div>
                                <ul className="list-disc list-inside">
                                    <li>React.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>HTML, CSS</li>
                                    <li>Django, MySQL</li>
                                    <li>Python, PHP (basic)</li>
                                </ul>
                                <div className="font-semibold">{lang === 'id' ? 'Bahasa' : 'Languages'}</div>
                                <ul className="list-disc list-inside">
                                    <li>Mandarin</li>
                                    <li>English</li>
                                </ul>
                                <div className="font-semibold">{lang === 'id' ? 'Alat Digital' : 'Tools'}</div>
                                <ul className="list-disc list-inside">
                                    <li>Canva</li>
                                    <li>Microsoft Office</li>
                                    <li>Google Workspace</li>
                                </ul>
                                <div className="font-semibold">{lang === 'id' ? 'Analisis Sistem & Desain UI' : 'System Analysis & UI Design'}</div>
                                <ul className="list-disc list-inside">
                                    <li>Flowchart</li>
                                    <li>Figma</li>
                                    <li>Wireframe Planning</li>
                                </ul>
                                <div className="font-semibold">{lang === 'id' ? 'Penerjemahan & Pengajaran Teknologi' : 'Translation & Tech Mentoring'}</div>
                                <ul className="list-disc list-inside">
                                    <li>{lang === 'id' ? 'Mengajar coding' : 'Teaching code'}</li>
                                    <li>{lang === 'id' ? 'Menerjemahkan konten teknis' : 'Translating tech content'}</li>
                                </ul>
                            </div>
                        </div>
                        {/* Soft Skills */}
                        <div className="max-w-7xl mx-auto px-6">
                            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                                {lang === 'id' ? 'Kemampuan Non-Teknis' : 'Soft Skills'}
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>{lang === 'id' ? 'Public speaking' : 'Public speaking'}</li>
                                <li>{lang === 'id' ? 'Komunikasi' : 'Communication'}</li>
                                <li>{lang === 'id' ? 'Berpikir kritis' : 'Critical thinking'}</li>
                                <li>{lang === 'id' ? 'Rencana bisnis' : 'Business planning'}</li>
                                <li>{lang === 'id' ? 'Budaya & konten kreatif Nusantara' : 'Nusantara culture & creative content'}</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/*Project */}
                <div>
                    <h2 className="text-xl font-semibold text-indigo-600 mt-6 mb-2">
                            {lang === 'id' ? 'Proyek' : 'Project'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* IT */}
                        <div>
                            <h3 className="text-lg font-semibold text-indigo-600 mb-2 border-b border-indigo-200 pb-1">{lang === 'id' ? 'IT' : 'IT'}</h3>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 marker:text-indigo-400">
                                <li>
                                    <a  href="https://github.com/midori/pos-project"
                                        className="text-indigo-600 hover:text-indigo-800 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        POS System App
                                    </a>
                                </li>
                                <li>
                                    <a  href="https://github.com/midori/ai-assistant"
                                        className="text-indigo-600 hover:text-indigo-800 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Personal AI Assistant
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="text-lg font-semibold text-green-700 mb-2 border-b border-green-200 pb-1">Education</h3>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>
                                    <a  href="https://ruangguru.com/teacher/midori"
                                    className="text-green-600 hover:text-green-800 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Video Teaching Materials
                                    </a>
                                </li>
                                <li>
                                    <a  href="https://midori.education/modules"
                                        className="text-green-600 hover:text-green-800 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Informatics Curriculum Support
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Design */}
                        <div>
                            <h3 className="text-lg font-semibold text-pink-700 mb-2 border-b border-pink-200 pb-1">Design</h3>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>
                                    <a  href="https://www.figma.com/file/UI-Sample-Midori"
                                        className="text-pink-600 hover:text-pink-800 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        POS App UI Design
                                    </a>
                                </li>
                                <li>
                                    <a  href="https://www.figma.com/file/AI-Assistant-Mockup"
                                        className="text-pink-600 hover:text-pink-800 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        AI Assistant Mockup
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="mt-6">
                    <h2 className="text-xl font-bold text-indigo-600 mb-6 text-center">
                        {lang === 'id' ? 'PENDIDIKAN' : 'EDUCATION'}
                    </h2>
                    <div className="relative pl-6 border-l-2 border-indigo-300 space-y-8">
                        {/* Education Item 1 */}
                        <div className="flex items-start">
                            {/* Bullet kiri */}
                            <div className="w-6 flex justify-center relative -left-3">
                                <div className="w-3.5 h-3.5 bg-indigo-400 rounded-full border-2 border-white shadow mt-1"></div>
                            </div>
                            {/* Info kanan */}
                            <div>
                                <h3 className="text-lg font-semibold">
                                    <a  href="https://uwks.ac.id"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 hover:text-indigo-800 hover:underline inline-flex items-center gap-1"
                                    >{lang === 'id' ? 'Program Bahasa — SMA Nurul Jadid' : 'Language Program — Nurul Jadid Senior High School'}
                                    </a>
                                </h3>
                                <p className="text-sm italic text-gray-600">2017 – 2020</p>
                            </div>
                        </div>
                        {/* Education Item 2 - terbaru */}
                        <div className="flex items-start">
                            {/* Bullet kiri */}
                            <div className="w-6 flex justify-center relative -left-3">
                                <div className="w-3.5 h-3.5 bg-indigo-600 rounded-full border-2 border-white shadow mt-1"></div>
                            </div>
                            {/* Info kanan */}
                            <div>
                                <h3 className="text-lg font-semibold">
                                    <a  href="https://uwks.ac.id"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 hover:text-indigo-800 hover:underline inline-flex items-center gap-1"
                                    >{lang === 'id' ? 'S1 Informatika — Universitas Wijaya Kusuma Surabaya' : 'Bachelor of Informatics Informatics — Universitas Wijaya Kusuma Surabaya'}
                                    </a>
                                </h3>
                                <p className="text-sm italic text-gray-600">{lang === 'id' ? '2022 – Sekarang' : '2022 – Present'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience*/}
                <div className="mt-6">
                    <h2 className="text-xl font-bold text-indigo-600 mb-6 text-center">
                        {lang === 'id' ? 'PENGALAMAN KERJA' : 'WORK EXPERIENCE'}
                    </h2>
                    <div className="relative pl-6 border-l-2 border-indigo-300 space-y-8">
                        {/* Work Experience Item 1 */}
                        <div className="flex items-start">
                            {/* Bullet kiri */}
                            <div className="w-6 flex justify-center relative -left-3">
                                <div className="w-3.5 h-3.5 bg-indigo-400 rounded-full border-2 border-white shadow mt-1"></div>
                            </div>
                            {/* Info kanan */}
                            <div>
                                <h3 className="text-lg font-semibold text-indigo-600">
                                    {lang === 'id' ? (
                                        <span className="italic">Store Manager</span>
                                    ) : (
                                        'Store Manager'
                                    )}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 italic">
                                    Sumber Baru | Mei 2012 – Juni 2021
                                </p>
                                <ul className="list-disc list-inside mt-2 text-gray-600 text-sm">
                                    <li>{lang === 'id' ? 'Mengelola stok produk.' : 'Manage product stocks.'}</li>
                                    <li>{lang === 'id' ? 'Memberikan layanan terbaik kepada pelanggan.' : 'Giving best service to our customers.'}</li>
                                    <li>{lang === 'id' ? 'Mengatur keuangan anggota dan membuat laporan keuangan mingguan.' : 'Financial arrangements members and giving weekly financial report.'}</li>
                                </ul>
                            </div>
                        </div>
                        {/* Work Experience Item 2 */}
                        <div className="flex items-start">
                            {/* Bullet kiri */}
                            <div className="w-6 flex justify-center relative -left-3">
                                <div className="w-3.5 h-3.5 bg-indigo-400 rounded-full border-2 border-white shadow mt-1"></div>
                            </div>
                            {/* Info kanan */}
                            <div>
                                <h3 className="text-lg font-semibold text-indigo-600">
                                    {lang === 'id' ? (
                                        <span className="italic">Copywriter</span>
                                    ) : (
                                        'Copywriter'
                                    )}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 italic">
                                    Workin | {lang === 'id' ? 'Juni – Agustus 2021' : 'June – August 2021'}
                                </p>
                                <ul className="list-disc list-inside mt-2 text-gray-600 text-sm">
                                    <li>{lang === 'id' ? 'Menulis caption dan konten media sosial.' : 'Write captions and social media content.'}</li>
                                    <li>{lang === 'id' ? 'Mengembangkan ide komunikasi pemasaran untuk brand.' : 'Developed marketing communication ideas for brands.'}</li>
                                    <li>{lang === 'id' ? 'Berkoordinasi dengan tim desain untuk mengeksekusi konsep.' : 'Collaborated with the design team to execute concepts.'}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Work Experience Item 3 */}
                        <div className="flex items-start">
                            {/* Bullet kiri */}
                            <div className="w-6 flex justify-center relative -left-3">
                                <div className="w-3.5 h-3.5 bg-indigo-400 rounded-full border-2 border-white shadow mt-1"></div>
                            </div>
                            {/* Info kanan */}
                            <div>
                                <h3 className="text-lg font-semibold text-indigo-600">
                                {lang === 'id' ? (
                                    <>Magang <span className="italic">Frontend Developer</span></>
                                ) : (
                                    'Frontend Developer Intern'
                                )}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 italic">
                                    Gojek | {lang === 'id' ? 'Mei – Juli 2021' : 'May – July 2021'}
                                </p>
                                <ul className="list-disc list-inside mt-2 text-gray-600 text-sm">
                                    <li>{lang === 'id' ? 'Merancang UI dan mengembangkan komponen reusable menggunakan ReactJS.' : 'Designed UI and developed reusable components using ReactJS.'}</li>
                                    <li>{lang === 'id' ? 'Menangani bug-fixing dan unit testing untuk komponen produk.' : 'Handled bug-fixing and unit testing for product components.'}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Work Experience Item 4 - Terbaru */}
                        <div className="flex items-start">
                            {/* Bullet kiri */}
                            <div className="w-6 flex justify-center relative -left-3">
                                <div className="w-3.5 h-3.5 bg-indigo-600 rounded-full border-2 border-white shadow mt-1"></div>
                            </div>
                            {/* Info kanan */}
                            <div>
                                <h3 className="text-lg font-semibold text-indigo-600">
                                    {lang === 'id' ?(
                                        <><span className="italic">Master Teacher</span></>
                                    ) : (
                                        'Master Teacher'
                                    )}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 italic">
                                {lang === 'id' ? 'Agustus 2021 – Sekarang' : 'August 2021 – Present'}
                                </p>
                                <ul className="list-disc list-inside mt-2 text-gray-600 text-sm">
                                    <li>{lang === 'id' ? 'Mengajar Informatika dan membimbing ribuan siswa.' : 'Teaching Informatics, guiding thousands of students.'}</li>
                                    <li>{lang === 'id' ? 'Mempersiapkan modul pembelajaran dan membantu pengembangan kurikulum.' : 'Prepare learning module and assisted curriculum development.'}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                {/* Achievement */}
                <div className="mt-6">
                    <h2 className="text-xl font-bold text-indigo-600 mb-6 text-center">
                        {lang === 'id' ? 'PRESTASI' : 'ACHIEVEMENT'}
                    </h2>
                    <div className="relative pl-6 border-l-2 border-indigo-300 space-y-8">
                        {/* Prestasi Item 1 */}
                        <div className="flex items-start">
                            {/* Bullet kiri */}
                            <div className="w-6 flex justify-center relative -left-3">
                                <div className="w-3.5 h-3.5 bg-indigo-400 rounded-full border-2 border-white shadow mt-1"></div>
                            </div>
                            {/* Info kanan */}
                            <div>
                                <h3 className="text-lg font-semibold">
                                    <a  href="https://uwks.ac.id"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 hover:text-indigo-800 hover:underline inline-flex items-center gap-1"
                                    >{lang === 'id'
                                        ? 'Juara 5 — Lomba Business Plan Nasional'
                                        : '5th Place — National Business Plan Competition'}
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600">{lang == 'id' ? 'oleh' : 'by'} The Platinum Skills</p>
                                <p className="text-xs italic text-gray-600">2019</p>
                            </div>
                        </div>
                        {/* Prestasi Item 2 */}
                        <div className="flex items-start">
                            {/* Bullet kiri */}
                            <div className="w-6 flex justify-center relative -left-3">
                                <div className="w-3.5 h-3.5 bg-indigo-400 rounded-full border-2 border-white shadow mt-1"></div>
                            </div>
                            {/* Info kanan */}
                            <div>
                                <h3 className="text-lg font-semibold">
                                    <a  href="https://uwks.ac.id"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 hover:text-indigo-800 hover:underline inline-flex items-center gap-1"
                                    >{lang === 'id'
                                        ? 'Favorit — Desain Fashion Tiongkok Nasional'
                                        : 'Favorite — Chinese National Fashion Design'}
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600">{lang == 'id' ? 'oleh' : 'by'} Universitas Malang</p>
                                <p className="text-xs italic text-gray-600">2019</p>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* Organisasi */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                            {lang === 'id' ? 'Organisasi' : 'Organizations'}
                        </h2>
                        <p className="text-gray-600">
                            {lang === 'id'
                            ? 'Sekretaris BEM Fakultas Teknik — Agustus 2023 - Mei 2024'
                            : 'Secretary, Engineering Faculty Student Executive Board — August 2023 - May 2024'}
                        </p>
                    </div>

                    {/* Kontak */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                            {lang === 'id' ? 'Kontak' : 'Contact'}
                        </h2>
                            <p className="text-gray-600">📧 citraamaliashiva.work@gmail.com</p>
                            <p className="text-gray-600">
                                🌐 {lang === 'id' ? 'Website pribadi' : 'Personal Website'}:{' '}
                                <a href="#" className="text-blue-500 underline">https://midori.io</a>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
