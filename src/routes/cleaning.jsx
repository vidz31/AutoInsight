import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { DashboardLayout, PageHeader } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Copy, Type, CheckCircle2, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
export const Route = createFileRoute("/cleaning")({
    component: CleaningPage,
});
const issues = [
    { id: "missing", icon: AlertTriangle, title: "Missing values", count: 142, severity: "warning", desc: "Found in revenue, region, and 2 other columns.", action: "Fill with median / mode" },
    { id: "dupes", icon: Copy, title: "Duplicate rows", count: 28, severity: "destructive", desc: "Exact duplicates detected across all columns.", action: "Remove duplicates" },
    { id: "types", icon: Type, title: "Type mismatches", count: 17, severity: "warning", desc: "Mixed types in 'order_date' and 'amount'.", action: "Auto-cast to inferred type" },
];
const cols = [
    { name: "id", type: "integer", missing: 0, unique: "100%" },
    { name: "customer", type: "string", missing: 2, unique: "94%" },
    { name: "region", type: "category", missing: 12, unique: "0.1%" },
    { name: "revenue", type: "float", missing: 88, unique: "76%" },
    { name: "order_date", type: "datetime", missing: 4, unique: "62%" },
    { name: "status", type: "category", missing: 0, unique: "0.05%" },
];
const severityStyles = {
    warning: "bg-warning/10 text-warning",
    destructive: "bg-destructive/10 text-destructive",
};
function CleaningPage() {
    const [opts, setOpts] = useState({ missing: true, dupes: true, types: true, outliers: false });
    const [running, setRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    const runClean = () => {
        setRunning(true);
        setProgress(0);
        const id = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(id);
                    setRunning(false);
                    toast.success("Cleaning complete — 187 issues fixed");
                    return 100;
                }
                return p + 10;
            });
        }, 150);
    };
    return (_jsxs(DashboardLayout, { children: [_jsxs(PageHeader, { title: "Data cleaning & profiling", description: "Review and fix data quality issues with one click.", children: [_jsx(Button, { asChild: true, variant: "outline", size: "sm", children: _jsxs(Link, { to: "/upload", children: [_jsx(ArrowLeft, { className: "mr-1.5 h-4 w-4" }), " Back to upload"] }) }), _jsxs(Button, { onClick: runClean, disabled: running, size: "sm", children: [_jsx(Sparkles, { className: "mr-1.5 h-4 w-4" }), " ", running ? "Cleaning…" : "Run auto-clean"] })] }), running && (_jsxs(Card, { className: "mb-5 border-border bg-card p-5 shadow-xs", children: [_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { className: "font-medium", children: "Cleaning in progress" }), _jsxs("span", { className: "font-mono text-muted-foreground", children: [progress, "%"] })] }), _jsx(Progress, { value: progress, className: "mt-3" })] })), _jsx("div", { className: "grid gap-4 sm:grid-cols-3", children: issues.map((iss) => (_jsxs(Card, { className: "hover-lift border-border bg-card p-5 shadow-xs", children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsx("div", { className: `flex h-9 w-9 items-center justify-center rounded-lg ${severityStyles[iss.severity]}`, children: _jsx(iss.icon, { className: "h-4 w-4" }) }), _jsx("span", { className: "text-2xl font-semibold tracking-tight", children: iss.count })] }), _jsx("h3", { className: "mt-3 font-semibold", children: iss.title }), _jsx("p", { className: "mt-1 text-xs leading-relaxed text-muted-foreground", children: iss.desc }), _jsx(Button, { variant: "outline", size: "sm", className: "mt-4 w-full", children: iss.action })] }, iss.id))) }), _jsxs("div", { className: "mt-5 grid gap-4 lg:grid-cols-3", children: [_jsxs(Card, { className: "border-border bg-card p-5 shadow-xs lg:col-span-2", children: [_jsx("h3", { className: "mb-4 font-semibold", children: "Column profile" }), _jsx("div", { className: "overflow-x-auto rounded-lg border border-border", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { className: "bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-2.5 text-left font-medium", children: "Column" }), _jsx("th", { className: "px-4 py-2.5 text-left font-medium", children: "Type" }), _jsx("th", { className: "px-4 py-2.5 text-left font-medium", children: "Missing" }), _jsx("th", { className: "px-4 py-2.5 text-left font-medium", children: "Unique" }), _jsx("th", { className: "px-4 py-2.5 text-left font-medium", children: "Status" })] }) }), _jsx("tbody", { children: cols.map((c) => (_jsxs("tr", { className: "border-t border-border hover:bg-muted/30", children: [_jsx("td", { className: "px-4 py-2.5 font-mono text-xs", children: c.name }), _jsx("td", { className: "px-4 py-2.5", children: _jsx(Badge, { variant: "secondary", className: "text-xs font-normal", children: c.type }) }), _jsx("td", { className: "px-4 py-2.5", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { children: c.missing }), c.missing > 0 && _jsx("div", { className: "h-1 w-16 overflow-hidden rounded-full bg-muted", children: _jsx("div", { className: "h-full bg-warning", style: { width: `${Math.min(100, c.missing)}%` } }) })] }) }), _jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: c.unique }), _jsx("td", { className: "px-4 py-2.5", children: c.missing === 0 ? _jsx(CheckCircle2, { className: "h-4 w-4 text-success" }) : _jsx(AlertTriangle, { className: "h-4 w-4 text-warning" }) })] }, c.name))) })] }) })] }), _jsxs(Card, { className: "border-border bg-card p-5 shadow-xs", children: [_jsx("h3", { className: "mb-4 font-semibold", children: "Cleaning options" }), _jsx("div", { className: "space-y-4", children: [
                                    { key: "missing", label: "Fill missing values", desc: "Median for numeric, mode for categorical" },
                                    { key: "dupes", label: "Remove duplicates", desc: "Drop exact-match rows" },
                                    { key: "types", label: "Fix data types", desc: "Cast to inferred types" },
                                    { key: "outliers", label: "Flag outliers", desc: "Mark values beyond 3σ" },
                                ].map((o) => (_jsxs("div", { className: "flex items-start justify-between gap-3", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium", children: o.label }), _jsx("p", { className: "text-xs text-muted-foreground", children: o.desc })] }), _jsx(Switch, { checked: opts[o.key], onCheckedChange: (v) => setOpts({ ...opts, [o.key]: v }) })] }, o.key))) }), _jsx(Button, { asChild: true, className: "mt-6 w-full", children: _jsxs(Link, { to: "/insights", children: ["Continue to insights ", _jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })] }) })] })] })] }));
}
