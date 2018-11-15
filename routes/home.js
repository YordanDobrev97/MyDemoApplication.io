function createHomePage() {

    let video = document.getElementById('video-home');
    video.setAttribute('width', '500px');
    video.setAttribute('height', '350');
    video.setAttribute('controls', 'video');

    let source = document.createElement('source');

    source.setAttribute('src', 'The-Walking-Dead-World-On-Fire.mp4');
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    // document.getElementById('video-home').appendChild(source);

    //document.body.appendChild(source);
    // document.getElementById('video-home').textContent = video;

}