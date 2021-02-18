"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fetch = require("node-fetch");
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
function asynTimeOut(delay) {
    return (new Promise(function (resolve) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    })).then(function (d) { return "Waited " + d + " seconds."; });
}
function asynFetch(url) {
    return fetch(url)
        .then(function (response) { return (response.text()); })
        .then(function (text) { return "Fetched " + url + " and got back " + text; });
}
var asyncArray = [
    { task: "wait", duration: 2000 },
    { task: "fetch", url: 'http://numbersapi.com/random' },
    { task: "wait", duration: 4000 }
];
function runTask(spec) {
    return (spec.task === 'wait') ? asynTimeOut(spec.duration) : asynFetch(spec.url);
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
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var log;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    log = function (result) { return console.log(result); };
                    return [4 /*yield*/, asyncArray.reduce(function (p, spec) { return p.then(function () { return runTask(spec).then(log); }); }, Promise.resolve(null))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
