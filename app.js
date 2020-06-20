const express = require('express');
const app = express();
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const options = {
  host: 'redis',
  port: 6379,
  logErrors: true
};


app.use(
  session({
    store: new RedisStore(options),
    secret: 'amazing stuff',
    resave: true,
    saveUninitialized: true
  })
);

RedisStore['hits'] = 0; // taking inital hits to be zero

app.get('/', (req, res) => {
  RedisStore['hits']++;
  const num = RedisStore['hits'];
  res.send(`Docker-compose-node-redis<br/><p> Number of times loaded is ${num}.</p>`);
});

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});
