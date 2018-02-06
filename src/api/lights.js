import { api } from './init'

export function getLightsBySelector(selector) {
    return api.get(`/lights/${selector}`).then((res) => {
        return res.data
    })
}

export function setLightsState(selector, stateParams) {
    return api.put(`/lights/${selector}/state`, stateParams).then((res) => {
        return res.data
    })
}

export function setLightsDelta(selector, deltaParams) {
    return api.post(`/lights/${selector}/state`, deltaParams).then((res) => {
        return res.data
    })
}