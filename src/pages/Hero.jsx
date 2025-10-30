import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 使用 lucide 图标库

// 导入图片
import akGlasses from "../assets/images/hero/ak-glasses.jpg";
import dhaGummy from "../assets/images/hero/dha-gummy.jpg";
import fireEye from "../assets/images/hero/fire-eye.jpg";
import eyeDevice from "../assets/images/hero/eye-device.jpg";

const sources = [akGlasses, dhaGummy, fireEye, eyeDevice];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(() => sources.map(() => false));
  const timerRef = useRef(null);

  // 预加载图片
  useEffect(() => {
    const imgs = sources.map((src, i) => {
      const img = new Image();
      img.onload = () =>
        setLoaded((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      img.src = src;
      return img;
    });
    return () => imgs.forEach((img) => (img.onload = null));
  }, []);

  // 自动播放
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % sources.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const nextSlide = () => setCurrent((i) => (i + 1) % sources.length);
  const prevSlide = () =>
    setCurrent((i) => (i - 1 + sources.length) % sources.length);

  return (
    <section
      className="relative w-full min-h-[560px] md:h-[720px] overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, #0E5FFF 0%, #0A1F44 70%, #000820 100%)",
      }}
    >
      {/* 图片层 */}
      <div className="relative w-full h-full z-0">
        {sources.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className={`absolute inset-0 m-auto max-w-full max-h-full transition-opacity duration-700 ease-in-out ${
              current === i && loaded[i] ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectFit: "contain" }}
          />
        ))}
      </div>

      {/* 左右切换箭头 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition z-30"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition z-30"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* 文案 */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16">
        <div className="mx-auto max-w-[1200px] px-4 text-center md:text-left">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            科技守护清晰视界
          </h1>
          <p className="text-blue-100 mt-3 max-w-2xl mx-auto md:mx-0">
            融合光学与科技，为未来用眼健康保驾护航
          </p>
          <div className="mt-6 flex gap-3 justify-center md:justify-start">
            <a
              href="#products"
              className="px-4 py-2 rounded-lg bg-white text-blue-700 font-medium"
            >
              浏览产品
            </a>
            <a
              href="#franchise"
              className="px-4 py-2 rounded-lg text-white ring-1 ring-white/40 bg-blue-900/30"
            >
              了解更多
            </a>
          </div>
        </div>
      </div>

      {/* 圆点导航 */}
      <div className="absolute z-30 bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {sources.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
