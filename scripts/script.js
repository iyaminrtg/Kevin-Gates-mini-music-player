new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Hard To Sleep",
          artist: "Kevin Gates",
          cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UMvVPNuKecFmebGKteOMGbJb2pXkxkYIxVpaYRrEKJL6y-LMuQ&s",
          source: "/mp3/hard-to-sleep.mp3",
          url: "https://youtu.be/TEf108JTXC0",
          favorited: false
        },
        {
          name: "Super Gremlin",
          artist: "Kevin Gates",
          cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UMvVPNuKecFmebGKteOMGbJb2pXkxkYIxVpaYRrEKJL6y-LMuQ&s",
          source: "/mp3/super-gremlin.mp3",
          url: "https://www.youtube.com/watch?v=TpAVV9-CnMw",
          favorited: false
        },
        {
          name: "Cartel Swag",
          artist: "Kevin Gates",
          cover: "https://images.genius.com/4ec73123a4182fe607cc7dae656ed7ca.1000x1000x1.png",
          source: "/mp3/cartel-swag.mp3",
          url: "https://youtu.be/TR7jUxBrUCw",
          favorited: true
        },
        {
          name: "Find You Again",
          artist: "Kevin Gates",
          cover: "https://cdn.wealthygorilla.com/wp-content/uploads/2016/12/57-Kevin-Gates-Quotes-About-Music-Success-Life.jpg",
          source: "/mp3/find-you-again.mp3",
          url: "https://4in1telecommunications.com",
          favorited: false
        },
        {
          name: "Anit to Hard",
          artist: "Kevin Gates",
          cover: "https://images.genius.com/616d488e4df5441f8e2204baea3a3701.1000x1000x1.jpg",
          source: "/mp3/aint-too-hard.mp3",
          url: "https://youtu.be/TH9pSwevw9Q",
          favorited: false
        },
        {
          name: "Get Up On My Level",
          artist: "Kevin Gates",
          cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.audiomack.com%2Ftexas-tapes%2F7ca6d768fad34951a5f351bd2b123deb.jpeg%3Fwidth%3D520%26height%3D520%26max%3Dtrue&f=1&nofb=1",
          source: "/mp3/get-up-on-my-level.mp3",
          url: "https://youtu.be/wAtP6PLnCow",
          favorited: true
        },
        {
          name: "Difficult",
          artist: "Kevin Gates",
          cover: "https://1.bp.blogspot.com/-WnkfLe737pg/Xxg8g_QtDvI/AAAAAAAAZWw/TSlTye5vDzQTQC8QsHJngFbLCVyWTY9bwCNcBGAsYHQ/s1280/Kevin%2BGates%2B-%2BDifficult%2B%2528Lyrics%2529.jpg",
          source: "/mp3/difficult.mp3",
          url: "https://youtu.be/XATUH8O75qc",
          favorited: false
        },
        {
          name: "Push It",
          artist: "Kevin Gates",
          cover: "https://images.genius.com/fa53854bae259d201fe8122924518153.600x600x1.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=IM6lFM9Me8hmcSkgPPdyWDdr3DSsO5zu",
          url: "https://4in1telecommunications.com",
          favorited: true
        },
        {
          name: "Satellites",
          artist: "Kevin Gates",
          cover: "https://www.vvcradio.com/wp-content/uploads/2014/04/kevin-gates.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=6Qbx8pUoqK6iqeHMjSWOWaKrVidBIARO",
          url: "https://4in1telecommunications.com",
          favorited: false
        },
        {
          name: "Slow Dance",
          artist: "Kevin Gates",
          cover: "https://i.pinimg.com/originals/35/6a/99/356a99f69560154dc04279cc1ab2403a.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=oOze57XOWcVqSfbFUWT5xvNIuhR82zFI",
          url: "https://4in1telecommunications.com",
          favorited: false
        },
          {
          name: "Told Me",
          artist: "Kevin Gates",
          cover: "https://thefader-res.cloudinary.com/images/w_1440,c_limit,f_auto,q_auto:eco/f1ederb06hkjdy7aol3m/kevin-gates-is-a-thoughtful-rapper-who-cannot-tell-a-lie.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=Cpmi33zS7LH6otECjfhqmpRfcTiwJMs3",
          url: "https://4in1telecommunications.com",
          favorited: false
        }
        
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
