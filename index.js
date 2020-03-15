var imageArray = [
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_0001.jpg?versionId=null",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_1898.jpg?versionId=null",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20191009_212000.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20191016_191855.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20191019_225445.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20191027_232303.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20191110_135151.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20191115_000024.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20191207_191057.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20200119_173840_1~2.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20200125_143059.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20200125_143137.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20200125_190817_1.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20200125_224359.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20200125_230242.jpg",
    "https://shoewebsite.s3.us-east-2.amazonaws.com/IMG_20200202_143316.jpg"
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
