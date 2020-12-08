import React from 'react';
import styles from './video_detail.module.css';
const VideoDetail = ({ video, video: { snippet } }) => {
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
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        title='youtube video player'
        type='text/html'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3 className={styles.viewCount}>조회수 {viewCount}회</h3>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
