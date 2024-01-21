function nodeWrite(string) {
  const { stdout } = process;
  stdout.write(string);
}

function nodeInputStream() {
  const { stdin, stdout } = process;
  stdin.on('data', (data) => stdout.write(data));
}

function nodeExitMethod() {
  const { stderr, stdout } = process;
  process.on('exit', (code) => {
    if (code === 0) {
      stdout.write('Everything is ok');
    } else {
      stderr.write(
        `Something went wrong. The program exited with code ${code}`
      );
    }
  });
}

function tusk1() {
  const { stdin, stdout } = process;
  let userName;
  stdout.write('hello, enter your name:\n');
  stdin.on('data', (name) => {
    userName = name.toString();
    stdout.write(`hi ${userName}!`);
    process.exit();
  });

  process.on('exit', () => stdout.write(`Goodbye ${userName}!`));
}

function tusk2() {
  const { stdin, stdout } = process;
  let reversedName;
  stdout.write('hello, enter your name:\n');
  stdin.on('data', (name) => {
    reversedName = name.toString().split('').reverse().join('');
    stdout.write(`reverse name: ${reversedName}\n`);
    process.exit();
  });

  process.on('exit', () => stdout.write(`Goodbye ${reversedName}!`));
}
