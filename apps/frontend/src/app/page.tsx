export default function ErpDashboard() {
  const stats = [
    { label: 'ยอดรายรับเดือนนี้ (Revenue)', value: '฿ 1,480,000', change: '+12.5%', isPositive: true },
    { label: 'ยอดรายจ่ายค้างชำระ (Accounts Payable)', value: '฿ 320,500', change: '-4.2%', isPositive: true },
    { label: 'ลูกหนี้การค้ารอชำระ (Accounts Receivable)', value: '฿ 540,200', change: '+8.1%', isPositive: false },
    { label: 'ภาษีขายรอชำระ (Net Output VAT)', value: '฿ 78,400', change: 'ตรงกำหนด', isPositive: true },
  ];

  const recentJournals = [
    { entryNo: 'JV-2026-001', desc: 'บันทึกจ่ายเงินเดือนประจำงวด พ.ย.', amount: '฿ 450,000', date: '19 พ.ย. 2026', status: 'POSTED' },
    { entryNo: 'JV-2026-002', desc: 'รับชำระค่าบริการพัฒนาระบบ Cloud', amount: '฿ 214,000', date: '18 พ.ย. 2026', status: 'POSTED' },
    { entryNo: 'JV-2026-003', desc: 'ตั้งเจ้าหนี้ค่าลิขสิทธิ์ซอฟต์แวร์', amount: '฿ 85,600', date: '17 พ.ย. 2026', status: 'REVIEW' },
    { entryNo: 'JV-2026-004', desc: 'ซื้ออุปกรณ์สำนักงานและวัสดุสิ้นเปลือง', amount: '฿ 12,500', date: '16 พ.ย. 2026', status: 'DRAFT' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">ระบบบริหารการเงินและบัญชี (ERP & Finance)</h2>
        <p className="text-slate-400 mt-1">บริการไมโครเซอร์วิสอิสระสำหรับการจัดการบัญชีแยกประเภท ผังบัญชี และภาษี</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 shadow-sm">
            <span className="text-xs font-medium text-slate-400">{s.label}</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold text-white tracking-tight">{s.value}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded ${s.isPositive ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40' : 'bg-amber-950 text-amber-400 border border-amber-800/40'}`}>
                {s.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">รายการบันทึกบัญชีล่าสุด (Recent Journal Entries)</h3>
            <a href="/journals" className="text-xs text-emerald-400 hover:underline">ดูทั้งหมด →</a>
          </div>
          <div className="divide-y divide-slate-800">
            {recentJournals.map((j, i) => (
              <div key={i} className="py-3 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-slate-200">{j.entryNo}</span>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${j.status === 'POSTED' ? 'bg-emerald-900/40 text-emerald-400' : j.status === 'REVIEW' ? 'bg-blue-900/40 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
                      {j.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{j.desc}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-white">{j.amount}</div>
                  <div className="text-[11px] text-slate-500">{j.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
          <h3 className="font-semibold text-white">สถานะการเชื่อมต่อ (Service Topology)</h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Microservice Service ID</span>
              <span className="font-mono text-emerald-400">erp</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Frontend Port</span>
              <span className="font-mono text-slate-200">:3002</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Backend API Port</span>
              <span className="font-mono text-slate-200">:4002</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Database</span>
              <span className="font-mono text-slate-200">omyxia_erp</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-400">Gateway Entitlement Check</span>
              <span className="text-emerald-400 font-semibold">Active (X-Tenant-Plan)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
