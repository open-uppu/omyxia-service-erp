export default function TaxPage() {
  const taxSummaries = [
    { type: 'ภาษีมูลค่าเพิ่ม (ภ.พ.30)', outputVat: '฿ 142,500.00', inputVat: '฿ 64,100.00', netPayable: '฿ 78,400.00', dueDate: '15 ธ.ค. 2026', status: 'รอการยื่นแบบ' },
    { type: 'ภาษีหัก ณ ที่จ่าย (ภ.ง.ด.3 - บุคคลธรรมดา)', baseAmount: '฿ 150,000.00', rate: '3%', taxAmount: '฿ 4,500.00', dueDate: '7 ธ.ค. 2026', status: 'รอการยื่นแบบ' },
    { type: 'ภาษีหัก ณ ที่จ่าย (ภ.ง.ด.53 - นิติบุคคล)', baseAmount: '฿ 320,000.00', rate: '3%', taxAmount: '฿ 9,600.00', dueDate: '7 ธ.ค. 2026', status: 'รอการยื่นแบบ' },
    { type: 'ภาษีเงินได้หัก ณ ที่จ่าย พนักงาน (ภ.ง.ด.1)', baseAmount: '฿ 450,000.00', rate: 'เฉลี่ย', taxAmount: '฿ 13,500.00', dueDate: '7 ธ.ค. 2026', status: 'รอการยื่นแบบ' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">รายงานภาษีสรรพากร (Tax & Withholding Tax)</h2>
          <p className="text-xs text-slate-400 mt-1">สรุปภาษีมูลค่าเพิ่ม ภ.พ.30 และภาษีหัก ณ ที่จ่าย ภ.ง.ด. 1, 3, 53</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow transition-colors">
          ส่งออกไฟล์ ภ.พ.30 / RD Prep
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {taxSummaries.map((t, idx) => (
          <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-white">{t.type}</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-950 text-amber-400 border border-amber-800/30">
                {t.status}
              </span>
            </div>
            <div className="text-xs space-y-1 text-slate-300">
              {t.outputVat && <div className="flex justify-between"><span>ภาษีขาย:</span><span className="font-mono">{t.outputVat}</span></div>}
              {t.inputVat && <div className="flex justify-between"><span>ภาษีซื้อ:</span><span className="font-mono">{t.inputVat}</span></div>}
              {t.netPayable && <div className="flex justify-between font-bold text-emerald-400 border-t border-slate-800 pt-1"><span>ภาษีสุทธิที่ต้องชำระ:</span><span className="font-mono">{t.netPayable}</span></div>}
              {t.baseAmount && <div className="flex justify-between"><span>ฐานภาษี:</span><span className="font-mono">{t.baseAmount} ({t.rate})</span></div>}
              {t.taxAmount && <div className="flex justify-between font-bold text-emerald-400 border-t border-slate-800 pt-1"><span>ภาษีหักนำส่ง:</span><span className="font-mono">{t.taxAmount}</span></div>}
              <div className="flex justify-between text-slate-500 text-[11px] pt-1"><span>กำหนดนำส่ง:</span><span>{t.dueDate}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
