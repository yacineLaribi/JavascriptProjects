const coord={x:0,y:0};
window.addEventListener("mousemove", function (e) {
  const trackers=document.querySelectorAll(".tracker");
  coord.x = e.clientX;
  coord.y = e.clientY;
  console.log(coord.x, coord.y);
  trackers.forEach(function(item){
  item.style.left = coord.x -30+ "px";
  item.style.top = coord.y-30 + "px";});
});
