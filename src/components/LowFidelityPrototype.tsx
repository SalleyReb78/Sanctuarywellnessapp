import { useState } from "react";
import {
  Play,
  ArrowRight,
  ArrowLeft,
  Home,
  Check,
  X,
  Download,
  Printer,
} from "lucide-react";
import {
  DecorativeBorder,
  FloralAccent,
} from "./DecorativeBorder";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { PDFExportButton } from "./PDFExportButton";

interface PrototypeFlow {
  id: string;
  name: string;
  description: string;
  screens: PrototypeScreen[];
}

interface PrototypeScreen {
  id: string;
  name: string;
  description: string;
  nextAction?: string;
  nextScreenId?: string;
}

const prototypeFlows: PrototypeFlow[] = [
  {
    id: "onboarding",
    name: "First-Time User Flow",
    description:
      "User discovers app, opens it, and completes first journal entry",
    screens: [
      {
        id: "welcome",
        name: "Welcome Screen",
        description:
          "User sees calming interface with 'Get Started' button",
        nextAction: "Tap 'Get Started'",
        nextScreenId: "dashboard-first",
      },
      {
        id: "dashboard-first",
        name: "Dashboard (First Visit)",
        description:
          "Empty dashboard with welcome message and quick tour option",
        nextAction: "Skip tour, tap 'Start Journaling'",
        nextScreenId: "journal-new",
      },
      {
        id: "journal-new",
        name: "New Journal Entry",
        description: "Shows daily prompt and empty text area",
        nextAction: "Write entry and tap 'Save'",
        nextScreenId: "journal-saved",
      },
      {
        id: "journal-saved",
        name: "Entry Saved",
        description:
          "Confirmation message with option to return to dashboard",
        nextAction: "Tap 'Back to Dashboard'",
        nextScreenId: "dashboard-updated",
      },
      {
        id: "dashboard-updated",
        name: "Dashboard (Updated)",
        description: "Now shows 1 journal entry in stats",
        nextAction: "Success! User has completed first action",
        nextScreenId: undefined,
      },
    ],
  },
  {
    id: "mood-tracking",
    name: "Mood Check-In Flow",
    description:
      "User tracks their daily mood with optional notes",
    screens: [
      {
        id: "dashboard",
        name: "Dashboard",
        description: "User sees mood tracker quick action",
        nextAction: "Tap 'Track Your Mood'",
        nextScreenId: "mood-select",
      },
      {
        id: "mood-select",
        name: "Select Mood",
        description: "5 mood options displayed with emojis",
        nextAction: "Tap mood (e.g., 'Good' 😊)",
        nextScreenId: "mood-note",
      },
      {
        id: "mood-note",
        name: "Add Note (Optional)",
        description: "Text area appears for optional note",
        nextAction: "Add note or skip, tap 'Save'",
        nextScreenId: "mood-saved",
      },
      {
        id: "mood-saved",
        name: "Mood Saved",
        description:
          "Confirmation with today's mood added to chart",
        nextAction: "View progress or return",
        nextScreenId: undefined,
      },
    ],
  },
  {
    id: "meditation",
    name: "Meditation Session Flow",
    description: "User starts a meditation session with timer",
    screens: [
      {
        id: "dashboard",
        name: "Dashboard",
        description: "User sees meditation quick action",
        nextAction: "Tap 'Meditate'",
        nextScreenId: "meditation-setup",
      },
      {
        id: "meditation-setup",
        name: "Setup Timer",
        description:
          "Circular timer with duration slider (default 5 min)",
        nextAction: "Adjust duration to 10 min, tap 'Start'",
        nextScreenId: "meditation-active",
      },
      {
        id: "meditation-active",
        name: "Active Session",
        description:
          "Timer counts down, breathing animation plays",
        nextAction: "Wait or tap 'Pause' anytime",
        nextScreenId: "meditation-complete",
      },
      {
        id: "meditation-complete",
        name: "Session Complete",
        description:
          "Gentle completion message, minutes added to total",
        nextAction: "Tap 'Done'",
        nextScreenId: undefined,
      },
    ],
  },
  {
    id: "settings",
    name: "Theme Customization Flow",
    description:
      "User changes color theme to personalize experience",
    screens: [
      {
        id: "dashboard",
        name: "Dashboard",
        description: "User taps settings icon in navigation",
        nextAction: "Tap 'Settings' in sidebar",
        nextScreenId: "settings-main",
      },
      {
        id: "settings-main",
        name: "Settings",
        description:
          "Shows theme selector, notifications, privacy options",
        nextAction: "Tap a different color theme",
        nextScreenId: "theme-preview",
      },
      {
        id: "theme-preview",
        name: "Theme Applied",
        description:
          "App immediately updates with new theme colors",
        nextAction: "See change reflected throughout app",
        nextScreenId: undefined,
      },
    ],
  },
];

