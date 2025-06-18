const xIndex = document.querySelector(".xIndex");
const yIndex = document.querySelector(".yIndex");

window.addEventListener('mousemove',(e) => {
    xIndex.textContent = e.clientX;
    yIndex.textContent = e.clientY;
})

window.addEventListener('click', (e) => {
    alert(`X: ${xIndex.textContent}, Y: ${yIndex.textContent}`);
})