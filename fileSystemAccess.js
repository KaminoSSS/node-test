// console.log(__dirname);
// console.log(__filename);

function pathFunc() {
  const { stdout } = process;

  if (process.argv[2] === '-d') {
    stdout.write(__dirname);
  } else if (process.argv[2] === '-f') {
    stdout.write(__filename);
  } else {
    stdout.write('Please run the program with the -d or -f flag');
  }
}

pathFunc();
