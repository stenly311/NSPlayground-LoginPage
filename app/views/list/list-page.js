var dialogsModule = require("tns-core-modules/ui/dialogs");
var observableModule = require("tns-core-modules/data/observable")
var ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
var page;

var pageData = new observableModule.fromObject({
    groceryList: new ObservableArray([
        { name: "Apples" },
        { name: "Bananas" },
        { name: "Oranges" }
    ])
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = pageData;
};