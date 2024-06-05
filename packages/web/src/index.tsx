// Security precaution
;(window as any).eval = global.eval = (payload: string) => {
  const error = new Error(`This app does not allow window.eval().`)
  Object.assign(error, { payload })

  throw error
}

import 'react-app-polyfill/stable'
import 'resize-observer-polyfill/dist/ResizeObserver.global'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

import localforage from 'localforage'
import { ComponentType } from 'react'
import { AppRegistry } from 'react-native-web'

import './index.css'

import { App } from '@octohub/components/src/components/App'

localforage.config({
  name: 'octohub',
  size: 100 * 1024 * 1024,
})

const render = (AppComponent: ComponentType) => {
  AppRegistry.registerComponent('octohub', () => AppComponent)
  AppRegistry.runApplication('octohub', {
    rootTag: document.getElementById('root'),
  })
}

render(App)

/*
if (typeof module !== 'undefined' && (module as any).hot) {
  ;(module as any).hot.accept('@octohub/components/src/components/App', () => {
    const NewApp = require('@octohub/components/src/components/App').App
    render(NewApp)
  })
}
*/
