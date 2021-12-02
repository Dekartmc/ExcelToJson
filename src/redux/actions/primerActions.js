export const algo = () => async dispatch => {
    dispatch({
        type: 'ALGO',
        payload: 'Nuevo valor'
    })
}