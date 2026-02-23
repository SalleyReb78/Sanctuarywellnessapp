import { Monitor, Smartphone, Tablet, Layers, Square, Circle } from 'lucide-react';
import { DecorativeBorder, FloralAccent } from './DecorativeBorder';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { PDFExportButton } from './PDFExportButton';

interface WireframeScreen {
  name: string;
  description: string;
  components: string[];
  interactions: string[];
  accessibility: string[];
}

const wireframeScreens: WireframeScreen[] = [
  {
    name: "Dashboard",
    description: "Main hub showing personalized wellness metrics and quick access",
    components: [
      "Welcome header with user greeting",
      "Daily motivational quote card",
      "4 stats cards (Journal, Mood, Meditation, Streak)",
      "Quick action grid (3 cards)",
      "Navigation sidebar (desktop) / bottom bar (mobile)"
    ],
    interactions: [
      "Tap stat cards to view detailed screens",
      "Tap quick actions to start feature",
      "Swipe to dismiss quote",
      "Pull to refresh stats"
    ],
    accessibility: [
      "High contrast mode support",
      "Screen reader labels for all stats",
      "Keyboard navigation",
      "Focus indicators on interactive elements"
    ]
  },
  {
    name: "Journal Entry",
    description: "Private writing space with trauma-informed prompts",
    components: [
      "Privacy lock indicator",
      "Optional prompt card (dismissible)",
      "Date/time stamp",
      "Large textarea with auto-save",
      "Save & Cancel buttons",
      "Past entries list with search"
    ],
    interactions: [
      "Tap prompt to apply to entry",
      "Dismiss prompt with X button",
      "Auto-save every 30 seconds",
      "Tap past entry to view/edit",
      "Swipe entry to delete"
    ],
    accessibility: [
      "Textarea announces character count",
      "Clear save confirmation",
      "Undo delete option",
      "Voice input support"
    ]
  },
  {
    name: "Mood Tracker",
    description: "Emotional check-in with visual pattern recognition",
    components: [
      "5 mood buttons with emojis",
      "Optional note textarea",
      "Area chart showing trends",
      "Stats cards (Total, Average, Trend)",
      "Past entries timeline",
      "Filter by date range"
    ],
    interactions: [
      "Tap mood to select",
      "Add optional note",
      "Save or cancel mood",
      "Tap chart to see specific day",
      "Swipe timeline entries"
    ],
    accessibility: [
      "Mood buttons have text labels",
      "Chart data in table format",
      "High contrast mood colors",
      "Haptic feedback on selection"
    ]
  },
  {
    name: "Meditation",
    description: "Customizable mindfulness practice with ambient sounds",
    components: [
      "Circular timer display",
      "Duration slider (1-60 min)",
      "Play/Pause/Reset controls",
      "Guided meditation cards",
      "Ambient sound selector",
      "Volume control",
      "Session history"
    ],
    interactions: [
      "Adjust duration slider",
      "Tap play to start timer",
      "Pause timer anytime",
      "Select background sound",
      "Adjust volume",
      "View guided meditation steps"
    ],
    accessibility: [
      "Timer announces time remaining",
      "Large control buttons",
      "Sound descriptions",
      "Visual breathing guide"
    ]
  },
  {
    name: "Settings",
    description: "Personalization and privacy controls",
    components: [
      "Color theme selector (5 options)",
      "Notification toggles",
      "Dark mode switch",
      "Privacy information card",
      "Data export button",
      "About section"
    ],
    interactions: [
      "Tap theme to preview and apply",
      "Toggle switches for settings",
      "Export data to file",
      "View privacy policy"
    ],
    accessibility: [
      "Theme previews with names",
      "Clear toggle states",
      "Confirmation dialogs",
      "Large touch targets"
    ]
  }
];

