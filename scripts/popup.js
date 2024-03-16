chrome.runtime.sendMessage({message: "hello from content script"}, (response) => {
    console.log(response);
})