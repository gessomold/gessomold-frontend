import { useCallback, useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
};

/**
 * Imagem com lazy loading e skeleton shimmer enquanto carrega,
 * com fade suave ao ficar disponível.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  const handleImage = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete) setLoaded(true);
  }, []);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200">
          <div className="shimmer" aria-hidden="true" />
        </div>
      )}
      <img
        ref={handleImage}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
