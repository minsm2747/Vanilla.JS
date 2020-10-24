const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("controls__color jsColor");
const range = document.getElementById("jsRange");

// 그림 그리기 기본 세팅
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

// 선 그리기 구현
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

// 선 그리기 사이즈 조절
function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

// 색상 변경 구현
Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

// 선 그리기 사이즈 조절
if (range) {
    range.addEventListener("input", handleRangeChange);
}
