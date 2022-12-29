const won = ['2000','1000','3000','5000','4000']
function getWonPrice(price){
    const filtered_price = price.filter(cash => Number(cash)>1000)
    const fp = filtered_price.map(a => a+"원")
    fp.sort();
    return fp
}


console.log(getWonPrice(won))
