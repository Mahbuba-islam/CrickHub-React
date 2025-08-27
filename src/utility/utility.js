// get claim coin from LS
const getNumberFromLS = () => {
    const coinNumber = localStorage.getItem('coin')
  return coinNumber? JSON.parse(coinNumber) : 0
}

const setNumberInLS = (number) => {
    const coin = getNumberFromLS()
    const newCoin = coin + number
    const newCoinString = JSON.stringify(newCoin)
    localStorage.setItem('coin', newCoinString)
}

export {setNumberInLS, getNumberFromLS}