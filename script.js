function fibonacci(num) {
	var a=0;
	var  b=1;
	if(num<=2)
		return num-1;
	for(var i=2;i<num;i++){
		c=a+b
		a=b
		b=c
	}
	return c
// your code here
}

module.exports = fibonacci;
