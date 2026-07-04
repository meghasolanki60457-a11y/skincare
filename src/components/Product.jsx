import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import ProductData from "../data/ProductData";

// css
import "swiper/css";
import "swiper/css/pagination";

function Product() {
  return (
    <>
      <section className="container mt-5">
        <div>
          <h6 className="red"><small>Best Sellers</small></h6>
          <h1 className="rice divine">
            Ingredient-First Formulas. Real Skin Results.
          </h1>
          <p className="three pe-md-5 me-md-5">
            Every NIXIMIST product is built around one non-negotiable:
            active ingredients at concentrations that actually work.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={80}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {ProductData.map((item) => (
            <SwiperSlide key={item.id} className="pb-md-5">
              <div className="card mx-auto h-100 " style={{ width: "18rem" }}>

                {/* IMAGE CLICKABLE */}
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    className="card-img-top seven"
                    alt={item.title}
                  />
                </Link>

                <div className="card-body">

                  <h3 className="card-title four">{item.title}</h3>

                  <p className="card-text red">{item.desc}</p>

                  {/* TAGS */}
                  <div className="d-flex gap-2 flex-wrap">
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className="border border-dark five fw-bold px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* PRICE */}
                  <div className="d-flex gap-3 pt-4 align-items-center">
                    <span className="six">₹{item.price}</span>
                    <span className="text-secondary">
                      <del>₹{item.oldPrice}</del>
                    </span>
                    <span className="red">{item.save}</span>
                  </div>

                  {/* BUTTON */}
                  <div className="card-body px-0">
                    <button className="btn btn-dark w-100 rounded-0 py-2">
                      add to cart
                    </button>

                    <span className="red text-center d-block">
                      {item.note}
                    </span>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Product;