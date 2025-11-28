import news1 from "../assets/images/news/news1.png";
import news2 from "../assets/images/news/news2.png";

export default function NewsPreview() {
  const news = [
    {
      title: "九九归一 —— 天才神瞳第十九届《行商天下·传奇人生》圆满举办",
      date: "2025-10-27",
      img: news1, // 换成你的真实路径
      views: 2408,
      comments: 0,
      desc: "传总亲授产品核心心课，从单品亮点到生态链全景深度拆解，系统性优化销售思路。",
    },
    {
      title: "九九归一 —— 天才神瞳第十九届《行商天下·传奇人生》财智盛宴再启",
      date: "2025-10-26",
      img: news1,
      views: 2508,
      comments: 0,
      desc: "行商天下·传奇人生再度聚首，以“九九归一”为主题，汇聚行业菁英共话发展。",
    },
    {
      title: "一飞冲天 —— 天才神瞳第十八届《行商天下·传奇人生》圆满落幕",
      date: "2025-09-21",
      img: news2,
      views: 6728,
      comments: 0,
      desc: "林园长指出，市场环境挑战与机遇并存，神瞳品牌持续赋能行业增长。",
    },
    {
      title: "一飞冲天 —— 天才神瞳第十八届《行商天下·传奇人生》财智盛宴",
      date: "2025-09-20",
      img: news2,
      views: 7332,
      comments: 0,
      desc: "各界嘉宾汇聚，共襄视光盛会，见证神瞳品牌腾飞之路。",
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* 标题 */}
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center">
          新闻资讯
        </h2>
        <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
          最新的新闻动态与您分享
        </p>

        {/* 新闻列表 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {news.map((item, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* 图片部分 */}
              <div className="relative overflow-hidden">
                <img
                src={item.img}
                alt={item.title}
                className="w-full object-contain"
                style={{ height: "auto", maxHeight: "220px" }}
                />
                {/* 日期角标 */}
                <div className="absolute bottom-3 left-3 bg-blue-800 text-white text-center rounded-md w-12 py-1 leading-tight">
                  <p className="text-sm font-semibold">
                    {item.date.split("-")[2]}
                  </p>
                  <p className="text-[10px] opacity-90">
                    {item.date.split("-")[0]}-{item.date.split("-")[1]}
                  </p>
                </div>
              </div>

              {/* 内容部分 */}
              <div className="p-4">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
                  <span>👁️ {item.views}</span>
                  <span>💬 {item.comments}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-base leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
