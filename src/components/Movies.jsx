import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MovieCard } from "./MovieCard";
import styles from "../css/movies.module.css";

const movieData = [
  {
    title: "Speed Pursuit",
    Poster: "/public/movie-image-09-768x513.jpg",
    imdbRating: "7.8",
    imdbVotes: "5000",
    released: "2025-01-01",
  },
  {
    title: "A Silent Cry",
    Poster: "/public/movie-image-08-768x513.jpg",
    imdbRating: "8.2",
    imdbVotes: "12000",
    released: "2024-12-01",
  },
  {
    title: "Galactic Wars",
    Poster: "/public/movie-image-07-768x519.jpg",
    imdbRating: "9.0",
    imdbVotes: "30000",
    released: "2026-02-15",
  },
];

export function Movies() {
  const handleViewDetails = (movieTitle) => {
    console.log("Viewing details of: ", movieTitle);
  };
  const handleDelete = (movieTitle) => {
    console.log("Deleting movie: ", movieTitle);
  };
  return (
    <section
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        padding: "50px 0",
      }}
    >
      <Container>
        <div className="text-center">
          <img
            src="/public/film-roll.png"
            alt="Image"
            width="30"
            style={{ height: "auto", marginBottom: "1.5rem" }}
          />
          <p style={{ color: "grey" }}>New upcoming movies</p>
          <h2 className={`mb-5 fw-bold text-center ${styles.moviesTitle}`}>Movies Now Playing</h2>
        </div>
        <Row className="g-4">
          {movieData.map((movie, index) => (
            <Col md={4} key={index}>
              <MovieCard
                title={movie.title}
                image={movie.Poster}
                imdbRating={movie.imdbRating}
                imdbVotes={movie.imdbVotes}
                released={movie.released}
                onViewDetails={() => handleViewDetails(movie.title)}
                onDelete={() => handleDelete(movie.title)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
