const axios = require('axios');

// obtenemos el db
axios.get('/user?ID=12345')
  .then(function (response) {
    // Aquí por si la promesa se comple
    console.log(response);
  })
  .catch(function (error) {
    // aquí por si falla la promesa
    console.log(error);
  })
  .then(function () {
    // Siempre se ejecuta
  });

// Otra forma de realizar la solicitud
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // siempre se ejecuta
  });

// asyncasegura que la función devuelva una promesa y envuelva las no promesas en ella.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

//La palabra clave await hace que JavaScript espere hasta que se cumpla esa promesa y devuelva su resultado.
//Aquí hay un ejemplo con una promesa que se resuelve en 1 segundo:

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
