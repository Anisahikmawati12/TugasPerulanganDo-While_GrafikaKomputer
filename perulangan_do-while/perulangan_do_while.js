let x = 0;
let diameter = 50;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // Menggunakan do-while untuk menggambar lingkaran
  do {
    fill(random(255), random(255), random(255)); // Warna acak
    noStroke();
    ellipse(x, height / 2, diameter, diameter); // Gambar lingkaran
    x += diameter; // Geser posisi x untuk lingkaran berikutnya
  } while (x < width); // Loop akan terus berjalan hingga x melebihi lebar canvas
}
