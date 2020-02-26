var imageArray = [
    "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
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