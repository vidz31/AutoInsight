import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { DashboardLayout, PageHeader } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { UploadCloud, FileSpreadsheet, FileJson, FileText, Sparkles, X, ArrowRight, Database } from "lucide-react";
export const Route = createFileRoute("/upload")({
    component: UploadPage,
});
const sampleRows = [
    { id: 1, customer: "Acme Corp", region: "EMEA", revenue: 12400, status: "Active" },
    { id: 2, customer: "Globex", region: "AMER", revenue: 8800, status: "Active" },
    { id: 3, customer: "Initech", region: "APAC", revenue: null, status: "Churned" },
    { id: 4, customer: "Umbrella", region: "EMEA", revenue: 24100, status: "Active" },
    { id: 5, customer: "Stark Ind.", region: "AMER", revenue: 31900, status: "Active" },
];
function UploadPage() {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [done, setDone] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const inputRef = useRef(null);
    const startUpload = (f) => {
        setFile(f);
        setUploading(true);
        setProgress(0);
        setDone(false);
        const id = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(id);
                    setUploading(false);
                    setDone(true);
                    toast.success("File uploaded successfully");
                    return 100;
                }
                return p + 8;
            });
        }, 120);
    };
    const onDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const f = e.dataTransfer.files?.[0];
        if (f)
            startUpload(f);
    };
    return (_jsxs(DashboardLayout, { children: [_jsx(PageHeader, { title: "Upload data", description: "Drag and drop your dataset to get started. Supports CSV, Excel, and JSON." }), _jsxs(Card, { onDragOver: (e) => { e.preventDefault(); setDragOver(true); }, onDragLeave: () => setDragOver(false), onDrop: onDrop, onClick: () => inputRef.current?.click(), className: `relative flex cursor-pointer flex-col items-center justify-center overflow-hidden border-2 border-dashed p-12 text-center transition-smooth ${dragOver ? "border-primary bg-primary-soft" : "border-border bg-card hover:border-primary/40 hover:bg-muted/30"}`, children: [_jsx("input", { ref: inputRef, type: "file", className: "hidden", accept: ".csv,.xlsx,.xls,.json", onChange: (e) => { const f = e.target.files?.[0]; if (f)
                            startUpload(f); } }), _jsx("div", { className: "mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-soft text-primary", children: _jsx(UploadCloud, { className: "h-7 w-7" }) }), _jsx("h3", { className: "text-base font-semibold", children: "Drop your file here" }), _jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "or click to browse \u00B7 Maximum file size 100 MB" }), _jsxs("div", { className: "mt-5 flex gap-2", children: [_jsxs(Badge, { variant: "secondary", className: "gap-1 font-normal", children: [_jsx(FileSpreadsheet, { className: "h-3 w-3" }), " CSV"] }), _jsxs(Badge, { variant: "secondary", className: "gap-1 font-normal", children: [_jsx(FileSpreadsheet, { className: "h-3 w-3" }), " Excel"] }), _jsxs(Badge, { variant: "secondary", className: "gap-1 font-normal", children: [_jsx(FileJson, { className: "h-3 w-3" }), " JSON"] })] })] }), file && (_jsx(Card, { className: "mt-5 border-border bg-card p-5 shadow-xs animate-fade-in-up", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary", children: _jsx(FileText, { className: "h-5 w-5" }) }), _jsxs("div", { className: "min-w-0 flex-1", children: [_jsxs("div", { className: "flex items-center justify-between gap-2", children: [_jsx("p", { className: "truncate font-medium", children: file.name }), _jsx(Button, { variant: "ghost", size: "icon", onClick: () => { setFile(null); setProgress(0); setDone(false); }, children: _jsx(X, { className: "h-4 w-4" }) })] }), _jsxs("p", { className: "text-xs text-muted-foreground", children: [(file.size / 1024).toFixed(1), " KB \u00B7 ", uploading ? "Uploading…" : done ? "Uploaded" : "Pending"] }), _jsx(Progress, { value: progress, className: "mt-2 h-1.5" })] })] }) })), done && (_jsxs(Card, { className: "mt-5 border-border bg-card p-5 shadow-xs animate-fade-in-up", children: [_jsxs("div", { className: "mb-4 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Preview" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "First 5 rows \u00B7 6 columns detected" })] }), _jsx(Badge, { className: "bg-success/10 text-success border-success/20 hover:bg-success/15", children: "Ready" })] }), _jsx("div", { className: "overflow-x-auto rounded-lg border border-border", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { className: "bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground", children: _jsx("tr", { children: Object.keys(sampleRows[0]).map((k) => _jsx("th", { className: "px-4 py-2.5 text-left font-medium", children: k }, k)) }) }), _jsx("tbody", { children: sampleRows.map((r) => (_jsx("tr", { className: "border-t border-border hover:bg-muted/30", children: Object.values(r).map((v, i) => (_jsx("td", { className: "px-4 py-2.5", children: v === null ? _jsx("span", { className: "rounded bg-warning/15 px-1.5 py-0.5 text-xs font-medium text-warning", children: "null" }) : String(v) }, i))) }, r.id))) })] }) }), _jsx("div", { className: "mt-5 flex justify-end", children: _jsx(Button, { asChild: true, children: _jsxs(Link, { to: "/cleaning", children: [_jsx(Sparkles, { className: "mr-1.5 h-4 w-4" }), " Analyze my data ", _jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })] }) }) })] })), !file && (_jsxs("div", { className: "mt-6", children: [_jsx("h3", { className: "mb-3 text-sm font-medium text-muted-foreground", children: "Recent datasets" }), _jsx("div", { className: "grid gap-3 sm:grid-cols-3", children: [
                            { name: "sales_2024.csv", size: "2.4 MB", rows: "12,840" },
                            { name: "users_export.xlsx", size: "890 KB", rows: "4,201" },
                            { name: "events.json", size: "5.1 MB", rows: "31,000" },
                        ].map((d) => (_jsx(Card, { className: "hover-lift border-border bg-card p-4 shadow-xs", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-md bg-primary-soft text-primary", children: _jsx(Database, { className: "h-4 w-4" }) }), _jsxs("div", { className: "min-w-0", children: [_jsx("p", { className: "truncate text-sm font-medium", children: d.name }), _jsxs("p", { className: "text-xs text-muted-foreground", children: [d.size, " \u00B7 ", d.rows, " rows"] })] })] }) }, d.name))) })] }))] }));
}
