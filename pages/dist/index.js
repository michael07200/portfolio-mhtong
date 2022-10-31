"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Header_1 = require("../components/Header");
var Hero_1 = require("../components/Hero");
var About_1 = require("../components/About");
var Experience_1 = require("../components/Experience");
var Project_1 = require("../components/Project");
var Contact_1 = require("../components/Contact");
var Home = function () {
    return (React.createElement("div", { className: "h-screen snap-y snap-mandatory z-0 overflow-scroll" },
        " ",
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Michael Tong Portfolio")),
        React.createElement("section", { className: "bg-[#62973D]" },
            React.createElement(Header_1["default"], null)),
        React.createElement("section", { id: "hero", className: "snap-start" },
            React.createElement(Hero_1["default"], null)),
        React.createElement("section", { id: "about", className: "snap-center" },
            React.createElement(About_1["default"], null)),
        React.createElement("section", { id: "experience", className: "snap-center" },
            React.createElement(Experience_1["default"], null)),
        React.createElement("section", { id: "project", className: "snap-center" },
            React.createElement(Project_1["default"], null)),
        React.createElement("section", { id: "contact", className: "snap-center" },
            React.createElement(Contact_1["default"], null))));
};
exports["default"] = Home;
