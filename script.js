document.addEventListener('DOMContentLoaded', function() {
  const player = document.getElementById('audio');
  const logo = document.querySelector('.profile-pic');

  logo.addEventListener('click', function() {
    player.play().catch(error => {
      window.alert(error);
    });
  });
});

function getDeviceTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
}

const theme = getDeviceTheme();
// add code...
