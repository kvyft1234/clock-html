var clock1 = document.querySelectorAll('p')[0];
var clock2 = document.querySelectorAll('pre')[0];
var year, month, day, hour, minute, second;

function modify(a,n){
	let k = String(a);
	for(let i=k.length; i<n; i++){
		k = "0"+k;
	}
	return k;
}

function update(){
	let d = new Date();
	[year, month, day] = [d.getFullYear(), d.getMonth()+1, d.getDate()];
	[hour, minute, second] = [d.getHours(), d.getMinutes(), d.getSeconds()];
	clock1.innerText = `${modify(year,4)}년 ${modify(month,2)}월 ${modify(day,2)}일`
	clock2.innerText = `${modify(hour,2)}시 ${modify(minute,2)}분 ${modify(second,2)}초`
}

setInterval(update,1000);
