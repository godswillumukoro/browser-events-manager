// Log current tab title and url
const dataHistory = []

const getPageTitleandUrl = (tabInfo) => {
    const currentData = {}
    // get title
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const tab = tabs[0];
        if (tab) {
            currentData.title = tab.title
        }
    });

    // get url
    currentData.url = tabInfo.url

    saveDataToDB(currentData)

}

const saveDataToDB = (data) => {
    // const jsonFormattedData = JSON.stringify(data)
    dataHistory.push(data)
}

const retrieveDataFromDB = () => {
    console.log(dataHistory)
}

retrieveDataFromDB()

chrome.history.onVisited.addListener(getPageTitleandUrl);
