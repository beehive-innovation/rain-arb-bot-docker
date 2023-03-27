const axios = require('axios')
const { bnFromFloat, toFixed18 } = require('./src/utils');
const config = require('./src/config')

async function test(){ 

    
    let index = config.findIndex(v => Number(v.chainId) === 137)
    let api = config[index].apiUrl 
    let trackedTokens = config[index].trackedTokens 
    let nativeToken = config[index].nativeToken.address
    let nativeTokenDecimals = config[index].nativeToken.decimals
    const responses = await Promise.allSettled(
        trackedTokens.map(
            async(e) => {
                const response = await axios.get(
                    `${
                        api
                    }swap/v1/quote?buyToken=${
                        e.address.toLowerCase()
                    }&sellToken=${
                        nativeToken.toLowerCase()
                    }&sellAmount=${
                        '1' + '0'.repeat(nativeTokenDecimals)
                    }`, 
                    { 
                        headers: {
                            'accept-encoding': 'null'
                        } 
                    }
                )
                return {
                    symbol : e.symbol,
                    address: e.address.toLowerCase(),
                    decimals: e.decimals,
                    price : e.decimals < 18 
                        ? toFixed18(
                            bnFromFloat(
                                response.data.price,
                                e.decimals,
                                true
                            ),
                            e.decimals
                        )
                        : bnFromFloat(
                            response.data.price,
                            e.decimals,
                            true
                        ),
                }
            }
        )
    )  

    console.log("responses : " , responses )


} 
test()