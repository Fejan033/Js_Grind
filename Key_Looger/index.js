document.addEventListener('DOMContentLoaded', function() {
    const keyon = document.querySelector('.on');
    const keyoff = document.querySelector('.off');
    const keyshow = document.querySelector('.keypressedshower');
    const keystatus = document.querySelector('.keydownupstatus');
    let keyLoggingEnabled = false;
    
    keyon.addEventListener('click', function() {
      keyLoggingEnabled = true;
      keyshow.innerText = "Key Is On";
    });
    
    keyoff.addEventListener('click', function() {
      keyLoggingEnabled = false;
      keyshow.innerText = "Key Is Off";
    });
    
    document.addEventListener('keydown', function(event) { 
      if (keyLoggingEnabled) {
        keystatus.innerText = `The ${event.key} key is down`;
      }
    });
    
    document.addEventListener('keyup', function(event) { 
      if (keyLoggingEnabled) {
        keystatus.innerText = `The ${event.key} key is up`;
      }
    });
  });


  console.log("code is fine")
  