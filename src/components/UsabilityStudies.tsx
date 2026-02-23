import { Users, Target, CheckCircle, AlertCircle, TrendingUp, MessageSquare, BarChart } from 'lucide-react';
import { DecorativeBorder, FloralAccent } from './DecorativeBorder';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { PDFExportButton } from './PDFExportButton';

interface StudyParticipant {
  id: string;
  name: string;
  age: number;
  background: string;
  experience: string;
}

interface UsabilityFinding {
  category: 'positive' | 'issue' | 'suggestion';
  title: string;
  description: string;
  severity?: 'low' | 'medium' | 'high';
  impactedUsers: number;
  recommendation?: string;
}

const participants: StudyParticipant[] = [
  {
    id: "p1",
    name: "Jordan",
    age: 34,
    background: "DV survivor, single parent",
    experience: "Moderate tech literacy, uses mental health apps"
  },
  {
    id: "p2",
    name: "Maya",
    age: 28,
    background: "ADHD, neurodivergent",
    experience: "High tech literacy, avid app user"
  },
  {
    id: "p3",
    name: "Devon",
    age: 41,
    background: "Recently exited RTC",
    experience: "Low tech literacy, learning digital tools"
  },
  {
    id: "p4",
    name: "Sam",
    age: 26,
    background: "PTSD, anxiety disorder",
    experience: "Moderate tech literacy, selective with apps"
  },
  {
    id: "p5",
    name: "Alex",
    age: 32,
    background: "Housing instability survivor",
    experience: "High tech literacy, privacy-focused"
  }
];

const findings: UsabilityFinding[] = [
  {
    category: 'positive',
    title: "Calming Visual Design Highly Appreciated",
    description: "All 5 participants commented positively on the soft gradients and organic design. One stated: 'This doesn't feel clinical or cold like other mental health apps.'",
    impactedUsers: 5,
    recommendation: "Maintain dreamy, soft aesthetic throughout all future features"
  },
  {
    category: 'positive',
    title: "Optional Onboarding Reduced Anxiety",
    description: "4 out of 5 users appreciated the ability to skip setup and explore freely. This aligned with trauma-informed principles of user control.",
    impactedUsers: 4,
    recommendation: "Keep all onboarding steps optional and allow immediate feature access"
  },
  {
    category: 'positive',
    title: "Privacy Indicators Build Trust",
    description: "Users specifically noticed and valued the lock icon and 'Private' labels on journal entries. One participant: 'Knowing my data stays with me makes me feel safe.'",
    impactedUsers: 5,
    recommendation: "Continue emphasizing privacy throughout UI with clear indicators"
  },
  {
    category: 'issue',
    title: "Mood Emoji Meanings Not Always Clear",
    severity: 'medium',
    description: "2 users were confused about the difference between 'Good' and 'Excellent' mood options. The emojis alone weren't sufficient.",
    impactedUsers: 2,
    recommendation: "Add text labels below emojis in mood tracker for clarity"
  },
  {
    category: 'issue',
    title: "Meditation Timer Default Too Short",
    severity: 'low',
    description: "3 users wanted to start with 10-15 minute sessions but default was set to 5 minutes. This required extra interaction.",
    impactedUsers: 3,
    recommendation: "Remember user's last-used duration or allow setting preferred default"
  },
  {
    category: 'issue',
    title: "Journal Prompt Dismissal Unclear",
    severity: 'high',
    description: "4 users tried multiple times to dismiss the journal prompt. The X button was too small and not intuitive enough.",
    impactedUsers: 4,
    recommendation: "Enlarge dismiss button and add 'Skip Prompt' text label for clarity"
  },
  {
    category: 'suggestion',
    title: "Request for Crisis Resources",
    description: "3 participants asked if there was a way to access crisis hotlines or immediate support when feeling triggered.",
    impactedUsers: 3,
    recommendation: "Add dedicated 'Crisis Support' section with vetted resources and hotlines"
  },
  {
    category: 'suggestion',
    title: "Export Data for Therapist Sharing",
    description: "2 users wanted to share their mood trends with their therapist but couldn't easily export the data.",
    impactedUsers: 2,
    recommendation: "Implement export feature that creates shareable PDF of mood/journal data"
  },
  {
    category: 'suggestion',
    title: "Dark Mode Option Requested",
    description: "2 users preferred using apps at night and requested a dark mode option to reduce eye strain.",
    impactedUsers: 2,
    recommendation: "Add dark mode toggle in Settings with system preference detection"
  }
];

const metrics = {
  taskCompletionRate: 92,
  averageTimeOnTask: 3.5,
  errorRate: 8,
  satisfactionScore: 4.6,
  npsScore: 85
};

