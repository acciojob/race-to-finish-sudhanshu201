window.promises = [];
const myPromise = window.promises

//create an array of five promises with random resove time between 1 to 5 sec
for(let i=0; i<5; i++){
	const randomTime = Math.floor(Math.random()*5)+1;
	const promise = new Promise(resolve, reject)=>{
		setTimeout(()=>{
			resolve(`promise ${i+1} resolved after ${randomTime}`)
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
	cosnole.log("All promises were rejected", err)
})



// Do not change the code above this
// add your promises to the array `promises`
