var temp=fetch('https://https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
.then((result)=>{
    return result.json();
}).then((data)=>foo(data));
console.log(temp);

function foo(params){
    console.log(params);
}