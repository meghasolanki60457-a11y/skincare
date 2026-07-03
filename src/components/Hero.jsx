
function Hero(){
    return(
        <>
        <section className="pt-lg-5 mt-lg-5 container ">
        <div className="row pt-5 mt-5">
            <div className="col-lg-6">
            <div>
          <p className="text-secondary">
_______   Science-Backed · Made for Indian Skin</p>
<h1 className="hero px-lg-5">Skincare That Targets the Root Cause.
Not Just the Symptom.</h1>
<p className="red fw-medium lh-2 px-md-5">Formulated for India's climate, humidity, and melanin-rich skin. NIXIMIST combines clinically-studied actives with nature-powered extracts — so your skin actually changes, not just feels different for a day.</p>
<div className="px-lg-5 d-flex flex-lg-row flex-column gap-3">
    <button className="btn btn-dark text-white py-3 px-4 rounded-0">SHOP BEST SELLER</button>
    <button className="btn btn btn-outline-dark border-dark py-3 px-4 rounded-0 fw-semibold">FIND YOUR ROUTINE</button>
</div>
            </div>
            </div>
            <div className="col-lg-6">
                <video autoPlay muted loop playsInline className="two pt-5  mt-lg-3 w-100">
        <source src="/video/one.mp4"  type="video/mp4" />
      </video>
            </div>
        </div>
        </section>
        </>
    );
}
export default Hero;