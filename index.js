const { exec } = require('child_process');

function DailyCommit() {
  const date = new Date();
  const formatDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  const gitCommand = `git add . && git commit -m "Daily Commit - ${formatDate}" && git push`;

  exec(gitCommand, (error, stdout, stderr) => {
    if (error || stderr) {
      console.error(`Error while committing: ${error ? error.message : stderr}`);
      return;
    }
    console.log(`Daily commit made on ${formatDate}`);
  });
}

DailyCommit();
