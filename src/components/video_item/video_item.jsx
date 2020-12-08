import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    let viewCount = '';

    const numberWithCommas = (value) => {
      let num = value;
      num = num.replace(/[^0-9]/g, '');
      num = num.replace(/,/g, '');
      num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return num;
    };

    if (video.statistics) {
      viewCount = numberWithCommas(video.statistics.viewCount);
    }

    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt='video thumbnail'
          ></img>
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
            {video.statistics && (
              <p className={styles.channel}>조회수 {viewCount}회</p>
            )}
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