export function DigitalWireframes() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <DecorativeBorder className="bg-gradient-to-br from-blue-200 via-cyan-200 to-purple-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl border border-white/50">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-300 via-cyan-300 to-purple-300 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  Digital Wireframes
                </h1>
                <p className="text-xl text-cyan-700 font-light italic">
                  High-fidelity layouts with detailed specifications
                </p>
              </div>
            </div>
            <PDFExportButton title="Digital Wireframes" />
          </div>
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg mt-6">
            <p className="text-lg font-light text-blue-700">
              These digital wireframes represent the refined structure and layout of Sanctuary, 
              incorporating feedback from paper wireframes and user research insights.
            </p>
          </div>
        </div>
      </DecorativeBorder>

      {/* Device Views */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-cyan-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Responsive Design Views
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-light text-blue-700 mb-2">Mobile First</h3>
            <p className="text-sm text-gray-600 font-light">
              320px - 768px<br />
              Primary target device
            </p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-200/50 text-center">
            <Tablet className="w-12 h-12 mx-auto mb-4 text-cyan-600" />
            <h3 className="text-lg font-light text-cyan-700 mb-2">Tablet</h3>
            <p className="text-sm text-gray-600 font-light">
              768px - 1024px<br />
              Optimized grid layout
            </p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50 text-center">
            <Monitor className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-lg font-light text-purple-700 mb-2">Desktop</h3>
            <p className="text-sm text-gray-600 font-light">
              1024px+<br />
              Sidebar navigation
            </p>
          </Card>
        </div>
      </DecorativeBorder>

      {/* Wireframe Screens */}
      {wireframeScreens.map((screen, index) => (
        <DecorativeBorder
          key={index}
          className="p-8 bg-white/80 backdrop-blur-sm border-cyan-200/50 shadow-xl rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Screen Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-300 to-cyan-400 flex items-center justify-center shadow-md">
                <span className="text-white font-light text-lg">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {screen.name}
                </h3>
                <p className="text-sm text-cyan-700 font-light italic">{screen.description}</p>
              </div>
            </div>

            {/* Wireframe Tabs */}
            <Tabs defaultValue="layout" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6 bg-white/60 backdrop-blur-sm border border-cyan-200/50">
                <TabsTrigger value="layout">Layout</TabsTrigger>
                <TabsTrigger value="components">Components</TabsTrigger>
                <TabsTrigger value="interactions">Interactions</TabsTrigger>
                <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
              </TabsList>

              {/* Layout Tab */}
              <TabsContent value="layout">
                <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-2xl p-8 border-2 border-cyan-300">
                  {/* Simulated wireframe based on screen type */}
                  <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-200 to-cyan-200"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-300 rounded w-32"></div>
                          <div className="h-2 bg-gray-200 rounded w-24"></div>
                        </div>
                      </div>
                      {screen.name === "Journal Entry" && (
                        <div className="flex items-center gap-2">
                          <Circle className="w-4 h-4 text-emerald-500" fill="currentColor" />
                          <span className="text-xs text-gray-500">Private</span>
                        </div>
                      )}
                    </div>

                    {/* Content based on screen */}
                    {screen.name === "Dashboard" && (
                      <>
                        {/* Quote Card */}
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 mb-4">
                          <div className="h-2 bg-gray-400 rounded w-full mb-2"></div>
                          <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                        </div>
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-4 border border-gray-200">
                              <div className="h-2 bg-gray-300 rounded w-2/3 mb-3"></div>
                              <div className="h-4 bg-gray-400 rounded w-1/3"></div>
                            </div>
                          ))}
                        </div>
                        {/* Quick Actions */}
                        <div className="space-y-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-3 border border-blue-200">
                              <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {screen.name === "Journal Entry" && (
                      <>
                        {/* Prompt Card */}
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 mb-4 border-2 border-dashed border-purple-300">
                          <div className="flex justify-between items-start mb-2">
                            <div className="h-2 bg-gray-400 rounded w-1/4"></div>
                            <Square className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="h-2 bg-gray-400 rounded w-full mb-2"></div>
                          <div className="h-2 bg-gray-400 rounded w-2/3"></div>
                        </div>
                        {/* Text Area */}
                        <div className="bg-gray-50 rounded-xl border-2 border-gray-300 p-4 mb-4 min-h-[200px]">
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-300 rounded w-full"></div>
                            <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                          </div>
                        </div>
                        {/* Buttons */}
                        <div className="flex gap-3">
                          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg h-10 flex-1"></div>
                          <div className="bg-gray-200 rounded-lg h-10 w-24"></div>
                        </div>
                      </>
                    )}

                    {screen.name === "Mood Tracker" && (
                      <>
                        {/* Mood Buttons */}
                        <div className="grid grid-cols-5 gap-2 mb-4">
                          {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300 flex items-center justify-center">
                              <Circle className="w-6 h-6 text-gray-400" />
                            </div>
                          ))}
                        </div>
                        {/* Note Area */}
                        <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-4 mb-4 h-20"></div>
                        {/* Chart */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200 h-32">
                          <svg className="w-full h-full" viewBox="0 0 100 50">
                            <polyline
                              points="5,40 20,30 35,35 50,20 65,25 80,15 95,10"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="2"
                            />
                            <polyline
                              points="5,40 20,30 35,35 50,20 65,25 80,15 95,10"
                              fill="url(#gradient)"
                              opacity="0.3"
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </>
                    )}

                    {screen.name === "Meditation" && (
                      <>
                        {/* Timer Circle */}
                        <div className="flex items-center justify-center mb-6 py-8">
                          <div className="w-40 h-40 rounded-full border-8 border-gradient-to-br from-blue-300 to-cyan-300 flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-20"></div>
                            <div className="text-center z-10">
                              <div className="h-4 bg-gray-400 rounded w-16 mx-auto mb-2"></div>
                              <div className="h-2 bg-gray-300 rounded w-12 mx-auto"></div>
                            </div>
                          </div>
                        </div>
                        {/* Duration Slider */}
                        <div className="mb-6">
                          <div className="h-2 bg-gray-200 rounded-full relative">
                            <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full absolute left-0 w-1/2"></div>
                            <div className="w-5 h-5 bg-white border-3 border-blue-400 rounded-full absolute left-1/2 -top-1.5 transform -translate-x-1/2 shadow-lg"></div>
                          </div>
                          <div className="flex justify-between mt-2">
                            <span className="text-xs text-gray-500">1 min</span>
                            <span className="text-xs text-gray-500">60 min</span>
                          </div>
                        </div>
                        {/* Controls */}
                        <div className="flex gap-3 justify-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg"></div>
                          <div className="w-12 h-12 rounded-full bg-gray-200 self-center"></div>
                        </div>
                      </>
                    )}

                    {screen.name === "Settings" && (
                      <>
                        {/* Theme Selector */}
                        <div className="mb-6">
                          <div className="h-2 bg-gray-400 rounded w-1/4 mb-3"></div>
                          <div className="grid grid-cols-5 gap-2">
                            {[1, 2, 3, 4, 5].map(i => (
                              <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 border-2 border-gray-300"></div>
                            ))}
                          </div>
                        </div>
                        {/* Toggle Settings */}
                        <div className="space-y-3">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-200">
                              <div className="h-2 bg-gray-400 rounded w-1/3"></div>
                              <div className="w-12 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Components Tab */}
              <TabsContent value="components">
                <Card className="p-6 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border-blue-200/50">
                  <h4 className="text-lg font-light text-blue-700 mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5" />
                    UI Components
                  </h4>
                  <ul className="space-y-3">
                    {screen.components.map((component, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-light">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-300 to-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">{i + 1}</span>
                        </div>
                        <span>{component}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>

              {/* Interactions Tab */}
              <TabsContent value="interactions">
                <Card className="p-6 bg-gradient-to-br from-cyan-50/50 to-purple-50/50 border-cyan-200/50">
                  <h4 className="text-lg font-light text-cyan-700 mb-4">User Interactions</h4>
                  <ul className="space-y-3">
                    {screen.interactions.map((interaction, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-light">
                        <span className="text-cyan-500 text-lg">→</span>
                        {interaction}
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>

              {/* Accessibility Tab */}
              <TabsContent value="accessibility">
                <Card className="p-6 bg-gradient-to-br from-purple-50/50 to-violet-50/50 border-purple-200/50">
                  <h4 className="text-lg font-light text-purple-700 mb-4">Accessibility Features</h4>
                  <ul className="space-y-3">
                    {screen.accessibility.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-light">
                        <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </DecorativeBorder>
      ))}

      {/* Design System */}
      <DecorativeBorder className="p-8 bg-gradient-to-br from-blue-100/80 via-cyan-100/80 to-purple-100/80 backdrop-blur-sm border-cyan-200/50 rounded-3xl shadow-xl relative overflow-hidden">
        <FloralAccent position="top-right" />
        <FloralAccent position="bottom-left" />
        <div className="relative z-10">
          <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Design System Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-blue-200/50">
              <h3 className="text-lg font-light text-blue-700 mb-4">🎨 Color Palette</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-300 to-pink-300 shadow-md"></div>
                  <span className="text-sm text-gray-700 font-light">Primary Gradient</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-300 to-blue-300 shadow-md"></div>
                  <span className="text-sm text-gray-700 font-light">Secondary Gradient</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 shadow-md"></div>
                  <span className="text-sm text-gray-700 font-light">Neutral Background</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-cyan-200/50">
              <h3 className="text-lg font-light text-cyan-700 mb-4">📏 Spacing Scale</h3>
              <div className="space-y-2 text-sm text-gray-700 font-light">
                <p>• Small (8px): Component padding</p>
                <p>• Medium (16px): Card spacing</p>
                <p>• Large (24px): Section gaps</p>
                <p>• XL (32px): Page margins</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-purple-200/50">
              <h3 className="text-lg font-light text-purple-700 mb-4">✍️ Typography</h3>
              <div className="space-y-2 text-sm text-gray-700 font-light">
                <p>• Headings: Light weight (300)</p>
                <p>• Body: Regular weight (400)</p>
                <p>• Scale: 12px - 48px</p>
                <p>• Line height: 1.5 - 1.75</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-blue-200/50">
              <h3 className="text-lg font-light text-blue-700 mb-4">🔘 Interactive Elements</h3>
              <div className="space-y-2 text-sm text-gray-700 font-light">
                <p>• Minimum touch target: 44x44px</p>
                <p>• Border radius: 12px - 24px</p>
                <p>• Hover states: Scale 1.05</p>
                <p>• Focus: 2px outline</p>
              </div>
            </Card>
          </div>
        </div>
      </DecorativeBorder>

      {/* Design Goals & Thought Process */}
      <DecorativeBorder className="p-8 bg-gradient-to-br from-indigo-100/80 via-violet-100/80 to-purple-100/80 backdrop-blur-sm border-indigo-200/50 rounded-3xl shadow-xl relative overflow-hidden">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="relative z-10">
          <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Design Goals & Thought Process
          </h2>
          
          {/* Primary Goals */}
          <div className="mb-8">
            <h3 className="text-xl font-light text-indigo-700 mb-4">🎯 Primary Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/60 backdrop-blur-sm border-indigo-200/50">
                <h4 className="font-light text-indigo-700 mb-3">Trauma-Informed Design</h4>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Create a safe, predictable interface where users feel in control. Avoid sudden 
                  movements, aggressive colors, or overwhelming information density that could 
                  trigger stress responses.
                </p>
              </Card>
              <Card className="p-6 bg-white/60 backdrop-blur-sm border-violet-200/50">
                <h4 className="font-light text-violet-700 mb-3">Privacy First</h4>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Make privacy visible and tangible. Include lock indicators, local-only storage 
                  messaging, and clear data control options to build trust with users who have 
                  experienced systemic harm.
                </p>
              </Card>
              <Card className="p-6 bg-white/60 backdrop-blur-sm border-purple-200/50">
                <h4 className="font-light text-purple-700 mb-3">Accessible by Default</h4>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Build accessibility into every screen from the start. Large touch targets, 
                  screen reader support, and keyboard navigation ensure the app works for users 
                  with diverse abilities.
                </p>
              </Card>
            </div>
          </div>

          {/* Design Decisions */}
          <div className="mb-8">
            <h3 className="text-xl font-light text-violet-700 mb-4">💭 Key Design Decisions</h3>
            <div className="space-y-4">
              <Card className="p-6 bg-white/60 backdrop-blur-sm border-indigo-200/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="font-light text-indigo-700 mb-2">Soft Gradients Over Harsh Contrasts</h4>
                    <p className="text-sm text-gray-700 font-light leading-relaxed">
                      Research shows trauma survivors often find high-contrast, sharp designs jarring. 
                      We use gentle pink-purple-peach gradients inspired by sunsets and nature to 
                      create a calming, organic atmosphere that feels like sanctuary rather than system.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/60 backdrop-blur-sm border-violet-200/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-300 to-purple-300 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="font-light text-violet-700 mb-2">Glass Morphism for Visual Hierarchy</h4>
                    <p className="text-sm text-gray-700 font-light leading-relaxed">
                      Frosted glass effects (backdrop-blur with transparency) create depth without 
                      harshness. This helps establish clear information hierarchy while maintaining 
                      the dreamy, ethereal quality that makes the app feel emotionally safe.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/60 backdrop-blur-sm border-purple-200/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="font-light text-purple-700 mb-2">Generous Touch Targets (44x44px Minimum)</h4>
                    <p className="text-sm text-gray-700 font-light leading-relaxed">
                      Users experiencing anxiety or motor control challenges need larger, more forgiving 
                      interaction areas. We exceed WCAG standards to reduce frustration and create a 
                      more compassionate user experience.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/60 backdrop-blur-sm border-indigo-200/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-300 to-cyan-300 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">4</span>
                  </div>
                  <div>
                    <h4 className="font-light text-indigo-700 mb-2">Progressive Disclosure & Optional Prompts</h4>
                    <p className="text-sm text-gray-700 font-light leading-relaxed">
                      We never force engagement. Journal prompts are dismissible, meditation sessions 
                      are customizable, and users can skip any feature. This respects autonomy and 
                      prevents the app from feeling controlling or demanding.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Thought Process Timeline */}
          <div>
            <h3 className="text-xl font-light text-purple-700 mb-4">📅 Evolution of Thinking</h3>
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-purple-200/50">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-400 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-indigo-700">Early Concept: Minimalism</p>
                    <p className="text-sm text-gray-600 font-light mt-1">
                      Initially considered stark minimalism but user feedback revealed this felt 
                      "cold" and "clinical" — not conducive to emotional vulnerability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-400 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-violet-700">Iteration: Adding Warmth</p>
                    <p className="text-sm text-gray-600 font-light mt-1">
                      Introduced gradients and rounded corners. Users responded positively to the 
                      "softer" feel, describing it as "inviting" and "gentle."
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-purple-700">Refinement: Ornate Borders</p>
                    <p className="text-sm text-gray-600 font-light mt-1">
                      Added decorative floral elements inspired by sanctuary spaces and healing 
                      gardens. This gave the app a unique, handcrafted quality that users found 
                      "comforting" and "special."
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-pink-700">Current Direction: Holistic Safety</p>
                    <p className="text-sm text-gray-600 font-light mt-1">
                      Balancing beauty with functionality. Every visual decision now asks: "Does 
                      this make users feel safer, more empowered, and more seen?" The answer guides 
                      all design choices.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </DecorativeBorder>
    </div>
  );
}