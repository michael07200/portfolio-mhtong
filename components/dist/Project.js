"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
function Project(_a) {
    var projects = [
        {
            name: "WeCoNet",
            website: "https://www.lean-6-sigma.nl/wp-content/uploads/Project-charter-1.jpg",
            description: "AAA"
        },
        { name: "Game", website: "", description: "BBB" },
        { name: "Website", website: "", description: "CCC" },
    ];
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1.5 }, className: "pageTransition" },
        react_1["default"].createElement("h3", { className: "title" }, "Project"),
        react_1["default"].createElement("div", { className: "relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatroy z-20" }, projects.map(function (project, i) { return (react_1["default"].createElement("div", { className: "w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-80" },
            react_1["default"].createElement(framer_motion_1.motion.img, { initial: {
                    y: -300,
                    opacity: 0
                }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 1.2 }, viewport: { once: true }, src: project.website, alt: "" }),
            react_1["default"].createElement("div", { className: "space-y-10 px-10 md:px-10 max-w-6xl" },
                react_1["default"].createElement("h4", { className: "text-4xl font-semibold text-center" },
                    react_1["default"].createElement("span", { className: "underline decoration-[#F7AB0A]/50" },
                        i + 1,
                        ". ",
                        project.name)),
                react_1["default"].createElement("p", { className: "text-lg text-center md:text-left" }, project.description)))); }))));
}
exports["default"] = Project;
