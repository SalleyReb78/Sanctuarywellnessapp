import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Mail, Plus, Trash2, Bell, ExternalLink, Lock, CheckCircle } from 'lucide-react';
import { DecorativeBorder, FloralAccent } from './DecorativeBorder';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

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

interface SchedulingProps {
  events: ScheduleEvent[];
  onAddEvent: (event: Omit<ScheduleEvent, 'id'>) => void;
  onDeleteEvent: (id: string) => void;
}

const eventTypeColors = {
  therapy: 'from-purple-400 to-violet-500',
  meditation: 'from-cyan-400 to-blue-500',
  'self-care': 'from-pink-400 to-rose-500',
  appointment: 'from-amber-400 to-orange-500',
  reminder: 'from-teal-400 to-emerald-500',
  other: 'from-indigo-400 to-purple-500'
};

const eventTypeIcons = {
  therapy: '💜',
  meditation: '🧘',
  'self-care': '✨',
  appointment: '📅',
  reminder: '🔔',
  other: '📝'
};

export function Scheduling({ events, onAddEvent, onDeleteEvent }: SchedulingProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [isSyncDialogOpen, setIsSyncDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    time: '09:00',
    duration: '60',
    type: 'other' as ScheduleEvent['type'],
    description: '',
    reminder: '15'
  });

  const handleAddEvent = () => {
    if (!newEvent.title) return;

    onAddEvent({
      title: newEvent.title,
      date: selectedDate,
      time: newEvent.time,
      duration: newEvent.duration,
      type: newEvent.type,
      description: newEvent.description,
      reminder: newEvent.reminder
    });

    setNewEvent({
      title: '',
      time: '09:00',
      duration: '60',
      type: 'other',
      description: '',
      reminder: '15'
    });
    setIsAddEventOpen(false);
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    ).sort((a, b) => a.time.localeCompare(b.time));
  };

  const selectedDateEvents = getEventsForDate(selectedDate);
  const upcomingEvents = events
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <DecorativeBorder className="bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-3xl p-12 text-gray-800 relative overflow-hidden shadow-xl border border-white/50">
        <FloralAccent position="top-left" />
        <FloralAccent position="bottom-right" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  Scheduling
                </h1>
                <p className="text-xl text-purple-700 font-light italic">
                  Gentle reminders for your healing journey
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg mt-6">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-light text-purple-700">
                Your schedule is stored privately on your device. Optional email sync uses secure OAuth and never shares your data with third parties.
              </p>
            </div>
          </div>
        </div>
      </DecorativeBorder>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Section */}
        <div className="lg:col-span-2 space-y-6">
          <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl">
            <FloralAccent position="top-right" />
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Calendar
              </h2>
              <div className="flex gap-2">
                <Dialog open={isSyncDialogOpen} onOpenChange={setIsSyncDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-300 text-purple-700 hover:from-purple-200 hover:to-pink-200"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Sync Email
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        Email Calendar Sync
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <Lock className="w-5 h-5 text-purple-600 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-purple-700 mb-1">Privacy First</h4>
                            <p className="text-xs text-gray-600 font-light">
                              Email sync uses OAuth 2.0 for secure authentication. We never store your email password.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Connect Google Calendar
                        </Button>
                        <Button className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Connect Outlook Calendar
                        </Button>
                        <Button className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Connect Apple Calendar
                        </Button>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                        <p className="text-xs text-gray-600 font-light">
                          <strong className="text-amber-700">Note:</strong> This is a demo interface. In production, clicking these buttons would redirect you to the respective email provider's OAuth consent screen for secure authorization.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Event
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        Create New Event
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="title">Event Title</Label>
                        <Input
                          id="title"
                          placeholder="e.g., Therapy session, Meditation time"
                          value={newEvent.title}
                          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="type">Event Type</Label>
                        <Select value={newEvent.type} onValueChange={(value) => setNewEvent({ ...newEvent, type: value as ScheduleEvent['type'] })}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="therapy">💜 Therapy</SelectItem>
                            <SelectItem value="meditation">🧘 Meditation</SelectItem>
                            <SelectItem value="self-care">✨ Self-Care</SelectItem>
                            <SelectItem value="appointment">📅 Appointment</SelectItem>
                            <SelectItem value="reminder">🔔 Reminder</SelectItem>
                            <SelectItem value="other">📝 Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="time">Time</Label>
                          <Input
                            id="time"
                            type="time"
                            value={newEvent.time}
                            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="duration">Duration (min)</Label>
                          <Input
                            id="duration"
                            type="number"
                            value={newEvent.duration}
                            onChange={(e) => setNewEvent({ ...newEvent, duration: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="reminder">Reminder</Label>
                        <Select value={newEvent.reminder} onValueChange={(value) => setNewEvent({ ...newEvent, reminder: value })}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">No reminder</SelectItem>
                            <SelectItem value="5">5 minutes before</SelectItem>
                            <SelectItem value="15">15 minutes before</SelectItem>
                            <SelectItem value="30">30 minutes before</SelectItem>
                            <SelectItem value="60">1 hour before</SelectItem>
                            <SelectItem value="1440">1 day before</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="description">Notes (optional)</Label>
                        <Textarea
                          id="description"
                          placeholder="Add any notes or details..."
                          value={newEvent.description}
                          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                          className="mt-1 min-h-20"
                        />
                      </div>

                      <Button 
                        onClick={handleAddEvent}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Create Event
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="rounded-2xl border-purple-200"
                modifiers={{
                  hasEvents: events.map(e => e.date)
                }}
                modifiersStyles={{
                  hasEvents: {
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    textDecorationColor: '#a855f7',
                    textDecorationThickness: '2px'
                  }
                }}
              />
            </div>
          </DecorativeBorder>

          {/* Events for Selected Date */}
          <DecorativeBorder className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl">
            <h3 className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </h3>
            {selectedDateEvents.length === 0 ? (
              <div className="text-center py-8">
                <CalendarIcon className="w-12 h-12 mx-auto mb-3 text-purple-300" />
                <p className="text-gray-500 font-light">No events scheduled for this day</p>
                <p className="text-sm text-gray-400 font-light mt-1">Click "Add Event" to create one</p>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedDateEvents.map((event) => (
                  <Card key={event.id} className={`p-4 bg-gradient-to-r ${eventTypeColors[event.type]} border-white/50`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{eventTypeIcons[event.type]}</span>
                          <h4 className="font-medium text-white">{event.title}</h4>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/90 font-light">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <span>{event.duration} min</span>
                          </div>
                          {event.reminder && event.reminder !== '0' && (
                            <div className="flex items-center gap-1">
                              <Bell className="w-4 h-4" />
                              {event.reminder === '1440' ? '1 day' : `${event.reminder} min`} before
                            </div>
                          )}
                        </div>
                        {event.description && (
                          <p className="text-sm text-white/80 font-light mt-2">{event.description}</p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onDeleteEvent(event.id)}
                        className="text-white/70 hover:text-white hover:bg-white/20 flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </DecorativeBorder>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="space-y-6">
          <DecorativeBorder className="p-6 bg-white/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl">
            <FloralAccent position="bottom-left" />
            <h3 className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              Upcoming Events
            </h3>
            {upcomingEvents.length === 0 ? (
              <div className="text-center py-8">
                <CalendarIcon className="w-10 h-10 mx-auto mb-3 text-purple-300" />
                <p className="text-sm text-gray-500 font-light">No upcoming events</p>
              </div>
            ) : (
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200/50">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${eventTypeColors[event.type]} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <span className="text-lg">{eventTypeIcons[event.type]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-purple-700 truncate">{event.title}</h4>
                        <p className="text-xs text-gray-600 font-light">
                          {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {event.time}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </DecorativeBorder>

          {/* Quick Stats */}
          <DecorativeBorder className="p-6 bg-gradient-to-br from-purple-100/80 via-pink-100/80 to-orange-100/80 backdrop-blur-sm border-purple-200/50 shadow-xl rounded-3xl">
            <h3 className="text-lg font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              This Week
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 font-light">Total Events</span>
                <span className="text-lg font-medium text-purple-700">{events.filter(e => {
                  const weekStart = new Date();
                  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                  const weekEnd = new Date(weekStart);
                  weekEnd.setDate(weekEnd.getDate() + 7);
                  return e.date >= weekStart && e.date < weekEnd;
                }).length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 font-light">Therapy Sessions</span>
                <span className="text-lg font-medium text-purple-700">{events.filter(e => {
                  const weekStart = new Date();
                  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                  const weekEnd = new Date(weekStart);
                  weekEnd.setDate(weekEnd.getDate() + 7);
                  return e.date >= weekStart && e.date < weekEnd && e.type === 'therapy';
                }).length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 font-light">Self-Care Time</span>
                <span className="text-lg font-medium text-pink-700">{events.filter(e => {
                  const weekStart = new Date();
                  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                  const weekEnd = new Date(weekStart);
                  weekEnd.setDate(weekEnd.getDate() + 7);
                  return e.date >= weekStart && e.date < weekEnd && (e.type === 'self-care' || e.type === 'meditation');
                }).length}</span>
              </div>
            </div>
          </DecorativeBorder>
        </div>
      </div>
    </div>
  );
}
