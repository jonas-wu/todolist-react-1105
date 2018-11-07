import * as actionType from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
  type: actionType.CHANGE_INPUT_VALUE,
  value
})

export const addListItemAction = (value) => ({
  type: actionType.ADD_LIST_ITEM,
  value
})

export const deleteListItemAction = (index) => ({
  type: actionType.DELETE_LIST_ITEM,
  index
})

export const initListAction = (data) => ({
  type: actionType.INIT_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list/get')
      .then((res) => {
        const data = res.data
        console.log("http get:", data)
        dispatch(initListAction(data.list))
      })
      .catch((err) => {
        console.log(err)
        dispatch(initListAction(['err', 'err2']))
      })
  }
}

export const getInitList = () => ({
  type: actionType.GET_INIT_LIST
})