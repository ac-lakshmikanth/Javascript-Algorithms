
var input   = ["html","div","p","span"];
var output1 = ["html","div","p","span"].join("><").replace(/^\b/,"<").replace(/\b$/,">").replace(/(<[a-z]+>)/gi,"$1$1 ")
var output2 = ["html","div","p","span"].join("><").replace(/^\b/,"<").replace(/\b$/,">").replace(/(<[a-z]+>)/gi,function(m){ return m+m.replace(/\</,"CONTENT</").concat(" "); })

console.log("i/p :::: ", input);
console.log("o/p :::: ", output1);
console.log("o/p :::: ", output2);
