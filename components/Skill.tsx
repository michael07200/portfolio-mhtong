import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
  siJavascript,
  siReact,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siTypescript,
  siNextdotjs,
  siRedux,
  siPython,
  siGit,
  siGithub,
  siFigma,
  siPostman,
  siAdobephotoshop,
  siAdobeillustrator,
  siAdobeindesign,
  siRhinoceros,
} from "simple-icons";

type Props = {};

export default function Skill({}: Props) {
  const icons = [
    siJavascript,
    siReact,
    siTailwindcss,
    siNodedotjs,
    siExpress,
    siMongodb,
    siPostgresql,
    siTypescript,
    siNextdotjs,
    siRedux,
    siPython,
    siGit,
    siGithub,
    siFigma,
    siPostman,
    siAdobephotoshop,
    siAdobeillustrator,
    siAdobeindesign,
    siRhinoceros,
  ].map((icon) => {
    return renderSimpleIcon({
      icon,
      size: 60,
      aProps: {
        onClick: (e: any) => e.preventDefault(),
      },
    });
  });

  return (
    <div>
      <Cloud>{icons}</Cloud>
    </div>
  );
}
