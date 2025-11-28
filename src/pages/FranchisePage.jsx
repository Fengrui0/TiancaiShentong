import img1 from "../assets/images/franchise/main1.png";
import img2 from "../assets/images/franchise/main2.png";
import img3 from "../assets/images/franchise/main3.png";
import img4 from "../assets/images/franchise/main4.png";
import img5 from "../assets/images/franchise/main5.png";
import img6 from "../assets/images/franchise/main6.png";
import img7 from "../assets/images/franchise/main7.png";
import img8 from "../assets/images/franchise/main8.png";

export default function FranchisePage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里先阻止默认提交，你之后可以在这里加上真正的提交逻辑（如发请求）
    alert("Franchise form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-50 justify-center py-16">
        <div className="p-4 space-y-6">
            <img src={img1} alt="franchise img 1" />
            <img src={img2} alt="franchise img 2" />
            <img src={img3} alt="franchise img 3" />
            <img src={img4} alt="franchise img 4" />
            <img src={img5} alt="franchise img 5" />
            <img src={img6} alt="franchise img 6" />
            <img src={img7} alt="franchise img 7" />
            <img src={img8} alt="franchise img 8" />
        </div>

      <div className="w-full max-w-5xl mx-auto px-4 mt-10">
        {/* 如果你有页面标题，可以在这里加 */}
        {/* <h1 className="text-2xl font-semibold mb-8 text-gray-900">加盟留言</h1> */}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-10 md:px-12 md:py-12"
        >
          {/* 上面两行四个输入框 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* 姓名 */}
            <div>
              <label className="block mb-2 text-sm text-gray-700">
                <span className="text-red-500 mr-1">*</span>姓名
              </label>
              <input
                type="text"
                name="name"
                placeholder="请输入您的姓名"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            {/* 称谓 */}
            <div>
              <label className="block mb-2 text-sm text-gray-700">
                您的称谓
              </label>
              <input
                type="text"
                name="title"
                placeholder="先生/女士"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* 手机号 */}
            <div>
              <label className="block mb-2 text-sm text-gray-700">
                <span className="text-red-500 mr-1">*</span>手机号
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="请输入您的手机号"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            {/* 邮箱 */}
            <div>
              <label className="block mb-2 text-sm text-gray-700">
                电子邮件
              </label>
              <input
                type="email"
                name="email"
                placeholder="请输入您的电子邮件"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          </div>

          {/* 留言文本框 */}
          <div className="mb-10">
            <label className="block mb-2 text-sm text-gray-700">
              您的留言
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="您想说点什么"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
            />
          </div>

          {/* 提交按钮 */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-64 h-12 rounded-md bg-blue-900 text-white text-base tracking-wide hover:bg-blue-800 active:bg-blue-900 transition"
            >
              提交留言
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
