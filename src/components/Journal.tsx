import { useState } from 'react';
import { Plus, Trash2, Calendar, Lock, FileText, Type } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import { DecorativeBorder, FloralAccent } from './DecorativeBorder';
import { Icon3DCard } from './Icon3D';
import { icon3DAssets } from './iconAssets';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface JournalEntry {
  id: string;
  date: string;
  content: string;
  prompt?: string;
  template?: string;
  font?: string;
}

interface JournalProps {
  entries: JournalEntry[];
  onAddEntry: (entry: Omit<JournalEntry, 'id'>) => void;
  onDeleteEntry: (id: string) => void;
  colorTheme: string;
}

const journalPrompts = [
  "What are three things you're grateful for today?",
  "Describe a moment when you felt safe and supported.",
  "What does healing look like for you right now?",
  "Write about a small victory you experienced recently.",
  "What do you need to forgive yourself for?",
  "Describe your ideal safe space.",
  "What boundaries do you want to set or maintain?",
  "How have you grown in the past month?",
  "What emotions are you carrying today?",
  "Write a letter to your future self.",
  "What makes you feel most like yourself?",
  "Describe a person or place that brings you comfort.",
];

const colorThemes = {
  purple: 'from-purple-300 to-violet-400',
  pink: 'from-pink-300 to-rose-400',
  blue: 'from-cyan-300 to-blue-400',
  green: 'from-emerald-300 to-teal-400',
  warm: 'from-amber-300 to-orange-400',
};

const journalTemplates = {
  default: {
    name: 'Free Writing',
    icon: '📝',
    structure: '',
    description: 'Write freely without any structure'
  },
  gratitude: {
    name: 'Gratitude Practice',
    icon: '🙏',
    structure: '🌟 Three things I\'m grateful for today:\n1. \n2. \n3. \n\n💭 Why these matter to me:\n\n\n✨ How this gratitude makes me feel:\n',
    description: 'Focus on appreciation and positive moments'
  },
  'trauma-processing': {
    name: 'Gentle Processing',
    icon: '💜',
    structure: '🛡️ I feel safe to explore:\n\n\n💭 What I\'m noticing in my body:\n\n\n🌱 What I need right now:\n\n\n✨ One small step forward:\n',
    description: 'Trauma-informed reflection with grounding'
  },
  'daily-reflection': {
    name: 'Daily Check-In',
    icon: '🌅',
    structure: '🌤️ How I\'m feeling today:\n\n\n📖 What happened today:\n\n\n💭 What I learned:\n\n\n🌙 What I need tonight:\n',
    description: 'Simple daily reflection practice'
  },
  'letter-to-self': {
    name: 'Letter to Self',
    icon: '💌',
    structure: 'Dear [Your Name],\n\n\n\nWith love,\n[Your Name]',
    description: 'Write a compassionate letter to yourself'
  },
  'boundary-setting': {
    name: 'Boundaries',
    icon: '🛡️',
    structure: '🚪 A boundary I need to set:\n\n\n💪 Why this matters:\n\n\n📋 How I\'ll communicate it:\n\n\n🌱 How I\'ll honor it:\n',
    description: 'Clarify and strengthen your boundaries'
  },
  'victories': {
    name: 'Small Victories',
    icon: '🎉',
    structure: '✨ Today I accomplished:\n\n\n💪 Something I\'m proud of:\n\n\n🌟 Progress I\'m making:\n\n\n🎯 Tomorrow I\'ll focus on:\n',
    description: 'Celebrate your progress and wins'
  },
  'emotional-release': {
    name: 'Emotional Release',
    icon: '🌊',
    structure: '😔 What I\'m feeling:\n\n\n🌊 What triggered these feelings:\n\n\n💭 What I need to say:\n\n\n🌈 What would help me feel better:\n',
    description: 'Safe space to express difficult emotions'
  }
};

