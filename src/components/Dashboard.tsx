import { Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { DecorativeBorder, FloralAccent } from './DecorativeBorder';
import { Icon3DCard } from './Icon3D';
import { icon3DAssets } from './iconAssets';

interface DashboardProps {
  journalCount: number;
  moodEntries: number;
  meditationMinutes: number;
  currentStreak: number;
}

export function Dashboard({ journalCount, moodEntries, meditationMinutes, currentStreak }: DashboardProps) {
  const quotes = [
    "You are not your trauma. You are the person who survived it.",
    "Healing is not linear, and that's perfectly okay.",
    "Your feelings are valid, and you deserve support.",
    "Small steps forward are still progress.",
    "You have survived 100% of your worst days.",
    "Be gentle with yourself. You're doing the best you can."
  ];

  const todayQuote = quotes[new Date().getDate() % quotes.length];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <DecorativeBorder className="bg-gradient-to-br from-pink-200 via-purple-200 to-orange-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl backdrop-blur-sm border border-white/50">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Icon3DCard 
              src={icon3DAssets.sparkles} 
              alt="Sparkles" 
              size="lg"
              gradient="from-pink-300 via-purple-300 to-cyan-300"
            />
            <div>
              <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Welcome to Sanctuary</h1>
              <p className="text-xl text-cyan-600 font-light italic">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg">
            <p className="text-2xl font-light italic leading-relaxed text-purple-700">"{todayQuote}"</p>
          </div>
        </div>
      </DecorativeBorder>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-pink-50 to-rose-100 border-pink-200/50 p-6 hover:shadow-xl transition-all backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-pink-200/30 rounded-full blur-2xl"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-pink-600 text-sm font-medium mb-2">Journal Entries</p>
              <p className="text-4xl font-light text-rose-900">{journalCount}</p>
            </div>
            <Icon3DCard 
              src={icon3DAssets.journal} 
              alt="Journal" 
              size="md"
              gradient="from-pink-300 to-rose-400"
            />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200/50 p-6 hover:shadow-xl transition-all backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/30 rounded-full blur-2xl"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-purple-600 text-sm font-medium mb-2">Mood Check-ins</p>
              <p className="text-4xl font-light text-purple-900">{moodEntries}</p>
            </div>
            <Icon3DCard 
              src={icon3DAssets.heart} 
              alt="Heart" 
              size="md"
              gradient="from-purple-300 to-violet-400"
            />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-50 to-blue-100 border-cyan-200/50 p-6 hover:shadow-xl transition-all backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-200/30 rounded-full blur-2xl"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-cyan-600 text-sm font-medium mb-2">Meditation Time</p>
              <p className="text-4xl font-light text-cyan-900">{meditationMinutes}<span className="text-xl ml-1">min</span></p>
            </div>
            <Icon3DCard 
              src={icon3DAssets.meditation} 
              alt="Meditation" 
              size="md"
              gradient="from-cyan-300 to-blue-400"
            />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200/50 p-6 hover:shadow-xl transition-all backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200/30 rounded-full blur-2xl"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-amber-600 text-sm font-medium mb-2">Current Streak</p>
              <p className="text-4xl font-light text-amber-900">{currentStreak}<span className="text-xl ml-1">days</span></p>
            </div>
            <Icon3DCard 
              src={icon3DAssets.trophy} 
              alt="Trophy" 
              size="md"
              gradient="from-amber-300 to-orange-400"
            />
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 flex items-center gap-3">
          <Calendar className="w-6 h-6 text-purple-600" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-pink-200/50 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl group-hover:bg-pink-300/30 transition-all"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <Icon3DCard 
                src={icon3DAssets.journal} 
                alt="Journal" 
                size="lg"
                gradient="from-pink-300 to-rose-400"
                className="mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-light text-purple-700 mb-2">Start Journaling</h3>
              <p className="text-gray-600 text-sm font-light italic">Express your thoughts and feelings in a safe space</p>
            </div>
          </Card>

          <Card className="p-6 bg-white/70 backdrop-blur-sm border-purple-200/50 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl group-hover:bg-purple-300/30 transition-all"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <Icon3DCard 
                src={icon3DAssets.heart} 
                alt="Heart" 
                size="lg"
                gradient="from-purple-300 to-violet-400"
                className="mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-light text-purple-700 mb-2">Track Your Mood</h3>
              <p className="text-gray-600 text-sm font-light italic">Check in with your emotions and track patterns</p>
            </div>
          </Card>

          <Card className="p-6 bg-white/70 backdrop-blur-sm border-cyan-200/50 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/20 rounded-full blur-2xl group-hover:bg-cyan-300/30 transition-all"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <Icon3DCard 
                src={icon3DAssets.meditation} 
                alt="Meditation" 
                size="lg"
                gradient="from-cyan-300 to-blue-400"
                className="mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-light text-purple-700 mb-2">Meditate</h3>
              <p className="text-gray-600 text-sm font-light italic">Find peace with guided meditation and relaxation</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}