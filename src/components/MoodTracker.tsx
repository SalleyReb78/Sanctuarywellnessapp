import { useState } from 'react';
import { Smile, Meh, Frown, Cloud, Calendar, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Textarea } from './ui/textarea';
import { DecorativeBorder, FloralAccent } from './DecorativeBorder';
import { Icon3DCard } from './Icon3D';
import { icon3DAssets } from './iconAssets';

interface MoodEntry {
  id: string;
  date: string;
  mood: number;
  icon: string;
  note?: string;
}

interface MoodTrackerProps {
  entries: MoodEntry[];
  onAddEntry: (entry: Omit<MoodEntry, 'id'>) => void;
}

const moodOptions = [
  { value: 5, label: 'Excellent', icon: '🌟', color: 'from-emerald-300 to-teal-400', lucideIcon: Smile },
  { value: 4, label: 'Good', icon: '😊', color: 'from-cyan-300 to-blue-400', lucideIcon: Smile },
  { value: 3, label: 'Okay', icon: '😐', color: 'from-purple-300 to-violet-400', lucideIcon: Meh },
  { value: 2, label: 'Low', icon: '😔', color: 'from-amber-300 to-orange-400', lucideIcon: Frown },
  { value: 1, label: 'Struggling', icon: '😢', color: 'from-pink-300 to-rose-400', lucideIcon: Cloud },
];

