import React, { useState } from 'react';
import { Code, Copy, Check, Download, ExternalLink, X, FileCode, Sparkles } from 'lucide-react';

interface CombinedCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CombinedCodeModal: React.FC<CombinedCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  if (!isOpen) return null;

  const handleDownload = () => {
    fetch('/hive-arena-combined.html')
      .then(res => res.text())
      .then(htmlContent => {
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'index.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
  };

  const handleCopyCode = () => {
    fetch('/hive-arena-combined.html')
      .then(res => res.text())
      .then(htmlContent => {
        navigator.clipboard.writeText(htmlContent);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0c081e] border-2 border-yellow-400/80 rounded-3xl max-w-4xl w-full h-[90vh] flex flex-col text-zinc-100 shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-purple-900/80 flex items-center justify-between bg-[#120a28]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900 border border-yellow-400 flex items-center justify-center text-yellow-300">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-lg text-white">
                  ALL-IN-ONE COMBINED HTML + CSS + JS
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-400 text-black uppercase">
                  Standalone
                </span>
              </div>
              <p className="text-xs text-purple-300 font-medium">
                Single self-contained file with embedded styles &amp; scripts • Ready to double-click or host anywhere
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-purple-900/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-4 py-2.5 bg-[#090514] border-b border-purple-900/50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'preview'
                  ? 'bg-purple-600 text-white border border-yellow-400/50'
                  : 'text-zinc-400 hover:text-white bg-purple-950/40'
              }`}
            >
              Live Standalone Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'code'
                  ? 'bg-purple-600 text-white border border-yellow-400/50'
                  : 'text-zinc-400 hover:text-white bg-purple-950/40'
              }`}
            >
              Source Code View
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-purple-800 flex items-center gap-1.5 font-semibold cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied 100%!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Copy Combined File</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-display font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md shadow-yellow-400/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download index.html</span>
            </button>

            <a
              href="/hive-arena-combined.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-purple-900/40"
              title="Open standalone page in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Content Pane */}
        <div className="flex-1 overflow-hidden relative bg-[#070411]">
          {activeTab === 'preview' ? (
            <iframe
              src="/hive-arena-combined.html"
              title="Combined HTML CSS JS Standalone Preview"
              className="w-full h-full border-none"
            />
          ) : (
            <div className="w-full h-full p-4 overflow-auto font-mono text-[11px] text-purple-200 bg-[#06030e] leading-relaxed selection:bg-purple-600">
              <pre>
                <code>{`<!-- ========================================================
     HIVE THE GAMING ARENA - STANDALONE ALL-IN-ONE
     Combined HTML, CSS, and Vanilla JavaScript
     Location: MVV6+83J, Shastri Nagar, Jammu 180004
     Timings: 10:00 AM - 11:00 PM Everyday
     ======================================================== -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HIVE The Gaming Arena | Shastri Nagar, Jammu</title>
  ... (Click "Copy Combined File" or "Download index.html" above for complete 600+ line self-contained file)`}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-3 bg-[#0a0516] border-t border-purple-900/60 text-[11px] text-zinc-400 flex items-center justify-between">
          <span>
            Single-file delivery: Includes all HTML elements, CSS variables, cyber styles, and JS calculator logic.
          </span>
          <span className="text-yellow-300 font-semibold font-mono">
            /public/hive-arena-combined.html
          </span>
        </div>

      </div>
    </div>
  );
};
