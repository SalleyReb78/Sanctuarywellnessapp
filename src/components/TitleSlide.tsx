import { Home } from 'lucide-react';

export function TitleSlide() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="text-center text-white relative z-10">
        <div className="mb-10 flex justify-center">
          <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/50">
            <Home className="w-14 h-14" />
          </div>
        </div>
        <h1 className="text-7xl font-light mb-4 tracking-tight">Sanctuary Systems</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6"></div>
        <p className="text-3xl opacity-80 font-light tracking-wide">User Research Presentation</p>
        <div className="mt-16 text-xl opacity-60 font-light">
          <p>November 2025</p>
        </div>
      </div>
    </div>
  );
}