export function UsabilityStudies() {
  const positiveFindings = findings.filter(f => f.category === 'positive');
  const issues = findings.filter(f => f.category === 'issue');
  const suggestions = findings.filter(f => f.category === 'suggestion');

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <DecorativeBorder className="bg-gradient-to-br from-violet-200 via-purple-200 to-fuchsia-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl border border-white/50">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-fuchsia-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-300 via-purple-300 to-fuchsia-300 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-2">
                  Usability Studies
                </h1>
                <p className="text-xl text-purple-700 font-light italic">
                  Testing findings and user feedback from trauma survivors
                </p>
              </div>
            </div>
            <PDFExportButton title="Usability Studies" />
          </div>
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg mt-6">
            <p className="text-lg font-light text-violet-700">
              We conducted moderated usability testing with 5 trauma survivors (ages 26-41) to evaluate 
              the Sanctuary app's effectiveness, safety, and alignment with trauma-informed design principles.
            </p>
          </div>
        </div>
      </DecorativeBorder>

      {/* Study Overview */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-6">
          Study Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/50 text-center">
            <Users className="w-10 h-10 mx-auto mb-3 text-violet-600" />
            <p className="text-3xl font-light text-violet-700 mb-1">{participants.length}</p>
            <p className="text-sm text-gray-600 font-light">Participants</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 border-purple-200/50 text-center">
            <Target className="w-10 h-10 mx-auto mb-3 text-purple-600" />
            <p className="text-3xl font-light text-purple-700 mb-1">8</p>
            <p className="text-sm text-gray-600 font-light">Core Tasks Tested</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-fuchsia-50 to-pink-50 border-fuchsia-200/50 text-center">
            <MessageSquare className="w-10 h-10 mx-auto mb-3 text-fuchsia-600" />
            <p className="text-3xl font-light text-fuchsia-700 mb-1">45</p>
            <p className="text-sm text-gray-600 font-light">Minutes per Session</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200/50 text-center">
            <BarChart className="w-10 h-10 mx-auto mb-3 text-pink-600" />
            <p className="text-3xl font-light text-pink-700 mb-1">{metrics.taskCompletionRate}%</p>
            <p className="text-sm text-gray-600 font-light">Task Completion</p>
          </Card>
        </div>
      </DecorativeBorder>

      {/* Study Introduction */}
      <DecorativeBorder className="p-8 bg-gradient-to-br from-indigo-100/80 via-violet-100/80 to-purple-100/80 backdrop-blur-sm border-indigo-200/50 rounded-3xl shadow-xl relative overflow-hidden">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="relative z-10">
          <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            📋 Study Introduction & Methodology
          </h2>
          
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-indigo-200/50 mb-6">
            <h3 className="text-xl font-light text-indigo-700 mb-4">Research Goals</h3>
            <p className="text-sm text-gray-700 font-light leading-relaxed mb-4">
              Our usability studies aimed to validate design decisions made during the wireframing 
              phase and ensure the Sanctuary app truly serves trauma survivors' needs. We focused on 
              three critical questions:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-indigo-500 text-lg mt-0.5">1.</span>
                <p className="text-sm text-gray-700 font-light">
                  <strong className="font-medium text-indigo-700">Safety & Trust:</strong> Does the 
                  interface make users feel emotionally safe and in control of their data?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-violet-500 text-lg mt-0.5">2.</span>
                <p className="text-sm text-gray-700 font-light">
                  <strong className="font-medium text-violet-700">Usability:</strong> Can users with 
                  varying tech literacy complete core tasks (journaling, mood tracking, meditation) 
                  without frustration?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg mt-0.5">3.</span>
                <p className="text-sm text-gray-700 font-light">
                  <strong className="font-medium text-purple-700">Accessibility:</strong> Are trauma-informed 
                  features (optional prompts, dismissible elements, privacy indicators) discoverable 
                  and effective?
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/60 backdrop-blur-sm border-violet-200/50 mb-6">
            <h3 className="text-xl font-light text-violet-700 mb-4">Methodology</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-violet-700 mb-2">Moderated Remote Testing</h4>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  We conducted one-on-one, 45-minute video sessions with 5 participants (ages 26-41) 
                  recruited through trauma support organizations and survivor advocacy networks. 
                  Sessions were recorded with consent for later analysis.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-indigo-700 mb-2">Task-Based Scenarios</h4>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Participants completed 8 realistic scenarios: onboarding, creating first journal entry, 
                  tracking mood, exploring meditation, customizing theme, searching past entries, 
                  exporting data, and finding privacy settings. We used the "think aloud" protocol 
                  to capture real-time reactions.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-purple-700 mb-2">Trauma-Informed Approach</h4>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Critical to our methodology: participants could pause or stop at any time, we avoided 
                  triggering language, and we provided crisis resources before and after sessions. 
                  We also paid participants $75 gift cards to honor their time and lived experience.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/60 backdrop-blur-sm border-purple-200/50">
            <h3 className="text-xl font-light text-purple-700 mb-4">Key Findings Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <h4 className="text-sm font-medium text-emerald-700">What Worked</h4>
                </div>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  The soft, dreamy aesthetic resonated strongly. All 5 participants found the design 
                  "calming" and "non-threatening"—a stark contrast to clinical mental health apps. 
                  Privacy indicators built immediate trust.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                  <h4 className="text-sm font-medium text-amber-700">Pain Points</h4>
                </div>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  The journal prompt dismiss button was too small and caused frustration. Mood tracker 
                  emoji meanings weren't always clear. Meditation timer defaults didn't match user 
                  preferences.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <h4 className="text-sm font-medium text-blue-700">Opportunities</h4>
                </div>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Users requested crisis resources, therapist data sharing, and dark mode. These 
                  additions would significantly increase the app's utility during vulnerable moments 
                  and nighttime use.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </DecorativeBorder>

      {/* Participants */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <FloralAccent position="top-right" />
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-6">
          Study Participants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participants.map((participant) => (
            <Card key={participant.id} className="p-6 bg-gradient-to-br from-violet-50/50 to-purple-50/50 border-violet-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-300 to-purple-400 flex items-center justify-center text-white shadow-md">
                  <span className="text-lg">{participant.name[0]}</span>
                </div>
                <div>
                  <h3 className="font-light text-violet-700">{participant.name}</h3>
                  <p className="text-sm text-purple-600 italic">Age {participant.age}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700 font-light">
                <p><strong className="font-medium">Background:</strong> {participant.background}</p>
                <p><strong className="font-medium">Tech Experience:</strong> {participant.experience}</p>
              </div>
            </Card>
          ))}
        </div>
      </DecorativeBorder>

      {/* Key Metrics */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-6">
          Quantitative Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-emerald-700">Task Completion</span>
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-4xl font-light text-emerald-700">{metrics.taskCompletionRate}%</p>
            <p className="text-xs text-gray-600 font-light mt-2">Of tasks completed successfully</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-blue-700">Avg. Time</span>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-4xl font-light text-blue-700">{metrics.averageTimeOnTask}<span className="text-xl">m</span></p>
            <p className="text-xs text-gray-600 font-light mt-2">Per task completion</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-amber-700">Error Rate</span>
              <AlertCircle className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-4xl font-light text-amber-700">{metrics.errorRate}%</p>
            <p className="text-xs text-gray-600 font-light mt-2">User errors encountered</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-violet-700">Satisfaction</span>
              <CheckCircle className="w-5 h-5 text-violet-600" />
            </div>
            <p className="text-4xl font-light text-violet-700">{metrics.satisfactionScore}<span className="text-xl">/5</span></p>
            <p className="text-xs text-gray-600 font-light mt-2">Post-study rating</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-fuchsia-50 to-pink-50 border-fuchsia-200/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-fuchsia-700">NPS Score</span>
              <TrendingUp className="w-5 h-5 text-fuchsia-600" />
            </div>
            <p className="text-4xl font-light text-fuchsia-700">{metrics.npsScore}</p>
            <p className="text-xs text-gray-600 font-light mt-2">Net Promoter Score</p>
          </Card>
        </div>
      </DecorativeBorder>

      {/* Findings */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <FloralAccent position="bottom-left" />
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-6">
          Key Findings
        </h2>

        <Tabs defaultValue="positive" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 bg-white/60 backdrop-blur-sm border border-purple-200/50">
            <TabsTrigger value="positive">
              ✓ Strengths ({positiveFindings.length})
            </TabsTrigger>
            <TabsTrigger value="issues">
              ⚠ Issues ({issues.length})
            </TabsTrigger>
            <TabsTrigger value="suggestions">
              💡 Suggestions ({suggestions.length})
            </TabsTrigger>
          </TabsList>

          {/* Positive Findings */}
          <TabsContent value="positive">
            <div className="space-y-4">
              {positiveFindings.map((finding, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border-emerald-200/50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-300 to-teal-400 flex items-center justify-center flex-shrink-0 shadow-md">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-light text-emerald-700">{finding.title}</h3>
                        <span className="text-sm text-teal-600 font-light italic">{finding.impactedUsers}/5 users</span>
                      </div>
                      <p className="text-gray-700 font-light mb-3">{finding.description}</p>
                      <div className="bg-gradient-to-r from-emerald-100/80 to-teal-100/80 rounded-xl p-4 border border-emerald-200/50">
                        <p className="text-sm font-medium text-emerald-700 mb-1">✓ Recommendation:</p>
                        <p className="text-sm text-gray-700 font-light">{finding.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Issues */}
          <TabsContent value="issues">
            <div className="space-y-4">
              {issues.map((finding, index) => (
                <Card key={index} className={`p-6 ${
                  finding.severity === 'high' ? 'bg-gradient-to-br from-red-50/50 to-rose-50/50 border-red-200/50' :
                  finding.severity === 'medium' ? 'bg-gradient-to-br from-amber-50/50 to-orange-50/50 border-amber-200/50' :
                  'bg-gradient-to-br from-yellow-50/50 to-amber-50/50 border-yellow-200/50'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md ${
                      finding.severity === 'high' ? 'bg-gradient-to-br from-red-300 to-rose-400' :
                      finding.severity === 'medium' ? 'bg-gradient-to-br from-amber-300 to-orange-400' :
                      'bg-gradient-to-br from-yellow-300 to-amber-400'
                    }`}>
                      <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className={`text-lg font-light ${
                            finding.severity === 'high' ? 'text-red-700' :
                            finding.severity === 'medium' ? 'text-amber-700' :
                            'text-yellow-700'
                          }`}>{finding.title}</h3>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            finding.severity === 'high' ? 'bg-red-200 text-red-700' :
                            finding.severity === 'medium' ? 'bg-amber-200 text-amber-700' :
                            'bg-yellow-200 text-yellow-700'
                          }`}>
                            {finding.severity?.toUpperCase()} PRIORITY
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 font-light italic">{finding.impactedUsers}/5 users</span>
                      </div>
                      <p className="text-gray-700 font-light mb-3">{finding.description}</p>
                      <div className={`rounded-xl p-4 border ${
                        finding.severity === 'high' ? 'bg-gradient-to-r from-red-100/80 to-rose-100/80 border-red-200/50' :
                        finding.severity === 'medium' ? 'bg-gradient-to-r from-amber-100/80 to-orange-100/80 border-amber-200/50' :
                        'bg-gradient-to-r from-yellow-100/80 to-amber-100/80 border-yellow-200/50'
                      }`}>
                        <p className={`text-sm font-medium mb-1 ${
                          finding.severity === 'high' ? 'text-red-700' :
                          finding.severity === 'medium' ? 'text-amber-700' :
                          'text-yellow-700'
                        }`}>→ Recommendation:</p>
                        <p className="text-sm text-gray-700 font-light">{finding.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Suggestions */}
          <TabsContent value="suggestions">
            <div className="space-y-4">
              {suggestions.map((finding, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border-blue-200/50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-300 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-md">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-light text-blue-700">{finding.title}</h3>
                        <span className="text-sm text-cyan-600 font-light italic">{finding.impactedUsers}/5 users</span>
                      </div>
                      <p className="text-gray-700 font-light mb-3">{finding.description}</p>
                      <div className="bg-gradient-to-r from-blue-100/80 to-cyan-100/80 rounded-xl p-4 border border-blue-200/50">
                        <p className="text-sm font-medium text-blue-700 mb-1">💡 Recommendation:</p>
                        <p className="text-sm text-gray-700 font-light">{finding.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DecorativeBorder>

      {/* Next Steps */}
      <DecorativeBorder className="p-8 bg-gradient-to-br from-violet-100/80 via-purple-100/80 to-fuchsia-100/80 backdrop-blur-sm border-purple-200/50 rounded-3xl shadow-xl relative overflow-hidden">
        <FloralAccent position="top-right" />
        <FloralAccent position="bottom-left" />
        <div className="relative z-10">
          <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-6">
            Implementation Roadmap
          </h2>
          <div className="space-y-4">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-violet-200/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-300 to-rose-400 flex items-center justify-center text-white text-sm shadow-md">
                  P1
                </div>
                <h3 className="text-lg font-light text-red-700">High Priority Issues</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 font-light">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                  Fix journal prompt dismissal UX immediately
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                  Add clear text labels to mood tracker emojis
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-purple-200/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-white text-sm shadow-md">
                  P2
                </div>
                <h3 className="text-lg font-light text-amber-700">Medium Priority Improvements</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 font-light">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
                  Remember user's meditation duration preference
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
                  Add crisis resources section
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-fuchsia-200/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-300 to-cyan-400 flex items-center justify-center text-white text-sm shadow-md">
                  P3
                </div>
                <h3 className="text-lg font-light text-blue-700">Future Enhancements</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 font-light">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                  Implement data export feature
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                  Add dark mode option
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </DecorativeBorder>
    </div>
  );
}