sampleArray = [
    {title: "title-1",id:'1'},
    {title: "title-2",id:'2'},
    {title: "title-3",id:'3'},
]

filteredArray = sampleArray.filter(item=>item.id!='1')
filteredArray1 = [...sampleArray.filter(item=>item.id!='1')]
console.log(filteredArray);
console.log(filteredArray1);
console.log(filteredArray,filteredArray1)
console.log(1,...[2,3,4],5)

sampleArray.push(...[{
    title:"title-4",id:'4'
},{title:"title-5",id:'5'}])

sampleArray.forEach(element => {
    console.log(element)
});

