export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* 公司信息 */}
        <div>
          <div className="font-extrabold text-lg text-gray-900">神瞳科技</div>
          <p className="text-sm text-gray-600 mt-2">
            客服邮箱：<a href="mailto:17448266@qq.com" className="text-blue-700 hover:underline">17448266@qq.com</a>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            地址：湖北省武汉市武昌区徐东大街120号福星国际城K4地块1栋8层3室
          </p>
          <p className="text-sm text-gray-600 mt-1">法定代表人：王见妮</p>
          <p className="text-sm text-gray-600 mt-1">注册资本：壹佰万元人民币</p>
        </div>

        {/* 快速链接 */}
        <div>
          <div className="font-semibold mb-2 text-gray-900">快速链接</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#products" className="hover:text-blue-700">产品中心</a></li>
            <li><a href="#franchise" className="hover:text-blue-700">招商加盟</a></li>
            <li><a href="#news" className="hover:text-blue-700">新闻资讯</a></li>
            <li><a href="#contact" className="hover:text-blue-700">联系我们</a></li>
          </ul>
        </div>

        {/* 合规信息 */}
        <div>
          <div className="font-semibold mb-2 text-gray-900">合规与备案</div>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>营业执照号：91420103MACCYCUH86</li>
            <li>成立日期：2023年3月6日</li>
            <li>版权所有 © {new Date().getFullYear()} 武汉天才神瞳科技有限公司</li>
            <li className="text-gray-500">ICP备案号（待申请）</li>
          </ul>
        </div>
      </div>

      {/* 底部版权行 */}
      <div className="text-center text-xs text-gray-500 pb-6 border-t pt-4">
        © {new Date().getFullYear()} 神瞳科技 | 武汉天才神瞳科技有限公司 | All Rights Reserved
      </div>
    </footer>
  );
}
