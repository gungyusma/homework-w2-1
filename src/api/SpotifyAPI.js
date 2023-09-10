import axios from "axios";

const SpotifyAPI = {

    getRecentlyPlayed(token) {
        const config = {
            method: 'get',
            url: `https://api.spotify.com/v1/me/player/recently-played?limit=8`,
            headers: { Authorization: `Bearer ${token}` },
          };
      
          return axios(config);
    },

    getTopTracks(token) {
        const config = {
            method: 'get',
            url: `https://api.spotify.com/v1/me/top/tracks?limit=12`,
            headers: { Authorization: `Bearer ${token}` },
          };
          return axios(config);
    },

    getSearchTrack(token, searchQuery, offset, limit) {
        const config = {
            method: 'get',
            url: `https://api.spotify.com/v1/search?q=${searchQuery}&type=track&offset=${offset}&limit=${limit}`,
            headers: { Authorization: `Bearer ${token}` },
          };
          return axios(config);
    },

    getPlaylist(token, userid) {
        const config = {
            method: 'get',
            url: `https://api.spotify.com/v1/users/${userid}/playlists`,
            headers: { Authorization: `Bearer ${token}` },
          };
          return axios(config);
    },

    getUser(token) {
        const config = {
            method: 'get',
            url: `https://api.spotify.com/v1/me`,
            headers: { Authorization: `Bearer ${token}` },
          };
          return axios(config);
    },
}

export default SpotifyAPI;