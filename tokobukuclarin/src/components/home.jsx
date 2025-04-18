import books from '../utils/book';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="mb-4">Selamat Datang di Toko Buku punya Clarin</h1>
        <p className="lead">Temukan buku terbaik dari penulis favoritmu</p>
      </div>

      <div className="row mt-5">
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
