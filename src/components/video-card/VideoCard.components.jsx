import React, { forwardRef } from 'react';
import TextTruncate from 'react-text-truncate';

import ThumbUpSharp from '@material-ui/icons/ThumbUpSharp';
import './VideoCard.styles.scss';
import { TMDB } from '../../constants';

const VideoCard = forwardRef(({ video }, ref) => {
  return (
    <div ref={ref} className="videocard">
      <div className="img_frame">
        <div
          className="img"
          style={{
            backgroundImage: `url(${TMDB.IMAGE_BASE_URL}${
              video.backdrop_path || video.poster_path
            })`,
          }}
        />
      </div>
      <div className="videocard__info">
        <TextTruncate
          line={2}
          element="p"
          truncateText="..."
          text={video.overview}
        />
        <h4>{video.title || video.original_name}</h4>
        <div className="videocard__info__stats">
          <span>{video.release_date || video.first_air_date}</span>
          <span>
            {video.media_type && `${video.media_type}`} <ThumbUpSharp />
            {video.vote_count}
          </span>
        </div>
      </div>
    </div>
  );
});

export default VideoCard;
