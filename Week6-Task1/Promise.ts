export {}
const fetch = require("node-fetch");
// const Promise1=new Promise((resolve,reject) => {
//     resolve('video 1');
// })
// const Promise2=new Promise((resolve,reject) => {
//     resolve('video 2');
// })
// const Promise3=new Promise((resolve,reject) => {
//     resolve('video 3');
// })

// const Promise4 = new Promise((resolve, reject) => {
//     setTimeout( function() {
//       resolve("Success!") 
//     }, 2500)
//   })

// Promise.all([
//     Promise1,
//     Promise2,
//     Promise3,
//     Promise4
// ]).then((messages) => {
//     console.log(messages);
// })

function asynTimeOut(delay){
    return (new Promise((resolve) => {
        setTimeout(function(){
            resolve(delay)
        },delay)
    })) .then(d => `Waited ${d} seconds.`);
}

function asynFetch(url){
    return fetch(url)
         .then(response => (response.text()))
         .then(text => `Fetched ${url} and got back ${text}`)
}

const asyncArray=[
    {task:"wait",duration:2000},
    {task:"fetch",url:'http://numbersapi.com/random'},
    {task:"wait",duration:4000}
    
];

function runTask(spec){
    return (spec.task==='wait')?asynTimeOut(spec.duration):asynFetch(spec.url);
}


// PARALLEL
// (async function(){
    
//     const task=asyncArray.map(runTask);
//     console.log('task...',task);
//     const results=await Promise.all(task);
//     console.log(results);
//     for(const result of results)
//     console.log(result)

// })();


// SERIES
(async function() {
    const log = result => console.log(result);
    await asyncArray.reduce(
    (p, spec) => p.then(() => runTask(spec).then(log)),
    Promise.resolve(null)
);

    //  FOR LOOP
    // const task=asyncArray.map(runTask);
    // console.log(task)
    // for (const fn of task) {
    //     console.log(await fn)
    // }
})();
