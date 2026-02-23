import { useState } from 'react';
import { ChevronLeft, ChevronRight, Circle, FileText } from 'lucide-react';
import { TitleSlide } from './TitleSlide';
import { ResearchGoalsSlide } from './ResearchGoalsSlide';
import { InterviewQuestionsSlide } from './InterviewQuestionsSlide';
import { InterviewNotesSlide } from './InterviewNotesSlide';
import { PersonaSlide } from './PersonaSlide';
import { ReflectDebriefSlide } from './ReflectDebriefSlide';
import { Button } from './ui/button';
import { PDFExportButton } from './PDFExportButton';

interface ResearchPresentationProps {
  interviewNotes: Array<{
    name: string;
    age: number;
    bio: string[];
    quote: string;
    takeaways: string[];
    gradient: string;
  }>;
  personas: Array<{
    name: string;
    age: number;
    occupation: string;
    bio: string;
    goals: string[];
    painPoints: string[];
    motivations: string[];
    gradient: string;
  }>;
}

export function ResearchPresentation({ interviewNotes, personas }: ResearchPresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = personas.length + interviewNotes.length + 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderSlide = () => {
    if (currentSlide === 0) {
      return <TitleSlide />;
    } else if (currentSlide === 1) {
      return <ResearchGoalsSlide />;
    } else if (currentSlide === 2) {
      return <InterviewQuestionsSlide />;
    } else if (currentSlide >= 3 && currentSlide < 3 + interviewNotes.length) {
      return <InterviewNotesSlide participant={interviewNotes[currentSlide - 3]} />;
    } else if (currentSlide >= 3 + interviewNotes.length && currentSlide < 3 + interviewNotes.length + personas.length) {
      return <PersonaSlide {...personas[currentSlide - 3 - interviewNotes.length]} />;
    } else {
      return <ReflectDebriefSlide />;
    }
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden print:hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-light mb-2">Research Presentation</h1>
                <p className="text-xl opacity-80 font-light">User research findings and personas</p>
              </div>
            </div>
            <PDFExportButton title="Research Presentation" />
          </div>
        </div>
      </div>

      {/* Presentation Container - Screen View */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 print:hidden">
        {/* Slide */}
        <div className="aspect-video bg-gray-900 relative">
          {renderSlide()}
        </div>

        {/* Controls */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="border-gray-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="transition-all"
                  title={`Slide ${index + 1}`}
                >
                  <Circle
                    className={`w-2.5 h-2.5 ${
                      currentSlide === index
                        ? 'fill-purple-500 text-purple-500'
                        : 'fill-gray-300 text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-light">
                {currentSlide + 1} / {totalSlides}
              </span>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="border-gray-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Print-Only View - All Slides */}
      <div className="hidden print:block">
        <div className="print-slide">
          <TitleSlide />
        </div>
        <div className="print-slide">
          <ResearchGoalsSlide />
        </div>
        <div className="print-slide">
          <InterviewQuestionsSlide />
        </div>
        {interviewNotes.map((participant, index) => (
          <div key={`interview-${index}`} className="print-slide">
            <InterviewNotesSlide participant={participant} />
          </div>
        ))}
        {personas.map((persona, index) => (
          <div key={`persona-${index}`} className="print-slide">
            <PersonaSlide {...persona} />
          </div>
        ))}
        <div className="print-slide">
          <ReflectDebriefSlide />
        </div>
      </div>
    </div>
  );
}