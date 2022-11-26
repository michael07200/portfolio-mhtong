"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var ExperienceCard_1 = require("../components/ExperienceCard");
function Experience() {
    var experiences = [
        {
            id: 1,
            imageSrc: "",
            imageAlt: "",
            position: "Architectural Assistant",
            companyName: "Popma",
            skillSrc: [""],
            skilAlt: [""],
            startDate: "",
            endDate: "",
            summaryPoints: {
                content: ["a1", "a2"]
            }
        },
        {
            id: 2,
            imageSrc: "",
            imageAlt: "",
            position: "Architectural Assistant 2",
            companyName: "P&T",
            skillSrc: [""],
            skilAlt: [""],
            startDate: "",
            endDate: "",
            summaryPoints: {
                content: ["b1", "b2", "b3", "b4"]
            }
        },
    ];
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1.5 }, className: "pageTransition" },
        react_1["default"].createElement("h3", { className: "title" }, "Experience"),
        react_1["default"].createElement("div", { className: "w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory" }, experiences.map(function (experience) { return (react_1["default"].createElement(ExperienceCard_1["default"], __assign({}, experience))); }))));
}
exports["default"] = Experience;
