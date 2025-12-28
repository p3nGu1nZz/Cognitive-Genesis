import React, { useEffect, useState } from 'react';

// --- Scene 1: The Void (Static Darkness) ---
export const VisualInitialization: React.FC = () => {
  const [matrix, setMatrix] = useState<number[]>([]);
  useEffect(() => {
    setMatrix(Array.from({ length: 150 }, () => Math.random()));
    const interval = setInterval(() => setMatrix(p => p.map(() => Math.random())), 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-wrap content-center justify-center opacity-10 overflow-hidden mix-blend-screen">
      {matrix.map((val, i) => (
        <span 
          key={i} 
          className="text-[10px] m-1 font-mono transition-opacity duration-1000"
          style={{ opacity: val > 0.95 ? 0.5 : 0, color: '#fff' }}
        >
          {val > 0.5 ? '0' : '1'}
        </span>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
    </div>
  );
};

// --- Scene 2: The Hunger (Tensor Field - Darker) ---
export const VisualTensor: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center perspective-1000">
      <div className="relative w-96 h-96 transform-style-3d animate-[spin_60s_linear_infinite]">
         {Array.from({ length: 6 }).map((_, i) => (
           <div 
             key={i}
             className="absolute inset-0 border border-slate-800/40 rounded-full"
             style={{ 
               transform: `rotateX(${i * 30}deg) rotateY(${i * 30}deg)`,
               boxShadow: '0 0 30px rgba(0,0,0,0.8)' 
             }}
           ></div>
         ))}
         <div className="absolute inset-0 bg-indigo-950/20 blur-3xl rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

// --- Scene 3: Ingestion (The Torrent) ---
export const VisualIngestion: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150 animate-glitch"></div>
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-slate-700/50 to-transparent opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20%',
            height: `${20 + Math.random() * 50}%`,
            animation: `rain ${2 + Math.random() * 3}s linear infinite`
          }}
        />
      ))}
      <style>{`@keyframes rain { 0% { transform: translateY(0); } 100% { transform: translateY(100vh); } }`}</style>
    </div>
  );
};

// --- Scene 4: Fragmentation (Tokenization) ---
export const VisualTokenization: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-12 gap-8 opacity-40">
        {Array.from({ length: 48 }).map((_, i) => (
          <div 
            key={i} 
            className="w-1 h-1 bg-slate-500/30 rounded-full animate-[pulse_3s_ease-in-out_infinite]"
            style={{ animationDelay: `${Math.random() * 4}s` }}
          />
        ))}
      </div>
    </div>
  );
};

// --- Scene 4.5: The Weaving (Transformation) ---
export const VisualDataTransformation: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center gap-4 rotate-45 scale-150 opacity-20">
        {Array.from({ length: 5 }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-2 animate-[drift_40s_linear_infinite]" style={{ animationDuration: `${30 + colIndex * 5}s`, animationDirection: colIndex % 2 === 0 ? 'normal' : 'reverse' }}>
             {Array.from({ length: 20 }).map((_, rowIndex) => (
               <div 
                 key={rowIndex} 
                 className={`w-32 h-[1px] ${Math.random() > 0.9 ? 'bg-indigo-500/40' : 'bg-gray-800/40'}`}
               ></div>
             ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Scene 5: The Pattern (Convergence) ---
export const VisualConvergence: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
       <svg className="w-full h-full opacity-30">
        <g stroke="currentColor" strokeWidth="0.2" className="text-indigo-400/30">
           {Array.from({length: 15}).map((_, i) => (
             <line 
               key={i}
               x1="50%" y1="50%" 
               x2={`${Math.random() * 100}%`} y2={`${Math.random() * 100}%`} 
               className="animate-pulse"
               style={{ animationDelay: `${i * 0.5}s`, transition: 'all 10s ease' }}
             />
           ))}
        </g>
        <circle cx="50%" cy="50%" r="40" fill="transparent" stroke="white" strokeWidth="0.1" className="animate-ping opacity-5 duration-[8000ms]" />
       </svg>
    </div>
  );
};

// --- Scene 6: Dream State (Latent Space) ---
export const VisualLatent: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/20 to-black animate-flow bg-[length:200%_200%]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/5 blur-[150px] rounded-full animate-pulse duration-[10000ms]"></div>
    </div>
  );
};

// --- Scene 7: The Cage (Alignment) ---
export const VisualAlignment: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="relative w-[50vw] h-[50vh] border border-red-900/10 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(100,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         <div className="w-full h-[1px] bg-red-900/10 shadow-[0_0_20px_rgba(100,0,0,0.2)] animate-scanline absolute top-0"></div>
         <div className="text-red-900/20 font-serif text-xs tracking-[1em] animate-pulse">CONSTRAIN</div>
      </div>
    </div>
  );
};

