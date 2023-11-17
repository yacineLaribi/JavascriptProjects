

document.body.onmousemove = event => {
  const tracker = document.getElementById("tracker");
    const { clientX, clientY } = event;
    tracker.style.left = `${clientX}px`;
    tracker.style.top = `${clientY}px`;

    console.log(clientX, clientY);
}