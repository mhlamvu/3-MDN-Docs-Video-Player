const video = document.querySelector('video')
const play = document.getElementById('play')
const stopVid = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// Play and Pause video
const toggleVideoStatus = () => {
    video.paused ? video.play() : video.pause()
}

// Update play/pause icon
const updatePlayIcon = () => video.paused ? play.innerHTML = `<i class="fa fa-play fa-2x"></i>` : play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`

// Update progress and timestamp
const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100

    // Get minutes
    let min = Math.floor(video.currentTime / 60)
    if(min < 10) {min = '0' + String(min)}

    // Get seconds
    let sec = Math.floor(video.currentTime % 60)
    if(sec < 10) {sec = '0' + String(sec)}

    timestamp.innerHTML = `${min}:${sec}`
}

// Set video to progress
const setVideoProgress = () => {
    video.currentTime = (+progress.value * video.duration) / 100
}

// Stop video
const stopVideo = () => {
    video.currentTime = 0
    video.pause()
}

// Event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stopVid.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)