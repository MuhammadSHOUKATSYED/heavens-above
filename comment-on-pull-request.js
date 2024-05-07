const { Octokit } = require('@octokit/rest');

// Create an Octokit instance
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN // Use the GitHub token provided by GitHub Actions
});

// Function to comment on a pull request
async function commentOnPullRequest(owner, repo, pullNumber, comment) {
  try {
    // Post a comment on the pull request
    await octokit.issues.createComment({
      owner,
      repo,
      issue_number: pullNumber,
      body: comment
    });

    console.log('Comment posted successfully.');
  } catch (error) {
    console.error('Error posting comment:', error);
  }
}

// Example usage
commentOnPullRequest('owner', 'repo', 123, 'This is a test comment.');
