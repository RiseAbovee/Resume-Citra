import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaPlay, FaPause, FaStop, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Modal from 'react-modal';

const cities = [
  { name: 'Paris', timeZone: 'Europe/Paris' },
  { name: 'Jakarta', timeZone: 'Asia/Jakarta' },
  { name: 'Shanghai', timeZone: 'Asia/Shanghai' },
  { name: 'Seoul', timeZone: 'Asia/Seoul' },
  { name: 'Wellington', timeZone: 'Pacific/Auckland' },
  { name: 'Honolulu', timeZone: 'Pacific/Honolulu' },
  { name: 'Los Angeles', timeZone: 'America/Los_Angeles' },
  { name: 'New York', timeZone: 'America/New_York' }
];

const getTime = (timeZone) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone,
    hour12: false
  }).format(new Date());
};

const getIcon = (hour) =>
  hour >= 6 && hour < 18 ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-indigo-700" />;

export default function BentoGrid() {
  const [times, setTimes] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [duration, setDuration] = useState(25); // minutes
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [skipBreak, setSkipBreak] = useState(false);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breaksPlanned, setBreaksPlanned] = useState(0);
  const [breakCounter, setBreakCounter] = useState(0);
  const [intervalCounter, setIntervalCounter] = useState(0);

  const calcBreaks = (min) => {
    if (min >= 225) return 8;
    if (min >= 210) return 7;
    if (min >= 180) return 6;
    if (min >= 150) return 5;
    if (min >= 135) return 4;
    if (min >= 105) return 3;
    if (min >= 80) return 2;
    if (min >= 30) return 1;
    return 0;
  };

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      cities.forEach((city) => {
        const now = new Date().toLocaleString('en-US', { timeZone: city.timeZone });
        const hour = new Date(now).getHours();
        newTimes[city.name] = { time: getTime(city.timeZone), icon: getIcon(hour) };
      });
      setTimes(newTimes);
    };
    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeLeft(duration * 60);
    setBreaksPlanned(calcBreaks(duration));
  }, [duration]);

  useEffect(() => {
    let timer;
    if (running && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && running) {
      setRunning(false);
    }
    return () => clearInterval(timer);
  }, [running, timeLeft]);

  // BREAK SYSTEM
  useEffect(() => {
    if (!skipBreak && !isOnBreak && breaksPlanned > 0 && running) {
      const workInterval = Math.floor(duration * 60 / (breaksPlanned + 1));
      if ((duration * 60 - timeLeft) >= (intervalCounter + 1) * workInterval) {
        setRunning(false);
        setIsOnBreak(true);
        setTimeout(() => {
          setIsOnBreak(false);
          setRunning(true);
        }, 5 * 60 * 1000); // 5 mins break
        setBreakCounter(breakCounter + 1);
        setIntervalCounter(intervalCounter + 1);
      }
    }
  }, [timeLeft, running, skipBreak, isOnBreak, breaksPlanned, intervalCounter, duration]);

  const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;

  const changeDuration = (diff) => {
    const newDuration = Math.min(240, Math.max(10, duration + diff));
    setDuration(newDuration);
  };

  return (
    <div className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-6 relative">
      <div className="bg-white p-4 rounded-xl shadow col-span-6">
        <h2 className="text-lg font-semibold mb-2">World Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {cities.map((city) => (
            <div key={city.name} className="flex items-center gap-2">
              {times[city.name]?.icon} <span className="font-medium">{city.name}:</span> {times[city.name]?.time}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow col-span-1 text-center">
        <button onClick={() => setModalIsOpen(true)} className="text-indigo-600 hover:underline">
          Pomodoro
        </button>
      </div>

      {/* POST APP */}
      <div className="bg-white p-4 rounded-xl shadow col-span-1 text-center">
        <h3 className="text-lg font-semibold mb-2">Post App</h3>
        <p className="text-sm text-gray-600">Aplikasi untuk berbagi postingan dan ide</p>
      </div>

      {/* MANAJEMEN APP */}
      <div className="bg-white p-4 rounded-xl shadow col-span-1 text-center">
        <h3 className="text-lg font-semibold mb-2">Manajemen App</h3>
        <p className="text-sm text-gray-600">Kendalikan inventori, pengguna, dan laporan</p>
      </div>

      {/* LIKO CLASS */}
      <div className="bg-white p-4 rounded-xl shadow col-span-1 text-center">
        <h3 className="text-lg font-semibold mb-2">Liko Class</h3>
        <p className="text-sm text-gray-600">Kelas pembelajaran interaktif</p>
      </div>

      {/* PROFILE */}
      <div className="bg-white p-4 rounded-xl shadow col-span-1 text-center">
        <img
          src="https://via.placeholder.com/80" // Ganti dengan URL gambar profil kamu
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto mb-2"
        />
        <h3 className="text-lg font-semibold">Midori</h3>
        <div className="mt-2">
          <a
            href="https://example.com/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline block"
          >
            CV
          </a>
          <a
            href="https://example.com/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline block"
          >
            Portofolio
          </a>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start"
      >
        <h2 className="text-xl font-semibold mb-4">Pomodoro Timer</h2>
        <p className="text-3xl font-bold mb-4">{formatTime(timeLeft)}</p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setRunning(true);
              setShowFloating(true);
              setModalIsOpen(false);
            }}
            className="bg-green-500 text-white p-2 rounded-full"
          >
            <FaPlay />
          </button>
          <button onClick={() => setRunning(false)} className="bg-yellow-500 text-white p-2 rounded-full">
            <FaPause />
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setTimeLeft(0);
              setShowFloating(false);
              setBreakCounter(0);
              setIntervalCounter(0);
            }}
            className="bg-red-500 text-white p-2 rounded-full"
          >
            <FaStop />
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="font-medium mb-2">
            {breaksPlanned > 0
              ? `You will have ${breaksPlanned} break${breaksPlanned > 1 ? 's' : ''}`
              : 'You will have no break'}
          </p>
          <button
            onClick={() => setSkipBreak(!skipBreak)}
            className={`mt-2 px-4 py-1 rounded ${
              breaksPlanned === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : skipBreak
                ? 'bg-red-200'
                : 'bg-green-200'
            }`}
            disabled={breaksPlanned === 0}
          >
            {skipBreak ? 'Break skipped' : 'Break enabled'}
          </button>
        </div>

        <div className="mt-4 text-center">
          <label className="block mb-1 font-medium">Durasi (menit):</label>
          <div className="flex justify-center gap-2">
            <button onClick={() => changeDuration(-5)} className="bg-indigo-200 px-3 py-1 rounded">
              <FaArrowDown />
            </button>
            <span className="font-semibold">{duration} min</span>
            <button onClick={() => changeDuration(5)} className="bg-indigo-200 px-3 py-1 rounded">
              <FaArrowUp />
            </button>
          </div>
        </div>

        <button onClick={() => setModalIsOpen(false)} className="mt-6 block mx-auto bg-gray-300 px-4 py-2 rounded">
          Tutup
        </button>
      </Modal>

      {showFloating && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-full px-4 py-2 text-lg font-bold">
          ⏳ {isOnBreak ? 'Break 5:00' : formatTime(timeLeft)}
        </div>
      )}
    </div>
  );
}
