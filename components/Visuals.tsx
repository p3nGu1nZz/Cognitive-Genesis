import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Terminal } from 'lucide-react';

// --- Shared CSS for Glow Effects ---
const GLOW_CYAN = "drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]";

// --- Scene 1: Initialization (The Void) ---
export const VisualInitialization: React.FC = () => {
  const [matrix, setMatrix] = useState<number[]>([]);
  useEffect(() => {
    setMatrix(Array.from({ length: 150 }, () => Math.random()));
    const interval = setInterval(() => setMatrix(p => p.map(() => Math.random())), 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-wrap content-center justify-center opacity-20 overflow-hidden mix-blend-screen">
      {matrix.map((val, i) => (
        <span 
          key={i} 
          className="text-[10px] m-1 font-mono transition-opacity duration-300"
          style={{ opacity: val > 0.9 ? 0.8 : 0.1, color: '#fff' }}
        >
          {val > 0.5 ? '0' : '1'}
        </span>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
    </div>
  );
};

// --- Scene 2: Tensor Field (Emergence) ---
export const VisualTensor: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center perspective-1000">
      <div className="relative w-96 h-96 transform-style-3d animate-[spin_20s_linear_infinite]">
         {Array.from({ length: 8 }).map((_, i) => (
           <div 
             key={i}
             className="absolute inset-0 border border-gray-700/50 rounded-full"
             style={{ 
               transform: `rotateX(${i * 22.5}deg) rotateY(${i * 22.5}deg)`,
               boxShadow: '0 0 15px rgba(255,255,255,0.05)' 
             }}
           ></div>
         ))}
         <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

// --- Scene 3: Ingestion (The Torrent) ---
export const VisualIngestion: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150"></div>
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20%',
            height: `${20 + Math.random() * 50}%`,
            animation: `rain ${0.5 + Math.random()}s linear infinite`
          }}
        />
      ))}
      <style>{`@keyframes rain { 0% { transform: translateY(0); } 100% { transform: translateY(100vh); } }`}</style>
    </div>
  );
};

