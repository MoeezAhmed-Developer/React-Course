function Carousal() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/id/1018/1200/500"
              className="d-block w-100"
              alt="Nature"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/1015/1200/500"
              className="d-block w-100"
              alt="Mountain"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/1019/1200/500"
              className="d-block w-100"
              alt="Landscape"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousal;
