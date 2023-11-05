import React, { useState, useEffect, useRef } from 'react';
import SingleTestimonial from './SingleTestimonial';
import './Testimonials.css';

const testimonialData = [
  {
    id: 1,
    name: "Clara",
    content:"Merci beaucoup pour la qualité du travail fourni, une équipe qui sait être à l’écoute des clients et se montre toujours très agréable et disponible ! Je recommande vivement. ",
    image: "/images/testimonials/unnamed.png",
    star: 5,
  },
  {
    id: 2,
    name: "Christopher",
    content:"Merci Titovideo pour votre écoute, votre réactivité et votre professionnalisme.\n" +
        "Vous avez parfaitement répondu à ma demande.\n" +
        "\n" +
        "Je vais vous recommander auprès de mon entourage. Je vous dit à bientôt.",
    image: "/images/testimonials/christopher.png",
    star: 5,
  },
  {
    id: 3,
    name: "Alexandre Ozini",
    content:"Très professionnels, à l'écoute et réactifs, j'ai reçu ma vidéo en 24h.  Si vous avez besoin de déléguer vos montages je vous recommande Titovideo !",
    image: "/images/testimonials/alexandre.png",
    star: 5,
  },
  {
    id: 4,
    name: "Lucie Gerard",
    content: "Super montage vidéo pour le mariage de ma sœur !! Merci beaucoup à toute l’équipe.",
    image: "/images/testimonials/lucie.png",
    star:5,
  },
  {id:5,
    name: "Tom Toulgoat",
    content:"Montage réalisé grâce à Titovideo.\n" +
        "Je suis satisfait de la prestation réalisée.\n" +
        "Merci",
    image:"/images/testimonials/tom.png",
    star:5,
  },
  {
    id:6,
    name: "Ulysse Jaffré",
    content:"Très professionnel et efficace ! Un rendu de qualité.",
    image:"/images/testimonials/ulysse.png",
    star:5,
  }
  
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current => (current + 1) % testimonialData.length);
  };

  const autoPlayRef = useRef<() => void>(nextSlide);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current && autoPlayRef.current();
    };

    const interval = setInterval(play, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel-container">
      <div className="testimonial-slides">
        {/* Slides content here */}
        {testimonialData.map((testimonial, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={testimonial.id}
              style={{ display: index === current ? 'block' : 'none' }}
            >
              <SingleTestimonial testimonial={testimonial} />
            </div>
          );
        })}
      </div>
      {/* Buttons moved below the slides */}
      <div className="buttons-container mt-4 flex justify-between">
        <button
          onClick={() => setCurrent((current - 1 + testimonialData.length) % testimonialData.length)}
          className="inline-flex items-center rounded bg-primary py-[14px] px-8 font-heading text-base text-white hover:bg-opacity-90 hover:shadow-signUp"
        >
          Précédent
        </button>

        <button
          onClick={() => setCurrent((current + 1) % testimonialData.length)}
          className="inline-flex items-center rounded bg-primary py-[14px] px-8 font-heading text-base text-white hover:bg-opacity-90 hover:shadow-signUp"
        >
          Suivant
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
