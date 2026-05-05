// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const volumeSlider = document.querySelector("#volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const audio = document.querySelector("audio");
  const playButton = document.querySelector("button");

  const jsConfetti = new JSConfetti();

  const horns = {
    "air-horn":{
      img: "assets/images/air-horn.svg",
      audio: "assets/audio/air-horn.mp3"
    },
    "car-horn":{
      img: "assets/images/car-horn.svg",
      audio: "assets/audio/car-horn.mp3"
    },
    "party-horn": {
      img: "assets/images/party-horn.svg",
      audio: "assets/audio/party-horn.mp3"
    }
  }

  hornSelect.addEventListener("change", (e) => {
    const selected = e.target.value;
    const data = horns[selected];

    hornImage.src = data.img;
    audio.src = data.audio;
  });

  volumeSlider.addEventListener("input", (e) => {
    const value = Number(e.target.value);
    audio.volume = value / 100;

    if (value === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } 
    else if (value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }
    else if (value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }

  });

  playButton.addEventListener("click", () => {
    audio.play();

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });




}