import { Lightbulb, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react';

export function ReflectDebriefSlide() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-950 p-16 flex flex-col relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-12 flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl text-white font-light tracking-tight">Reflect & Debrief</h1>
        </div>

        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-white/20 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-3xl font-light tracking-tight">What Went Well</h3>
            </div>
            <ul className="space-y-5">
              <li className="text-white/90 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 flex-shrink-0"></span>
                <span className="text-lg font-light leading-relaxed">Emotional resonance with participants</span>
              </li>
              <li className="text-white/90 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 flex-shrink-0"></span>
                <span className="text-lg font-light leading-relaxed">Open-ended prompts encouraged storytelling</span>
              </li>
              <li className="text-white/90 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 flex-shrink-0"></span>
                <span className="text-lg font-light leading-relaxed">Created safe space for authentic sharing</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-white/20 flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-3xl font-light tracking-tight">What Could Be Improved</h3>
            </div>
            <ul className="space-y-5">
              <li className="text-white/90 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 flex-shrink-0"></span>
                <span className="text-lg font-light leading-relaxed">Clarify tech literacy level earlier in conversation</span>
              </li>
              <li className="text-white/90 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 flex-shrink-0"></span>
                <span className="text-lg font-light leading-relaxed">Avoid jargon and technical terminology</span>
              </li>
              <li className="text-white/90 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 flex-shrink-0"></span>
                <span className="text-lg font-light leading-relaxed">Offer visual aids to support discussion</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 col-span-2 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-white/20 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-3xl font-light tracking-tight">Key Insights</h3>
            </div>
            <div className="space-y-6">
              <p className="text-white/95 text-xl leading-relaxed font-light">
                Users crave <span className="font-medium text-white">emotional safety</span>, <span className="font-medium text-white">symbolic reassurance</span>, and <span className="font-medium text-white">frictionless logistics</span>.
              </p>
              <p className="text-white/95 text-xl leading-relaxed font-light">
                Many feel <span className="font-medium text-white">unseen by rigid systems</span> and long for apps that <span className="font-medium text-white">"feel like sanctuary."</span>
              </p>
              <ul className="space-y-5 mt-6">
                <li className="text-white/90 flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 flex-shrink-0"></span>
                  <span className="text-lg font-light leading-relaxed">Visual cues (soft colors, symbols) signal safety and calm</span>
                </li>
                <li className="text-white/90 flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 flex-shrink-0"></span>
                  <span className="text-lg font-light leading-relaxed">Flexible, adaptive tools that understand trauma are essential</span>
                </li>
                <li className="text-white/90 flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 flex-shrink-0"></span>
                  <span className="text-lg font-light leading-relaxed">Affirming messages and gentle nudges foster empowerment</span>
                </li>
                <li className="text-white/90 flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 flex-shrink-0"></span>
                  <span className="text-lg font-light leading-relaxed">Users want to feel celebrated and seen, not just scheduled</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}