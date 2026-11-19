export default function BillsPage() {
  const bills = [
    { no: 'BILL-2026-041', vendor: 'Amazon Web Services (AWS)', date: '10 พ.ย. 2026', due: '25 พ.ย. 2026', total: '฿ 85,400.00', status: 'APPROVED' },
    { no: 'BILL-2026-042', vendor: 'AIS Fibre Corporate', date: '12 พ.ย. 2026', due: '27 พ.ย. 2026', total: '฿ 12,840.00', status: 'PAID' },
    { no: 'BILL-2026-043', vendor: 'อาคารสาทรสแควร์ (ค่าเช่าสำนักงาน)', date: '15 พ.ย. 2026', due: '30 พ.ย. 2026', total: '฿ 220,000.00', status: 'DRAFT' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">ใบรับวางบิลเจ้าหนี้ (Accounts Payable Bills)</h2>
          <p className="text-xs text-slate-400 mt-1">จัดการหนี้สินทางการค้า การอนุมัติจ่าย และการหักภาษี ณ ที่จ่าย</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow transition-colors">
          + บันทึกใบวางบิล
        </button>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-semibold">เลขที่ใบรับวางบิล</th>
              <th className="px-4 py-3 font-semibold">ผู้ขาย / คู่ค้า</th>
              <th className="px-4 py-3 font-semibold">วันที่</th>
              <th className="px-4 py-3 font-semibold">ครบกำหนดชำระ</th>
              <th className="px-4 py-3 font-semibold">ยอดเงินสุทธิ</th>
              <th className="px-4 py-3 font-semibold">สถานะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {bills.map((b, i) => (
              <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-4 py-3 font-mono font-medium text-slate-300">{b.no}</td>
                <td className="px-4 py-3 font-medium text-white">{b.vendor}</td>
                <td className="px-4 py-3 text-slate-400">{b.date}</td>
                <td className="px-4 py-3 text-slate-400">{b.due}</td>
                <td className="px-4 py-3 font-mono font-bold text-white">{b.total}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    b.status === 'PAID' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/30' :
                    b.status === 'APPROVED' ? 'bg-blue-950 text-blue-400 border border-blue-800/30' :
                    'bg-slate-800 text-slate-400'
                  }`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
