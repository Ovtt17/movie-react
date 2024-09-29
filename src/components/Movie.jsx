function Movie({Title, Plot, Released, Poster}) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={Poster} className="card-img-top" alt={Title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text flex-grow-1">{Plot}</p>
          <p className="card-text"><small>{Released}</small></p>
        </div>
      </div>
    </div>
  );
}

export default Movie;