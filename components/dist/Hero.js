"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_simple_typewriter_1 = require("react-simple-typewriter");
function Hero(_a) {
    var _b = react_simple_typewriter_1.useTypewriter({
        words: [
            "an Architect",
            "a Software Engineer",
            "a Front-end Developer"
        ],
        loop: true,
        delaySpeed: 2000
    }), text = _b[0], count = _b[1];
    return (react_1["default"].createElement("div", { className: 'h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden' },
        react_1["default"].createElement("h1", null,
            react_1["default"].createElement("p", null,
                "I am Michael Tong, I am ",
                text,
                react_1["default"].createElement(react_simple_typewriter_1.Cursor, { cursorColor: "#F7AB0A" }))),
        react_1["default"].createElement("div", { className: 'pt-5' },
            react_1["default"].createElement("link", { href: '#about' },
                react_1["default"].createElement("button", { className: 'heroButton' }, "About")),
            react_1["default"].createElement("link", { href: '#experience' },
                react_1["default"].createElement("button", { className: 'heroButton' }, "Experience")),
            react_1["default"].createElement("link", { href: '#skills' },
                react_1["default"].createElement("button", { className: 'heroButton' }, "Skill")),
            react_1["default"].createElement("link", { href: '#projects' },
                react_1["default"].createElement("button", { className: 'heroButton' }, "Projects")))));
}
exports["default"] = Hero;
