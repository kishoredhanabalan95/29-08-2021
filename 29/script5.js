var temp = fetch ('https://https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
.then((result)=>{
    return result.json();
}).then((data)=>console.log(data));
console.log(temp);