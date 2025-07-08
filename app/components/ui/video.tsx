"use client";

interface VideoProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Video({ src, width, height, className = "" }: VideoProps) {
  return (
    <video
      src={src}
      width={width}
      height={height}
      autoPlay
      muted
      loop
      playsInline
      className={className}
    >
      Your browser does not support the video tag.
    </video>
  );
}
