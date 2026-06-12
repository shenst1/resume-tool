import Image from "next/image";

type ProfileImageProps = {
  src: string;
  alt: string;
  aspect?: "square" | "video" | "portrait";
  className?: string;
  imageClassName?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  /** Pass `true` for UI screenshots — skips recompression and serves the original file. */
  unoptimized?: boolean;
  quality?: number;
  sizes?: string;
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

/** Match rendered width so Next doesn't downscale below what the layout displays (incl. ~2x DPR). */
const defaultSizes: Record<NonNullable<ProfileImageProps["aspect"]>, string> = {
  square: "(max-width: 1024px) calc(100vw - 3rem), 280px",
  portrait: "(max-width: 1024px) calc(100vw - 3rem), 400px",
  video: "(max-width: 1024px) calc(100vw - 3rem), 560px",
};

export function ProfileImage({
  src,
  alt,
  aspect = "square",
  className = "",
  imageClassName = "",
  fit = "cover",
  priority = false,
  unoptimized = false,
  quality = 95,
  sizes,
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
        quality={unoptimized ? undefined : quality}
        sizes={sizes ?? defaultSizes[aspect]}
        src={src}
        unoptimized={unoptimized}
      />
    </div>
  );
}