export function LowFidelityPrototype() {
  const [selectedFlow, setSelectedFlow] =
    useState<PrototypeFlow>(prototypeFlows[0]);
  const [currentScreenIndex, setCurrentScreenIndex] =
    useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentScreen =
    selectedFlow.screens[currentScreenIndex];
  const isLastScreen =
    currentScreenIndex === selectedFlow.screens.length - 1;
  const isFirstScreen = currentScreenIndex === 0;

  const handleNext = () => {
    if (!isLastScreen) {
      setCurrentScreenIndex(currentScreenIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstScreen) {
      setCurrentScreenIndex(currentScreenIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentScreenIndex(0);
    setIsPlaying(false);
  };

  const handleFlowChange = (flow: PrototypeFlow) => {
    setSelectedFlow(flow);
    setCurrentScreenIndex(0);
    setIsPlaying(false);
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <DecorativeBorder className="bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl border border-white/50">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-300 via-teal-300 to-cyan-300 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-2">
                  Low-Fidelity Prototype
                </h1>
                <p className="text-xl text-teal-700 font-light italic">
                  Interactive flows demonstrating key user
                  journeys
                </p>
              </div>
            </div>
            <PDFExportButton title="Low-Fidelity Prototype" />
          </div>
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg mt-6">
            <p className="text-lg font-light text-emerald-700">
              These interactive prototypes simulate core user
              flows, allowing us to test navigation,
              interactions, and overall experience before
              high-fidelity development.
            </p>
          </div>
        </div>
      </DecorativeBorder>

      {/* Flow Selection */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-teal-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-6">
          Select User Flow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {prototypeFlows.map((flow) => (
            <button
              key={flow.id}
              onClick={() => handleFlowChange(flow)}
              className={`p-6 rounded-2xl border-2 transition-all text-left ${
                selectedFlow.id === flow.id
                  ? "bg-gradient-to-br from-emerald-100 to-teal-100 border-emerald-400 shadow-lg scale-105"
                  : "bg-white/60 backdrop-blur-sm border-teal-200/50 hover:border-teal-300 hover:shadow-md"
              }`}
            >
              <h3
                className={`font-light mb-2 ${
                  selectedFlow.id === flow.id
                    ? "text-emerald-700"
                    : "text-gray-700"
                }`}
              >
                {flow.name}
              </h3>
              <p
                className={`text-sm font-light ${
                  selectedFlow.id === flow.id
                    ? "text-teal-600"
                    : "text-gray-600"
                }`}
              >
                {flow.screens.length} screens
              </p>
            </button>
          ))}
        </div>
      </DecorativeBorder>

      {/* Prototype Viewer */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-teal-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          {/* Flow Info */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-2">
                {selectedFlow.name}
              </h3>
              <p className="text-teal-700 font-light italic">
                {selectedFlow.description}
              </p>
            </div>
            <Button
              onClick={handleReset}
              variant="outline"
              className="border-teal-300 bg-white/50 backdrop-blur-sm"
            >
              <Home className="w-4 h-4 mr-2" />
              Reset Flow
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              {selectedFlow.screens.map((screen, index) => (
                <div
                  key={screen.id}
                  className="flex items-center flex-1"
                >
                  <div
                    className={`h-2 rounded-full flex-1 transition-all ${
                      index <= currentScreenIndex
                        ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                        : "bg-gray-200"
                    }`}
                  ></div>
                  {index < selectedFlow.screens.length - 1 && (
                    <ArrowRight
                      className={`w-4 h-4 mx-1 ${
                        index < currentScreenIndex
                          ? "text-teal-600"
                          : "text-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-teal-600 font-light">
              Step {currentScreenIndex + 1} of{" "}
              {selectedFlow.screens.length}
            </p>
          </div>

          {/* Screen Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visual Frame */}
            <div>
              <Card className="p-8 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 border-teal-200/50">
                <div className="max-w-sm mx-auto">
                  {/* Phone Frame */}
                  <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden min-h-[600px] relative">
                      {/* Screen Content */}
                      <div className="p-6 space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-4 border-b-2 border-gray-200">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-200 to-teal-200"></div>
                            <div className="space-y-1">
                              <div className="h-3 bg-gray-300 rounded w-24"></div>
                              <div className="h-2 bg-gray-200 rounded w-16"></div>
                            </div>
                          </div>
                        </div>

                        {/* Dynamic Content Based on Screen */}
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4">
                            <div className="text-center">
                              <div className="text-2xl mb-2">
                                {currentScreen.id.includes(
                                  "welcome",
                                ) && "👋"}
                                {currentScreen.id.includes(
                                  "journal",
                                ) && "📝"}
                                {currentScreen.id.includes(
                                  "mood",
                                ) && "💜"}
                                {currentScreen.id.includes(
                                  "meditation",
                                ) && "🧘"}
                                {currentScreen.id.includes(
                                  "settings",
                                ) && "⚙️"}
                                {currentScreen.id.includes(
                                  "saved",
                                ) && "✓"}
                              </div>
                              <div className="h-3 bg-gray-400 rounded w-3/4 mx-auto mb-2"></div>
                              <div className="h-2 bg-gray-300 rounded w-1/2 mx-auto"></div>
                            </div>
                          </div>

                          {/* Main Content Area */}
                          {currentScreen.id.includes(
                            "journal-new",
                          ) && (
                            <div className="space-y-3">
                              <div className="bg-gray-50 rounded-xl border-2 border-gray-300 p-4 min-h-[200px]">
                                <div className="space-y-2">
                                  <div className="h-2 bg-gray-300 rounded w-full"></div>
                                  <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                                  <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                                </div>
                              </div>
                            </div>
                          )}

                          {currentScreen.id.includes("mood") &&
                            !currentScreen.id.includes(
                              "saved",
                            ) && (
                              <div className="grid grid-cols-5 gap-2">
                                {[
                                  "😊",
                                  "🙂",
                                  "😐",
                                  "😔",
                                  "😢",
                                ].map((emoji, i) => (
                                  <div
                                    key={i}
                                    className={`aspect-square rounded-xl border-2 flex items-center justify-center text-2xl ${
                                      i === 1
                                        ? "bg-gradient-to-br from-emerald-100 to-teal-100 border-emerald-400"
                                        : "bg-gray-50 border-gray-300"
                                    }`}
                                  >
                                    {emoji}
                                  </div>
                                ))}
                              </div>
                            )}

                          {currentScreen.id.includes(
                            "meditation-setup",
                          ) && (
                            <div className="flex flex-col items-center py-8">
                              <div className="w-32 h-32 rounded-full border-8 border-gradient-to-br from-emerald-300 to-teal-300 flex items-center justify-center mb-4">
                                <div className="text-center">
                                  <div className="h-4 bg-gray-400 rounded w-12 mx-auto mb-1"></div>
                                  <div className="h-2 bg-gray-300 rounded w-8 mx-auto"></div>
                                </div>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full relative">
                                <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full absolute left-0 w-1/3"></div>
                              </div>
                            </div>
                          )}

                          {currentScreen.id.includes(
                            "settings",
                          ) && (
                            <div className="space-y-3">
                              <div className="grid grid-cols-5 gap-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <div
                                    key={i}
                                    className="aspect-square rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 border-2 border-gray-300"
                                  ></div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Action Buttons */}
                          {!currentScreen.id.includes(
                            "saved",
                          ) &&
                            !currentScreen.id.includes(
                              "complete",
                            ) && (
                              <div className="flex gap-3 pt-4">
                                <div className="bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg h-12 flex-1 flex items-center justify-center">
                                  <div className="h-2 bg-white/80 rounded w-16"></div>
                                </div>
                                {currentScreen.id.includes(
                                  "journal-new",
                                ) && (
                                  <div className="bg-gray-200 rounded-lg h-12 w-20"></div>
                                )}
                              </div>
                            )}

                          {(currentScreen.id.includes(
                            "saved",
                          ) ||
                            currentScreen.id.includes(
                              "complete",
                            )) && (
                            <div className="flex items-center justify-center py-8">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center">
                                <Check className="w-8 h-8 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Screen Details */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border-emerald-200/50">
                <h4 className="text-xl font-light text-emerald-700 mb-3">
                  {currentScreen.name}
                </h4>
                <p className="text-gray-700 font-light mb-4">
                  {currentScreen.description}
                </p>
                {currentScreen.nextAction && (
                  <div className="bg-gradient-to-r from-teal-100/80 to-cyan-100/80 rounded-xl p-4 border border-teal-200/50">
                    <p className="text-sm font-medium text-teal-700 mb-2">
                      Next Action:
                    </p>
                    <p className="text-sm text-gray-700 font-light flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-teal-600" />
                      {currentScreen.nextAction}
                    </p>
                  </div>
                )}
              </Card>

              {/* Navigation Controls */}
              <Card className="p-6 bg-white/60 backdrop-blur-sm border-teal-200/50">
                <h4 className="text-lg font-light text-teal-700 mb-4">
                  Prototype Controls
                </h4>
                <div className="flex gap-3">
                  <Button
                    onClick={handlePrevious}
                    disabled={isFirstScreen}
                    variant="outline"
                    className="flex-1 border-teal-300 disabled:opacity-50"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={isLastScreen}
                    className="flex-1 bg-gradient-to-r from-emerald-400 to-teal-400 text-white hover:opacity-90 disabled:opacity-50"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                {isLastScreen && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl border border-emerald-300">
                    <p className="text-sm text-emerald-700 font-light text-center">
                      🎉 Flow complete! User has successfully
                      completed this journey.
                    </p>
                  </div>
                )}
              </Card>

              {/* Testing Notes */}
              <Card className="p-6 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 border-teal-200/50">
                <h4 className="text-lg font-light text-teal-700 mb-3">
                  Testing Notes
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 font-light">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0"></span>
                    Observe user hesitation or confusion at each
                    step
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0"></span>
                    Note if users try to tap non-interactive
                    elements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0"></span>
                    Ask users to verbalize their expectations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0"></span>
                    Track time to complete each flow
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </DecorativeBorder>

      {/* Testing Goals */}
      <DecorativeBorder className="p-8 bg-gradient-to-br from-emerald-100/80 via-teal-100/80 to-cyan-100/80 backdrop-blur-sm border-teal-200/50 rounded-3xl shadow-xl relative overflow-hidden">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="relative z-10">
          <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-6">
            Prototype Testing Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-emerald-200/50">
              <h3 className="text-lg font-light text-emerald-700 mb-3">
                🎯 Validate Flows
              </h3>
              <p className="text-sm text-gray-700 font-light">
                Confirm users can complete core tasks without
                confusion or errors
              </p>
            </Card>
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-teal-200/50">
              <h3 className="text-lg font-light text-teal-700 mb-3">
                💬 Gather Feedback
              </h3>
              <p className="text-sm text-gray-700 font-light">
                Collect qualitative insights about what feels
                safe and empowering
              </p>
            </Card>
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-cyan-200/50">
              <h3 className="text-lg font-light text-cyan-700 mb-3">
                🔍 Identify Issues
              </h3>
              <p className="text-sm text-gray-700 font-light">
                Discover pain points, unclear labels, or missing
                features early
              </p>
            </Card>
          </div>
        </div>
      </DecorativeBorder>
    </div>
  );
}