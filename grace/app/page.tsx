"use client"
import React, { useState, useEffect } from 'react'
import { Music, Guitar } from 'lucide-react'

export default function Component() {
  const [pageColor, setPageColor] = useState('black')

  useEffect(() => {
    const whiteTimer = setTimeout(() => {
      setPageColor('white')
    }, 5000)

    const blackTimer = setTimeout(() => {
      setPageColor('black')
    }, 6000)

    return () => {
      clearTimeout(whiteTimer)
      clearTimeout(blackTimer)
    }
  }, [])

  const isWhite = pageColor === 'white'

  return (
    <div className={`min-h-screen font-['Comic_Sans_MS',_cursive] overflow-hidden relative transition-colors duration-1000 ${isWhite ? 'bg-white' : 'bg-black'}`}>
      {/* Floating text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-6xl font-bold opacity-20 animate-float-rotate transition-colors duration-1000 ${isWhite ? 'text-black' : 'text-white'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            Graceland
          </div>
        ))}
      </div>

      {/* Starry overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-colors duration-1000 ${isWhite ? 'bg-black' : 'bg-white'}`}
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 p-4 transition-colors duration-1000 ${isWhite ? 'text-black' : 'text-white'}`}>
        <h1 className="text-6xl font-bold text-center mb-4 animate-rainbow glow">
          Graceland Diner
        </h1>

        <div className="marquee text-xl mb-4">
          Welcome to the King's favorite diner! * Open 24/7 * Best burgers and milkshakes in town! *
        </div>

        <div className="flex justify-center mb-4">
          <svg width="200" height="200" viewBox="0 0 200 200" className="animate-spin-slow">
            <defs>
              <linearGradient id="guitarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FF69B4" />
                <stop offset="100%" stopColor="#4B0082" />
              </linearGradient>
            </defs>
            <path d="M100 10 L180 50 L180 150 L100 190 L20 150 L20 50 Z" fill="url(#guitarGradient)" />
            <circle cx="100" cy="100" r="30" fill="black" />
            <rect x="95" y="10" width="10" height="80" fill="black" />
            <path d="M70 140 Q100 160 130 140" stroke="black" strokeWidth="5" fill="none" />
            <path d="M60 120 Q100 140 140 120" stroke="black" strokeWidth="5" fill="none" />
            <path d="M50 100 Q100 120 150 100" stroke="black" strokeWidth="5" fill="none" />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="10s"
              repeatCount="indefinite"
            />
          </svg>
        </div>

        <p className="text-center text-2xl mb-4 animate-blink glow">
          🍔 Rockin' and Rollin' Burgers! 🎸
        </p>

        <div className={`bg-blue-700 bg-opacity-70 border-4 border-yellow-400 p-4 mb-4 max-w-md mx-auto rounded-lg transition-colors duration-1000 ${isWhite ? 'text-white' : ''}`}>
          <h2 className="text-3xl font-bold mb-2 text-yellow-400 glow">Today's Special:</h2>
          <p className="text-xl">The King's Peanut Butter & Banana Burger!</p>
        </div>

        <div className="text-center mb-4">
          <a href="#" className="text-2xl text-yellow-300 hover:text-yellow-200 underline animate-pulse glow">
            Click here for our full menu!
          </a>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="animate-bounce"><Music className="text-yellow-300" /></div>
          <p className="text-xl glow">Live music every night!</p>
          <div className="animate-bounce"><Guitar className="text-yellow-300" /></div>
        </div>

        <div className="text-center mb-4">
          <p className="text-2xl font-bold animate-wiggle glow">Don't be cruel to your taste buds!</p>
          <p className="text-xl">Try our Blue Suede Shoes Blueberry Pie!</p>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <div className="animate-dance">👑</div>
          <div className="animate-dance">🕺</div>
          <div className="animate-dance">🎙️</div>
        </div>

        <footer className="text-center text-sm mt-8">
          <p>© 1985 Graceland Diner - Best viewed with Netscape Navigator</p>
          <div className="animate-construction inline-block mt-2 glow">
            🚧 Hunk of Burnin' Construction 🚧
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee {
          white-space: nowrap;
          overflow: hidden;
        }
        .marquee::before {
          content: "Welcome to the King's favorite diner! * Open 24/7 * Best burgers and milkshakes in town! *";
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        @keyframes rainbow {
          0% { color: #FF1493; }
          14% { color: #FF69B4; }
          28% { color: #FF6347; }
          42% { color: #FFD700; }
          57% { color: #00CED1; }
          71% { color: #1E90FF; }
          85% { color: #8A2BE2; }
          100% { color: #FF1493; }
        }
        .animate-rainbow {
          animation: rainbow 5s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-construction {
          animation: construction 0.5s step-end infinite;
        }
        @keyframes construction {
          50% { opacity: 0; }
        }
        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out infinite;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        .animate-dance {
          animation: dance 0.5s ease-in-out infinite;
        }
        @keyframes dance {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-rotate {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(100px, 100px) rotate(90deg);
          }
          50% {
            transform: translate(200px, 0) rotate(180deg);
          }
          75% {
            transform: translate(100px, -100px) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
        .animate-float-rotate {
          animation: float-rotate 20s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .glow {
          text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
        }
      `}</style>
    </div>
  )
}