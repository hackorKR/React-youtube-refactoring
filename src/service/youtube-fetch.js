const { default: SearchHeader } = require("../components/search_header/search_header");

class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${this.key}`, this.getRequestOptions);
    const result = await response.json();
    return result.items;
  }

  search(query) {
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=${this.key}`, this.getRequestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId}))
    );
  }
}

export default YoutubeFetch;