const Team = () => {
    return (
      <div className="container mt-5">
        <h1>Tim Kami</h1>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card text-center">
              <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mt-3 w-50 mx-auto" alt="Budi" />
              <div className="card-body">
                <h5 className="card-title">Budi</h5>
                <p className="card-text">Founder & CEO</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card text-center">
              <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mt-3 w-50 mx-auto" alt="Sinta" />
              <div className="card-body">
                <h5 className="card-title">Sinta</h5>
                <p className="card-text">Marketing Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Team
  