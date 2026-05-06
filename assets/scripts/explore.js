// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const icon = document.querySelector('img');
  const text = document.getElementById('text-to-speak');
  const play = document.querySelector('button');

  let voices = [];

  function getVoiceList(){
    voices = synth.getVoices();

    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  getVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoiceList;
  }

  play.addEventListener('click', () => {
    const speech = text.value;

    if (!speech) return;

    const utterance = new SpeechSynthesisUtterance(speech);
    const selectedIndex = voiceSelect.value;
    if (selectedIndex !== "select") {
      utterance.voice = voices[selectedIndex];
    }

    utterance.onstart = () => {
      icon.src = 'assets/images/smiling-open.png';
    };

    
    utterance.onend = () => {
      icon.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });

}