import { origin } from '../config'

export const LOADING_SCOUTS = 'LOADING_SCOUTS'
export const RECV_SCOUTS = 'RECV_SCOUTS'
export const PATCH_SCOUTS = 'PATCH_SCOUTS'
export const CLEAN_SELECTED_SCOUTS = 'CLEAN_SELECTED_SCOUTS'
export const SELECTED_SCOUTS = 'SELECTED_SCOUTS'

export const ADD_SCOUT = 'ADD_SCOUT'
export const DELETE_SCOUT = 'DELETE_SCOUT'
export const PATCH_SCOUT = 'PATCH_SCOUT'
export const FATCH_SCOUT = 'FATCH_SCOUT'

export const CLEAN_CHOSEN_SCOUT = 'CLEAN_CHOSEN_SCOUT'

export const loadScouts = () => (dispatch: any) =>
  dispatch({
    type: LOADING_SCOUTS,
    payload: {
      loading: true,
    },
  })

export const fetchScouts = () => (dispatch: any) =>
  fetch(`${origin}/scouts`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(json => {
      dispatch({
        type: RECV_SCOUTS,
        payload: {
          json,
        },
      })
      return true
    })
    .catch(err => {
      return false
    })

export const patchScouts = (selectedScouts: any, patch: any) => (
  dispatch: any,
) =>
  fetch(`${origin}/scouts`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ids: selectedScouts,
      patch,
    }),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(json => {
      dispatch({
        type: PATCH_SCOUTS,
        payload: {
          json,
        },
      })
      return true
    })
    .catch(err => {
      return false
    })

export const cleanSelectedScouts = () => (dispatch: any) =>
  dispatch({
    type: CLEAN_SELECTED_SCOUTS,
    payload: {},
  })

export const selectScouts = (selectedScouts: any) => (dispatch: any) =>
  dispatch({
    type: SELECTED_SCOUTS,
    payload: {
      json: selectedScouts,
    },
  })

export const addScout = (data: any) => (dispatch: any) =>
  fetch(`${origin}/scout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(json => {
      dispatch({
        type: ADD_SCOUT,
        payload: {
          json,
        },
      })
      return true
    })
    .catch(err => {
      return false
    })

export const deleteScout = (id: any) => (dispatch: any) =>
  fetch(`${origin}/scout/${id}`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
    })
    .then(() => {
      dispatch({
        type: DELETE_SCOUT,
        payload: {
          id,
        },
      })
      return true
    })
    .catch(err => {
      return false
    })

export const patchScout = (id: any, data: any) => (dispatch: any) =>
  fetch(`${origin}/scout/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(json => {
      dispatch({
        type: PATCH_SCOUT,
        payload: {
          id,
          json,
        },
      })
      return true
    })
    .catch(err => {
      return false
    })

export const fetchScout = (id: any) => (dispatch: any) =>
  fetch(`${origin}/scout/${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(json => {
      dispatch({
        type: FATCH_SCOUT,
        payload: {
          id,
          json,
        },
      })
      return true
    })
    .catch(err => {
      return false
    })

export const cleanChosenScout = () => (dispatch: any) =>
  dispatch({
    type: CLEAN_CHOSEN_SCOUT,
    payload: {},
  })
