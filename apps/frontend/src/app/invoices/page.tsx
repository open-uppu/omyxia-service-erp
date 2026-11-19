export default function InvoicesPage() {
  const invoices = [
    { no: 'INV-2026-089', customer: 'บริษัท เทค สมาร์ท จำกัด', date: '15 พ.ย. 2026', due: '15 ธ.ค. 2026', total: '฿ 214,000.00', status: 'PAID' },
    { no: 'INV-2026-090', customer: 'บริษัท โกลบอล โซลูชั่นส์ จำกัด', date: '18 พ.ย. 2026', due: '18 ธ.ค. 2026', total: '฿ 107,000.00', status: 'SENT' },
    { no: 'INV-2026-091', customer: 'ห้างหุ้นส่วนจำกัด สยาม รีเทล', date: '19 พ.ย. 2026', due: '19 ธ.ค. 2026', total: '฿ 53,500.00', status: 'DRAFT' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">ใบแจ้งหนี้ / ใบส่งของ (Accounts Receivable Invoices)</h2>
          <p className="text-xs text-slate-400 mt-1">จัดการใบแจ้งหนี้ ติดตามลูกหนี้การค้าและสถานะการชำระเงิน</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow transition-colors">
          + ออกใบแจ้งหนี้ใหม่
        </button>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-semibold">เลขที่ใบแจ้งหนี้</th>
              <th className="px-4 py-3 font-semibold">ลูกค้า</th>
              <th className="px-4 py-3 font-semibold">วันที่ออก</th>
              <th className="px-4 py-3 font-semibold">กำหนดชำระ</th>
              <th className="px-4 py-3 font-semibold">ยอดรวม (สุทธิ)</th>
              <th className="px-4 py-3 font-semibold">สถานะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {invoices.map((inv, i) => (
              <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-4 py-3 font-mono font-medium text-slate-300">{inv.no}</td>
                <td className="px-4 py-3 font-medium text-white">{inv.customer}</td>
                <td className="px-4 py-3 text-slate-400">{inv.date}</td>
                <td className="px-4 py-3 text-slate-400">{inv.due}</td>
                <td className="px-4 py-3 font-mono font-bold text-white">{inv.total}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    inv.status === 'PAID' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/30' :
                    inv.status === 'SENT' ? 'bg-blue-950 text-blue-400 border border-blue-800/30' :
                    'bg-slate-800 text-slate-400'
                  }`}>
                    {inv.status}
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
