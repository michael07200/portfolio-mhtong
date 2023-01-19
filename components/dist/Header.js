"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_social_icons_1 = require("react-social-icons");
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
var ai_1 = require("react-icons/ai");
var fa_1 = require("react-icons/fa");
var image_1 = require("next/image");
var logo_svg_1 = require("../public/assets/logo.svg");
function Header(_a) {
    var _b = react_1.useState(false), nav = _b[0], setNav = _b[1];
    var handleNav = function () {
        setNav(!nav);
    };
    return (React.createElement("div", null,
        React.createElement("header", { className: "sticky top-0 flex justify-between max-w-7xl mx-auto z-20 xl:items-center" },
            React.createElement(framer_motion_1.motion.div, { initial: {
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }, animate: {
                    x: 0,
                    opacity: 1,
                    scale: 1
                }, transition: { duration: 1 }, className: "flex flex-row items-center" },
                React.createElement("div", { className: "flex flex-row items-center" },
                    React.createElement(react_social_icons_1.SocialIcon, { url: "https://github.com/michael07200", fgColor: "white", bgColor: "transparent" }),
                    React.createElement(react_social_icons_1.SocialIcon, { url: "https://www.instagram.com/", fgColor: "white", bgColor: "transparent" })),
                React.createElement(link_1["default"], { href: "/" },
                    React.createElement(image_1["default"], { src: logo_svg_1["default"], alt: "/", width: "40", height: "40", className: "cursor-pointer" }))),
            React.createElement(framer_motion_1.motion.div, { initial: {
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }, animate: {
                    x: 0,
                    opacity: 1,
                    scale: 1
                }, transition: { duration: 1 }, className: "flex flex-row items-center" },
                React.createElement("div", { className: "flex flex-row items-center cursor-pointer" },
                    React.createElement("ul", { className: "uppercase hidden md:flex text-sm text-white" },
                        React.createElement(link_1["default"], { href: "#" },
                            React.createElement("li", { className: "heroButton" }, "Home")),
                        React.createElement(link_1["default"], { href: "#about" },
                            React.createElement("li", { className: "heroButton" }, "About")),
                        React.createElement(link_1["default"], { href: "#experience" },
                            React.createElement("li", { className: "heroButton" }, "Experience")),
                        React.createElement(link_1["default"], { href: "#project" },
                            React.createElement("li", { className: "heroButton" }, "Projects")),
                        React.createElement(link_1["default"], { href: "#Contact" },
                            React.createElement("li", { className: "heroButton" }, "Contact"))),
                    React.createElement("div", { onClick: handleNav, className: "md:hidden text-white" },
                        React.createElement(ai_1.AiOutlineMenu, { size: 25 }))))),
        React.createElement("div", { className: nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f7f4ed] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500" },
            React.createElement("div", null,
                React.createElement("div", { className: "flex w-full items-center justify-between" },
                    React.createElement(link_1["default"], { href: "/" },
                        React.createElement(image_1["default"], { src: logo_svg_1["default"], width: "50", height: "50", alt: "/" })),
                    React.createElement("div", { onClick: handleNav, className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer" },
                        React.createElement(ai_1.AiOutlineClose, null))),
                React.createElement("div", { className: "border-b border-gray-300 my-4" },
                    React.createElement("p", { className: "w-[85%] md:w-[90%] pb-4" }, "Michael Tong Portfolio"))),
            React.createElement("div", { className: "py-4 flex flex-col" },
                React.createElement("ul", { className: "uppercase" },
                    React.createElement(link_1["default"], { href: "/" },
                        React.createElement("li", { onClick: function () { return setNav(false); }, className: "py-4 text-sm" }, "Home")),
                    React.createElement(link_1["default"], { href: "/#about" },
                        React.createElement("li", { onClick: function () { return setNav(false); }, className: "py-4 text-sm" }, "About")),
                    React.createElement(link_1["default"], { href: "/#experience" },
                        React.createElement("li", { onClick: function () { return setNav(false); }, className: "py-4 text-sm" }, "Experience")),
                    React.createElement(link_1["default"], { href: "/#projects" },
                        React.createElement("li", { onClick: function () { return setNav(false); }, className: "py-4 text-sm" }, "Projects")),
                    React.createElement(link_1["default"], { href: "/#contact" },
                        React.createElement("li", { onClick: function () { return setNav(false); }, className: "py-4 text-sm" }, "Contact"))),
                React.createElement("div", { className: "pt-40" },
                    React.createElement("div", { className: "flex items-center justify-between my-4 w-[80%] sm:w-[50%]" },
                        React.createElement("a", { href: "https://www.linkedin.com/in/clint-briley-50056920a/", target: "_blank", rel: "noreferrer" },
                            React.createElement("div", { className: "rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300" },
                                React.createElement(fa_1.FaLinkedinIn, null))),
                        React.createElement("a", { href: "https://github.com/fireclint", target: "_blank", rel: "noreferrer" },
                            React.createElement("div", { className: "rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300" },
                                React.createElement(fa_1.FaGithub, null))),
                        React.createElement(link_1["default"], { href: "/#contact" },
                            React.createElement("div", { onClick: function () { return setNav(!nav); }, className: "rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300" },
                                React.createElement(ai_1.AiOutlineMail, null)))))))));
}
exports["default"] = Header;
