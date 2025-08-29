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


// player LS
const getPlayerFromLS = () => {
  const selectedPlayers = localStorage.getItem('selectedPlayers')
  return selectedPlayers ? JSON.parse(selectedPlayers) : []
}

const saveItemInLS = (id) => {
  const selectedPlayers = getPlayerFromLS()
 const updatedPlayers = [...selectedPlayers, id]; 
  const allSelectedString = JSON.stringify(updatedPlayers)
  localStorage.setItem('selectedPlayers', allSelectedString)
}

export {setNumberInLS, getNumberFromLS, saveItemInLS, getPlayerFromLS}