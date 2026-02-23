import { User, Target, TrendingUp, AlertCircle } from 'lucide-react';

interface PersonaSlideProps {
  name: string;
  age: number;
  occupation: string;
  bio: string;
  goals: string[];
  painPoints: string[];
  motivations: string[];
  gradient: string;
}

export function PersonaSlide({
  name,
  age,
  occupation,
  bio,
  goals,
  painPoints,
  motivations,
  gradient
}: PersonaSlideProps) {
  // Convert colorful gradients to sophisticated dark gradients
  const gradientMap: { [key: string]: string } = {
    'bg-gradient-to-br from-rose-400 via-pink-500 to-purple-500': 'bg-gradient-to-br from-rose-950 via-pink-900 to-purple-950',
    'bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500': 'bg-gradient-to-br from-teal-950 via-cyan-900 to-blue-950',
    'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500': 'bg-gradient-to-br from-amber-950 via-orange-900 to-red-950',
    'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600': 'bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950'
  };
  
  const darkGradient = gradientMap[gradient] || gradient;
  
  // Accent colors for decorative elements
  const accentMap: { [key: string]: string } = {
    'bg-gradient-to-br from-rose-400 via-pink-500 to-purple-500': 'from-rose-400 to-pink-500',
    'bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500': 'from-teal-400 to-cyan-500',
    'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500': 'from-amber-400 to-orange-500',
    'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600': 'from-violet-400 to-fuchsia-500'
  };
  
  const accentGradient = accentMap[gradient] || 'from-purple-400 to-pink-500';

  return (
    <div className={`w-full h-full ${darkGradient} p-16 flex flex-col justify-between relative overflow-hidden`}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-6 mb-10">
          <div className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${accentGradient} flex items-center justify-center shadow-xl`}>
            <User className="w-14 h-14 text-white" />
          </div>
          <div className="text-white">
            <h1 className="text-6xl mb-2 font-light tracking-tight">{name}</h1>
            <p className="text-2xl opacity-80 font-light">{age} years old • {occupation}</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-white/10 shadow-xl">
          <p className="text-white/95 text-xl leading-relaxed font-light">{bio}</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentGradient} flex items-center justify-center`}>
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-2xl font-light tracking-tight">Goals</h3>
            </div>
            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <li key={index} className="text-white/90 flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentGradient} mt-2 flex-shrink-0`}></span>
                  <span className="font-light leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentGradient} flex items-center justify-center`}>
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-2xl font-light tracking-tight">Pain Points</h3>
            </div>
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="text-white/90 flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentGradient} mt-2 flex-shrink-0`}></span>
                  <span className="font-light leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentGradient} flex items-center justify-center`}>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-2xl font-light tracking-tight">Motivations</h3>
            </div>
            <ul className="space-y-4">
              {motivations.map((motivation, index) => (
                <li key={index} className="text-white/90 flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentGradient} mt-2 flex-shrink-0`}></span>
                  <span className="font-light leading-relaxed">{motivation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}