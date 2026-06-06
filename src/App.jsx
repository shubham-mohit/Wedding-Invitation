
import { useState, useEffect, useRef } from "react";

const GROOM = {
  name: "Rahul Sharma",
  firstName: "Rahul",
  profession: "Software Engineer",
  familyName: "Sharma Family",
  village: "Nashik, Maharashtra",
  familyIntro: "A warm, welcoming family rooted in tradition and love, known for their generosity and strong community bonds.",
  photo: null,
};

const BRIDE = {
  name: "Priya Patel",
  firstName: "Priya",
  profession: "Civil Engineer",
  familyName: "Patel Family",
  village: "Pune, Maharashtra",
  familyIntro: "A gracious family celebrated for their warmth, culture, and the joy they bring to every gathering.",
  photo: null,
};

const COUPLE_PHOTOS = [
  { label: "Sunset Stroll", emoji: "🌅" },
  { label: "Garden Laughs", emoji: "🌸" },
  { label: "City Lights", emoji: "✨" },
  { label: "Monsoon Magic", emoji: "🌧️" },
  { label: "Mountain Memories", emoji: "⛰️" },
  { label: "Forever Together", emoji: "💕" },
];

const EVENTS = [
  {
    name: "Haldi Ceremony",
    date: "1st July 2025",
    time: "10:00 AM",
    location: "Sharma Family Home, Nashik",
    address: "Plot 12, Gangapur Road, Nashik, Maharashtra 422013",
    color: "#F59E0B",
    icon: "🌿",
    desc: "A joyful pre-wedding ritual filled with turmeric, music, and blessings.",
  },
  {
    name: "Wedding Ceremony",
    date: "2nd July 2025",
    time: "06:30 PM",
    location: "Royal Orchid Gardens, Pune",
    address: "Royal Orchid Gardens, Baner Road, Pune, Maharashtra 411045",
    color: "#EC4899",
    icon: "💍",
    desc: "The grand union of two souls, bound in love and tradition under starlit skies.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Avatar({ name, size = 180, bg = "#fce7f3", color = "#9d174d" }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2);
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: bg, display: "flex", alignItems: "center",
      justifyContent: "center", fontSize: size * 0.32,
      fontWeight: 700, color, fontFamily: "'Playfair Display', serif",
      letterSpacing: 2, border: "4px solid rgba(255,255,255,0.6)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
      flexShrink: 0,
    }}>{initials}</div>
  );
}

