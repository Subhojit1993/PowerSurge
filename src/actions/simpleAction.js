export const simpleAction = (button_id, cal_type) => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: "action given",
 })
}