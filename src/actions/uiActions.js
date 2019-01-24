export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

export function setActiveItem(uniqueId) {
  return {
    type: SET_ACTIVE_ITEM,
    payload: uniqueId,
  }
}