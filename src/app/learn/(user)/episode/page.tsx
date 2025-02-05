import Episode from "@/app/_components/pages/episode/Episode";
import TitleBox from "@/app/_components/pages/landing/TitleBox";
import React from "react";
const EpisodePage = () => {
  return (
    <div>
      <TitleBox
        title="معرفی دوره"
        description="دوره پروژه محور React & Next js"
        className="mb-4"
      />
      <Episode />
    </div>
  );
};

export default EpisodePage;
