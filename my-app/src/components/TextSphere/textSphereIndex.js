import React, { useEffect } from "react";
import './textSphereIndex.scss';
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const tagCloudContainer = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Java",
        "IntelliJ",
        "Unit Testing",
        "GIT",
        "GITHUB",
        "Spring Boot",
        "PostgreSQL",
        "Responsive Design",
        "E/R Diagrams",
        "Integration Testing"
      ];

      const options = {
        radius: 300,
        maxSpeed: "slow",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(tagCloudContainer, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-sphere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextSphere;