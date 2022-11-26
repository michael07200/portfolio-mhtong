"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
function ExperienceCard(experience) {
    return (react_1["default"].createElement("article", { className: "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#62973D] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden" },
        react_1["default"].createElement(framer_motion_1.motion.img, { initial: {
                y: -100,
                opacity: 0
            }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 1.2 }, className: "w-32 h-32 rounded-full xl-w-[200px] xl:h-[200[x] object-cover object-center", src: "https://pbs.twimg.com/profile_images/1414938252910465033/jb4z2orI_400x400.jpg", alt: "" }),
        react_1["default"].createElement("div", { className: "text-white" },
            react_1["default"].createElement("h4", { className: "text-4xl font-light" }, experience.position),
            react_1["default"].createElement("p", { className: "font-bold text-2xl mt-1" }, experience.companyName),
            react_1["default"].createElement("div", { className: "flex space-x-2 my-2" },
                react_1["default"].createElement("img", { className: "h-10 w-10 rounded-full", src: "https://www.pikpng.com/pngl/m/364-3644351_rhino-rhino-icon-clipart.png", alt: "" })),
            react_1["default"].createElement("p", { className: "uppercase py-5" }, "Started work.... - Ended ..."),
            react_1["default"].createElement("ul", { className: "list-disc space-y-4 ml-5 text-lg" }, experience.summaryPoints.content.map(function (content) { return (react_1["default"].createElement("li", null, content)); })))));
}
exports["default"] = ExperienceCard;
