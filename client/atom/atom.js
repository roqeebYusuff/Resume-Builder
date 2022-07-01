import {atom} from 'recoil'

export const firstNameState = atom({
    key: 'firstNameState',
    default: ''
})

export const lastNameState = atom({
    key: 'lastNameState',
    default: ''
})

export const middleNameState = atom({
    key: 'middleNameState',
    default: ''
})

export const currentPageState = atom({
    key: 'currentPageState',
    default: 1
})

export const educationList = atom({
    key: 'educationList',
    default: []
})