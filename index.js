var imageArray = [
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_0001.jpg",
    "https://www.dw.com/image/47863948_303.jpg",
    "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/rqofykdwrfhccjsa0m9c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvP-JIxOAlpx002LA8--5dufoWGyg8IoyvgsJLGqG8G2N-WNrG"
];

function getPosition(image) {
    var url = image.src;
    var position = 0;
    for(var i = 0; i < imageArray.length; i++){
        if (url == imageArray[i]){
            position = i;
        }
    }
    return position;
}

function getUrl(position){
    console.log("getUrl: " + imageArray[position]);
    return imageArray[position];
}

function leftButtonClick() {
    var image = document.getElementById("mainImage");
    var position = getPosition(image);
    position -= 1;

    if (position < 0 || position > imageArray.length - 1){
        return;
    } else {
        image.src = getUrl(position);
    }
}

function rightButtonClick() {
    var image = document.getElementById("mainImage");
    var position = getPosition(image);
    position += 1;

    if (position < 0 || position > imageArray.length - 1){
        return;
    } else {
        image.src = getUrl(position);
    }
}

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCbqwLiqXUT1bYrZpD-9YIOU-DPoTWw_B9CImnzob1lYe1aXnyidS_bgCmhgN3R9rE8-QYbLaue8b_zcUfpgavE7tVkO4b18PPwn9-XmLho0e3OLUTbmZdBjjFg9DKUcX9tM76A3Jnt-btgHpyUN-Uykfqy3c8';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };
