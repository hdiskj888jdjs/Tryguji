// Event Listeners
document.getElementById('rainbowBtn').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const styledText = document.getElementById('styledText');
  styledText.innerHTML = generateRainbowText(inputText);
});

document.getElementById('rgbBtn').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const styledText = document.getElementById('styledText');
  styledText.innerHTML = generateRGBText(inputText);
});

document.getElementById('applyColorBtn').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const color = document.getElementById('colorPicker').value;
  const styledText = document.getElementById('styledText');
  styledText.innerHTML = generateCustomColorText(inputText, color);
});

// Generate Rainbow Text
function generateRainbowText(text) {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  return text
    .split('')
    .map((char, i) => `<span style="color: ${colors[i % colors.length]}">${char}</span>`)
    .join('');
}

// Generate RGB Text
function generateRGBText(text) {
  return text
    .split('')
    .map((char, i) => {
      const r = (i * 30) % 256;
      const g = (i * 50) % 256;
      const b = (i * 70) % 256;
      return `<span style="color: rgb(${r}, ${g}, ${b})">${char}</span>`;
    })
    .join('');
}

// Generate Custom Color Text
function generateCustomColorText(text, color) {
  return text
    .split('')
    .map(char => `<span style="color: ${color}">${char}</span>`)
    .join('');
}