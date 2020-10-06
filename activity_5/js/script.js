/*
*   Wrap everything in an IIFE
*/
(function(){

    /***************************************
     * package data and constructor objects
     ***************************************/

    // package data array
    var data = [
        {
            name: 'emmet',
            description: 'Emmet is the number one snippet tool.',
            author: 'emmetio',
            url: 'https://atom.io/packages/emmet',
            downloads: 1662209,
            stars:  2456,
            price: 10.50,
            selector: 'p1'
        },
        {
            name: 'atom-beautify',
            description: 'The atom-beautify package will clean up your code, and make it more readable.',
            author: 'Glavin001',
            url: 'https://atom.io/packages/atom-beautify',
            downloads: 4228040,
            stars:  4541,
            price: 6.75,
            selector: 'p2'
        },
        {
            name: 'autoclose-html-plus',
            description: 'This autoclose-html-plus package automatically closes HTML tags for you once you’ve typed the first tag.',
            author: 'binaryfunt',
            url: 'https://atom.io/packages/autoclose-html-plus',
            downloads: 34154,
            stars:  6,
            price: 0.00,
            selector: 'p3'
        },
        {
            name: 'atom-liquid-snippets',
            description: 'The atom-liquid-snippets package adds support for Shopify Liquid snippets with a set of commands found in the documentation for the package.',
            author: 'rickmurt',
            url: 'https://atom.io/packages/atom-liquid-snippets',
            downloads: 11867,
            stars:  7,
            price: 0.00,
            selector: 'p4'
        },
        {
            name: 'git-blame',
            description: 'The git-blame package allows you to toggle git-blame annotations in the gutter of the Atom editor.',
            author: 'alexcorre',
            url: 'https://atom.io/packages/git-blame',
            downloads: 268291,
            stars:  450,
            price: 0.00,
            selector: 'p5'
        },
    ];

    //Package constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function(){
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function(){
            return this.stars.toLocaleString();
        };
    }

    /*********************
     *  Utility Functions
     *********************/
    

     //Returns today's date, formatted
     var getTodaysDate = function(){
         var today = new Date();
         return today.toDateString();
     };

     //Returns DOM element dy id.
     var getEl = function(id){
         return document.getElementById(id);
     }

     /**
      * Write's the package object's data to the appropriate
      * DOM elements utilizing the package selector property.
      */
     var writePackageInfo = function(package){
         //Get reference to DOM elements
         var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downEl = getEl(selector + '-downloads'),
            starEl = getEl(selector + '-stars');

        //Write package data to DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downEl.textContent = package.getFormattedDownloads();
        starEl.textContent = package.getFormattedStars();
    }

    //Write date
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();
    
    //Write package data using a for loop
    for (var i = 0; i < data.length; i++) {
        var package = new Package(data[i]);
        writePackageInfo(package);
    }
}());