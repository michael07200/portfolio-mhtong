"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_icon_cloud_1 = require("react-icon-cloud");
var simple_icons_1 = require("simple-icons");
function Skill(_a) {
    var icons = [
        simple_icons_1.siJavascript,
        simple_icons_1.siReact,
        simple_icons_1.siTailwindcss,
        simple_icons_1.siNodedotjs,
        simple_icons_1.siExpress,
        simple_icons_1.siMongodb,
        simple_icons_1.siPostgresql,
        simple_icons_1.siTypescript,
        simple_icons_1.siNextdotjs,
        simple_icons_1.siRedux,
        simple_icons_1.siPython,
        simple_icons_1.siGit,
        simple_icons_1.siGithub,
        simple_icons_1.siFigma,
        simple_icons_1.siPostman,
        simple_icons_1.siAdobephotoshop,
        simple_icons_1.siAdobeillustrator,
        simple_icons_1.siAdobeindesign,
        simple_icons_1.siRhinoceros,
    ].map(function (icon) {
        return react_icon_cloud_1.renderSimpleIcon({
            icon: icon,
            size: 60,
            aProps: {
                onClick: function (e) { return e.preventDefault(); }
            }
        });
    });
    return (react_1["default"].createElement("div", { className: "relative bg-white pt-16 pb-32 overflow-hidden" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "relative" },
                react_1["default"].createElement("div", { className: "lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24" },
                    react_1["default"].createElement("div", { className: "px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("div", { className: "mt-6" },
                                react_1["default"].createElement("h2", { className: "text-3xl font-extrabold tracking-tight text-gray-900" }, "Skills"),
                                react_1["default"].createElement("ul", { className: "mt-4 text-base text-gray-500" },
                                    react_1["default"].createElement("li", null, "Proficient: Javascript | React | Tailwind CSS | Node | Express | MongoDB | PostgreSQL"),
                                    react_1["default"].createElement("li", null, "Knowledgeable: Typescript | Next.js | Redux | Python | REST API"),
                                    react_1["default"].createElement("li", null, "Tools: Git | GitHub | Figma | Postman | Photoshop | Illustrator | Indesign | Grasshopper"))))),
                    react_1["default"].createElement("div", { className: "flex align-center mt-12 sm:mt-16" },
                        react_1["default"].createElement("div", { className: "pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full" },
                            react_1["default"].createElement(react_icon_cloud_1.Cloud, null, icons))))))));
}
exports["default"] = Skill;