function MalaAnimation() {
  return (
    <div style={{ position: "relative", width: 420, height: 220, margin: "0 auto" }}>

      {/* Groom figure - walks in from left */}
      <div style={{ position: "absolute", left: 0, top: 20, animation: "groomWalk 1.8s cubic-bezier(0.22,1,0.36,1) forwards" }}>
        {/* Groom body */}
        <svg width="90" height="180" viewBox="0 0 90 180" fill="none">
          {/* Head */}
          <circle cx="45" cy="28" r="22" fill="#f5cba7" stroke="#e8a87c" strokeWidth="2"/>
          {/* Hair */}
          <ellipse cx="45" cy="10" rx="22" ry="10" fill="#2c1810"/>
          {/* Sherwani body */}
          <rect x="18" y="50" width="54" height="75" rx="8" fill="#1a237e"/>
          {/* Sherwani collar */}
          <path d="M36 50 L45 65 L54 50" fill="#ffd700" opacity="0.8"/>
          {/* Gold buttons */}
          <circle cx="45" cy="72" r="3" fill="#ffd700"/>
          <circle cx="45" cy="85" r="3" fill="#ffd700"/>
          <circle cx="45" cy="98" r="3" fill="#ffd700"/>
          {/* Left arm — raised holding mala */}
          <path d="M18 60 Q-5 40 8 20" stroke="#f5cba7" strokeWidth="10" strokeLinecap="round" fill="none" style={{animation:"groomArmRaise 1.8s cubic-bezier(0.22,1,0.36,1) forwards"}}/>
          {/* Right arm */}
          <path d="M72 60 Q88 80 80 100" stroke="#f5cba7" strokeWidth="10" strokeLinecap="round" fill="none"/>
          {/* Legs */}
          <rect x="24" y="122" width="18" height="55" rx="6" fill="#0d1b6e"/>
          <rect x="48" y="122" width="18" height="55" rx="6" fill="#0d1b6e"/>
          {/* Shoes */}
          <ellipse cx="33" cy="177" rx="14" ry="6" fill="#1a0a00"/>
          <ellipse cx="57" cy="177" rx="14" ry="6" fill="#1a0a00"/>
          {/* Turban */}
          <ellipse cx="45" cy="8" rx="24" ry="9" fill="#c62828"/>
          <ellipse cx="45" cy="5" rx="18" ry="6" fill="#e53935"/>
          <circle cx="45" cy="3" r="4" fill="#ffd700"/>
          {/* Mala in groom's raised hand */}
          <g style={{animation:"malaGroom 1.8s cubic-bezier(0.22,1,0.36,1) forwards"}}>
            <ellipse cx="8" cy="20" rx="10" ry="5" fill="none" stroke="#ffb300" strokeWidth="2.5" strokeDasharray="3 2"/>
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i)=>(
              <circle key={i}
                cx={8 + 10*Math.cos(deg*Math.PI/180)}
                cy={20 + 5*Math.sin(deg*Math.PI/180)}
                r="2.5" fill={i%2===0?"#ff6f00":"#fff176"}/>
            ))}
          </g>
        </svg>
      </div>

      {/* Bride figure - walks in from right */}
      <div style={{ position: "absolute", right: 0, top: 20, animation: "brideWalk 1.8s cubic-bezier(0.22,1,0.36,1) forwards" }}>
        <svg width="90" height="180" viewBox="0 0 90 180" fill="none">
          {/* Head */}
          <circle cx="45" cy="28" r="22" fill="#f5cba7" stroke="#e8a87c" strokeWidth="2"/>
          {/* Hair bun */}
          <ellipse cx="45" cy="10" rx="20" ry="9" fill="#1a0a00"/>
          <circle cx="58" cy="8" r="7" fill="#1a0a00"/>
          <circle cx="60" cy="6" r="4" fill="#c62828"/>
          {/* Saree body */}
          <rect x="20" y="50" width="50" height="75" rx="8" fill="#ad1457"/>
          {/* Saree drape */}
          <path d="M20 50 Q10 90 20 125 L25 125 Q15 90 25 50Z" fill="#e91e8c" opacity="0.7"/>
          {/* Gold border */}
          <rect x="20" y="122" width="50" height="5" fill="#ffd700" opacity="0.8"/>
          {/* Blouse */}
          <rect x="24" y="50" width="42" height="25" rx="4" fill="#880e4f"/>
          {/* Right arm — raised holding mala */}
          <path d="M70 60 Q95 40 82 20" stroke="#f5cba7" strokeWidth="10" strokeLinecap="round" fill="none"/>
          {/* Left arm */}
          <path d="M20 60 Q5 80 12 100" stroke="#f5cba7" strokeWidth="10" strokeLinecap="round" fill="none"/>
          {/* Skirt / lehenga */}
          <path d="M20 122 Q15 180 30 180 L60 180 Q75 180 70 122Z" fill="#c2185b"/>
          {/* Bindi */}
          <circle cx="45" cy="16" r="3" fill="#c62828"/>
          {/* Mala in bride's raised hand */}
          <g>
            <ellipse cx="82" cy="20" rx="10" ry="5" fill="none" stroke="#ffb300" strokeWidth="2.5" strokeDasharray="3 2"/>
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i)=>(
              <circle key={i}
                cx={82 + 10*Math.cos(deg*Math.PI/180)}
                cy={20 + 5*Math.sin(deg*Math.PI/180)}
                r="2.5" fill={i%2===0?"#ff6f00":"#fff176"}/>
            ))}
          </g>
        </svg>
      </div>

      {/* Center heart + sparkles that appear after they meet */}
      <div style={{
        position: "absolute", left: "50%", top: "30%",
        transform: "translateX(-50%)",
        animation: "heartPop 0.5s ease 2.2s both",
        fontSize: "2.2rem", zIndex: 10,
      }}>💍</div>

      {/* Falling flower petals */}
      {[...Array(10)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${20 + i * 8}%`, top: "-10px",
          fontSize: "1rem",
          animation: `petalFall ${1.5 + (i % 3) * 0.4}s ease ${1.8 + i * 0.15}s both`,
        }}>🌸</div>
      ))}

      <style>{`
        @keyframes groomWalk {
          0%   { transform: translateX(-180px); opacity: 0; }
          40%  { opacity: 1; }
          100% { transform: translateX(90px);  opacity: 1; }
        }
        @keyframes brideWalk {
          0%   { transform: translateX(180px); opacity: 0; }
          40%  { opacity: 1; }
          100% { transform: translateX(-90px); opacity: 1; }
        }
        @keyframes heartPop {
          0%   { transform: translateX(-50%) scale(0); opacity: 0; }
          60%  { transform: translateX(-50%) scale(1.4); opacity: 1; }
          100% { transform: translateX(-50%) scale(1);  opacity: 1; }
        }
        @keyframes petalFall {
          0%   { transform: translateY(0) rotate(0deg);   opacity: 1; }
          100% { transform: translateY(200px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      position: "relative", overflow: "hidden", padding: "2rem",
      gap: "1.5rem",
    }}>
      {/* Animated background petals */}
      {[...Array(18)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: 8 + (i % 5) * 4, height: 8 + (i % 5) * 4,
          borderRadius: "50% 0 50% 0",
          background: `rgba(${220 + i * 2},${100 + i * 8},${150 + i * 3},0.18)`,
          top: `${(i * 37) % 100}%`,
          left: `${(i * 53) % 100}%`,
          animation: `float ${4 + (i % 4)}s ease-in-out ${i * 0.3}s infinite alternate`,
        }} />
      ))}

      {/* Mala animation top area */}
      <div style={{
        zIndex: 2, width: "100%", maxWidth: 480,
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.8s ease 0.3s",
      }}>
        <MalaAnimation />
      </div>

      {/* Text content */}
      <div style={{
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)",
        transition: "all 1.2s ease 0.5s", textAlign: "center", zIndex: 1,
      }}>
        <p style={{
          color: "#f9a8d4", fontFamily: "'Dancing Script', cursive",
          fontSize: "1.4rem", letterSpacing: 4, marginBottom: 8,
        }}>♥ You are cordially invited to celebrate ♥</p>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.8rem, 8vw, 5.5rem)", fontWeight: 700,
          color: "#fff", lineHeight: 1.1, margin: "0.5rem 0",
          textShadow: "0 4px 32px rgba(249,168,212,0.4)",
        }}>
          Rahul <span style={{ color: "#f9a8d4" }}>&</span> Priya
        </h1>

        <p style={{
          color: "#c4b5fd", fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.6rem", letterSpacing: 6, margin: "1rem 0 2rem",
          fontStyle: "italic",
        }}>are getting married</p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {["💍 2nd July 2025", "📍 Pune, Maharashtra", "🌸 Reception & Ceremony"].map(tag => (
            <span key={tag} style={{
              background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)", color: "#fff",
              padding: "0.5rem 1.2rem", borderRadius: 99,
              fontSize: "0.9rem", letterSpacing: 1,
            }}>{tag}</span>
          ))}
        </div>

        <div style={{ marginTop: "2rem", animation: "bounce 2s ease infinite" }}>
          <span style={{ color: "#f9a8d4", fontSize: "2rem" }}>↓</span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@600&family=Cormorant+Garamond:ital,wght@0,400;1,400;1,600&family=Lato:wght@300;400&display=swap');
        @keyframes float { from { transform: translateY(0) rotate(0deg); } to { transform: translateY(-20px) rotate(10deg); } }
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(30px);} to { opacity:1; transform:translateY(0);} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>
    </section>
  );
}

