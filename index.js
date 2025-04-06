function isPrime(n) {
  if (n < 2) return false;
  for (let c = 2; c * c <= n; c++) {
    if (n % c == 0) return false;
  }
  return true;
}

function drawSquare(x, y, n, color) {
  if (isPrime(n)) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, side, side);
  }
}

function primeSpiral(turns, color) {
  let x = 300;
  let y = 300;
  let quantity = 2;
  for (let c = 0; c < turns; c++) {
    for (let j = 0; j < 2 * c + 1; j++) {
      drawSquare((x += side), y, quantity++, color);
    }
    for (let j = 0; j < 2 * c + 1; j++) {
      drawSquare(x, (y -= side), quantity++, color);
    }
    for (let j = 0; j < 2 * c + 2; j++) {
      drawSquare((x -= side), y, quantity++, color);
    }
    for (let j = 0; j < 2 * c + 2; j++) {
      drawSquare(x, (y += side), quantity++, color);
    }
  }
}

function refresh() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  side = canvas.width / (2 * amount.value + 4);
  primeSpiral(amount.value, color.value);
}

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let amount = document.querySelector("#amount");
let color = document.querySelector("#color");
amount.addEventListener("input", refresh);
color.addEventListener("input", refresh);
let side = canvas.width / (2 * amount.value + 4);
primeSpiral(amount.value, color.value);
