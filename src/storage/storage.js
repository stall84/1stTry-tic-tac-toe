

class Storage {
    constructor(storageName = 'gameScoreboard', initialValue = '[]') {
        this.storageName = storageName

        // Check if localStoage contains any previous game data
        if (!localStorage.getItem(storageName)) {
            // If not, create a new storage item for game
            localStorage.setItem(storageName, initialValue)
        }
    }

    // localStorage methods: 1st is Load data from previous game 
    getData() {
        return JSON.parse(localStorage.getItem(this.storageName))
    }
    // Update data in localStorage
    update(data) {
        localStorage.setItem(this.storageName, JSON.stringify(data))
    }
}





export default Storage;