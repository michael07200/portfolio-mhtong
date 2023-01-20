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
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_icon_cloud_1.Cloud, null, icons)));
}
exports["default"] = Skill;
