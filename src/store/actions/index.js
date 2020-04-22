export const switchMenu = () => ({
  type: 'SWITCH_MENU'
})

export const addWaste = (row) => ({
  type: 'ADD_WASTE',
  value: row
})

export const deleteWaste = (id) => ({
  type: 'DELETE_WASTE',
  id
})