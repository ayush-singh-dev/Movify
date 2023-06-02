import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from '../components/Form';
function DisplayShow() {
  const { id } = useParams();
 
  const [movie, setMovie] = useState(null);
  const [modal,setModal] = useState(false);

    useEffect(() => {
    if(modal){
      document.body.style.backgroundColor="gray";
    }
    else{
      document.body.style.backgroundColor="#fff";
    }
    const getMovie = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      console.log("data",data);
      setMovie(data);
    };
    getMovie();
  }, [modal]);

  const handleModal = () => {
    setModal(false)
  }
 
  return (
    <div className="movie-container">
      {movie && (
        <div className="movie-container">
          <div className="movie-first">
            <div className="movie-img">
              <img src={movie.image.original} alt="cover" />
            </div>
            <div className="book-now">
                <button onClick={()=>{setModal(!modal)}}>Book Show</button>
            </div>
          </div>
          <div className="movie-info">
            <div className="movie-title">
                <h1>{movie.name}</h1>
            </div>
            <div className="movie-rating">
                <h3>Rating: <span>{movie.rating.average? movie.rating.average: 0 }/10</span></h3>
            </div>
            <div className="genre">
                {
                    movie.genres.map(g=>{
                        return <span>{g}</span>
                    })
                }
            </div>
            <div
            className="summary"
      dangerouslySetInnerHTML={{__html: movie.summary}}
    />
          </div>
        </div>
      )}

        {
          modal &&
          <div className="form">
            <Form movieName={movie.name} handleModal={handleModal}/>
          </div>
        }
    
    </div>
  );
}

export default DisplayShow;