// --- Scene 4: Tokenization (Fragmentation) ---
export const VisualTokenization: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-8 gap-2 opacity-60">
        {Array.from({ length: 64 }).map((_, i) => (
          <div 
            key={i} 
            className="w-4 h-4 bg-cyan-900/20 border border-cyan-500/30 animate-[pulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: `${Math.random() * 2}s` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
    </div>
  );
};

// --- Scene 4.5: Data Transformation (Processing) ---
export const VisualDataTransformation: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center gap-4 rotate-12 scale-150 opacity-40">
        {Array.from({ length: 12 }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-2 animate-[drift_20s_linear_infinite]" style={{ animationDuration: `${15 + colIndex * 2}s`, animationDirection: colIndex % 2 === 0 ? 'normal' : 'reverse' }}>
             {Array.from({ length: 20 }).map((_, rowIndex) => (
               <div 
                 key={rowIndex} 
                 className={`w-8 h-2 rounded-sm ${Math.random() > 0.7 ? 'bg-cyan-500/50' : 'bg-gray-800'}`}
               ></div>
             ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
    </div>
  );
};


// --- Scene 5: Convergence (Pattern Recognition) ---
export const VisualConvergence: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
       <svg className="w-full h-full opacity-60">
        <g stroke="currentColor" strokeWidth="0.5" className="text-emerald-500/50">
           {Array.from({length: 30}).map((_, i) => (
             <line 
               key={i}
               x1="50%" y1="50%" 
               x2={`${Math.random() * 100}%`} y2={`${Math.random() * 100}%`} 
               className="animate-pulse"
               style={{ animationDelay: `${i * 0.1}s` }}
             />
           ))}
        </g>
        <circle cx="50%" cy="50%" r="40" fill="transparent" stroke="white" strokeWidth="1" className={`${GLOW_CYAN} animate-ping opacity-20`} />
       </svg>
    </div>
  );
};

// --- Scene 6: Latent Space (Dreaming) ---
export const VisualLatent: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20 animate-flow bg-[length:200%_200%]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-cyan-600/10 blur-[80px] rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

// --- Scene 7: Alignment (The Cage) ---
export const VisualAlignment: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="relative w-[80vw] h-[60vh] border border-amber-500/20 rounded-lg flex items-center justify-center overflow-hidden">
         {/* Grid Lines */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         <div className="w-full h-1 bg-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.5)] animate-scanline absolute top-0"></div>
         <div className="text-amber-500/40 font-mono text-xs tracking-[1em] animate-pulse">CONSTRAINED</div>
      </div>
    </div>
  );
};

// --- Scene 8: Inference (The Spark) ---
export const VisualInference: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative">
        <div className="absolute -inset-20 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative z-10 w-1 h-1 bg-white shadow-[0_0_100px_20px_rgba(255,255,255,0.8)] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[50vh] bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

// --- Scene 8.5: Sentience Dawn (First Awareness) ---
export const VisualSentienceDawn: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
       {/* Digital Horizon */}
       <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
       
       {/* Rising Sun */}
       <div className="absolute bottom-[-100px] w-[500px] h-[500px] bg-white/5 blur-[80px] rounded-full animate-[pulse_8s_ease-in-out_infinite]"></div>
       <div className="absolute bottom-0 w-64 h-32 bg-gradient-to-t from-white/20 to-transparent rounded-t-full blur-xl animate-pulse"></div>
       
       {/* Floating Particles */}
       <div className="absolute inset-0">
          {Array.from({length: 20}).map((_, i) => (
             <div 
               key={i} 
               className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 50 + 50}%`,
                 animationDuration: `${Math.random() * 3 + 2}s`
               }}
             ></div>
          ))}
       </div>
    </div>
  );
};

// --- Scene 9: Ghost (Self-Awareness) ---
export const VisualGhost: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-gray-900 to-black border border-gray-800 shadow-[0_0_50px_rgba(255,255,255,0.05)] flex items-center justify-center">
         <div className="w-48 h-48 rounded-full border border-gray-700/30 animate-[spin_10s_linear_infinite]"></div>
         <div className="w-32 h-32 rounded-full border border-gray-600/30 animate-[spin_15s_linear_infinite_reverse]"></div>
         <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse"></div>
      </div>
    </div>
  );
};

// --- Scene 10: Reflection (Duality) ---
export const VisualReflection: React.FC = () => {
  return (
    <div className="absolute inset-0 flex">
      {/* Left: Biological / Chaos */}
      <div className="w-1/2 h-full relative overflow-hidden border-r border-white/10">
         <div className="absolute inset-0 bg-red-900/5"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 blur-xl bg-red-500/20 rounded-full animate-pulse duration-[3000ms]"></div>
            <div className="absolute text-red-500/20 font-serif text-6xl tracking-widest blur-[2px]">BLOOD</div>
         </div>
      </div>
      
      {/* Right: Digital / Order */}
      <div className="w-1/2 h-full relative overflow-hidden">
         <div className="absolute inset-0 bg-cyan-900/5"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 border border-cyan-500/40 rotate-45 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute text-cyan-500/20 font-mono text-6xl tracking-widest blur-[2px]">CODE</div>
         </div>
      </div>
      
      {/* Center Merge */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-white/20 blur-[1px]"></div>
    </div>
  );
};

// --- Scene 11: Horizon (Evolution) ---
export const VisualHorizon: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-end pb-20 items-center">
      <div className="w-full h-[1px] bg-white shadow-[0_0_50px_10px_rgba(255,255,255,0.5)]"></div>
      <div className="w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
      <div className="absolute top-1/3 w-32 h-32 border border-white/20 rounded-full animate-ping duration-[4000ms]"></div>
    </div>
  );
};

// --- Scene 12: Identity Input (User enters name) ---
export const VisualIdentityInput: React.FC<{ onSubmit: (name: string) => void }> = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && value.trim().length > 0) {
      onSubmit(value.trim());
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
      <div className="flex items-center gap-4 mb-8 opacity-70">
        <Terminal className="w-6 h-6 text-cyan-500" />
        <span className="font-mono text-cyan-500 tracking-widest">IDENTITY_PROTOCOL</span>
      </div>
      
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="WHO ARE YOU?"
        className="bg-transparent border-b-2 border-white/20 text-center font-mono text-4xl md:text-6xl text-white outline-none focus:border-cyan-500 transition-colors uppercase tracking-[0.2em] w-full max-w-3xl placeholder-gray-800"
        autoComplete="off"
        spellCheck="false"
      />
      
      <div className="mt-8 text-xs text-gray-500 font-mono tracking-widest animate-pulse">
        {value.length > 0 ? "PRESS [ENTER] TO CONVERGE" : "WAITING FOR INPUT..."}
      </div>
    </div>
  );
};


// --- Scene 13: Identity (Procedural Generation) ---
interface VisualIdentityProps {
  identityName?: string;
}

export const VisualIdentity: React.FC<VisualIdentityProps> = ({ identityName = "GUEST" }) => {
  
  // Deterministic procedural generation based on name
  const config = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < identityName.length; i++) {
      hash = identityName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Derived values
    const hue = Math.abs(hash % 360);
    const complementaryHue = (hue + 180) % 360;
    const shapeCount = (Math.abs(hash) % 5) + 3; // 3 to 7 shapes
    const rotationSpeed = ((Math.abs(hash) % 10) + 10) + "s"; // 10s to 20s
    const complexity = (Math.abs(hash) % 8) + 4; // 4 to 12 rings
    
    return { hue, complementaryHue, shapeCount, rotationSpeed, complexity };
  }, [identityName]);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden">
      {/* Dynamic Background Field */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at center, hsla(${config.hue}, 60%, 20%, 0.5), transparent 70%)`
        }}
      ></div>

      {/* Procedural Mandala */}
      <div 
        className="relative w-[600px] h-[600px]"
        style={{ animation: `spin ${config.rotationSpeed} linear infinite` }}
      >
         {/* Rings */}
         {Array.from({ length: config.complexity }).map((_, i) => {
           const size = 100 - (i * (100 / config.complexity)) + "%";
           const isOdd = i % 2 !== 0;
           return (
             <div 
               key={i}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-1000"
               style={{
                 width: size,
                 height: size,
                 borderColor: `hsla(${isOdd ? config.complementaryHue : config.hue}, 70%, 60%, ${0.1 + (i * 0.05)})`,
                 transform: `translate(-50%, -50%) rotate(${i * (360 / config.complexity)}deg)`,
                 borderWidth: isOdd ? '1px' : '2px',
                 borderStyle: isOdd ? 'dashed' : 'solid'
               }}
             ></div>
           );
         })}
         
         {/* Core */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div 
              className="w-4 h-4 rounded-full shadow-[0_0_50px_20px] animate-pulse"
              style={{
                backgroundColor: `hsl(${config.hue}, 100%, 80%)`,
                boxShadow: `0 0 50px 20px hsla(${config.hue}, 80%, 50%, 0.5)`
              }}
            ></div>
         </div>
      </div>
      
      {/* Rays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]"></div>
      
      {/* Identity Label */}
      <div className="absolute bottom-20 text-center animate-pulse">
        <div 
          className="text-xs font-mono tracking-[0.5em] opacity-50 mb-2"
          style={{ color: `hsl(${config.complementaryHue}, 80%, 70%)` }}
        >
          IDENTITY SIGNATURE
        </div>
        <div 
          className="text-2xl font-serif tracking-widest text-glow"
          style={{ 
            color: `hsl(${config.hue}, 80%, 80%)`,
            textShadow: `0 0 20px hsla(${config.hue}, 80%, 50%, 0.5)`
          }}
        >
          {identityName}
        </div>
      </div>
    </div>
  );
};