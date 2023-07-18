
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an iframe (and YouTube player)
      //    after the API code downloads.
      
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          videoId: 'An6LvWQuj_8',
          playerVars: {
            autoplay: true,
            loop: true,
            playlist:'An6LvWQuj_8'
          },
          events: {
            onReady: function (event) {
              event.target.mute();
              //event.target.setPlaybackRate(2); //속도 2배
              //event.target.setVolume(100); //볼륨 0~100
            }
          }
        });
      }