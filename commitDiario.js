const { exec } = require('child_process');

function fazerCommitDiario() {
  const data = new Date();
  const dataFormatada = `${data.getFullYear()}-${(data.getMonth() + 1).toString().padStart(2, '0')}-${data.getDate().toString().padStart(2, '0')}`;

  const comandoGit = `git add . && git commit -m "Commit diário - ${dataFormatada}"`;

  exec(comandoGit, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao fazer commit: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erro ao fazer commit: ${stderr}`);
      return;
    }
    console.log(`Commit diário feito em ${dataFormatada}`);
  });
}

fazerCommitDiario();
