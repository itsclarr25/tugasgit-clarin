const Home = () => {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="mb-4">Selamat Datang di Toko Buku punya Clarin</h1>
          <p className="lead">Temukan buku terbaik dari penulis favoritmu</p>
        </div>
  
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <img src="https://kwikku.us/uploads/public/images/market/main/full/526920972352-20231102222235.png" className="card-img-top" alt="Buku 1" />
              <div className="card-body">
                <h5 className="card-title">Atomic Habits</h5>
                <p className="card-text">Buku pengembangan diri karya James Clear yang mengubah kebiasaanmu.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card">
              <img src="https://akcdn.detik.net.id/visual/2021/09/17/buku-rich-dad-poor-dad-1_11.jpeg?w=480&q=90" className="card-img-top" alt="Buku 2" />
              <div className="card-body">
                <h5 className="card-title">Rich Dad Poor Dad</h5>
                <p className="card-text">Belajar cara mengelola keuangan dari kisah nyata.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/108/MTA-163159785/no-brand_no-brand_full01.jpg" className="card-img-top" alt="Buku 3" />
              <div className="card-body">
                <h5 className="card-title">Deep Work</h5>
                <p className="card-text">Strategi untuk bekerja dengan fokus tinggi di era distraksi digital.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home
  