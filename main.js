const { app, BrowserWindow } = require('electron');
const path = require('path');

function createMainWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true
    }
  });

  // Saat development
  win.loadURL('http://localhost:3000/');

  // Saat production setelah build React:
  // win.loadFile(path.join(__dirname, 'build', 'index.html'));
}

function createFloatingWindow() {
  const floatWin = new BrowserWindow({
    width: 300,
    height: 150,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    webPreferences: {
      contextIsolation: true
    }
  });

  floatWin.loadURL('http://localhost:3000/floating');
}

app.whenReady().then(() => {
  createMainWindow();
  // createFloatingWindow(); ← panggil ini kalau ingin jendela kecil muncul juga
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
