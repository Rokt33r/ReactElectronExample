'use strict'

const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path')

let mainWindow = null

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  mainWindow = new BrowserWindow()
  mainWindow.loadURL('file://' + path.join(__dirname, '/index.html'))
  mainWindow.webContents.on('new-window', (e) => {
    e.preventDefault()
  })
})
