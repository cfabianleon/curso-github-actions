
const nameEnv = process.env.USERNAME; 

if (nameEnv) {
  console.log(`Hello, World! ${nameEnv}`);
} else {
  console.error('ENV_NAME is not set.');
}


