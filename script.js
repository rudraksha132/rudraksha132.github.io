const player = document.getElementById('audio'); 
if (true) { 
    player.play();
}

function getDeviceTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
}

const theme = getDeviceTheme();
// add code...
