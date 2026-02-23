import { Pencil, Layout, Smartphone, Edit3 } from 'lucide-react';
import { DecorativeBorder, FloralAccent } from './DecorativeBorder';
import { Card } from './ui/card';
import { PDFExportButton } from './PDFExportButton';

interface WireframeSketch {
  title: string;
  screen: string;
  description: string;
  annotations: string[];
  designNotes: string[];
}

const paperWireframes: WireframeSketch[] = [
  {
    title: "Dashboard - Home Screen",
    screen: "dashboard",
    description: "Main landing screen showing user stats, daily quote, and quick actions",
    annotations: [
      "Welcoming header with calming colors",
      "Stats cards for journal, mood, meditation",
      "Daily motivational quote",
      "Quick action buttons to main features"
    ],
    designNotes: [
      "Use soft gradients for safety",
      "No overwhelming data at once",
      "Large touch targets for accessibility"
    ]
  },
  {
    title: "Journal Entry",
    screen: "journal",
    description: "Private journaling space with optional prompts",
    annotations: [
      "Privacy indicator at top",
      "Optional daily prompt card",
      "Large text area for writing",
      "Save/Cancel buttons clearly visible"
    ],
    designNotes: [
      "Prompt can be dismissed",
      "No character limits",
      "Auto-save draft feature",
      "Calming background"
    ]
  },
  {
    title: "Mood Tracker",
    screen: "mood",
    description: "Visual mood logging with emoji selection and optional notes",
    annotations: [
      "5 mood options with emojis",
      "Optional note field",
      "Progress graph below",
      "Past entries list"
    ],
    designNotes: [
      "Large, tappable mood buttons",
      "No forced journaling",
      "Visual chart for patterns",
      "Color-coded by mood"
    ]
  },
  {
    title: "Meditation Timer",
    screen: "meditation",
    description: "Customizable meditation timer with ambient sounds",
    annotations: [
      "Circular timer display",
      "Duration slider",
      "Play/Pause/Reset controls",
      "Sound selection below"
    ],
    designNotes: [
      "Minimal, focused interface",
      "Breathing animation in circle",
      "Gentle alert when complete",
      "Track total minutes"
    ]
  },
  {
    title: "Settings & Themes",
    screen: "settings",
    description: "Customization options and privacy controls",
    annotations: [
      "Color theme selector",
      "Notification toggles",
      "Privacy & data section",
      "Export data option"
    ],
    designNotes: [
      "Visual theme previews",
      "Clear privacy messaging",
      "No account required",
      "Local storage only"
    ]
  }
];

