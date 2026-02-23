import { ImageWithFallback } from './figma/ImageWithFallback';

interface Icon3DProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function Icon3D({ src, alt, className = "w-8 h-8", containerClassName = "" }: Icon3DProps) {
  return (
    <div className={`${containerClassName} flex items-center justify-center`}>
      <ImageWithFallback
        src={src}
        alt={alt}
        className={`${className} object-contain drop-shadow-lg`}
      />
    </div>
  );
}

interface Icon3DCardProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  gradient?: string;
  className?: string;
}

export function Icon3DCard({ 
  src, 
  alt, 
  size = 'md',
  gradient = "from-pink-300 via-purple-300 to-cyan-300",
  className = "" 
}: Icon3DCardProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-2xl bg-gradient-to-br ${gradient} backdrop-blur-sm flex items-center justify-center shadow-lg ${className}`}>
      <ImageWithFallback
        src={src}
        alt={alt}
        className={`${iconSizeClasses[size]} object-contain drop-shadow-xl`}
      />
    </div>
  );
}
