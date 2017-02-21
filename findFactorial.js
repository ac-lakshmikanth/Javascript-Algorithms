var func = num => {
	return "1".repeat(num).split("").reduce((t,v,i)=>(t*(i+1)))
}

var input = process && process.argv[2] && process.argv[2].match(/\w=\d/) ? process.argv[2].split('=')[1] : 5

console.log("i/p => "+input)
console.log("o/p => "+func(input))