const fontOptions = {
  default: {
    name: 'Sanctuary (Default)',
    class: 'font-sans',
    description: 'Clean and readable'
  },
  serif: {
    name: 'Classic Serif',
    class: 'font-serif',
    description: 'Traditional and elegant'
  },
  mono: {
    name: 'Typewriter',
    class: 'font-mono',
    description: 'Authentic typewriter feel'
  },
  handwriting: {
    name: 'Handwritten',
    class: 'font-cursive',
    description: 'Personal handwriting style'
  }
};

export function Journal({ entries, onAddEntry, onDeleteEntry, colorTheme }: JournalProps) {
  const [isWriting, setIsWriting] = useState(false);
  const [currentEntry, setCurrentEntry] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [currentTemplate, setCurrentTemplate] = useState<keyof typeof journalTemplates>('default');
  const [currentFont, setCurrentFont] = useState<keyof typeof fontOptions>('default');
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false);

  const handleNewEntry = () => {
    const randomPrompt = journalPrompts[Math.floor(Math.random() * journalPrompts.length)];
    setCurrentPrompt(randomPrompt);
    setIsWriting(true);
  };

  const handleTemplateSelect = (templateKey: keyof typeof journalTemplates) => {
    setCurrentTemplate(templateKey);
    const template = journalTemplates[templateKey];
    setCurrentEntry(template.structure);
    setCurrentPrompt('');
    setIsWriting(true);
    setIsTemplateDialogOpen(false);
  };

  const handleSave = () => {
    if (currentEntry.trim()) {
      onAddEntry({
        date: new Date().toISOString(),
        content: currentEntry,
        prompt: currentPrompt,
        template: currentTemplate,
        font: currentFont,
      });
      setCurrentEntry('');
      setCurrentPrompt('');
      setIsWriting(false);
    }
  };

  const handleCancel = () => {
    setCurrentEntry('');
    setCurrentPrompt('');
    setIsWriting(false);
  };

  const gradientClass = colorThemes[colorTheme as keyof typeof colorThemes] || colorThemes.purple;

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <DecorativeBorder className={`bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl border border-white/50`}>
        <FloralAccent position="top-right" />
        <FloralAccent position="bottom-left" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Icon3DCard 
                src={icon3DAssets.journal} 
                alt="Journal" 
                size="lg"
                gradient="from-pink-300 via-purple-300 to-cyan-300"
              />
              <div>
                <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">Private Journal</h1>
                <p className="text-xl text-cyan-600 font-light italic flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Your safe space for thoughts and feelings
                </p>
              </div>
            </div>
            {!isWriting && (
              <div className="flex gap-3">
                <Dialog open={isTemplateDialogOpen} onOpenChange={setIsTemplateDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-white/60 border-purple-300 text-purple-700 hover:bg-white/80 px-6 py-6 shadow-md"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Templates
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        Choose a Journal Template
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 max-h-[60vh] overflow-y-auto">
                      {Object.entries(journalTemplates).map(([key, template]) => (
                        <Card
                          key={key}
                          className="p-4 cursor-pointer hover:shadow-lg transition-all bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200/50"
                          onClick={() => handleTemplateSelect(key as keyof typeof journalTemplates)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-3xl">{template.icon}</div>
                            <div className="flex-1">
                              <h3 className="font-medium text-purple-700 mb-1">{template.name}</h3>
                              <p className="text-sm text-gray-600 font-light">{template.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  onClick={handleNewEntry}
                  className="bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white border-none px-6 py-6 shadow-lg"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  New Entry
                </Button>
              </div>
            )}
          </div>
        </div>
      </DecorativeBorder>

      {/* Writing Area */}
      {isWriting && (
        <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="mb-6 relative z-10">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-md`}>
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <p className="text-cyan-600 font-light italic">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Type className="w-4 h-4 text-purple-600" />
                <Select value={currentFont} onValueChange={(value) => setCurrentFont(value as keyof typeof fontOptions)}>
                  <SelectTrigger className="w-[180px] border-purple-300 bg-white/60">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(fontOptions).map(([key, font]) => (
                      <SelectItem key={key} value={key} className={font.class}>
                        {font.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {currentPrompt && (
              <div className="bg-gradient-to-r from-pink-100/80 via-purple-100/80 to-cyan-100/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-md">
                <p className="text-lg font-light text-purple-700 italic">"{currentPrompt}"</p>
              </div>
            )}
            {currentTemplate !== 'default' && (
              <div className="bg-gradient-to-r from-indigo-100/80 via-purple-100/80 to-pink-100/80 backdrop-blur-sm rounded-2xl p-4 border border-indigo-200/50 shadow-md mt-3 flex items-center gap-2">
                <span className="text-2xl">{journalTemplates[currentTemplate].icon}</span>
                <p className="text-sm font-light text-indigo-700">
                  Using template: <strong>{journalTemplates[currentTemplate].name}</strong>
                </p>
              </div>
            )}
          </div>
          <Textarea
            value={currentEntry}
            onChange={(e) => setCurrentEntry(e.target.value)}
            placeholder="Begin writing..."
            className={`min-h-[400px] text-lg border-purple-200/50 focus:border-purple-300 resize-none bg-white/50 backdrop-blur-sm ${fontOptions[currentFont].class}`}
          />
          <div className="flex gap-4 mt-6">
            <Button
              onClick={handleSave}
              className={`bg-gradient-to-r ${gradientClass} hover:opacity-90 text-white border-none px-8 shadow-lg`}
            >
              Save Entry
            </Button>
            <Button
              onClick={handleCancel}
              variant="outline"
              className="border-purple-300 bg-white/50"
            >
              Cancel
            </Button>
          </div>
        </Card>
      )}

      {/* Entries List */}
      <div>
        <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">Your Entries ({entries.length})</h2>
        {entries.length === 0 ? (
          <Card className="p-12 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-cyan-50/50 backdrop-blur-sm border-purple-200/50 text-center shadow-xl">
            <Icon3DCard 
              src={icon3DAssets.journal} 
              alt="Journal" 
              size="lg"
              gradient="from-pink-300 to-purple-400"
              className="mx-auto mb-4"
            />
            <p className="text-xl font-light text-purple-700 mb-2">No entries yet</p>
            <p className="text-cyan-600 font-light italic">Start your journaling journey by creating your first entry</p>
          </Card>
        ) : (
          <div className="space-y-6">
            {entries.map((entry) => (
              <Card key={entry.id} className="p-6 bg-white/70 backdrop-blur-sm border-purple-200/50 hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl"></div>
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-md`}>
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-purple-700 font-light">{new Date(entry.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p className="text-sm text-cyan-600 italic">{new Date(entry.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => onDeleteEntry(entry.id)}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-pink-500"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
                {entry.prompt && (
                  <div className="bg-gradient-to-r from-pink-100/80 via-purple-100/80 to-cyan-100/80 backdrop-blur-sm rounded-xl p-4 mb-4 border border-purple-200/50 shadow-sm">
                    <p className="text-sm font-light text-purple-600 italic">Prompt: "{entry.prompt}"</p>
                  </div>
                )}
                {entry.template && entry.template !== 'default' && (
                  <div className="bg-gradient-to-r from-indigo-100/80 to-purple-100/80 backdrop-blur-sm rounded-xl p-3 mb-4 border border-indigo-200/50 shadow-sm flex items-center gap-2">
                    <span className="text-lg">{journalTemplates[entry.template as keyof typeof journalTemplates]?.icon || '📝'}</span>
                    <p className="text-xs font-light text-indigo-600">
                      {journalTemplates[entry.template as keyof typeof journalTemplates]?.name || 'Template'}
                    </p>
                  </div>
                )}
                <p className={`text-gray-700 leading-relaxed whitespace-pre-wrap relative z-10 ${entry.font ? fontOptions[entry.font as keyof typeof fontOptions]?.class || 'font-sans' : 'font-sans'}`}>
                  {entry.content}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}