import { User, Quote } from 'lucide-react';

interface InterviewNote {
  name: string;
  age: number;
  bio: string[];
  quote: string;
  takeaways: string[];
  gradient: string;
}

interface InterviewNotesSlideProps {
  participant: InterviewNote;
}

export function InterviewNotesSlide({ participant }: InterviewNotesSlideProps) {
  // Convert colorful gradients to sophisticated dark gradients
  const gradientMap: { [key: string]: string } = {
    'bg-gradient-to-br from-rose-400 via-pink-500 to-purple-500': 'bg-gradient-to-br from-rose-950 via-pink-900 to-purple-950',
    'bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500': 'bg-gradient-to-br from-teal-950 via-cyan-900 to-blue-950',
    'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500': 'bg-gradient-to-br from-amber-950 via-orange-900 to-red-950',
    'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600': 'bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950'
  };
  
  const darkGradient = gradientMap[participant.gradient] || participant.gradient;
  
  // Accent colors for decorative elements
  const accentMap: { [key: string]: string } = {
    'bg-gradient-to-br from-rose-400 via-pink-500 to-purple-500': 'from-rose-400 to-pink-500',
    'bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500': 'from-teal-400 to-cyan-500',
    'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500': 'from-amber-400 to-orange-500',
    'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600': 'from-violet-400 to-fuchsia-500'
  };
  
  const accentGradient = accentMap[participant.gradient] || 'from-purple-400 to-pink-500';

  return (
    <div className={`w-full h-full ${darkGradient} p-16 flex flex-col relative overflow-hidden`}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-10 flex items-center gap-6">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${accentGradient} flex items-center justify-center shadow-lg`}>
            <User className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-6xl text-white font-light tracking-tight">Interview: {participant.name}</h1>
            <p className="text-white/70 text-2xl mt-2 font-light">Age: {participant.age}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="flex flex-col gap-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-white text-3xl mb-6 font-light tracking-tight">Demographic / Bio</h3>
              <ul className="space-y-4">
                {participant.bio.map((item, index) => (
                  <li key={index} className="text-white/90 flex items-start gap-4">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentGradient} mt-2 flex-shrink-0`}></span>
                    <span className="text-lg font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex-1 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Quote className="w-8 h-8 text-white/80" />
                <h3 className="text-white text-3xl font-light tracking-tight">Key Quote</h3>
              </div>
              <p className="text-white/95 text-2xl italic leading-relaxed font-light">"{participant.quote}"</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
            <h3 className="text-white text-3xl mb-6 font-light tracking-tight">Interview Responses & Takeaways</h3>
            <ul className="space-y-5">
              {participant.takeaways.map((takeaway, index) => (
                <li key={index} className="text-white/90 flex items-start gap-4">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentGradient} mt-2 flex-shrink-0`}></span>
                  <span className="text-lg font-light leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}