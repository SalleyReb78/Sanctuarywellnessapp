import { Smile, Meh, Frown, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { DecorativeBorder, FloralAccent } from './DecorativeBorder';
import { Card } from './ui/card';
import { PDFExportButton } from './PDFExportButton';

interface JourneyPhase {
  phase: string;
  actions: string[];
  touchpoints: string[];
  emotion: 'positive' | 'neutral' | 'negative';
  emotionLevel: number; // -3 to +3
  thoughts: string;
  painPoints?: string[];
  opportunities?: string[];
}

const journeyData: JourneyPhase[] = [
  {
    phase: "Discovery",
    actions: [
      "Searches for mental health apps",
      "Reads reviews from other trauma survivors",
      "Downloads Sanctuary app"
    ],
    touchpoints: ["App store", "Reviews", "Screenshots"],
    emotion: "neutral",
    emotionLevel: 0,
    thoughts: "I hope this app understands what I've been through...",
    painPoints: [
      "Skeptical about privacy",
      "Worried about triggering content",
      "Concerned about data collection"
    ],
    opportunities: [
      "Clear privacy messaging",
      "Trauma-informed language in description",
      "Safe, calming visual preview"
    ]
  },
  {
    phase: "Onboarding",
    actions: [
      "Opens app for first time",
      "Sees welcoming, safe interface",
      "Skips optional profile setup",
      "Explores without pressure"
    ],
    touchpoints: ["Welcome screen", "Optional setup", "Dashboard preview"],
    emotion: "positive",
    emotionLevel: 1,
    thoughts: "This feels safe. I like that I can skip things.",
    painPoints: [
      "Anxiety about sharing personal info",
      "Need for control over experience"
    ],
    opportunities: [
      "No forced registration",
      "Gentle, optional onboarding",
      "Immediate access to features"
    ]
  },
  {
    phase: "First Use",
    actions: [
      "Creates first journal entry",
      "Uses a daily prompt",
      "Saves entry privately",
      "Feels sense of relief"
    ],
    touchpoints: ["Journal feature", "Prompts", "Save confirmation"],
    emotion: "positive",
    emotionLevel: 2,
    thoughts: "I wrote something and it felt good. No judgment.",
    painPoints: [
      "Initial hesitation to write",
      "Fear of judgment"
    ],
    opportunities: [
      "Supportive prompts",
      "Affirming feedback",
      "Clear privacy indicators"
    ]
  },
  {
    phase: "Building Habit",
    actions: [
      "Returns daily for journaling",
      "Tracks mood consistently",
      "Tries meditation feature",
      "Notices patterns in mood data"
    ],
    touchpoints: ["Daily prompts", "Mood tracker", "Progress charts", "Meditation timer"],
    emotion: "positive",
    emotionLevel: 3,
    thoughts: "I'm seeing my progress. This is helping me heal.",
    painPoints: [
      "Some days feel too heavy to engage",
      "Needs flexibility in routine"
    ],
    opportunities: [
      "Flexible check-ins",
      "No guilt messaging",
      "Celebrate small wins"
    ]
  },
  {
    phase: "Difficult Day",
    actions: [
      "Opens app feeling triggered",
      "Sees calming interface",
      "Uses breathing meditation",
      "Writes about difficult feelings"
    ],
    touchpoints: ["Crisis resources", "Quick meditation", "Journal", "Grounding exercises"],
    emotion: "negative",
    emotionLevel: -2,
    thoughts: "I'm struggling but at least I have a safe place to process.",
    painPoints: [
      "High emotional distress",
      "Needs immediate support",
      "May feel isolated"
    ],
    opportunities: [
      "Quick access to calming tools",
      "Crisis resources visible",
      "Grounding techniques readily available"
    ]
  },
  {
    phase: "Recovery & Growth",
    actions: [
      "Reviews progress over weeks",
      "Notices improvement in mood trends",
      "Customizes app to preferences",
      "Recommends to friend in therapy"
    ],
    touchpoints: ["Progress dashboard", "Mood charts", "Theme settings", "Share feature"],
    emotion: "positive",
    emotionLevel: 3,
    thoughts: "I can see how far I've come. I'm proud of myself.",
    painPoints: [
      "Want to share progress with therapist"
    ],
    opportunities: [
      "Export feature for therapy",
      "Progress visualization",
      "Milestone celebrations"
    ]
  }
];

export function UserJourneyMap() {
  const getEmotionIcon = (emotion: string, level: number) => {
    if (level >= 2) return <Smile className="w-6 h-6 text-emerald-600" />;
    if (level >= 0) return <Meh className="w-6 h-6 text-cyan-600" />;
    return <Frown className="w-6 h-6 text-amber-600" />;
  };

  const getEmotionColor = (level: number) => {
    if (level >= 2) return "from-emerald-300 to-teal-400";
    if (level >= 0) return "from-cyan-300 to-blue-400";
    return "from-amber-300 to-orange-400";
  };

  const getEmotionPosition = (level: number) => {
    // Convert -3 to +3 scale to percentage (0-100%)
    const percentage = ((level + 3) / 6) * 100;
    return percentage;
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <DecorativeBorder className="bg-gradient-to-br from-purple-200 via-pink-200 to-cyan-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl border border-white/50">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">User Journey Map</h1>
              <p className="text-xl text-cyan-600 font-light italic">
                Maya's Healing Journey with Sanctuary
              </p>
            </div>
            <PDFExportButton title="User Journey Map" />
          </div>
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg mt-6">
            <p className="text-lg font-light text-purple-700">
              <strong className="font-medium">Persona:</strong> Maya, 29, domestic violence survivor managing ADHD and anxiety
            </p>
            <p className="text-lg font-light text-purple-700 mt-2">
              <strong className="font-medium">Goal:</strong> Find a safe, private space to process emotions and track healing progress
            </p>
          </div>
        </div>
      </DecorativeBorder>

      {/* Emotional Journey Graph */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <FloralAccent position="top-right" />
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
          Emotional Journey
        </h2>
        
        {/* Graph */}
        <div className="relative h-64 mb-8">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-sm text-purple-600 font-light pr-4">
            <span>😊 Positive</span>
            <span>😐 Neutral</span>
            <span>😔 Negative</span>
          </div>
          
          {/* Graph area */}
          <div className="ml-20 h-full border-l-2 border-b-2 border-purple-300 relative">
            {/* Neutral line */}
            <div className="absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-purple-200"></div>
            
            {/* Journey path */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f472b6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d={`M 0,${100 - getEmotionPosition(journeyData[0].emotionLevel)} ${journeyData.map((phase, i) => {
                  const x = (i / (journeyData.length - 1)) * 100;
                  const y = 100 - getEmotionPosition(phase.emotionLevel);
                  return `L ${x},${y}`;
                }).join(' ')}`}
                fill="none"
                stroke="url(#journeyGradient)"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            
            {/* Data points */}
            {journeyData.map((phase, index) => {
              const x = (index / (journeyData.length - 1)) * 100;
              const y = 100 - getEmotionPosition(phase.emotionLevel);
              
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getEmotionColor(phase.emotionLevel)} flex items-center justify-center shadow-lg border-4 border-white`}>
                    {getEmotionIcon(phase.emotion, phase.emotionLevel)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phase labels */}
        <div className="ml-20 grid grid-cols-6 gap-2">
          {journeyData.map((phase, index) => (
            <div key={index} className="text-center">
              <p className="text-xs font-light text-purple-700">{phase.phase}</p>
            </div>
          ))}
        </div>
      </DecorativeBorder>

      {/* Journey Phases */}
      <div className="space-y-6">
        {journeyData.map((phase, index) => (
          <DecorativeBorder
            key={index}
            className="p-6 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Phase Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getEmotionColor(phase.emotionLevel)} flex items-center justify-center shadow-lg`}>
                    {getEmotionIcon(phase.emotion, phase.emotionLevel)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      {index + 1}. {phase.phase}
                    </h3>
                    <p className="text-sm text-cyan-600 font-light italic">"{phase.thoughts}"</p>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Actions */}
                <Card className="p-4 bg-gradient-to-br from-purple-50/50 to-violet-50/50 border-purple-200/50">
                  <h4 className="text-sm font-medium text-purple-700 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    User Actions
                  </h4>
                  <ul className="space-y-2">
                    {phase.actions.map((action, i) => (
                      <li key={i} className="text-sm text-gray-700 font-light flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Touchpoints */}
                <Card className="p-4 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 border-cyan-200/50">
                  <h4 className="text-sm font-medium text-cyan-700 mb-3 flex items-center gap-2">
                    <Minus className="w-4 h-4" />
                    Touchpoints
                  </h4>
                  <ul className="space-y-2">
                    {phase.touchpoints.map((touchpoint, i) => (
                      <li key={i} className="text-sm text-gray-700 font-light flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                        {touchpoint}
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Pain Points */}
                {phase.painPoints && (
                  <Card className="p-4 bg-gradient-to-br from-amber-50/50 to-orange-50/50 border-amber-200/50">
                    <h4 className="text-sm font-medium text-amber-700 mb-3 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4" />
                      Pain Points
                    </h4>
                    <ul className="space-y-2">
                      {phase.painPoints.map((pain, i) => (
                        <li key={i} className="text-sm text-gray-700 font-light flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {/* Opportunities */}
                {phase.opportunities && (
                  <Card className="p-4 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border-emerald-200/50">
                    <h4 className="text-sm font-medium text-emerald-700 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Design Opportunities
                    </h4>
                    <ul className="space-y-2">
                      {phase.opportunities.map((opp, i) => (
                        <li key={i} className="text-sm text-gray-700 font-light flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                          {opp}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>
            </div>
          </DecorativeBorder>
        ))}
      </div>

      {/* Key Insights */}
      <DecorativeBorder className="p-8 bg-gradient-to-br from-pink-100/80 via-purple-100/80 to-cyan-100/80 backdrop-blur-sm border-purple-200/50 rounded-3xl shadow-xl relative overflow-hidden">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="relative z-10">
          <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Key Insights from Journey Mapping
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-purple-200/50">
              <h3 className="text-lg font-light text-purple-700 mb-3">🔒 Trust & Safety</h3>
              <p className="text-sm text-gray-700 font-light">
                Users need clear privacy indicators and control over their data throughout the entire journey
              </p>
            </Card>
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-purple-200/50">
              <h3 className="text-lg font-light text-purple-700 mb-3">💜 Flexibility</h3>
              <p className="text-sm text-gray-700 font-light">
                No pressure or guilt. Users heal at their own pace with optional features and gentle reminders
              </p>
            </Card>
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-purple-200/50">
              <h3 className="text-lg font-light text-purple-700 mb-3">📈 Progress Visibility</h3>
              <p className="text-sm text-gray-700 font-light">
                Showing growth over time empowers users and validates their healing journey
              </p>
            </Card>
          </div>
        </div>
      </DecorativeBorder>
    </div>
  );
}