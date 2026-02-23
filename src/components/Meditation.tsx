import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Music, ExternalLink, Lock, CheckCircle, Headphones, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Slider } from './ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { DecorativeBorder, FloralAccent } from './DecorativeBorder';
import { Icon3DCard } from './Icon3D';
import { icon3DAssets } from './iconAssets';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from './ui/dialog';

interface MeditationProps {
  onComplete: (minutes: number) => void;
}

const guidedMeditations = [
  {
    id: 1,
    title: "Grounding for Trauma Survivors",
    duration: 10,
    description: "A gentle practice to help you feel safe and present in your body.",
    script: [
      "Find a comfortable position, sitting or lying down.",
      "Notice five things you can see around you.",
      "Notice four things you can touch or feel.",
      "Notice three things you can hear.",
      "Notice two things you can smell.",
      "Notice one thing you can taste.",
      "Take a deep breath and return to the present moment.",
    ]
  },
  {
    id: 2,
    title: "Self-Compassion Meditation",
    duration: 15,
    description: "Cultivate kindness and understanding towards yourself.",
    script: [
      "Place your hand on your heart and feel its rhythm.",
      "Acknowledge that you are doing your best.",
      "Repeat: 'I am worthy of love and care.'",
      "Allow yourself to feel what you're feeling without judgment.",
      "Offer yourself the same kindness you'd give a friend.",
    ]
  },
  {
    id: 3,
    title: "Body Scan for Relaxation",
    duration: 20,
    description: "Release tension and reconnect with your body in a safe way.",
    script: [
      "Begin by noticing your breath, without changing it.",
      "Slowly bring awareness to your feet and toes.",
      "Notice any sensations without judgment.",
      "Move awareness up through your legs, torso, arms, and head.",
      "Release any tension you notice with each exhale.",
    ]
  },
  {
    id: 4,
    title: "5-Minute Breathing Space",
    duration: 5,
    description: "A quick centering practice for moments of stress.",
    script: [
      "Notice how you're feeling right now.",
      "Bring attention to your breath.",
      "Breathe in for 4 counts, hold for 4, exhale for 6.",
      "Repeat this cycle for a few minutes.",
      "Return to your day feeling more centered.",
    ]
  },
];

const relaxationSounds = [
  { id: 'rain', name: 'Gentle Rain', emoji: '🌧️', description: 'Soft rainfall sounds' },
  { id: 'ocean', name: 'Ocean Waves', emoji: '🌊', description: 'Calming ocean waves' },
  { id: 'forest', name: 'Forest Birds', emoji: '🌲', description: 'Peaceful forest ambience' },
  { id: 'wind', name: 'Wind Chimes', emoji: '🎐', description: 'Soothing wind chimes' },
  { id: 'fire', name: 'Crackling Fire', emoji: '🔥', description: 'Warm fireplace sounds' },
];

