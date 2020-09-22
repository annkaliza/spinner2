let i = 100;
for (let i = 100; i < 10000; i+=200) {
  // console.log(char);
  //process.stdout.write(char);

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, i);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, i+=200);

  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, i+=200);

  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, i+=200);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, i);

  
}