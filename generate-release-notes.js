// Import necessary modules
const fs = require('fs');
const { execSync } = require('child_process');

// Function to generate release notes
function generateReleaseNotes() {
    try {
        // Run git log command to get commit messages
        const commitMessages = execSync('git log --pretty=format:%s').toString().trim().split('\n');

        // Write release notes to a file
        fs.writeFileSync('release-notes.txt', 'Release Notes:\n\n');
        commitMessages.forEach((message, index) => {
            fs.appendFileSync('release-notes.txt', `${index + 1}. ${message}\n`);
        });

        console.log('Release notes generated successfully.');
    } catch (error) {
        console.error('Error generating release notes:', error);
    }
}

// Call the function to generate release notes
generateReleaseNotes();
