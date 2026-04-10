import { useState } from "react";
import img1 from '../assets/images/img1.avif'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.avif'

export default function Carousel() {
  const images = [img1, img2, img3];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-x-hidden overflow-y-hidden">    
<div id="carouselExample" className="carousel slide">
           <img
          src={images[current]}
          alt="carousel"
          className="w-full h-full object-cover"
        />

       
        <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#carouselExample"
  data-bs-slide="prev"
>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>

<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#carouselExample"
  data-bs-slide="next"
>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
      </div>

      
      <div className="flex mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
