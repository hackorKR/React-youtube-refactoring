const {
  default: SearchHeader,
} = require('../components/search_header/search_header');

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular(num) {
    var parts = ['statistics', 'snippet'];
    parts = encodeURI(parts);

    const reponse = await this.youtube.get('videos', {
      params: {
        part: parts,
        chart: 'mostPopular',
        maxResults: 32,
        regionCode: 'kr',
        videoCategoryId: num,
      },
    });
    return reponse.data.items;
  }

  async search(query) {
    const reponse = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 32,
        regionCode: 'kr',
        type: 'video',
        q: query,
      },
    });
    return reponse.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
