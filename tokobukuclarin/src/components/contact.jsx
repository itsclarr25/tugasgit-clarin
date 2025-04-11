const Contact = () => {
    return (
      <div className="container mt-5">
        <h1>Kontak Kami</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input type="text" className="form-control" placeholder="Nama Anda" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="email@domain.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Pesan</label>
            <textarea className="form-control" rows="4" placeholder="Tulis pesan Anda di sini"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Kirim</button>
        </form>
      </div>
    )
  }
  
  export default Contact
  