export {}
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
    })).then(d => `Waited ${d} seconds.`);
}

function asynFetch(url){
    return fetch(url)
         .then(response => (response.text()))
         .then(text => `Fetched ${url} and got back ${text}`)
}

const asyncArray=[
    {task:"wait",duration:2000},
    {task:"fetch",url:"https://www.google.com/"},
    {task:"wait",duration:2000}
];

function runTask(spec){
    return (spec.task==='wait')?asynTimeOut(spec.duration):asynFetch(spec.url);
}

const task=asyncArray.map(runTask);
const results=await Promise.all(task);
results.forEach(x => console.log(x));
