const express = require('express')

const app = express()
const port = 3000

const child_process = require('child_process');

function runCmd(cmd)
{
  const resp = child_process.execSync(cmd);
  const result = resp.toString('UTF8');
  return result;
}

const cmd = `curl ${process.env.REQUEST_ADDRESS}`;  

app.get('/', (req, res) => {
  const result = runCmd(cmd);
  console.log(result)
  res.send(`Hello From App 1 + ${result}`)
})

app.get('/test', (req, res) => {
  res.send('test 2')
})

app.listen(port, () => {
  console.log(process.env.REQUEST_ADDRESS)
  console.log(`App 1 listening at ${port}`)
})