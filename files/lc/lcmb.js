window.addEventListener("message", event => {
    if (event.data.type === "metadata") {
        if ("mediaSession" in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: event.data.name,
                artist: event.data.artist,
                album: event.data.album,
                artwork: [
                    { src: event.data.image, sizes: '512x512', type: 'image/png' }
                ]
            });
            if (event.data.playing) {
                navigator.mediaSession.playbackState = 'playing';
            } else {
                navigator.mediaSession.playbackState = 'paused';
            }
            navigator.mediaSession.setActionHandler('previoustrack', () => {
                document.getElementsByClassName('wuksD5')[0].contentWindow.postMessage({
                    "type": "control",
                    "action": "previoustrack"
                }, "*");
            });
            navigator.mediaSession.setActionHandler('nexttrack', () => {
                document.getElementsByClassName('wuksD5')[0].contentWindow.postMessage({
                    "type": "control",
                    "action": "nexttrack"
                }, "*");
            });
        }
    }
});
