//  wrap everything in an IIFE

(function(){
    
    //  data array
    var data = [
        {
            header: "Basil",
            name: "Basil",
            light: "Medium-Full",
            soil: "Well draining",
            water: "Lots",
            selector: "p1"
        },
        {
            header: "Cilantro",
            name: "Cilantro",
            light: "Medium-Full",
            soil: "Whatever",
            water: "Lots",
            selector: "p2"
        },
        {
            header: "Dill",
            name: "Dillweed",
            light: "Medium-Full",
            soil: "Whatever",
            water: "Lots",
            selector: "p3"
        },
        {
            header: "Habenero",
            name: "Habenero",
            light: "Full",
            soil: "Well draining",
            water: "Lots",
            selector: "p4"
        }
    ]

    //  constructor function
    function Plant(data) {
        this.header = data.header;
        this.name = data.name;
        this.light = data.light;
        this.soil = data.soil;
        this.water = data.water;
        this.selector = data.selector;
    }

    //  return DOM element by id
    var getElement = function(id) {
        return document.getElementById(id);
    }

    //  write plant object data to appropriate DOM
    //  elements using the appropriate selector
    var writePlantInfo = function(plant) {
        //  get reference to DOM elements
        var selector = plant.selector,
            headerElement = getElement("header-"+selector),
            nameElement = getElement("name-"+selector),
            lightElement = getElement("light-"+selector),
            soilElement = getElement("soil-"+selector),
            waterElement = getElement("water-"+selector)

        //  write plant data to DOM elements
        headerElement.textContent = plant.header;
        nameElement.textContent = plant.name;
        lightElement.textContent = plant.light;
        soilElement.textContent = plant.soil;
        waterElement.textContent = plant.water;
    }

    //  write plant data using for loop
    for (var i = 0; i < data.length; i++) {
        var plant = new Plant(data[i]);
        writePlantInfo(plant);
    }

}());