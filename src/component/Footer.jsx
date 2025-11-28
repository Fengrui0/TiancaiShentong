export default function Footer() {
  return (
    <footer className="bg-[#222] text-gray-300 mt-20">
      {/* 主体三栏区域 */}
      <div className="mx-auto max-w-[1200px] px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* 公司信息 */}
        <div className="text-center md:text-left">
          <div className="font-extrabold text-lg text-white">神瞳科技</div>
          <p className="text-sm mt-2">
            客服邮箱：
            <a href="mailto:17448266@qq.com" className="text-blue-400 hover:underline">
              17448266@qq.com
            </a>
          </p>
          <p className="text-sm mt-1">
            地址：湖北省武汉市武昌区徐东大街120号福星国际城K4地块1栋8层3室
          </p>
          <p className="text-sm mt-1">法定代表人：王见妮</p>
          <p className="text-sm mt-1">注册资本：壹佰万元人民币</p>
        </div>

        {/* 快速链接 */}
        <div className="text-center">
          <div className="font-semibold mb-3 text-white">快速链接</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#products" className="hover:text-white">产品中心</a></li>
            <li><a href="#franchise" className="hover:text-white">招商加盟</a></li>
            <li><a href="#news" className="hover:text-white">新闻资讯</a></li>
            <li><a href="#contact" className="hover:text-white">联系我们</a></li>
          </ul>
        </div>

        {/* 合规信息 */}
        <div className="text-center md:text-right">
          <div className="font-semibold mb-3 text-white">合规与备案</div>
          <ul className="space-y-1 text-sm">
            <li>营业执照号：91420103MACCYCUH86</li>
            <li>成立日期：2023年3月6日</li>
            <li>
              版权所有 © {new Date().getFullYear()} 武汉天才神瞳科技有限公司
            </li>
          </ul>
        </div>
      </div>

      {/* 分隔线 */}
      <div className="border-t border-gray-700 mx-auto max-w-[1200px]" />

      {/* 版权与语言行 */}
      <div className="text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} 神瞳科技 | 武汉天才神瞳科技有限公司 | All Rights Reserved
        <div className="mt-1">中国大陆 / 简体中文</div>
      </div>
    </footer>
  );
}
