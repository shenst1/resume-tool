import Image from "next/image";

type ProfileImageProps = {
  src: string;
  alt: string;
  aspect?: "square" | "video" | "portrait";
  className?: string;
  imageClassName?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
};

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[4/5]",
};

const fitClasses = {
  cover: "object-cover",
  contain: "object-contain",
};

export function ProfileImage({
  src,
  alt,
  aspect = "square",
  className = "",
  imageClassName = "",
  fit = "cover",
  priority = false,
}: ProfileImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-surface-raised ring-1 ring-border/80 ${aspectClasses[aspect]} ${className}`}
    >
      <Image
        alt={alt}
        className={`${fitClasses[fit]} ${imageClassName}`}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 340px"
        src={src}
      />
    </div>
  );
}