function ProfilePhoto({ name, gradient, size = 320 }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2);
  return (
    <div style={{
      width: size, height: size, flexShrink: 0,
      borderRadius: 28,
      background: gradient,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.28, fontWeight: 700, color: "#fff",
      fontFamily: "'Playfair Display', serif", letterSpacing: 4,
      boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
      border: "5px solid rgba(255,255,255,0.12)",
      position: "relative", overflow: "hidden",
    }}>
      {/* shimmer overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      {initials}
    </div>
  );
}

function GroomSection() {
  const [ref, vis] = useInView();
  return (
    <section ref={ref} style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0d0d1a 0%, #1a1a3e 50%, #0f1a40 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "5rem 3rem", position: "relative", overflow: "hidden",
    }}>
      {/* bg glow */}
      <div style={{
        position: "absolute", top: "20%", left: "5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1000, width: "100%",
        display: "flex", alignItems: "center", gap: "4rem",
        flexWrap: "wrap",
        opacity: vis ? 1 : 0, transform: vis ? "translateX(0)" : "translateX(-70px)",
        transition: "all 1.1s cubic-bezier(0.22,1,0.36,1)",
      }}>

        {/* LEFT — Big photo + name/profession/hometown below */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.6rem" }}>
          <ProfilePhoto name={GROOM.name} gradient="linear-gradient(145deg,#312e81,#6366f1,#8b5cf6)" />

          <div style={{ textAlign: "center" }}>
            <p style={{
              color: "#a5b4fc", fontFamily: "'Dancing Script', cursive",
              fontSize: "1.1rem", letterSpacing: 3, marginBottom: 4,
            }}>♥ The Groom ♥</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              color: "#fff", fontWeight: 700, lineHeight: 1.1, margin: 0,
            }}>{GROOM.name}</h2>

            <div style={{
              display: "flex", flexDirection: "column", gap: "0.5rem",
              marginTop: "1.2rem",
            }}>
              {[
                { icon: "💼", value: GROOM.profession },
                { icon: "🏠", value: GROOM.familyName },
                { icon: "📍", value: GROOM.village },
              ].map(item => (
                <div key={item.value} style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 8, color: "rgba(255,255,255,0.75)",
                  fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem",
                }}>
                  <span>{item.icon}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Family intro paragraph */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{
            width: 48, height: 3,
            background: "linear-gradient(90deg, #6366f1, #a5b4fc)",
            borderRadius: 99, marginBottom: "1.5rem",
          }} />
          <p style={{
            color: "#a5b4fc", fontFamily: "'Dancing Script', cursive",
            fontSize: "1.2rem", letterSpacing: 2, marginBottom: "0.8rem",
          }}>About the Family</p>
          <p style={{
            color: "rgba(255,255,255,0.82)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.25rem", lineHeight: 1.95, fontStyle: "italic",
          }}>
            "{GROOM.familyIntro} Rahul grew up surrounded by laughter, values, and the spirit of togetherness — qualities he carries into every chapter of his life. His journey from the heart of Nashik to building a future with Priya is a story that began with hard work, humility, and endless love."
          </p>
          <div style={{
            marginTop: "2rem",
            padding: "1.2rem 1.5rem",
            background: "rgba(99,102,241,0.1)",
            borderLeft: "3px solid #6366f1",
            borderRadius: "0 12px 12px 0",
          }}>
            <p style={{
              color: "#c7d2fe", fontSize: "0.9rem",
              fontFamily: "'Lato', sans-serif", letterSpacing: 1,
            }}>
              🎓 B.Tech · Software Engineer · Nashik, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrideSection() {
  const [ref, vis] = useInView();
  return (
    <section ref={ref} style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #1a0020 0%, #3b0a3a 50%, #1a0030 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "5rem 3rem", position: "relative", overflow: "hidden",
    }}>
      {/* bg glow */}
      <div style={{
        position: "absolute", top: "20%", right: "5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236,72,153,0.12), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1000, width: "100%",
        display: "flex", alignItems: "center", gap: "4rem",
        flexWrap: "wrap-reverse", justifyContent: "flex-end",
        opacity: vis ? 1 : 0, transform: vis ? "translateX(0)" : "translateX(70px)",
        transition: "all 1.1s cubic-bezier(0.22,1,0.36,1)",
      }}>

        {/* LEFT — Family intro paragraph */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{
            width: 48, height: 3,
            background: "linear-gradient(90deg, #ec4899, #f9a8d4)",
            borderRadius: 99, marginBottom: "1.5rem", marginLeft: "auto",
          }} />
          <p style={{
            color: "#f9a8d4", fontFamily: "'Dancing Script', cursive",
            fontSize: "1.2rem", letterSpacing: 2, marginBottom: "0.8rem",
            textAlign: "right",
          }}>About the Family</p>
          <p style={{
            color: "rgba(255,255,255,0.82)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.25rem", lineHeight: 1.95, fontStyle: "italic",
            textAlign: "right",
          }}>
            "{BRIDE.familyIntro} Priya blossomed in the vibrant city of Pune, shaped by warmth, ambition, and her family's deep-rooted values. Her passion for engineering is matched only by her grace and the love she brings to everyone around her — making her the perfect partner for life's grandest adventure."
          </p>
          <div style={{
            marginTop: "2rem",
            padding: "1.2rem 1.5rem",
            background: "rgba(236,72,153,0.1)",
            borderRight: "3px solid #ec4899",
            borderRadius: "12px 0 0 12px",
            textAlign: "right",
          }}>
            <p style={{
              color: "#fce7f3", fontSize: "0.9rem",
              fontFamily: "'Lato', sans-serif", letterSpacing: 1,
            }}>
              🎓 B.Tech · Civil Engineer · Pune, Maharashtra
            </p>
          </div>
        </div>

        {/* RIGHT — Big photo + name/profession/hometown below */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.6rem" }}>
          <ProfilePhoto name={BRIDE.name} gradient="linear-gradient(145deg,#831843,#ec4899,#f472b6)" />

          <div style={{ textAlign: "center" }}>
            <p style={{
              color: "#f9a8d4", fontFamily: "'Dancing Script', cursive",
              fontSize: "1.1rem", letterSpacing: 3, marginBottom: 4,
            }}>♥ The Bride ♥</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              color: "#fff", fontWeight: 700, lineHeight: 1.1, margin: 0,
            }}>{BRIDE.name}</h2>

            <div style={{
              display: "flex", flexDirection: "column", gap: "0.5rem",
              marginTop: "1.2rem",
            }}>
              {[
                { icon: "💼", value: BRIDE.profession },
                { icon: "🏠", value: BRIDE.familyName },
                { icon: "📍", value: BRIDE.village },
              ].map(item => (
                <div key={item.value} style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 8, color: "rgba(255,255,255,0.75)",
                  fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem",
                }}>
                  <span>{item.icon}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [ref, vis] = useInView(0.1);
  const [active, setActive] = useState(null);

  return (
    <section ref={ref} style={{
      minHeight: "100vh", background: "#0a0a0f",
      padding: "5rem 2rem", position: "relative",
    }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ color: "#a5b4fc", fontFamily: "'Dancing Script', cursive", fontSize: "1.3rem", letterSpacing: 3, marginBottom: 8 }}>our moments</p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "#fff", fontWeight: 700,
        }}>A Love Story in Frames</h2>
        <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,#6366f1,#ec4899)", margin: "1rem auto 0", borderRadius: 99 }} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem", maxWidth: 1000, margin: "0 auto",
      }}>
        {COUPLE_PHOTOS.map((photo, i) => (
          <div
            key={i}
            onClick={() => setActive(active === i ? null : i)}
            style={{
              borderRadius: 20, overflow: "hidden", cursor: "pointer",
              height: i % 3 === 1 ? 320 : 260,
              background: `linear-gradient(135deg, hsl(${250 + i * 25}, 60%, 20%), hsl(${290 + i * 20}, 70%, 35%))`,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              position: "relative", transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform: vis ? (active === i ? "scale(1.04)" : "scale(1)") : "scale(0.8)",
              opacity: vis ? 1 : 0,
              transitionDelay: `${i * 0.1}s`,
              boxShadow: active === i
                ? "0 20px 60px rgba(99,102,241,0.5)"
                : "0 4px 20px rgba(0,0,0,0.4)",
              border: active === i ? "2px solid rgba(249,168,212,0.5)" : "2px solid transparent",
            }}
          >
            <span style={{ fontSize: "4rem", marginBottom: 12 }}>{photo.emoji}</span>
            <p style={{
              color: "#fff", fontFamily: "'Playfair Display', serif",
              fontSize: "1.2rem", fontWeight: 600, letterSpacing: 1,
            }}>{photo.label}</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginTop: 4 }}>Rahul & Priya</p>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5))",
            }} />
          </div>
        ))}
      </div>

      <p style={{
        textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "0.85rem",
        marginTop: "2rem", fontStyle: "italic",
      }}>✦ Replace placeholders with your own couple photos ✦</p>
    </section>
  );
}

