import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export enum channels {
  ipcExample = 'ipc-example'
}

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
});
