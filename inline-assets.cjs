const fs = require('fs');
const path = require('path');
const juice = require('juice'); // npm install juice

// The path to the directory where `nuxt generate` outputs the static files
const DIST_PATH = path.join(__dirname, './dist');
const SOURCE_HTML = path.join(DIST_PATH, 'index.html'); // Assuming you want to process index.html

fs.readFile(SOURCE_HTML, 'utf8', (err, html) => {
    if (err) {
        console.error('Error reading the HTML file:', err);
        return;
    }

    // Using `juice` to inline the CSS within the HTML
    const inlinedHtml = juice(html, { removeStyleTags: false });

    // Optionally, you can inline JavaScript by replacing script src references with script content
    // This part is left as an exercise since it requires parsing the HTML and replacing script tags with their content.

    // Write the processed HTML to a new file
    fs.writeFile(
        path.join(DIST_PATH, 'inlined_index.html'),
        inlinedHtml,
        'utf8',
        (writeErr) => {
            if (writeErr) {
                console.error('Error writing the inlined HTML file:', writeErr);
            } else {
                console.log(
                    'Successfully inlined and wrote HTML to inlined_index.html'
                );
            }
        }
    );
});