export function MoodTracker({ entries, onAddEntry }: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  const handleMoodSelect = (value: number) => {
    setSelectedMood(value);
    setShowNoteInput(true);
  };

  const handleSave = () => {
    if (selectedMood !== null) {
      const moodOption = moodOptions.find(m => m.value === selectedMood);
      onAddEntry({
        date: new Date().toISOString(),
        mood: selectedMood,
        icon: moodOption?.icon || '😐',
        note: note.trim() || undefined,
      });
      setSelectedMood(null);
      setNote('');
      setShowNoteInput(false);
    }
  };

  const handleCancel = () => {
    setSelectedMood(null);
    setNote('');
    setShowNoteInput(false);
  };

  // Prepare chart data
  const chartData = entries
    .slice(-30)
    .map(entry => ({
      date: new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      mood: entry.mood,
    }));

  // Calculate stats
  const avgMood = entries.length > 0
    ? (entries.reduce((sum, entry) => sum + entry.mood, 0) / entries.length).toFixed(1)
    : 0;
  
  const recentTrend = entries.length >= 7
    ? entries.slice(-7).reduce((sum, entry) => sum + entry.mood, 0) / 7
    : 0;
  
  const previousTrend = entries.length >= 14
    ? entries.slice(-14, -7).reduce((sum, entry) => sum + entry.mood, 0) / 7
    : 0;
  
  const trendDirection = recentTrend > previousTrend ? 'up' : recentTrend < previousTrend ? 'down' : 'stable';

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <DecorativeBorder className="bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl border border-white/50">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Icon3DCard 
              src={icon3DAssets.heart} 
              alt="Heart" 
              size="lg"
              gradient="from-pink-300 via-purple-300 to-cyan-300"
            />
            <div>
              <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">Mood Tracker</h1>
              <p className="text-xl text-cyan-600 font-light italic">Track your emotional well-being over time</p>
            </div>
          </div>
        </div>
      </DecorativeBorder>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200/50 backdrop-blur-sm relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/30 rounded-full blur-2xl"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-purple-600 text-sm font-medium mb-2">Total Check-ins</p>
              <p className="text-4xl font-light text-purple-900">{entries.length}</p>
            </div>
            <Icon3DCard 
              src={icon3DAssets.calendar} 
              alt="Calendar" 
              size="md"
              gradient="from-purple-300 to-violet-400"
            />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-100 border-cyan-200/50 backdrop-blur-sm relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-200/30 rounded-full blur-2xl"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-cyan-600 text-sm font-medium mb-2">Average Mood</p>
              <p className="text-4xl font-light text-cyan-900">{avgMood}<span className="text-xl ml-1">/5</span></p>
            </div>
            <Icon3DCard 
              src={icon3DAssets.heart} 
              alt="Heart" 
              size="md"
              gradient="from-cyan-300 to-blue-400"
            />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-100 border-emerald-200/50 backdrop-blur-sm relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-200/30 rounded-full blur-2xl"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-emerald-600 text-sm font-medium mb-2">7-Day Trend</p>
              <p className="text-2xl font-light text-emerald-900 flex items-center gap-2">
                {trendDirection === 'up' && '↑ Improving'}
                {trendDirection === 'down' && '↓ Declining'}
                {trendDirection === 'stable' && '→ Stable'}
              </p>
            </div>
            <Icon3DCard 
              src={icon3DAssets.trophy} 
              alt="Trophy" 
              size="md"
              gradient="from-emerald-300 to-teal-400"
            />
          </div>
        </Card>
      </div>

      {/* Mood Selection */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <FloralAccent position="top-right" />
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 relative z-10">How are you feeling today?</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 relative z-10">
          {moodOptions.map((mood) => {
            const IconComponent = mood.lucideIcon;
            return (
              <button
                key={mood.value}
                onClick={() => handleMoodSelect(mood.value)}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  selectedMood === mood.value
                    ? `bg-gradient-to-br ${mood.color} border-transparent text-white shadow-xl scale-105`
                    : 'bg-white/60 backdrop-blur-sm border-purple-200/50 hover:border-purple-300 hover:shadow-lg'
                }`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-3">{mood.icon}</div>
                  <p className={`font-light ${selectedMood === mood.value ? 'text-white' : 'text-purple-700'}`}>
                    {mood.label}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {showNoteInput && (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 relative z-10">
            <div>
              <label className="text-purple-700 font-light mb-2 block">Add a note (optional)</label>
              <Textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What's on your mind?"
                className="min-h-[120px] font-light border-purple-200/50 bg-white/50 backdrop-blur-sm"
              />
            </div>
            <div className="flex gap-4">
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-purple-300 to-violet-400 hover:opacity-90 text-white border-none px-8 shadow-lg"
              >
                Save Check-in
              </Button>
              <Button
                onClick={handleCancel}
                variant="outline"
                className="border-purple-300 bg-white/50"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </DecorativeBorder>

      {/* Progress Graph */}
      {entries.length > 0 && (
        <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
          <FloralAccent position="bottom-left" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-200/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 relative z-10">Your Progress</h2>
          <div className="relative z-10">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#a78bfa" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    border: '1px solid #e9d5ff', 
                    borderRadius: '12px',
                    padding: '12px',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <Area type="monotone" dataKey="mood" stroke="#a78bfa" strokeWidth={3} fillOpacity={1} fill="url(#colorMood)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </DecorativeBorder>
      )}

      {/* Mood Log */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl"></div>
        </div>
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 relative z-10">Mood Log</h2>
        {entries.length === 0 ? (
          <div className="text-center py-12 relative z-10">
            <Icon3DCard 
              src={icon3DAssets.heart} 
              alt="Heart" 
              size="lg"
              gradient="from-pink-300 to-purple-400"
              className="mx-auto mb-4"
            />
            <p className="text-xl font-light text-purple-700">No mood entries yet</p>
            <p className="text-cyan-600 font-light italic">Start tracking your mood to see your progress</p>
          </div>
        ) : (
          <div className="space-y-4 relative z-10">
            {entries.slice().reverse().slice(0, 10).map((entry) => {
              const moodOption = moodOptions.find(m => m.value === entry.mood);
              return (
                <div key={entry.id} className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all border border-purple-200/30 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${moodOption?.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <span className="text-2xl">{entry.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-light text-purple-700">{moodOption?.label}</p>
                      <p className="text-sm text-cyan-600 italic">{new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                    {entry.note && (
                      <p className="text-gray-600 font-light text-sm">{entry.note}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </DecorativeBorder>
    </div>
  );
}