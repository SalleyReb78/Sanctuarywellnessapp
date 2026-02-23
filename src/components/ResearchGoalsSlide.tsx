import { Target, CheckCircle2 } from 'lucide-react';

export function ResearchGoalsSlide() {
  const goals = [
    {
      number: "1",
      description: "I want to understand how survivors of systemic trauma navigate digital platforms when seeking support, resources, or community."
    },
    {
      number: "2",
      description: "I want to identify emotional and logistical barriers that prevent users from feeling safe, seen, and empowered during online interactions."
    },
    {
      number: "3",
      description: "I want to explore how design elements—visual, symbolic, and tonal—can create experiences that feel like sanctuary rather than systems."
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-950 p-16 flex flex-col relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-12 flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl text-white font-light tracking-tight">Research Goals</h1>
        </div>

        <div className="flex flex-col gap-8 flex-1">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 flex gap-8 items-start hover:bg-white/10 transition-all duration-300 shadow-xl"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border border-white/20 flex items-center justify-center">
                <span className="text-white text-4xl font-light">{goal.number}</span>
              </div>
              <div className="flex-1">
                <p className="text-white/95 text-2xl leading-relaxed font-light">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}