import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  const search = useCallback(query => {
    setSelectedVideo(null);
    youtube
    .search(query) //
    .then(videos => {
      setVideos(videos);
    });
  }, [youtube]);

  //Component Update 때 실행됨
  useEffect(() => {
    youtube
    .mostPopular() //
    .then(videos => setVideos(videos));
  }, [youtube]); //여기에 적힌 state값이 변경되야 실행됨 []은 처음 mount했을 때만 실행

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
        {selectedVideo && <div className={styles.detail}>
          <VideoDetail video={selectedVideo}/>
        </div>}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list': 'grid'}/>
        </div>
      </section>
    </div>
  );
}

export default App;
