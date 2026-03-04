interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
  animationClass?: string;
}

const FloatingImage = ({ 
  src, 
  alt, 
  className = "", 
  rotation = 0,
  animationClass = "animate-float"
}: FloatingImageProps) => {
  return (
    <div 
      className={`absolute float-shadow rounded-2xl overflow-hidden ${animationClass} ${className} transition-all duration-500 ease-out hover:scale-110 hover:z-50 cursor-pointer group`}
      style={{ 
        "--rotate": `${rotation}deg`,
        transform: `rotate(${rotation}deg)`,
      } as React.CSSProperties}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export default FloatingImage;
