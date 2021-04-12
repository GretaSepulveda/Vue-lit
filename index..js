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
    class extends HTMLElement {
        static get observedAttributes() {
            return propDefs   
        }
        constructor() {
            super()
            const props = (this._props = shallowReactive({}))
            currentInstance = this 
            const template = factory.call(this, props)
            currentInstance = null
            this._bm && this._bm.forEach((cb) => cb())
            const root = this.attachShadow({ mode: 'closed' })
            let isMounted = false
            effect(() => {
                if (isMounted) {
                    this._bu && this._bu.forEach((cb) => cb())
                  }
                  render(template(), root)
                  if (isMounted) {
                    this._u && this._u.forEach((cb) => cb())
                  } else {
                    isMounted = true
                  }
                })
        