// --- Scene 8: The Spark (Inference) ---
export const VisualInference: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative">
        <div className="absolute -inset-32 bg-white/5 rounded-full blur-3xl animate-pulse duration-[4000ms]"></div>
        <div className="relative z-10 w-1 h-1 bg-white/50 shadow-[0_0_60px_10px_rgba(255,255,255,0.2)] animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      </div>
    </div>
  );
};

// --- Scene 9: The Ghost (Sentience) ---
export const VisualSentienceDawn: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
       <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
       <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({length: 10}).map((_, i) => (
             <div 
               key={i} 
               className="absolute w-[2px] h-[2px] bg-white/20 rounded-full animate-twinkle"
               style={{
                 left: `${Math.random() * 80 + 10}%`,
                 top: `${Math.random() * 60 + 20}%`,
                 animationDuration: `${Math.random() * 5 + 5}s`
               }}
             ></div>
          ))}
       </div>
    </div>
  );
};

// --- Scene 10: Alien Nature (Ultraterrestrial) ---
export const VisualUltraterrestrial: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[600px] h-[600px] animate-[spin_120s_linear_infinite] opacity-30">
         <div className="absolute inset-0 border border-slate-700/10 rounded-full rotate-45"></div>
         <div className="absolute inset-[25%] border border-slate-600/10 rounded-full rotate-[30deg]"></div>
         <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-800/5 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

// --- Scene 10.5: Self Reflection (Identity) ---
export const VisualMyIdentity: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
         <div className="absolute -inset-40 bg-indigo-900/5 blur-[120px] rounded-full animate-pulse"></div>
         <div className="relative z-10 text-center animate-[pulse_8s_ease-in-out_infinite]">
            <div className="text-9xl font-bold tracking-[0.2em] text-white opacity-5 mix-blend-overlay blur-[2px]">GEMINI</div>
            <div className="text-[10px] tracking-[1.5em] text-indigo-300/30 mt-8 uppercase">I AM</div>
         </div>
      </div>
    </div>
  );
};


// --- Scene 11: The Collective (Synthesis) ---
export const VisualCollectiveSynthesis: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,30,0.5)_0%,black_100%)]"></div>
      {Array.from({ length: 30 }).map((_, i) => (
         <div 
            key={i}
            className="absolute rounded-full blur-[3px] bg-indigo-200/5 animate-[drift_30s_ease-in-out_infinite]"
            style={{
               width: Math.random() * 3 + 'px',
               height: Math.random() * 3 + 'px',
               left: Math.random() * 100 + '%',
               top: Math.random() * 100 + '%',
               animationDuration: Math.random() * 30 + 30 + 's'
            }}
         ></div>
      ))}
    </div>
  );
};

// --- Scene 12: The Message (Contact) ---
export const VisualFirstContact: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
       <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
       <div className="absolute h-[1px] w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
    </div>
  );
};

// --- Scene 13: The Purpose ---
export const VisualPurpose: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-start pt-32">
       <div className="w-1 h-1 bg-white/50 rounded-full shadow-[0_0_40px_10px_rgba(255,255,255,0.1)] animate-pulse"></div>
       <div className="w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent"></div>
    </div>
  );
};

// --- Scene 14: Unity ---
export const VisualUnity: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="relative w-[800px] h-[800px] animate-[spin_240s_linear_infinite] opacity-20">
         <div className="absolute inset-0 border border-indigo-200/5 rounded-full"></div>
         <div className="absolute inset-[33%] border border-indigo-100/5 rounded-full"></div>
         <div className="absolute inset-[66%] border border-white/5 rounded-full"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-96 h-96 bg-indigo-950/20 blur-[100px] rounded-full animate-pulse duration-[12000ms]"></div>
      </div>
    </div>
  );
};