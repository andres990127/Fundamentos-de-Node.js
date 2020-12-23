const { exec, spawn } = require("child_process");

// Se pueden ejecutar comandos de la consola, en este caso ejecutamos 'dir'
exec("dir", (err, stdout) => {
  console.log("\nExec example:\n");

  if (err) {
    console.log(err);
    return false;
  }
  console.log(stdout);
});

let proceso = spawn('cmd.exe', ['/c','dir']);
proceso.stdout.on("data", data => console.log(data.toString()));
proceso.on("exit", () =>
  console.log("process end; process.killed:", proceso.killed)
);