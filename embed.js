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
    'intro': 'path/to/intro.mp3',
    'step-1': 'path/to/step-1.mp3',
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
