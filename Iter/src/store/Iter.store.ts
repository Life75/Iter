import { IIter } from './../interfaces/IIter';
import {defineStore} from 'pinia'

export const iterStore = defineStore('iterStore',{
    state: (): IIter => ({
        id: undefined,
        title: undefined,
        intent: undefined,
        difficulty: undefined,
        timeline: undefined,
        tags: undefined,
        image: undefined
    }),
})