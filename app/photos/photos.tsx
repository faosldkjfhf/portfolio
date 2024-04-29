import "./page.css";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function Photos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = Array.from(Array(5).keys());

  return (
    <main className="about-center about-slide-in">
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
