var Webflow = Webflow || [];
Webflow.push(function() {

    // Code for 'open-tab-button'
    $('.open-tab-button').on('click', function() {
          
        // Array of your tab IDs
        var tabs = ['intro', 'step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'step-6'];
          
        // Find the current active tab
        var currentTab = $('.w-tab-link.w--current').attr('id');
          
        // Determine the index of the next tab
        var nextTabIndex = tabs.indexOf(currentTab) + 1;
          
        // If we're at the last tab, loop back to the start
        if (nextTabIndex >= tabs.length) {
            nextTabIndex = 0;
        }
          
        // Trigger the next tab
        $('#' + tabs[nextTabIndex]).trigger('click');
    });
      
     // Code for 'back-link'
    $('.back-link').on('click', function() {
      
        // Array of your tab IDs
        var tabs = ['intro', 'step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'step-6'];
      
        // Find the current active tab
        var currentTab = $('.w-tab-link.w--current').attr('id');
      
        // Determine the index of the previous tab
        var prevTabIndex = tabs.indexOf(currentTab) - 1;
      
        // If we're at the first tab, do nothing
        if (prevTabIndex < 0) {
            return;
        }
      
        // Trigger the previous tab
        $('#' + tabs[prevTabIndex]).trigger('click');
    });
      
    // Function to hide 'back-link' if we are on the 'Intro' tab
    function hideBackLinkOnIntro() {
        var currentTab = $('.w-tab-link.w--current').attr('id');
        if (currentTab === 'intro') {
            $('.back-link').hide();
        } else {
            $('.back-link').show();
        }
    }

  // Mapping slide IDs to audio file URLs
  var audioFiles = {
    'intro': 'https://www.dropbox.com/scl/fi/l0nj1nfwhcbeikbg632jz/speech-intro-esp.mp3?rlkey=47mpajsisce1t3k2073fxt6k4&dl=1',
    'step-1': 'https://www.dropbox.com/scl/fi/o4f4ae84s0quwpty1n9og/speech-step-1-esp.mp3?rlkey=49kbodpu09x4beo1dhmekfhrq&dl=1',
    'step-2': 'https://www.dropbox.com/scl/fi/nnqo6etdulce9jo8ecorr/speech-step-2-esp.mp3?rlkey=a8ipzdr154em8r2rcn3o03ygh&dl=1',
    'step-3': 'https://www.dropbox.com/scl/fi/729gpqvhhvibn91zaom6u/speech-step-3-esp.mp3?rlkey=dyif3634alk7kv7pl96w2lq5i&dl=1',
    'step-4': 'https://www.dropbox.com/scl/fi/jued25duw4sul09krb1q4/speech-step-4-esp.mp3?rlkey=zz2kkywndyzdme4e1x0l93pdp&dl=1',
    'step-5': 'https://www.dropbox.com/scl/fi/rczjm66njjpxew2m212mu/speech-step-5-esp.mp3?rlkey=s5px2tujvtzpm44zbj0c0s6b1&dl=1',
    'step-6': 'https://www.dropbox.com/scl/fi/tuz45vdd8i5wngvw6vl34/speech-step-6-esp.mp3?rlkey=8ktvrd57kspht5qu0452v99mg&dl=1',
    // ... and so on for each step ...
  };

  var audioElement = new Audio();
  var isAudioPlaying = false;

  function playAudioForSlide(slideId) {
    if (audioFiles[slideId]) {
      audioElement.src = audioFiles[slideId];
      audioElement.play();
      isAudioPlaying = true;
    }
  }

  function toggleAudio() {
    if (isAudioPlaying) {
      audioElement.pause();
      isAudioPlaying = false;
    } else {
      var currentTab = $('.w-tab-link.w--current').attr('id');
      playAudioForSlide(currentTab);
    }
  }

  // Bind audio control button
  $('.audio-control-button').on('click', function() {
    toggleAudio();
  });

  // Modify next/back tab triggers to include audio playback
  $('.open-tab-button, .back-link, .w-tab-link').on('click', function() {
    var currentTab = $('.w-tab-link.w--current').attr('id');
    if (isAudioPlaying) {
      playAudioForSlide(currentTab);
    }
    hideBackLinkOnIntro(); // existing function
  });
});
