import { useNavigate } from "react-router-dom";
import img11 from "../assets/images/imageone.png";
import img22 from "../assets/images/imagetwo.jpg";
import img33 from "../assets/images/imagefour.avif";

export default function Carousel() {
  const navigate = useNavigate();

  // Dynamic category data (PRO way)
  const categories = [
    {
      title: "Mobiles",
      image: "https://tse4.mm.bing.net/th/id/OIP.2_Oet_I50jUnHUOc0oSo4AHaFj",
      description: "Explore latest smartphones with best deals.",
      path: "mobile",
    },
    {
      title: "Laptops",
      image: "https://tse3.mm.bing.net/th/id/OIP.tJwZOCsjWxlnM8e9oiilvwHaE8",
      description: "High performance laptops for work & gaming.",
      path: "laptop",
    },
    {
      title: "Electronics",
      image: "https://tse4.mm.bing.net/th/id/OIP.rWT-TvswHbXf3djgYGIf9wHaEJ",
      description: "Accessories and gadgets at great prices.",
      path: "electronics",
    },
  ];

  return (
    <>
      {/* 🔥 Carousel */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          {[img11, img22, img33].map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={img} className="d-block w-100 carousel-img" alt={`slide-${index}`} />
            </div>
          ))}

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* 🛍️ Categories Section */}
      <div className="container mt-5">
        <div className="row">

          {categories.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow category-card">
                
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>

                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => navigate(`/category/${item.path}`)}
                  >
                    Shop Now
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}