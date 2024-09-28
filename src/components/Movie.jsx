function Movie(props) {
  return (
    <div className="col-md-3">
      <div className="card mb-3">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text"><small>{props.dateOfPublished}</small></p>
        </div>
      </div>
    </div>
  );
}

export default Movie;