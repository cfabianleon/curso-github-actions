
const nameEnv = process.env.USERNAME; 
const language = process.env.LANGUAGE; 

if (nameEnv && language) {
  console.log(`Hello, World! ${nameEnv} and my favorite langauge is $  ${language} `);
} else {
  console.error('ENV_NAME is not set.');
}


