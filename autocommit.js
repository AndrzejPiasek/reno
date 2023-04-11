const { exec } = require('child_process');

function checkForChangesAndCommit() {
  exec('git diff --quiet && git diff --staged --quiet', (error) => {
    if (error) {
      // Zmiany zostały wykryte
      console.log('Detected changes, committing with message "Ostatnia wersja"...');

      exec('git add . && git commit -m "Ostatnia wersja"', (error) => {
        if (error) {
          console.error('Error during git commit:', error);
          return;
        }

        console.log('Committed changes with message: "Ostatnia wersja"');
      });
    } else {
      // Brak zmian
      console.log('No changes detected, skipping commit.');
    }
  });
}

// Commit changes immediately and then every 60 minutes
checkForChangesAndCommit();
setInterval(checkForChangesAndCommit, 60 * 60 * 1000);
