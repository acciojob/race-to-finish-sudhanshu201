window.promises = [];
const myPromise = window.promises

//create an array of five promises with random resove time between 1 to 5 sec
for(let i=0; i<5; i++){
	const randomTime = Math.floor(Math.random()*5)+1;
	const promise = new Promise(resolve, reject)=>{
		setTimeout(()=>{
			resolve("race-to-finish")
		}, randomTime)
	}
	myPromise.push(promise)
}

//Use promise.any to wait for the first promise to resolve

Promise.any(myPromise)
.then((res)=>{
		const outputdiv = document.getElementById("output");
	outputdiv.textContent = res;
}).catch((err)=>{
	cosnole.log("waits for the first promise to resolve check its result", err)
})



// Do not change the code above this
// add your promises to the array `promises`

Promise.all(myPromise)
.then((res)=>{
	const outputDiv = document.getElementById("output")
	outputDiv.textContent = res
}).catch((err)=>{
	console.log("waits for the all promise to resolve check its result", err)
})


Promise.settledall(myPromise)
.then((res)=>{
	const outputdiv = document.getElementById("output")
	output.textContent = res
}).catch((err)=>{
	console.log("waits for the all promise to resolve check its result",err)
})

Promise.race(myPromise)
.then((res)=>{
	const outPutdiv = document.getElementById("output")
	outPutdiv.textContent = res
}).catch((err)=>{
	console.log("waits for the fastest promise to resolve check its result", err)
})







