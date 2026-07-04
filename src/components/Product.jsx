import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function product() {
    return (
        <>

            <section className="container mt-5">
                <div>
                    <h6 className="red"><small>Best Sellers</small></h6>
                    <h1 className=" rice w-50">Ingredient-First Formulas.
                        Real Skin Results.</h1>
                    <p className="three w-75">Every NIXIMIST product is built around one non-negotiable: active ingredients at concentrations that actually work.</p>
                </div>
                <div className="">
                    <Swiper
                       
                        spaceBetween={80}
                        slidesPerView={4}
                          breakpoints={{
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }}
                      

                    >
                        <div className="">
                            <SwiperSlide>
                                <div class="card h-100" style={{ width: "18rem" }} >
                                    <img src="Images/one.png" class="card-img-top seven" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title four">Brightening
                                            Glow Serum</h3>
                                        <p class="card-text red ">Fades dark spots. Evens tone. Restores radiance.</p>
                                        <div className="d-flex gap-2">
                                            <span className=" border border-dark five fw-bold px-2 py-1 ">10% VIT C</span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Niacinamide</span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Kojic Acid</span>
                                        </div>
                                        <div className="d-flex gap-3 pt-4 align-items-center">
                                            <span className="six"><i className="fa-solid fa-indian-rupee-sign rupee"></i>549</span>
                                            <span className="text-secondary"><i className="fa-solid fa-indian-rupee-sign rupee"></i><del>699</del></span>
                                            <span className="red">SAVE 21%</span>
                                        </div>



                                        <div class="card-body px-0">
                                            <button class="card-link btn btn-dark w-100 rounded-0 py-2">add to cart</button>
                                            <span className=" red text-center d-block">Visible results in 4 weeks · 30ml</span>


                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </div>
                        <div className="">
                            <SwiperSlide>
                                <div class="card h-100" style={{ width: "18rem" }} >
                                    <img src="Images/two.png" class="card-img-top object-fit-cover seven" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title four">Pore Purifying
                                            Face Wash</h3>
                                        <p class="card-text red ">Deep-cleanses pores. Controls oil. Prevents breakouts.</p>
                                        <div className="d-flex gap-2">
                                            <span className=" border border-dark five fw-bold px-2 py-1 ">2% Salicylic Acid
                                            </span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Green Tea
                                            </span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Zinc PCA</span>
                                        </div>
                                        <div className="d-flex gap-3 pt-4 align-items-center">
                                            <span className="six"><i className="fa-solid fa-indian-rupee-sign rupee"></i>349</span>
                                            <span className="text-secondary"><i className="fa-solid fa-indian-rupee-sign rupee"></i><del>499</del></span>
                                            <span className="red">SAVE 22%</span>
                                        </div>



                                        <div class="card-body px-0">
                                            <button class="card-link btn btn-dark w-100 rounded-0 py-2">add to cart</button>
                                            <span className=" red text-center d-block">Suitable for daily use · 100ml</span>


                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </div>
                        <div className="">
                            <SwiperSlide>
                                <div class="card h-100" style={{ width: "18rem" }} >
                                    <img src="Images/three.png" class="card-img-top object-fit-cover seven" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title four">Hydra-Barrier
                                            Moisturiser</h3>
                                        <p class="card-text red ">Seals moisture. Repairs barrier. Calms inflammation.</p>
                                        <div className="d-flex gap-2">
                                            <span className=" border border-dark five fw-bold px-2 py-1 ">Hyaluronic Acid
                                            </span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Ceramides
                                            </span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Centella</span>
                                        </div>
                                        <div className="d-flex gap-3 pt-4 align-items-center">
                                            <span className="six"><i className="fa-solid fa-indian-rupee-sign rupee"></i>499</span>
                                            <span className="text-secondary"><i className="fa-solid fa-indian-rupee-sign rupee"></i><del>649</del></span>
                                            <span className="red">SAVE 23%</span>
                                        </div>



                                        <div class="card-body px-0">
                                            <button class="card-link btn btn-dark w-100 rounded-0 py-2">add to cart</button>
                                            <span className=" red text-center d-block">Non-greasy formula · 50ml</span>


                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="">
                            <SwiperSlide>
                                <div class="card h-100" style={{ width: "18rem" }} >
                                    <img src="Images/four.png" class="card-img-top object-fit-cover seven" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title four">
                                            Hair Conditioner Bhringraj &amp; Shikakai                                    </h3>
                                        <p class="card-text red ">Reduces Hair Fall & Dandruff with shiny hair</p>
                                        <div className="d-flex gap-2">
                                            <span className=" border border-dark five fw-bold px-2 py-1 ">Hyaluronic Acid
                                            </span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Ceramides
                                            </span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Centella</span>
                                        </div>
                                        <div className="d-flex gap-3 pt-4 align-items-center">
                                            <span className="six"><i className="fa-solid fa-indian-rupee-sign rupee"></i>499</span>
                                            <span className="text-secondary"><i className="fa-solid fa-indian-rupee-sign rupee"></i><del>649</del></span>
                                            <span className="red">SAVE 23%</span>
                                        </div>



                                        <div class="card-body px-0">
                                            <button class="card-link btn btn-dark w-100 rounded-0 py-2">add to cart</button>
                                            <span className=" red text-center d-block">Non-greasy formula · 50ml</span>


                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="">
                            <SwiperSlide>
                                <div class="card h-100" style={{ width: "18rem" }} >
                                    <img src="Images/five.png" class="card-img-top object-fit-cover seven" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title four">

                                            Luxury Sugar Soap Panchpushp                                                                       </h3>
                                        <p class="card-text red ">Handmade Ayurvedic Soap with extra freshness</p>
                                        <div className="d-flex gap-2">
                                            <span className=" border border-dark five fw-bold px-2 py-1 ">Hyaluronic Acid
                                            </span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Ceramides
                                            </span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Centella</span>
                                        </div>
                                        <div className="d-flex gap-3 pt-4 align-items-center">
                                            <span className="six"><i className="fa-solid fa-indian-rupee-sign rupee"></i>499</span>
                                            <span className="text-secondary"><i className="fa-solid fa-indian-rupee-sign rupee"></i><del>649</del></span>
                                            <span className="red">SAVE 23%</span>
                                        </div>



                                        <div class="card-body px-0">
                                            <button class="card-link btn btn-dark w-100 rounded-0 py-2">add to cart</button>
                                            <span className=" red text-center d-block">Non-greasy formula · 50ml</span>


                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="">
                            <SwiperSlide>
                                <div class="card h-100" style={{ width: "18rem" }} >
                                    <img src="Images/six.png" class="card-img-top object-fit-cover seven" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title four">

                                            Dusting Powder Lime Saffron & Oudh                                                                   </h3>
                                        <p class="card-text red ">Absorbent Corn Starch Formula and their supplements</p>
                                        <div className="d-flex gap-2">
                                            <span className=" border border-dark five fw-bold px-2 py-1 ">Sulphate Free
                                            </span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">India Formulated
                                            </span>
                                            <span className=" border border-dark five fw-bold px-2 py-1">Centella</span>
                                        </div>
                                        <div className="d-flex gap-3 pt-4 align-items-center">
                                            <span className="six"><i className="fa-solid fa-indian-rupee-sign rupee"></i>499</span>
                                            <span className="text-secondary"><i className="fa-solid fa-indian-rupee-sign rupee"></i><del>649</del></span>
                                            <span className="red">SAVE 23%</span>
                                        </div>



                                        <div class="card-body px-0">
                                            <button class="card-link btn btn-dark w-100 rounded-0 py-2">add to cart</button>
                                            <span className=" red text-center d-block">Non-greasy formula · 50ml</span>


                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>

                </div>

            </section >

        </>
    )
}
export default product;