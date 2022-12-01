//const axios = require('axios');

// (async() => {
//     const x = await axios.get(
//         'https://api.0x.org/swap/v1/quote?buyToken=USDT&sellToken=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&sellAmount=1000000000000000000',
//         {headers: {'accept-encoding': 'null'}}
//     )
//     console.log(x.data)
// })();

// (async() => {
//     let prices = []
//     let promises = []
//     // for (let i = 0; i < trackedTokens.length; i++) {
//     // promises.push(
//     // try {
//     let x = await Promise.allSettled(
//         trackedTokens.map(async(e) => {
//             let f = await axios.get(
//                 `https://api.0x.org/swap/v1/quote?buyToken=${
//                     e.tokenAddress.toLowerCase()
//                 }&sellToken=WETH&sellAmount=100000000000000000`,
//                 { 
//                     headers: { 
//                         'accept-encoding': 'null' 
//                     } 
//                 }
//             )
//             return {
//                 price: f.data.price,
//                 aa: 'jj'
//             }
//             //console.log(f)
//             // if (f.status != 'rejected') return f.data.price
//             // else return 'kkk'
//         }
//         )
//     )
//     for (let i = 0; i < x.length; i++) {
//         if (x[i].status == 'fulfilled') prices.push(x[i].value)
//     }
//     console.log(prices)
//     // }
//     // catch {
//     //     console.log('')
//     // }
//     //}
//     // const x = await Promise.all()
//     //console.log(promises)
//     //console.log(await x)
    
//     // for (let i = 0; i < promises.length; i++) {
//     //     let tmp = await promises[i]
//     //     if (tmp.data?.price) prices.push(tmp.data.price)
//     // }
//     // console.log(prices)
// }
// )()