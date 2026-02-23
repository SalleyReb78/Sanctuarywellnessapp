import { MessageCircle } from 'lucide-react';

export function InterviewQuestionsSlide() {
  const questions = [
    "Can you walk me through the last time you tried to schedule an appointment—what worked and what didn't?",
    "What kinds of appointments do you find most stressful to coordinate?",
    "How do digital tools help or hinder your ability to stay organized?",
    "What would an ideal scheduling experience feel like for you—emotionally and logistically?",
    "Are there visual or symbolic elements that help you feel calm, safe, or in control when using an app?"
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-950 via-fuchsia-900 to-purple-950 p-16 flex flex-col relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-12 flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl text-white font-light tracking-tight">Interview Questions</h1>
        </div>

        <div className="flex flex-col gap-6 flex-1">
          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex gap-6 items-start hover:bg-white/10 transition-all duration-300 shadow-xl"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-fuchsia-500/20 border border-white/20 flex items-center justify-center">
                <span className="text-white text-2xl font-light">{index + 1}</span>
              </div>
              <p className="text-white/95 text-xl leading-relaxed flex-1 font-light">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}