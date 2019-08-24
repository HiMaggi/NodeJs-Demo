const fetch = require('node-fetch');

console.log("fetch " + fetch);

fetch ('https://jsonplaceholder.typicode.com/todos/1')
.then (function (response){
    console.log(response.json);
  })

.then (function (data){
    console.log(data);
})
.catch(function (error){
    console.log(error.message);
});
  
