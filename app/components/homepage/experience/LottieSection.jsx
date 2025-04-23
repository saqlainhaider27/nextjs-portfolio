"use client";
import AnimationLottie from "../../helper/animation-lottie";
import experience from '../../../assets/lottie/code.json';

export default function LottieSection() {
  return (
    <div className="flex justify-center items-start">
      <div className="w-full h-full">
        <AnimationLottie animationPath={experience} />
      </div>
    </div>
  );
}
