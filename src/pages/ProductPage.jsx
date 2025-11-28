// src/pages/ProductPage.jsx
import Nav from "../component/Nav";
import Footer from "../component/Footer";

// 导入三张图片（改成你真实路径）
import product1 from "../assets/images/product/img1.png";
import product2 from "../assets/images/product/img2.png";
import product3 from "../assets/images/product/img3.png";

export default function ProductPage() {
  const images = [product1, product2, product3];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* 主体内容 */}
      <main className="flex-1">
        <section id="products" className="flex flex-col items-center w-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`产品图 ${index + 1}`}
              className="w-full object-cover mb-8 last:mb-0"
            />
          ))}
        </section>
      </main>

    </div>
  );
}
