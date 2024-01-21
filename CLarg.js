function tusk1() {
  const { stdin, stdout } = process;
  let isMult = false;

  if (process.argv[2] === '-m') {
    isMult = true;
  }
  stdout.write(process.argv[0] + process.argv[1]);
  stdout.write('Enter 2 numbers:\n');
  stdin.on('data', (numbers) => {
    numbArr = numbers.toString().split(' ');
    if (isMult) {
      stdout.write(
        `${numbArr[0]} * ${numbArr[1].trim()} = ${numbArr[0] * numbArr[1]}`
      );
    } else
      stdout.write(
        `${numbArr[0]} + ${numbArr[1].trim()} = ${numbArr[0] + numbArr[1]}`
      );

    process.exit();
  });
}

tusk1();
