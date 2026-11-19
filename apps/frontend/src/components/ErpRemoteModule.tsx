'use client';

import React, { useState } from 'react';

export interface ErpRemoteProps {
  tenantId?: string;
  userRole?: string;
  theme?: 'dark' | 'light';
}

export function ErpRemoteModule({ tenantId = 'tenant-demo', userRole = 'ADMIN' }: ErpRemoteProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'accounts' | 'journals' | 'invoices'>('overview');

  return (
    <div className="w-full bg-slate-950 text-slate-100 rounded-xl border border-slate-800 p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white text-xs">
            ERP
          </span>
          <div>
            <h3 className="text-sm font-semibold text-white">Omyxia Financial & General Ledger (Remote Module)</h3>
            <p className="text-xs text-slate-400">Tenant: <span className="font-mono text-emerald-400">{tenantId}</span> | Role: <span className="font-mono text-slate-300">{userRole}</span></p>
          </div>
        </div>
        <div className="flex gap-2 text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === 'overview' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            ภาพรวม
          </button>
          <button
            onClick={() => setActiveTab('accounts')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === 'accounts' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            ผังบัญชี
          </button>
          <button
            onClick={() => setActiveTab('journals')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === 'journals' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            สมุดรายวัน
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === 'invoices' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            ใบแจ้งหนี้
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-lg">
            <span className="text-xs text-slate-400">เงินสดและสภาพคล่อง</span>
            <div className="text-xl font-bold text-white mt-1">฿ 5,090,500.00</div>
          </div>
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-lg">
            <span className="text-xs text-slate-400">ลูกหนี้การค้ารอเก็บเงิน</span>
            <div className="text-xl font-bold text-white mt-1">฿ 540,200.00</div>
          </div>
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-lg">
            <span className="text-xs text-slate-400">เจ้าหนี้การค้ารอจ่าย</span>
            <div className="text-xl font-bold text-white mt-1">฿ 320,500.00</div>
          </div>
        </div>
      )}

      {activeTab === 'accounts' && (
        <div className="text-xs space-y-2">
          <p className="text-slate-400">ผังบัญชีตัวอย่างสำหรับ Tenant นี้:</p>
          <div className="bg-slate-900 p-3 rounded font-mono text-emerald-400 text-xs">
            1000 - เงินสดและรายการเทียบเท่าเงินสด (ASSET)<br/>
            1100 - เงินฝากกระแสรายวัน ธนาคารกสิกรไทย (ASSET)<br/>
            2000 - เจ้าหนี้การค้า (LIABILITY)<br/>
            4000 - รายได้จากการบริการ Cloud Solution (REVENUE)
          </div>
        </div>
      )}

      {activeTab === 'journals' && (
        <div className="text-xs text-slate-400">
          รายการบันทึกบัญชีล่าสุด: JV-2026-1101 (บันทึกจ่ายเงินเดือน) | สถานะ: <span className="text-emerald-400">POSTED</span>
        </div>
      )}

      {activeTab === 'invoices' && (
        <div className="text-xs text-slate-400">
          ใบแจ้งหนี้ล่าสุด: INV-2026-089 (บริษัท เทค สมาร์ท จำกัด) | ยอดรวม: ฿ 214,000.00 | สถานะ: <span className="text-emerald-400">PAID</span>
        </div>
      )}
    </div>
  );
}

export default ErpRemoteModule;
