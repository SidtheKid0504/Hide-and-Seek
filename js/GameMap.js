class GameMap {
    constructor() {
        this.map = null;
    }

    getMap() {
        var mapRef = database.ref('Map');
        mapRef.on("value", (data) => {
           this.map = data.val();
        });
    }

    selectMap(mapId) {
        database.ref('/').update({
            Map: mapId
        });
    }
}