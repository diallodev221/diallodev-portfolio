import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export default function ImageWithCaption({
  src,
  alt,
  width,
  height,
  caption,
}: ImageWithCaptionProps) {
  return (
    <figure className="my-8">
      <div className="rounded-lg overflow-hidden border border-border">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
