function dosomething(val){
    var k = val;
    console.log("hi")
    if (val>5){
        console.log('nice')
    } else if (Val>0){
        console.log('awesome')
    } else {
        console.log('bakwaas')
    }
    while(val > 20){
        console.log('GO')
        val -= 5
    }
    for(var i=1; i<11; i++ ){
        console.log(i*k)
    }
    var m = ['hi' ,'bye', 'go']
    for (i in m){
        console.log(i)
    }
    var m ={price:30,qty:3}
    for (i in m){
        console.log(i)
    }
    console.log(5=='5')
    console.log(5!='5')
    
    console.log(5==='5')
    console.log(5!=='5')
    
    document.write('yeh tho kuch naya hi aaa gya')
}