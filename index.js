import randomColor from 'randomcolor';

// Get the arguments from the command line
const args = process.argv.slice(2);

// Function to generate a 31x9 block of '#'
const generateBlock = (color) => {
  const block = Array(9).fill('#'.repeat(31)).join('\n');
  const coloredBlock = block.replace(/#/g, `\x1b[38;5;${color}m#\x1b[0m`);
  console.log(coloredBlock);
};

// Determine the requested color or luminosity
if (args.length === 0) {
  // If no arguments, generate a random color
  const color = randomColor(); // Random color
  generateBlock(color);
} else if (args.length === 1) {
  // If only one color is passed (e.g., 'red', 'blue', etc.)
  const color = randomColor({ hue: args[0] });
  generateBlock(color);
} else if (args.length === 2) {
  // If both color and luminosity are passed
  const color = randomColor({ hue: args[0], luminosity: args[1] });
  generateBlock(color);
} else {
  // If there are too many arguments
  console.log('Usage: node index.js [hue] [luminosity]');
  console.log('Example: node index.js red light');
}
