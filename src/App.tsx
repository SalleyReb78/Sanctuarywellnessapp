import { useState, useEffect } from 'react';
import { Home, BookOpen, Heart, Brain, Settings as SettingsIcon, FileText, Menu, X, Map, PenTool, Monitor, Play, Users, Calendar } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { Journal } from './components/Journal';
import { MoodTracker } from './components/MoodTracker';
import { Meditation } from './components/Meditation';
import { Settings } from './components/Settings';
import { ResearchPresentation } from './components/ResearchPresentation';
import { UserJourneyMap } from './components/UserJourneyMap';
import { PaperWireframes } from './components/PaperWireframes';
import { DigitalWireframes } from './components/DigitalWireframes';
import { LowFidelityPrototype } from './components/LowFidelityPrototype';
import { UsabilityStudies } from './components/UsabilityStudies';
import { Scheduling } from './components/Scheduling';
import { Button } from './components/ui/button';

interface JournalEntry {
  id: string;
  date: string;
  content: string;
  prompt?: string;
}

interface MoodEntry {
  id: string;
  date: string;
  mood: number;
  icon: string;
  note?: string;
}

interface ScheduleEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  duration: string;
  type: 'therapy' | 'meditation' | 'self-care' | 'appointment' | 'reminder' | 'other';
  description?: string;
  reminder?: string;
}

type Section = 'dashboard' | 'journal' | 'mood' | 'meditation' | 'scheduling' | 'settings' | 'research' | 'journey-map' | 'paper-wireframes' | 'digital-wireframes' | 'prototype' | 'usability-studies';

const interviewNotes = [
  {
    name: "Jordan",
    age: 34,
    bio: [
      "Single parent of two",
      "Survivor of domestic violence",
      "Lives in transitional housing",
      "Uses mobile apps for scheduling therapy, school pickups, and court dates"
    ],
    quote: "I feel like I'm juggling fire—every app wants something different.",
    takeaways: [
      "Struggles with apps that require multiple logins or don't save preferences",
      "Wants visual cues that signal safety and calm (e.g., soft colors, symbols)",
      "Wishes scheduling apps could \"feel like a friend, not a taskmaster\""
    ],
    gradient: "bg-gradient-to-br from-rose-400 via-pink-500 to-purple-500"
  },
  {
    name: "Maya",
    age: 28,
    bio: [
      "Neurodivergent (ADHD)",
      "Works part-time and cares for elderly parent",
      "Relies on reminders and visual structure"
    ],
    quote: "If it's not color-coded, I won't remember it exists.",
    takeaways: [
      "Needs flexible scheduling tools that adapt to changing routines",
      "Finds most apps \"too rigid and punishing\"",
      "Responds well to symbolic design (e.g., icons, mythic motifs)"
    ],
    gradient: "bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500"
  },
  {
    name: "Devon",
    age: 41,
    bio: [
      "Recently exited Residential Treatment Center",
      "Building stability through community support",
      "Uses phone for all scheduling and communication"
    ],
    quote: "I need something that doesn't make me feel stupid.",
    takeaways: [
      "Gets overwhelmed by cluttered interfaces",
      "Wants affirming messages and gentle nudges",
      "Prefers apps that \"feel like they understand trauma, not just time\""
    ],
    gradient: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500"
  },
  {
    name: "Tailia",
    age: 36,
    bio: [
      "Full-time wedding planner and mother",
      "Survivor of workplace harassment",
      "Highly organized but emotionally sensitive to digital tone"
    ],
    quote: "I love when an app feels like it celebrates me.",
    takeaways: [
      "Needs scheduling tools that integrate joy and ritual",
      "Responds to poetic language and visual storytelling",
      "Wants to feel \"seen, not just scheduled\""
    ],
    gradient: "bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600"
  }
];

