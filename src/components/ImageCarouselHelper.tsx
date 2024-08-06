import { useState } from "react";
import { cn } from "../utils";

export default function ImageCarouselHelper({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);
  console.log(images[currentImage]);

  return (
    <>
      {images.map((image, index) => (
        <div
          className={cn(
            "bg-red-100 w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center transition-opacity duration-300 ease-in-out opacity-0",
            currentImage === index && "opacity-100"
          )}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}
      <div className="flex gap-3 items-center justify-center pb-2">
        {images.length > 1 &&
          images.map((_, index) => (
            <button
              className={cn(
                "z-10 bg-accent/80 rounded-full w-4 h-4 transition-all border-[1px] border-foreground/20",
                currentImage === index && "bg-accent/50"
              )}
              onClick={() => setCurrentImage(index)}
            ></button>
          ))}
      </div>
    </>
  );
}