function EventsSection() {
  const [ref, vis] = useInView();
  return (
    <section ref={ref} style={{
      minHeight: "100vh", background: "linear-gradient(180deg, #0a0a0f, #0f0c29)",
      padding: "5rem 2rem", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
    }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ color: "#f9a8d4", fontFamily: "'Dancing Script', cursive", fontSize: "1.3rem", letterSpacing: 3, marginBottom: 8 }}>join us</p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "#fff", fontWeight: 700,
        }}>Wedding Events</h2>
        <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,#F59E0B,#EC4899)", margin: "1rem auto 0", borderRadius: 99 }} />
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2rem", maxWidth: 800, width: "100%",
      }}>
        {EVENTS.map((event, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)",
            border: `1px solid ${event.color}44`, borderRadius: 24,
            padding: "2.5rem", position: "relative", overflow: "hidden",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(40px)",
            transition: `all 0.8s ease ${i * 0.2}s`,
          }}>
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: 120, height: 120, borderRadius: "0 24px 0 100%",
              background: `${event.color}22`,
            }} />
            <span style={{ fontSize: "2.5rem" }}>{event.icon}</span>
            <h3 style={{
              fontFamily: "'Playfair Display', serif", color: "#fff",
              fontSize: "1.6rem", fontWeight: 700, margin: "1rem 0 0.5rem",
            }}>{event.name}</h3>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, margin: "0.5rem 0",
              color: event.color, fontWeight: 600, fontSize: "1rem",
            }}>
              <span>📅</span> <span>{event.date}</span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
              <span>⏰</span> <span>{event.time}</span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", margin: "0.5rem 0 1rem", color: "rgba(255,255,255,0.7)" }}>
              <span>📍</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>{event.location}</span>
            </div>
            <p style={{
              color: "rgba(255,255,255,0.5)", fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem", fontStyle: "italic", lineHeight: 1.7,
            }}>{event.desc}</p>

            <div style={{
              marginTop: "1.5rem", padding: "0.8rem 1rem",
              background: `${event.color}18`, borderRadius: 10,
              border: `1px solid ${event.color}33`,
              color: "rgba(255,255,255,0.6)", fontSize: "0.85rem",
              fontFamily: "'Lato', sans-serif",
            }}>
              📌 {event.address}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MapSection() {
  const [ref, vis] = useInView();
  return (
    <section ref={ref} style={{
      background: "#0f0c29", padding: "5rem 2rem",
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <p style={{ color: "#a5b4fc", fontFamily: "'Dancing Script', cursive", fontSize: "1.3rem", letterSpacing: 3, marginBottom: 8 }}>find us</p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "#fff", fontWeight: 700,
        }}>Venue Location</h2>
        <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,#6366f1,#ec4899)", margin: "1rem auto 0", borderRadius: 99 }} />
      </div>

      <div style={{
        maxWidth: 860, width: "100%",
        opacity: vis ? 1 : 0, transform: vis ? "scale(1)" : "scale(0.95)",
        transition: "all 1s ease",
      }}>
        <div style={{
          borderRadius: 24, overflow: "hidden",
          border: "1px solid rgba(99,102,241,0.3)",
          boxShadow: "0 20px 80px rgba(99,102,241,0.2)",
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2655200506626!2d73.7811!3d18.5571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzI1LjYiTiA3M8KwNDYnNTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%" height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue"
          />
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1.5rem",
        }}>
          {EVENTS.map((e, i) => (
            <a key={i}
              href={`https://maps.google.com/?q=${encodeURIComponent(e.address)}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.04)", border: `1px solid ${e.color}44`,
                borderRadius: 14, padding: "1rem 1.2rem",
                color: "#fff", textDecoration: "none",
                display: "flex", alignItems: "center", gap: 12,
                transition: "background 0.2s",
              }}
            >
              <span style={{ fontSize: "1.8rem" }}>{e.icon}</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.9rem", color: e.color }}>{e.name}</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Open in Google Maps →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, vis] = useInView();
  return (
    <section ref={ref} style={{
      background: "linear-gradient(135deg, #0f0c29, #24243e)",
      padding: "5rem 2rem 6rem", display: "flex", flexDirection: "column",
      alignItems: "center", textAlign: "center",
    }}>
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(40px)",
        transition: "all 1s ease",
      }}>
        <p style={{ color: "#f9a8d4", fontFamily: "'Dancing Script', cursive", fontSize: "1.3rem", letterSpacing: 3, marginBottom: 8 }}>get in touch</p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "#fff", fontWeight: 700, marginBottom: "0.5rem",
        }}>Contact Us</h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", marginBottom: "2.5rem" }}>
          RSVP or reach out for any queries about the wedding
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
          {[
            { name: "Rahul's Friend (Coordinator)", phone: "+91 98765 43210", role: "Wedding Coordinator", icon: "🤵" },
            { name: "Family Contact", phone: "+91 91234 56789", role: "For general queries", icon: "📞" },
          ].map((c, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(249,168,212,0.2)", borderRadius: 20,
              padding: "2rem 2.5rem", minWidth: 260,
            }}>
              <span style={{ fontSize: "2.5rem" }}>{c.icon}</span>
              <p style={{ color: "#f9a8d4", fontFamily: "'Dancing Script', cursive", fontSize: "1rem", marginTop: 12 }}>{c.role}</p>
              <p style={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, margin: "0.4rem 0" }}>{c.name}</p>
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} style={{
                display: "inline-block", marginTop: "1rem",
                background: "linear-gradient(135deg, #6366f1, #ec4899)",
                color: "#fff", padding: "0.7rem 1.5rem", borderRadius: 99,
                textDecoration: "none", fontWeight: 700, fontSize: "1rem",
                letterSpacing: 1, transition: "opacity 0.2s",
              }}>{c.phone}</a>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "4rem" }}>
          <p style={{
            color: "#f9a8d4", fontFamily: "'Dancing Script', cursive",
            fontSize: "2rem", letterSpacing: 2,
          }}>♥ See you on July 2nd ♥</p>
          <p style={{
            color: "rgba(255,255,255,0.3)", marginTop: 12, fontSize: "0.85rem",
            fontFamily: "'Lato', sans-serif",
          }}>Made with love for Rahul & Priya's special day</p>
        </div>
      </div>
    </section>
  );
}

export default function WeddingWebsite() {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif", overflowX: "hidden" }}>
      <HeroSection />
      <GroomSection />
      <BrideSection />
      <GallerySection />
      <EventsSection />
      <MapSection />
      <ContactSection />
    </div>
  );
}
