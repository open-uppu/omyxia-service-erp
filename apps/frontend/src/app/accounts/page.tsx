export default function AccountsPage() {
  const accounts = [
    { code: '1000', name: 'เงินสดและรายการเทียบเท่าเงินสด', type: 'ASSET', balance: '฿ 1,250,000.00', normal: 'DEBIT' },
    { code: '1100', name: 'เงินฝากกระแสรายวัน ธนาคารกสิกรไทย', type: 'ASSET', balance: '฿ 3,840,500.00', normal: 'DEBIT' },
    { code: '1200', name: 'ลูกหนี้การค้า (Accounts Receivable)', type: 'ASSET', balance: '฿ 540,200.00', normal: 'DEBIT' },
    { code: '1300', name: 'สินค้าคงเหลือ (Inventories)', type: 'ASSET', balance: '฿ 920,000.00', normal: 'DEBIT' },
    { code: '2000', name: 'เจ้าหนี้การค้า (Accounts Payable)', type: 'LIABILITY', balance: '฿ 320,500.00', normal: 'CREDIT' },
    { code: '2100', name: 'ภาษีขายรอชำระ (Output VAT)', type: 'LIABILITY', balance: '฿ 78,400.00', normal: 'CREDIT' },
    { code: '2200', name: 'ภาษีหัก ณ ที่จ่ายค้างจ่าย (WHT Payable)', type: 'LIABILITY', balance: '฿ 14,200.00', normal: 'CREDIT' },
    { code: '3000', name: 'ทุนจดทะเบียนชำระแล้ว (Common Stock)', type: 'EQUITY', balance: '฿ 5,000,000.00', normal: 'CREDIT' },
    { code: '4000', name: 'รายได้จากการให้บริการ Cloud Solution', type: 'REVENUE', balance: '฿ 6,240,000.00', normal: 'CREDIT' },
    { code: '5000', name: 'ต้นทุนการให้บริการ (Cost of Services)', type: 'EXPENSE', balance: '฿ 2,890,000.00', normal: 'DEBIT' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">ผังบัญชีมาตรฐาน (Chart of Accounts)</h2>
          <p className="text-xs text-slate-400 mt-1">มาตรฐานการจัดหมวดหมู่บัญชีตามกรมพัฒนาธุรกิจการค้าและกรมสรรพากร</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow transition-colors">
          + เพิ่มผังบัญชี
        </button>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-semibold">รหัสบัญชี</th>
              <th className="px-4 py-3 font-semibold">ชื่อบัญชี</th>
              <th className="px-4 py-3 font-semibold">หมวดหมู่</th>
              <th className="px-4 py-3 font-semibold">ยอดคงเหลือ</th>
              <th className="px-4 py-3 font-semibold">ดุลปกติ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {accounts.map((acc, i) => (
              <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-4 py-3 font-mono font-medium text-slate-300">{acc.code}</td>
                <td className="px-4 py-3 font-medium text-white">{acc.name}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    acc.type === 'ASSET' ? 'bg-blue-950 text-blue-400 border border-blue-800/30' :
                    acc.type === 'LIABILITY' ? 'bg-amber-950 text-amber-400 border border-amber-800/30' :
                    acc.type === 'EQUITY' ? 'bg-purple-950 text-purple-400 border border-purple-800/30' :
                    acc.type === 'REVENUE' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/30' :
                    'bg-rose-950 text-rose-400 border border-rose-800/30'
                  }`}>
                    {acc.type}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono font-semibold text-slate-200">{acc.balance}</td>
                <td className="px-4 py-3 font-mono text-[11px] text-slate-400">{acc.normal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
