export default function JournalsPage() {
  const journals = [
    {
      entryNo: 'JV-2026-1101',
      date: '19 พ.ย. 2026',
      description: 'บันทึกจ่ายเงินเดือนและภาษีหัก ณ ที่จ่าย ภ.ง.ด.1 ประจำเดือน',
      status: 'POSTED',
      lines: [
        { code: '5100', name: 'เงินเดือนและค่าจ้าง', debit: '฿ 450,000.00', credit: '-' },
        { code: '2200', name: 'ภาษีหัก ณ ที่จ่ายค้างจ่าย (WHT)', debit: '-', credit: '฿ 13,500.00' },
        { code: '1100', name: 'เงินฝากกระแสรายวัน ธนาคารกสิกรไทย', debit: '-', credit: '฿ 436,500.00' },
      ],
    },
    {
      entryNo: 'JV-2026-1102',
      date: '18 พ.ย. 2026',
      description: 'บันทึกรายได้ค่าบริการรายปีและภาษีขาย 7%',
      status: 'POSTED',
      lines: [
        { code: '1100', name: 'เงินฝากกระแสรายวัน ธนาคารกสิกรไทย', debit: '฿ 214,000.00', credit: '-' },
        { code: '4000', name: 'รายได้จากการให้บริการ Cloud Solution', debit: '-', credit: '฿ 200,000.00' },
        { code: '2100', name: 'ภาษีขายรอชำระ (Output VAT)', debit: '-', credit: '฿ 14,000.00' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">สมุดรายวันทั่วไป (General Journal)</h2>
          <p className="text-xs text-slate-400 mt-1">บันทึกรายการบัญชีตามระบบบัญชีคู่ (Double-Entry Bookkeeping)</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow transition-colors">
          + สร้างสมุดรายวันใหม่
        </button>
      </div>

      <div className="space-y-4">
        {journals.map((j, i) => (
          <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-emerald-400">{j.entryNo}</span>
                <span className="text-xs text-slate-400">วันที่: {j.date}</span>
                <span className="text-xs text-slate-300 font-medium">{j.description}</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/30">
                {j.status}
              </span>
            </div>
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 font-semibold border-b border-slate-800/40">
                <tr>
                  <th className="py-1.5">รหัสบัญชี</th>
                  <th className="py-1.5">ชื่อบัญชี</th>
                  <th className="py-1.5 text-right">เดบิต (Debit)</th>
                  <th className="py-1.5 text-right">เครดิต (Credit)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {j.lines.map((l, idx) => (
                  <tr key={idx}>
                    <td className="py-2 font-mono text-slate-400">{l.code}</td>
                    <td className="py-2 text-slate-200">{l.name}</td>
                    <td className="py-2 font-mono text-right text-emerald-400">{l.debit}</td>
                    <td className="py-2 font-mono text-right text-slate-300">{l.credit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
