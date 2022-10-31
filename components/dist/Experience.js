"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var ExperienceCard_1 = require("../components/ExperienceCard");
function Experience(_a) {
    var exp = [
        {
            position: "Architectural Assistant",
            summaryPoints: {
                content: ["s1", "s2"]
            }
        },
        {
            position: "Architectural Assistant 2",
            summaryPoints: {
                content: ["s1", "s2", "s3", "s4"]
            }
        },
    ];
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1.5 }, className: "pageTransition" },
        react_1["default"].createElement("h3", { className: "title" }, "Experience"),
        react_1["default"].createElement("div", { className: "w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory" }, exp.map(function (exp) {
            return react_1["default"].createElement(ExperienceCard_1["default"], { exp: exp, title: "some title" });
        }))));
}
exports["default"] = Experience;