export function PaperWireframes() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <DecorativeBorder className="bg-gradient-to-br from-amber-200 via-orange-200 to-pink-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl border border-white/50">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 via-orange-300 to-pink-300 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Pencil className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-2">
                  Paper Wireframes
                </h1>
                <p className="text-xl text-amber-700 font-light italic">
                  Initial sketches exploring trauma-informed design concepts
                </p>
              </div>
            </div>
            <PDFExportButton title="Paper Wireframes" />
          </div>
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg mt-6">
            <p className="text-lg font-light text-orange-700">
              These early-stage wireframes focus on creating a safe, calming interface that prioritizes user control, 
              privacy, and emotional well-being. Each sketch explores key features while considering accessibility and trauma-informed principles.
            </p>
          </div>
        </div>
      </DecorativeBorder>

      {/* Design Process */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-6">
          Design Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-orange-200/50 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Edit3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-light text-orange-700 mb-2">1. Sketch</h3>
            <p className="text-sm text-gray-600 font-light">Rapid ideation on paper</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 border-orange-200/50 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-300 to-pink-400 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Layout className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-light text-orange-700 mb-2">2. Annotate</h3>
            <p className="text-sm text-gray-600 font-light">Add design considerations</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200/50 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-light text-pink-700 mb-2">3. Review</h3>
            <p className="text-sm text-gray-600 font-light">Gather feedback from survivors</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-300 to-violet-400 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Pencil className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-light text-purple-700 mb-2">4. Iterate</h3>
            <p className="text-sm text-gray-600 font-light">Refine based on insights</p>
          </Card>
        </div>
      </DecorativeBorder>

      {/* Wireframe Sketches */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {paperWireframes.map((wireframe, index) => (
          <DecorativeBorder
            key={index}
            className="p-6 bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-xl rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Sketch Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center shadow-md">
                  <span className="text-white font-light">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                    {wireframe.title}
                  </h3>
                  <p className="text-sm text-amber-700 font-light italic">{wireframe.description}</p>
                </div>
              </div>

              {/* Sketch Frame - Simulated Paper Look */}
              <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-2xl p-8 border-2 border-dashed border-orange-300 mb-6 shadow-inner min-h-[300px] relative">
                {/* Simulated sketch for each screen type */}
                <div className="space-y-4 opacity-60">
                  {wireframe.screen === 'dashboard' && (
                    <>
                      {/* Header */}
                      <div className="border-2 border-gray-400 rounded-lg p-4 h-24">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full border-2 border-gray-400"></div>
                          <div className="space-y-2 flex-1">
                            <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                          </div>
                        </div>
                      </div>
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="border-2 border-gray-400 rounded-lg p-3 h-20">
                            <div className="h-2 bg-gray-400 rounded w-1/2 mb-2"></div>
                            <div className="h-3 bg-gray-400 rounded w-1/4"></div>
                          </div>
                        ))}
                      </div>
                      {/* Quick Actions */}
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="border-2 border-gray-400 rounded-lg h-16"></div>
                        ))}
                      </div>
                    </>
                  )}
                  {wireframe.screen === 'journal' && (
                    <>
                      {/* Header */}
                      <div className="border-2 border-gray-400 rounded-lg p-3 h-16">
                        <div className="h-2 bg-gray-400 rounded w-1/3"></div>
                      </div>
                      {/* Prompt */}
                      <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 h-20">
                        <div className="h-2 bg-gray-400 rounded w-full mb-2"></div>
                        <div className="h-2 bg-gray-400 rounded w-2/3"></div>
                      </div>
                      {/* Text Area */}
                      <div className="border-2 border-gray-400 rounded-lg h-32"></div>
                      {/* Buttons */}
                      <div className="flex gap-3">
                        <div className="border-2 border-gray-400 rounded-lg h-10 flex-1"></div>
                        <div className="border-2 border-gray-400 rounded-lg h-10 w-24"></div>
                      </div>
                    </>
                  )}
                  {wireframe.screen === 'mood' && (
                    <>
                      {/* Mood Options */}
                      <div className="grid grid-cols-5 gap-2">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className="border-2 border-gray-400 rounded-lg h-16 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full border-2 border-gray-400"></div>
                          </div>
                        ))}
                      </div>
                      {/* Note Area */}
                      <div className="border-2 border-dashed border-gray-400 rounded-lg h-24"></div>
                      {/* Graph */}
                      <div className="border-2 border-gray-400 rounded-lg h-32 p-3">
                        <svg className="w-full h-full" viewBox="0 0 100 50">
                          <polyline
                            points="10,40 25,30 40,35 55,20 70,25 85,15"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-gray-400"
                          />
                        </svg>
                      </div>
                    </>
                  )}
                  {wireframe.screen === 'meditation' && (
                    <>
                      {/* Timer Circle */}
                      <div className="flex items-center justify-center h-48">
                        <div className="w-32 h-32 rounded-full border-4 border-gray-400 flex items-center justify-center">
                          <div className="text-center">
                            <div className="h-3 bg-gray-400 rounded w-12 mx-auto mb-2"></div>
                            <div className="h-2 bg-gray-400 rounded w-16 mx-auto"></div>
                          </div>
                        </div>
                      </div>
                      {/* Slider */}
                      <div className="border-2 border-gray-400 rounded-full h-2 relative">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-400 absolute left-1/3 -top-1.5"></div>
                      </div>
                      {/* Controls */}
                      <div className="flex gap-3 justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-gray-400"></div>
                        <div className="w-12 h-12 rounded-full border-2 border-gray-400 self-center"></div>
                      </div>
                    </>
                  )}
                  {wireframe.screen === 'settings' && (
                    <>
                      {/* Theme Options */}
                      <div className="border-2 border-gray-400 rounded-lg p-3 mb-3">
                        <div className="h-2 bg-gray-400 rounded w-1/4 mb-3"></div>
                        <div className="grid grid-cols-5 gap-2">
                          {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="w-full aspect-square rounded-lg border-2 border-gray-400"></div>
                          ))}
                        </div>
                      </div>
                      {/* Toggle Options */}
                      {[1, 2, 3].map(i => (
                        <div key={i} className="border-2 border-gray-400 rounded-lg p-3 flex items-center justify-between h-14">
                          <div className="h-2 bg-gray-400 rounded w-1/3"></div>
                          <div className="w-10 h-5 rounded-full border-2 border-gray-400"></div>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                {/* Pencil sketch effect overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                  <svg className="w-full h-full">
                    <defs>
                      <filter id="pencil">
                        <feTurbulence baseFrequency="0.05" numOctaves="5" />
                        <feDisplacementMap in="SourceGraphic" scale="2" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Annotations */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-orange-700 mb-2 flex items-center gap-2">
                    <Pencil className="w-4 h-4" />
                    Annotations
                  </h4>
                  <ul className="space-y-2">
                    {wireframe.annotations.map((annotation, i) => (
                      <li key={i} className="text-sm text-gray-700 font-light flex items-start gap-2">
                        <span className="text-orange-500 mt-1">→</span>
                        {annotation}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-amber-50/80 to-orange-50/80 rounded-xl p-4 border border-orange-200/50">
                  <h4 className="text-sm font-medium text-orange-700 mb-2 flex items-center gap-2">
                    <Layout className="w-4 h-4" />
                    Design Notes
                  </h4>
                  <ul className="space-y-2">
                    {wireframe.designNotes.map((note, i) => (
                      <li key={i} className="text-sm text-gray-700 font-light flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </DecorativeBorder>
        ))}
      </div>

      {/* Key Principles */}
      <DecorativeBorder className="p-8 bg-gradient-to-br from-amber-100/80 via-orange-100/80 to-pink-100/80 backdrop-blur-sm border-orange-200/50 rounded-3xl shadow-xl relative overflow-hidden">
        <FloralAccent position="top-right" />
        <FloralAccent position="bottom-left" />
        <div className="relative z-10">
          <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-6">
            Trauma-Informed Design Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-orange-200/50">
              <h3 className="text-lg font-light text-orange-700 mb-3">🛡️ Safety First</h3>
              <p className="text-sm text-gray-700 font-light">
                Clear privacy indicators, no forced actions, and calming visual design throughout
              </p>
            </Card>
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-orange-200/50">
              <h3 className="text-lg font-light text-orange-700 mb-3">✋ User Control</h3>
              <p className="text-sm text-gray-700 font-light">
                Optional features, skip-able onboarding, and full data ownership at all times
              </p>
            </Card>
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-orange-200/50">
              <h3 className="text-lg font-light text-orange-700 mb-3">♿ Accessibility</h3>
              <p className="text-sm text-gray-700 font-light">
                Large touch targets, high contrast options, and screen reader compatibility
              </p>
            </Card>
          </div>
        </div>
      </DecorativeBorder>
    </div>
  );
}