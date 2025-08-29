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

const saveItemInLS = (player) => {
  const selectedPlayers = getPlayerFromLS()
  const allSelected = [...selectedPlayers, player]
  const allSelectedString = JSON.stringify(allSelected)
  localStorage.setItem('selectedPlayers', allSelectedString)
}

export {setNumberInLS, getNumberFromLS, saveItemInLS, getPlayerFromLS}