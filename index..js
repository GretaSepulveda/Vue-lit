import { render } from 'http://unpkg.com/lit=html?module'
import {
shallowReactive,
effect
} from 'https://unpkg.com/@vue/reactivity.esm-browser.js'

let currentInstance 

export function defineComponent(name, propDefs, factory){
    if (typeof propDefs==='function') {
        factory = propDefs
        propDefs = []
    }
customElementts.define(
    name,
)
