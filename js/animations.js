const thumbnails = Array.from(document.querySelectorAll('.thumbnails-container img'));

const elementAnimPause = (element) => {
  element.style.animationPlayState = 'paused';
  console.log('animation stoped');
};

const animEndEvent = (element) => {
  element.addEventListener('animationiteration', () => {
    console.log('animation iterated');
    element.style.animationPlayState = 'paused';
  });
};

const elementAnimWait = (element) => {
  setTimeout(elementAnimRun(element), 400);
};

const elementAnimRun = (element) => {
  element.style.animationPlayState = 'running';
  console.log('animation running');
};

const isPageVisible = () => {
  if (document.visibilityState == 'hidden') {
    thumbnailsLoopStart;
  }
};

// const thumbnailsLoopStart = () => thumbnails.map(elementAnimWait);

// const thumbnailsLoopStop = () => thumbnails.map(animEndEvent);

// window.onload = thumbnailsLoopStop();

// setInterval(thumbnailsLoopStart, 8000);

// window.focus(thumbnailsLoopStart);