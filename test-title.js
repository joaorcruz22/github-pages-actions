const fs = require('fs');
const path = 'index.html';

try {
  const htmlContent = fs.readFileSync(path, 'utf8');
  if (!htmlContent.includes('<title>')) {
    console.error('Error: <title> tag not found in index.html');
    process.exit(1); // Fail the test if <title> is missing
  }
  console.log('<title> tag is present.');
  process.exit(0); // Pass the test if <title> is found
} catch (error) {
  console.error('Error reading index.html:', error);
  process.exit(1); // Fail the test if there is an issue reading the file
}