export function Meditation({ onComplete }: MeditationProps) {
  const [timerMinutes, setTimerMinutes] = useState(5);
  const [timeLeft, setTimeLeft] = useState(timerMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [selectedSound, setSelectedSound] = useState<string | null>(null);
  const [soundVolume, setSoundVolume] = useState(50);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      onComplete(timerMinutes);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, timeLeft, timerMinutes, onComplete]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(timerMinutes * 60);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTimerChange = (value: number[]) => {
    if (!isActive) {
      setTimerMinutes(value[0]);
      setTimeLeft(value[0] * 60);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((timerMinutes * 60 - timeLeft) / (timerMinutes * 60)) * 100;

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <DecorativeBorder className="bg-gradient-to-br from-cyan-200 via-blue-200 to-purple-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl border border-white/50">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <Icon3DCard 
              src={icon3DAssets.meditation} 
              alt="Meditation" 
              size="lg"
              gradient="from-cyan-300 via-blue-300 to-purple-300"
            />
            <div>
              <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 mb-2">Meditation & Relaxation</h1>
              <p className="text-xl text-purple-600 font-light italic">Find peace and calm in your safe space</p>
            </div>
          </div>
        </div>
      </DecorativeBorder>

      <Tabs defaultValue="timer" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/60 backdrop-blur-sm border border-purple-200/50">
          <TabsTrigger value="timer">Meditation Timer</TabsTrigger>
          <TabsTrigger value="guided">Guided Meditations</TabsTrigger>
          <TabsTrigger value="sounds">Relaxation Sounds</TabsTrigger>
          <TabsTrigger value="music">Dance It Out 💃</TabsTrigger>
        </TabsList>

        {/* Meditation Timer */}
        <TabsContent value="timer">
          <DecorativeBorder className="p-12 bg-gradient-to-br from-cyan-50/80 via-blue-50/80 to-purple-50/80 backdrop-blur-sm border-cyan-200/50 rounded-3xl shadow-xl relative overflow-hidden">
            <FloralAccent position="top-right" />
            <FloralAccent position="bottom-left" />
            <div className="absolute top-0 left-0 w-60 h-60 bg-cyan-200/20 rounded-full blur-3xl"></div>
            <div className="max-w-md mx-auto relative z-10">
              {/* Timer Display */}
              <div className="relative w-80 h-80 mx-auto mb-12">
                <svg className="transform -rotate-90 w-80 h-80">
                  <circle
                    cx="160"
                    cy="160"
                    r="140"
                    stroke="url(#circleGradient)"
                    strokeWidth="12"
                    fill="none"
                    opacity="0.2"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="140"
                    stroke="url(#progressGradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 140}`}
                    strokeDashoffset={`${2 * Math.PI * 140 * (1 - progress / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                  <defs>
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 mb-2">{formatTime(timeLeft)}</p>
                    <p className="text-lg text-purple-600 font-light italic">
                      {isActive ? 'Meditating...' : 'Ready to begin'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timer Controls */}
              <div className="space-y-8">
                <div>
                  <label className="block text-purple-700 font-light mb-4 italic">
                    Duration: {timerMinutes} minutes
                  </label>
                  <Slider
                    value={[timerMinutes]}
                    onValueChange={handleTimerChange}
                    min={1}
                    max={60}
                    step={1}
                    disabled={isActive}
                    className="w-full"
                  />
                </div>

                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={toggleTimer}
                    size="lg"
                    className="bg-gradient-to-r from-cyan-300 to-purple-400 hover:opacity-90 text-white border-none px-12 py-6 text-lg shadow-lg"
                  >
                    {isActive ? (
                      <>
                        <Pause className="w-6 h-6 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-6 h-6 mr-2" />
                        Start
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={resetTimer}
                    size="lg"
                    variant="outline"
                    className="border-purple-300 bg-white/50 backdrop-blur-sm px-8 py-6"
                  >
                    <RotateCcw className="w-6 h-6 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </DecorativeBorder>
        </TabsContent>

        {/* Guided Meditations */}
        <TabsContent value="guided">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidedMeditations.map((meditation) => (
              <DecorativeBorder key={meditation.id} className="p-6 bg-white/80 backdrop-blur-sm border-purple-200/50 hover:shadow-xl transition-all rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/20 rounded-full blur-3xl"></div>
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <Icon3DCard 
                    src={icon3DAssets.meditation} 
                    alt="Meditation" 
                    size="md"
                    gradient="from-cyan-300 to-blue-400"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 mb-1">{meditation.title}</h3>
                    <p className="text-sm text-purple-600 italic">{meditation.duration} minutes</p>
                  </div>
                </div>
                <p className="text-gray-700 font-light mb-4 relative z-10">{meditation.description}</p>
                <div className="bg-gradient-to-r from-cyan-50/80 via-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-xl p-4 mb-4 border border-cyan-200/50 relative z-10">
                  <p className="text-sm font-medium text-purple-700 mb-2">Practice Guide:</p>
                  <ul className="space-y-2">
                    {meditation.script.slice(0, 3).map((step, idx) => (
                      <li key={idx} className="text-sm text-gray-600 font-light flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-1.5 flex-shrink-0"></span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-300 to-purple-400 hover:opacity-90 text-white border-none shadow-lg relative z-10">
                  <Play className="w-4 h-4 mr-2" />
                  Begin Practice
                </Button>
              </DecorativeBorder>
            ))}
          </div>
        </TabsContent>

        {/* Relaxation Sounds */}
        <TabsContent value="sounds">
          <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 rounded-3xl shadow-xl relative overflow-hidden">
            <FloralAccent position="top-left" />
            <FloralAccent position="bottom-right" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-300 to-purple-300 rounded-full blur-3xl"></div>
            </div>
            <div className="space-y-8 relative z-10">
              <div>
                <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 mb-6">Select a Sound</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relaxationSounds.map((sound) => (
                    <button
                      key={sound.id}
                      onClick={() => setSelectedSound(selectedSound === sound.id ? null : sound.id)}
                      className={`p-6 rounded-2xl border-2 transition-all ${
                        selectedSound === sound.id
                          ? 'bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-300 border-transparent text-white shadow-xl scale-105'
                          : 'bg-white/60 backdrop-blur-sm border-cyan-200/50 hover:border-purple-300 hover:shadow-lg'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-5xl mb-3">{sound.emoji}</div>
                        <p className={`font-light text-lg mb-1 ${selectedSound === sound.id ? 'text-white' : 'text-purple-700'}`}>
                          {sound.name}
                        </p>
                        <p className={`text-sm ${selectedSound === sound.id ? 'text-white/90 italic' : 'text-cyan-600 italic'}`}>
                          {sound.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {selectedSound && (
                <div className="bg-gradient-to-br from-cyan-100/80 via-blue-100/80 to-purple-100/80 backdrop-blur-md rounded-2xl p-8 animate-in fade-in slide-in-from-top-4 duration-300 border border-cyan-200/50 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-300 to-purple-400 flex items-center justify-center shadow-md">
                        <Volume2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-purple-700 font-light text-lg">Now Playing</p>
                        <p className="text-cyan-600 text-sm italic">
                          {relaxationSounds.find(s => s.id === selectedSound)?.name}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedSound(null)}
                      className="hover:bg-white/50"
                    >
                      <VolumeX className="w-5 h-5 text-purple-600" />
                    </Button>
                  </div>
                  <div>
                    <label className="block text-purple-700 font-light mb-4 italic">
                      Volume: {soundVolume}%
                    </label>
                    <Slider
                      value={[soundVolume]}
                      onValueChange={(value) => setSoundVolume(value[0])}
                      min={0}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </DecorativeBorder>
        </TabsContent>

        {/* Dance It Out - Music Streaming */}
        <TabsContent value="music">
          <div className="space-y-8">
            {/* Inspirational Message */}
            <DecorativeBorder className="p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-orange-200 rounded-3xl shadow-xl relative overflow-hidden border border-white/50">
              <FloralAccent position="top-right" />
              <FloralAccent position="bottom-left" />
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 text-center space-y-4">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <Headphones className="w-12 h-12 text-purple-600" />
                  <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
                  <Music className="w-12 h-12 text-orange-500" />
                </div>
                <h2 className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-4">
                  It's OK to Dance the Stress Away
                </h2>
                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg max-w-3xl mx-auto">
                  <p className="text-lg text-purple-700 font-light leading-relaxed mb-4">
                    When life gets to be too stressful, it's <strong>totally OK</strong> to just take a break from whatever you're doing. Turn the music up, put your headphones on, and <strong>dance the stress away</strong>. 
                  </p>
                  <p className="text-base text-pink-700 font-light leading-relaxed mb-4">
                    Movement is healing. Joy is medicine. Your body knows how to release what it's carrying. Trust yourself, trust the music, and let it move through you.
                  </p>
                  <p className="text-sm text-purple-600 italic">
                    💜 I actively practice this routine, and it's one of the most powerful tools in my healing journey.
                  </p>
                </div>
              </div>
            </DecorativeBorder>

            {/* Music Streaming Connections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Spotify Card */}
              <DecorativeBorder className="p-8 bg-gradient-to-br from-green-50 via-white to-green-50/50 backdrop-blur-sm border-green-200/50 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700 mb-1">
                        Spotify
                      </h3>
                      <p className="text-sm text-gray-600 font-light">Connect your playlists</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-100/80 to-emerald-100/80 backdrop-blur-sm rounded-2xl p-5 border border-green-200/50">
                    <div className="flex items-start gap-3 mb-4">
                      <Lock className="w-5 h-5 text-green-700 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-green-700 mb-1">Secure Connection</h4>
                        <p className="text-xs text-gray-600 font-light">
                          OAuth 2.0 authentication. We never see your password or personal data.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg py-6">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Connect Spotify
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700">
                          Connect Spotify
                        </DialogTitle>
                        <DialogDescription>
                          Access your playlists and favorite tracks to dance the stress away.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                          <h4 className="text-sm font-medium text-green-700 mb-2">What you can do:</h4>
                          <ul className="space-y-2 text-sm text-gray-600 font-light">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              Play your personal playlists
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              Access your favorite songs
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              Create dance therapy sessions
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              Sync with meditation timer
                            </li>
                          </ul>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Authorize with Spotify
                        </Button>

                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                          <p className="text-xs text-gray-600 font-light">
                            <strong className="text-amber-700">Demo Mode:</strong> In production, this redirects to Spotify's OAuth consent screen for secure authorization.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Mock Playlists Preview */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-700">Sample Playlists:</h4>
                    <div className="space-y-2">
                      {['Feel-Good Vibes', 'Dance Party Energy', 'Healing Sounds'].map((playlist, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-green-200/50 opacity-50">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                            <Music className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-700 truncate">{playlist}</p>
                            <p className="text-xs text-gray-500 font-light">Connect to play</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DecorativeBorder>

              {/* YouTube Card */}
              <DecorativeBorder className="p-8 bg-gradient-to-br from-red-50 via-white to-pink-50/50 backdrop-blur-sm border-red-200/50 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-200/30 rounded-full blur-3xl"></div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mb-1">
                        YouTube Music
                      </h3>
                      <p className="text-sm text-gray-600 font-light">Stream your favorites</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-100/80 to-pink-100/80 backdrop-blur-sm rounded-2xl p-5 border border-red-200/50">
                    <div className="flex items-start gap-3 mb-4">
                      <Lock className="w-5 h-5 text-red-700 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">Secure Connection</h4>
                        <p className="text-xs text-gray-600 font-light">
                          Google OAuth authentication. Your privacy is protected.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg py-6">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Connect YouTube
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                          Connect YouTube Music
                        </DialogTitle>
                        <DialogDescription>
                          Stream your YouTube playlists and videos for movement therapy.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                          <h4 className="text-sm font-medium text-red-700 mb-2">What you can do:</h4>
                          <ul className="space-y-2 text-sm text-gray-600 font-light">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              Play YouTube playlists
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              Stream music videos
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              Access liked videos
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              Create dance sessions
                            </li>
                          </ul>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Authorize with Google
                        </Button>

                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                          <p className="text-xs text-gray-600 font-light">
                            <strong className="text-amber-700">Demo Mode:</strong> In production, this redirects to Google's OAuth consent screen for secure authorization.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Mock Videos Preview */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-700">Sample Videos:</h4>
                    <div className="space-y-2">
                      {['Uplifting Dance Mix', 'Calm & Peaceful', 'Energy Boost'].map((video, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-red-200/50 opacity-50">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                            <Play className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-700 truncate">{video}</p>
                            <p className="text-xs text-gray-500 font-light">Connect to play</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DecorativeBorder>
            </div>

            {/* Movement Tips */}
            <DecorativeBorder className="p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 backdrop-blur-sm border-purple-200/50 rounded-3xl shadow-xl relative overflow-hidden">
              <FloralAccent position="top-left" />
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                  Movement as Medicine 💃
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-5 bg-white/60 border-purple-200/50">
                    <div className="text-3xl mb-3">🎵</div>
                    <h4 className="font-medium text-purple-700 mb-2">Start Small</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Even 30 seconds of movement counts. There's no wrong way to dance.
                    </p>
                  </Card>
                  <Card className="p-5 bg-white/60 border-pink-200/50">
                    <div className="text-3xl mb-3">💜</div>
                    <h4 className="font-medium text-pink-700 mb-2">Feel Your Feelings</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Dance can help process emotions that words can't reach.
                    </p>
                  </Card>
                  <Card className="p-5 bg-white/60 border-orange-200/50">
                    <div className="text-3xl mb-3">✨</div>
                    <h4 className="font-medium text-orange-700 mb-2">Your Safe Space</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Lock the door, close the blinds. This is your healing time.
                    </p>
                  </Card>
                </div>
              </div>
            </DecorativeBorder>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}