import { useState } from 'react';
import { Palette, Bell, Lock, User, Moon, Sun } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { DecorativeBorder, FloralAccent } from './DecorativeBorder';
import { Icon3DCard } from './Icon3D';
import { icon3DAssets } from './iconAssets';

interface SettingsProps {
  colorTheme: string;
  onColorThemeChange: (theme: string) => void;
}

const themes = [
  { id: 'purple', name: 'Purple Dream', gradient: 'from-purple-300 to-violet-400', bgGradient: 'from-purple-50 to-violet-100' },
  { id: 'pink', name: 'Rose Garden', gradient: 'from-pink-300 to-rose-400', bgGradient: 'from-pink-50 to-rose-100' },
  { id: 'blue', name: 'Ocean Calm', gradient: 'from-cyan-300 to-blue-400', bgGradient: 'from-cyan-50 to-blue-100' },
  { id: 'green', name: 'Forest Sanctuary', gradient: 'from-emerald-300 to-teal-400', bgGradient: 'from-emerald-50 to-teal-100' },
  { id: 'warm', name: 'Sunset Glow', gradient: 'from-amber-300 to-orange-400', bgGradient: 'from-amber-50 to-orange-100' },
];

export function Settings({ colorTheme, onColorThemeChange }: SettingsProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <DecorativeBorder className="bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl border border-white/50">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <Icon3DCard 
              src={icon3DAssets.settings} 
              alt="Settings" 
              size="lg"
              gradient="from-purple-300 via-pink-300 to-orange-300"
            />
            <div>
              <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">Settings</h1>
              <p className="text-xl text-cyan-600 font-light italic">Personalize your Sanctuary experience</p>
            </div>
          </div>
        </div>
      </DecorativeBorder>

      {/* Color Theme */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <FloralAccent position="top-right" />
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-300 to-pink-400 flex items-center justify-center shadow-md">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Color Theme</h2>
            <p className="text-cyan-600 font-light italic">Choose a theme that feels safe and comforting</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => onColorThemeChange(theme.id)}
              className={`p-6 rounded-2xl border-2 transition-all ${
                colorTheme === theme.id
                  ? `bg-gradient-to-br ${theme.bgGradient} border-purple-300/50 shadow-xl scale-105`
                  : 'bg-white/60 backdrop-blur-sm border-purple-200/50 hover:border-purple-300 hover:shadow-lg'
              }`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${theme.gradient} mx-auto mb-3 shadow-md`}></div>
                <p className="font-light text-purple-700 text-sm">{theme.name}</p>
              </div>
            </button>
          ))}
        </div>
      </DecorativeBorder>

      {/* Notifications */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <FloralAccent position="bottom-left" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-300 to-blue-400 flex items-center justify-center shadow-md">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">Notifications</h2>
            <p className="text-purple-600 font-light italic">Control how and when you receive updates</p>
          </div>
        </div>
        <div className="space-y-6 relative z-10">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-cyan-50/50 to-blue-50/50 backdrop-blur-sm border border-cyan-200/50">
            <div>
              <Label htmlFor="notifications" className="text-purple-700 font-light text-lg">
                Enable Notifications
              </Label>
              <p className="text-sm text-cyan-600 font-light italic">Receive gentle reminders and updates</p>
            </div>
            <Switch
              id="notifications"
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 backdrop-blur-sm border border-purple-200/50">
            <div>
              <Label htmlFor="daily-reminders" className="text-purple-700 font-light text-lg">
                Daily Check-in Reminders
              </Label>
              <p className="text-sm text-cyan-600 font-light italic">Get reminded to log your mood and journal</p>
            </div>
            <Switch
              id="daily-reminders"
              checked={dailyReminders}
              onCheckedChange={setDailyReminders}
            />
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-pink-50/50 to-purple-50/50 backdrop-blur-sm border border-pink-200/50">
            <div>
              <Label htmlFor="sound-effects" className="text-purple-700 font-light text-lg">
                Sound Effects
              </Label>
              <p className="text-sm text-cyan-600 font-light italic">Play calming sounds with interactions</p>
            </div>
            <Switch
              id="sound-effects"
              checked={soundEffects}
              onCheckedChange={setSoundEffects}
            />
          </div>
        </div>
      </DecorativeBorder>

      {/* Appearance */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl"></div>
        </div>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-300 to-violet-400 flex items-center justify-center shadow-md">
            {darkMode ? <Moon className="w-6 h-6 text-white" /> : <Sun className="w-6 h-6 text-white" />}
          </div>
          <div>
            <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Appearance</h2>
            <p className="text-cyan-600 font-light italic">Adjust visual settings for comfort</p>
          </div>
        </div>
        <div className="space-y-6 relative z-10">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-violet-50/50 backdrop-blur-sm border border-purple-200/50">
            <div>
              <Label htmlFor="dark-mode" className="text-purple-700 font-light text-lg">
                Dark Mode
              </Label>
              <p className="text-sm text-cyan-600 font-light italic">Reduce eye strain with darker colors</p>
            </div>
            <Switch
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
        </div>
      </DecorativeBorder>

      {/* Privacy & Security */}
      <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl relative overflow-hidden">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center shadow-md">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Privacy & Security</h2>
            <p className="text-cyan-600 font-light italic">Your data is private and secure</p>
          </div>
        </div>
        <div className="space-y-4 relative z-10">
          <div className="p-4 rounded-xl bg-gradient-to-r from-pink-100/80 via-purple-100/80 to-cyan-100/80 backdrop-blur-sm border border-purple-200/50 shadow-sm">
            <p className="text-purple-700 font-light mb-2">
              <strong className="font-medium">🔒 Your Privacy Matters</strong>
            </p>
            <p className="text-sm text-gray-600 font-light italic">
              All your journal entries, mood data, and personal information are stored securely and never shared with third parties. 
              Your healing journey is yours alone.
            </p>
          </div>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start border-purple-300 bg-white/50 backdrop-blur-sm py-6 hover:shadow-md">
              <Lock className="w-5 h-5 mr-3 text-purple-600" />
              <span className="font-light text-purple-700">Export Your Data</span>
            </Button>
            <Button variant="outline" className="w-full justify-start border-purple-300 bg-white/50 backdrop-blur-sm py-6 hover:shadow-md">
              <User className="w-5 h-5 mr-3 text-purple-600" />
              <span className="font-light text-purple-700">Manage Account</span>
            </Button>
          </div>
        </div>
      </DecorativeBorder>

      {/* About */}
      <DecorativeBorder className="p-8 bg-gradient-to-br from-pink-100/80 via-purple-100/80 to-cyan-100/80 backdrop-blur-sm border-purple-200/50 rounded-3xl shadow-xl relative overflow-hidden">
        <FloralAccent position="top-right" />
        <FloralAccent position="bottom-left" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="text-center relative z-10">
          <h3 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">About Sanctuary</h3>
          <p className="text-gray-700 font-light leading-relaxed max-w-2xl mx-auto italic">
            Sanctuary is designed with trauma-informed principles to support individuals on their healing journey. 
            This platform was created through research with survivors to ensure it feels safe, empowering, and truly supportive.
          </p>
          <p className="text-sm text-cyan-600 font-light mt-4 italic">Version 1.0.0 • Built with care 💜</p>
        </div>
      </DecorativeBorder>
    </div>
  );
}