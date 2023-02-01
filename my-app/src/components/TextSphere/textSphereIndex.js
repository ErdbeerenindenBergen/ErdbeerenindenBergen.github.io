import React, { useEffect } from "react";
import './textSphereIndex.scss';
import TagCloud from "TagCloud";

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
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
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
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