const personas = [
  {
    name: "Maya Johnson",
    age: 29,
    occupation: "Community Advocate & Artist",
    bio: "A domestic violence survivor who channels her experiences into advocacy work and creative expression. Maya manages ADHD and anxiety while working to help others navigate similar challenges. She values platforms that prioritize safety, privacy, and emotional well-being.",
    goals: [
      "Build supportive online communities",
      "Share her story to help others heal",
      "Find resources without triggering reminders"
    ],
    painPoints: [
      "Overwhelming notifications trigger anxiety",
      "Difficulty trusting new digital platforms",
      "Struggling to maintain consistent routines"
    ],
    motivations: [
      "Helping other survivors feel less alone",
      "Creative self-expression as healing",
      "Building meaningful connections"
    ],
    gradient: "bg-gradient-to-br from-rose-400 via-pink-500 to-purple-500"
  },
  {
    name: "Jordan Chen",
    age: 23,
    occupation: "Student & Peer Support Specialist",
    bio: "A non-binary individual navigating housing instability while attending community college. Jordan is autistic and uses digital tools to manage sensory overwhelm and stay organized. They're passionate about disability rights and creating accessible spaces.",
    goals: [
      "Access mental health resources affordably",
      "Connect with neurodivergent community",
      "Track self-care and manage burnout"
    ],
    painPoints: [
      "Complex interfaces cause cognitive overload",
      "Lack of customization for sensory needs",
      "Inconsistent internet access"
    ],
    motivations: [
      "Disability justice and accessibility",
      "Finding safe spaces to be authentic",
      "Supporting peers through similar struggles"
    ],
    gradient: "bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500"
  },
  {
    name: "Aisha Patel",
    age: 35,
    occupation: "Social Worker & Single Parent",
    bio: "A survivor of racial discrimination who works with marginalized communities while raising two children. Aisha experiences chronic stress and uses mindfulness to cope. She seeks tools that respect her limited time and emotional capacity.",
    goals: [
      "Balance work, parenting, and self-care",
      "Document experiences of discrimination",
      "Find culturally affirming support"
    ],
    painPoints: [
      "Limited time for complex onboarding",
      "Privacy concerns about data sharing",
      "Fatigue from explaining trauma repeatedly"
    ],
    motivations: [
      "Creating a better future for her children",
      "Systemic change through advocacy",
      "Cultural healing and resilience"
    ],
    gradient: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500"
  },
  {
    name: "Sam Rivera",
    age: 41,
    occupation: "Freelance Writer & Activist",
    bio: "A trans individual who has experienced housing instability and workplace discrimination. Sam lives with chronic pain and uses writing as both income and therapy. They value platforms that understand intersectionality and trauma-informed design.",
    goals: [
      "Connect with LGBTQ+ affirming resources",
      "Process trauma through creative writing",
      "Build financial stability"
    ],
    painPoints: [
      "Lack of inclusive, gender-affirming tools",
      "Energy limitations from chronic pain",
      "Isolation from safe community spaces"
    ],
    motivations: [
      "Visibility for trans experiences",
      "Building solidarity across movements",
      "Personal healing and growth"
    ],
    gradient: "bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600"
  }
];

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Journal state
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  
  // Mood tracking state
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  
  // Meditation state
  const [totalMeditationMinutes, setTotalMeditationMinutes] = useState(0);
  
  // Settings state
  const [colorTheme, setColorTheme] = useState('purple');
  
  // Scheduling state
  const [scheduleEvents, setScheduleEvents] = useState<ScheduleEvent[]>([]);
  
  // Load data from localStorage
  useEffect(() => {
    const savedJournal = localStorage.getItem('sanctuary-journal');
    const savedMood = localStorage.getItem('sanctuary-mood');
    const savedMeditation = localStorage.getItem('sanctuary-meditation');
    const savedTheme = localStorage.getItem('sanctuary-theme');
    const savedSchedule = localStorage.getItem('sanctuary-schedule');
    
    if (savedJournal) setJournalEntries(JSON.parse(savedJournal));
    if (savedMood) setMoodEntries(JSON.parse(savedMood));
    if (savedMeditation) setTotalMeditationMinutes(JSON.parse(savedMeditation));
    if (savedTheme) setColorTheme(savedTheme);
    if (savedSchedule) {
      const parsed = JSON.parse(savedSchedule);
      // Convert date strings back to Date objects
      const eventsWithDates = parsed.map((e: any) => ({
        ...e,
        date: new Date(e.date)
      }));
      setScheduleEvents(eventsWithDates);
    }
  }, []);
  
  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('sanctuary-journal', JSON.stringify(journalEntries));
  }, [journalEntries]);
  
  useEffect(() => {
    localStorage.setItem('sanctuary-mood', JSON.stringify(moodEntries));
  }, [moodEntries]);
  
  useEffect(() => {
    localStorage.setItem('sanctuary-meditation', JSON.stringify(totalMeditationMinutes));
  }, [totalMeditationMinutes]);
  
  useEffect(() => {
    localStorage.setItem('sanctuary-theme', colorTheme);
  }, [colorTheme]);
  
  useEffect(() => {
    localStorage.setItem('sanctuary-schedule', JSON.stringify(scheduleEvents));
  }, [scheduleEvents]);
  
  // Journal handlers
  const handleAddJournalEntry = (entry: Omit<JournalEntry, 'id'>) => {
    const newEntry = {
      ...entry,
      id: Date.now().toString(),
    };
    setJournalEntries([newEntry, ...journalEntries]);
  };
  
  const handleDeleteJournalEntry = (id: string) => {
    setJournalEntries(journalEntries.filter(entry => entry.id !== id));
  };
  
  // Mood handlers
  const handleAddMoodEntry = (entry: Omit<MoodEntry, 'id'>) => {
    const newEntry = {
      ...entry,
      id: Date.now().toString(),
    };
    setMoodEntries([...moodEntries, newEntry]);
  };
  
  // Meditation handler
  const handleMeditationComplete = (minutes: number) => {
    setTotalMeditationMinutes(totalMeditationMinutes + minutes);
  };
  
  // Scheduling handlers
  const handleAddScheduleEvent = (event: Omit<ScheduleEvent, 'id'>) => {
    const newEvent = {
      ...event,
      id: Date.now().toString(),
    };
    setScheduleEvents([...scheduleEvents, newEvent]);
  };
  
  const handleDeleteScheduleEvent = (id: string) => {
    setScheduleEvents(scheduleEvents.filter(event => event.id !== id));
  };
  
  // Calculate current streak
  const calculateStreak = () => {
    if (journalEntries.length === 0 && moodEntries.length === 0) return 0;
    
    const allDates = [...journalEntries, ...moodEntries]
      .map(entry => new Date(entry.date).toDateString())
      .filter((date, index, self) => self.indexOf(date) === index)
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
    
    let streak = 0;
    const today = new Date().toDateString();
    
    for (let i = 0; i < allDates.length; i++) {
      const expectedDate = new Date();
      expectedDate.setDate(expectedDate.getDate() - i);
      if (allDates[i] === expectedDate.toDateString()) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  const navItems = [
    { id: 'dashboard' as Section, icon: Home, label: 'Dashboard' },
    { id: 'journal' as Section, icon: BookOpen, label: 'Journal' },
    { id: 'mood' as Section, icon: Heart, label: 'Mood Tracker' },
    { id: 'meditation' as Section, icon: Brain, label: 'Meditation' },
    { id: 'scheduling' as Section, icon: Calendar, label: 'Scheduling' },
    { id: 'research' as Section, icon: FileText, label: 'Research' },
    { id: 'settings' as Section, icon: SettingsIcon, label: 'Settings' },
    { id: 'journey-map' as Section, icon: Map, label: 'User Journey Map' },
    { id: 'paper-wireframes' as Section, icon: PenTool, label: 'Paper Wireframes' },
    { id: 'digital-wireframes' as Section, icon: Monitor, label: 'Digital Wireframes' },
    { id: 'prototype' as Section, icon: Play, label: 'Low Fidelity Prototype' },
    { id: 'usability-studies' as Section, icon: Users, label: 'Usability Studies' },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return (
          <Dashboard
            journalCount={journalEntries.length}
            moodEntries={moodEntries.length}
            meditationMinutes={totalMeditationMinutes}
            currentStreak={calculateStreak()}
          />
        );
      case 'journal':
        return (
          <Journal
            entries={journalEntries}
            onAddEntry={handleAddJournalEntry}
            onDeleteEntry={handleDeleteJournalEntry}
            colorTheme={colorTheme}
          />
        );
      case 'mood':
        return (
          <MoodTracker
            entries={moodEntries}
            onAddEntry={handleAddMoodEntry}
          />
        );
      case 'meditation':
        return (
          <Meditation
            onComplete={handleMeditationComplete}
          />
        );
      case 'scheduling':
        return (
          <Scheduling
            events={scheduleEvents}
            onAddEvent={handleAddScheduleEvent}
            onDeleteEvent={handleDeleteScheduleEvent}
          />
        );
      case 'settings':
        return (
          <Settings
            colorTheme={colorTheme}
            onColorThemeChange={setColorTheme}
          />
        );
      case 'research':
        return (
          <ResearchPresentation
            interviewNotes={interviewNotes}
            personas={personas}
          />
        );
      case 'journey-map':
        return <UserJourneyMap />;
      case 'paper-wireframes':
        return <PaperWireframes />;
      case 'digital-wireframes':
        return <DigitalWireframes />;
      case 'prototype':
        return <LowFidelityPrototype />;
      case 'usability-studies':
        return <UsabilityStudies />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-white/80 backdrop-blur-xl border-r border-purple-200/50 p-6 shadow-lg">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-300 via-purple-300 to-cyan-300 flex items-center justify-center shadow-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Sanctuary</h1>
              <p className="text-xs text-cyan-600 font-light italic">Your Safe Space</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                  currentSection === item.id
                    ? 'bg-gradient-to-r from-pink-200/80 via-purple-200/80 to-cyan-200/80 text-purple-700 shadow-md backdrop-blur-sm'
                    : 'text-gray-600 hover:bg-white/50 hover:shadow-sm'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-light">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-purple-200/50">
          <div className="bg-gradient-to-r from-pink-100/80 via-purple-100/80 to-cyan-100/80 backdrop-blur-sm rounded-2xl p-4 border border-purple-200/50 shadow-md">
            <p className="text-sm font-light text-purple-700 mb-1">💜 Healing Journey</p>
            <p className="text-xs text-cyan-600 font-light italic">
              You've been consistent for {calculateStreak()} days
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-purple-200/50 p-4 z-50 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-300 via-purple-300 to-cyan-300 flex items-center justify-center shadow-md">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Sanctuary</h1>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-purple-600"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-purple-900/20 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-purple-200/50 p-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                      currentSection === item.id
                        ? 'bg-gradient-to-r from-pink-200/80 via-purple-200/80 to-cyan-200/80 text-purple-700 shadow-md'
                        : 'text-gray-600 hover:bg-white/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-light">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto lg:pt-0 pt-16">
        {renderSection()}
      </main>
    </div>
  );
}