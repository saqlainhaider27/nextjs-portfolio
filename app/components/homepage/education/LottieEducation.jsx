// components/homepage/LottieEducation.jsx
"use client";

import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from "../../../assets/lottie/study.json";

export default function LottieEducation() {
  return (
    <div className="flex justify-center items-start">
      <div className="w-3/4 h-3/4">
        <AnimationLottie animationPath={lottieFile} />
      </div>
    </div>
  );
}
