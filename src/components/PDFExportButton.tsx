import { Download, Printer } from 'lucide-react';
import { Button } from './ui/button';

interface PDFExportButtonProps {
  title: string;
  variant?: 'download' | 'print';
  className?: string;
}

export function PDFExportButton({ title, variant = 'download', className = '' }: PDFExportButtonProps) {
  const handleExport = () => {
    // Trigger browser print dialog (which has Save as PDF option)
    window.print();
  };

  return (
    <Button
      onClick={handleExport}
      variant="outline"
      className={`border-purple-300 bg-white/60 backdrop-blur-sm hover:bg-white/80 ${className}`}
    >
      {variant === 'download' ? (
        <>
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </>
      ) : (
        <>
          <Printer className="w-4 h-4 mr-2" />
          Print
        </>
      )}
    </Button>
  );
}
