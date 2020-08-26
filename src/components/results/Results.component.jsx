import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';

import './Results.styles.scss';
import VideoCard from '../video-card/VideoCard.components';

import axios from '../../axios';
import { TMDB } from '../../constants';

function Results({ selectedCategory }) {
  const [movies, setMovies] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        const filtered_tbd = TMDB.GENRES.find(
          (genre) => genre.category === selectedCategory
        );
        console.log(filtered_tbd);
        const request = await axios.get(filtered_tbd.url);
        setMovies(request.data.results);
      };

      fetchData();
    },
    // if there is no dependency array it will only run on mount.
    // if there is a dependency will run when any passed metric updates
    [selectedCategory]
  );

  return (
    <div className="results">
      <FlipMove>
        {movies.map((video, index) => {
          return <VideoCard video={video} key={video.id} />;
        })}
      </FlipMove>
    </div>
  );
}

export default Results;
