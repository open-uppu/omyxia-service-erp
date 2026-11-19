import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Omyxia ERP Microservice',
  description: 'Accounting, General Ledger, AP, AR & Tax System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <header className="border-b border-slate-800 bg-slate-900/60 px-6 py-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-500/20">
                ERP
              </span>
              <div>
                <h1 className="text-base font-semibold text-white">Omyxia ERP</h1>
                <p className="text-xs text-slate-400">Microservice Standalone Mode (Port 3002)</p>
              </div>
            </div>
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-300">
              <a href="/" className="hover:text-emerald-400 transition-colors">ภาพรวม</a>
              <a href="/accounts" className="hover:text-emerald-400 transition-colors">ผังบัญชี (CoA)</a>
              <a href="/journals" className="hover:text-emerald-400 transition-colors">สมุดรายวัน (GL)</a>
              <a href="/invoices" className="hover:text-emerald-400 transition-colors">ใบแจ้งหนี้ (AR)</a>
              <a href="/bills" className="hover:text-emerald-400 transition-colors">ใบรับวางบิล (AP)</a>
              <a href="/tax" className="hover:text-emerald-400 transition-colors">ภาษี (VAT & WHT)</a>
            </nav>
          </div>
        </header>
        <main className="p-8 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
