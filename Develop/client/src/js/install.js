import { resolvePlugin } from "@babel/core";

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

let deferredPrompt;

butInstall.style.display='none';

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    defferedPrompt = event;

    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    deferredPrompt.prompt();
    deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    deferredPrompt = null;
    
    butInstall.style.display = 'none';
    console.log('installed', 'appinstalled', event);
});
