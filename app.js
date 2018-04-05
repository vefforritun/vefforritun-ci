const express = require('express');
const quadratic = require('./quadratic');

const {
  PORT: port = 3000,
} = process.env;

const app = express();
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send(`
    <h1>Annarsstigs formúla!</h1>
    <form method="post" action="/">
      <label>
        a:
        <input type="number" name="a" />
      </label>
      <label>
        b:
        <input type="number" name="b" />
      </label>
      <label>
        c:
        <input type="number" name="c" />
      </label>
      <button>Leysa</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  const { a, b, c } = req.body;
  const result = quadratic(a, b, c);
  const { x1, x2 } = result;

  res.send(`
  <h1>Annarsstigs formúla!</h1>
  <p>Lausn fyrir a = ${a}, b = ${b}, c = ${c}:</p>
  <p>x<sub>1</sub> = ${x1}, x<sub>2</sub> = ${x2}</p>
  `);
})

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
