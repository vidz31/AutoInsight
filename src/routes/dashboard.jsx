import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout, PageHeader } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, Sparkles, TrendingUp, Activity, Upload, MessageSquare, ArrowUpRight, FileBarChart, ArrowDownRight } from "lucide-react";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar, CartesianGrid } from "recharts";
export const Route = createFileRoute("/dashboard")({
    component: DashboardPage,
});
const trend = [
    { d: "Mon", v: 42 }, { d: "Tue", v: 65 }, { d: "Wed", v: 58 },
    { d: "Thu", v: 91 }, { d: "Fri", v: 78 }, { d: "Sat", v: 110 }, { d: "Sun", v: 132 },
];
const cats = [
    { name: "Sales", a: 240 }, { name: "Marketing", a: 180 }, { name: "Ops", a: 96 },
    { name: "Finance", a: 152 }, { name: "Product", a: 207 },
];
const stats = [
    { label: "Total datasets", value: "24", change: "+12%", up: true, icon: Database },
    { label: "Insights generated", value: "1,284", change: "+38%", up: true, icon: Sparkles },
    { label: "Predictions accuracy", value: "97.4%", change: "+2.1%", up: true, icon: TrendingUp },
    { label: "Active analyses", value: "8", change: "Live", up: true, icon: Activity },
];
const activity = [
    { who: "You", what: "uploaded sales-q4.csv", when: "2m ago", icon: Upload },
    { who: "AutoInsight", what: "found 3 anomalies in revenue stream", when: "14m ago", icon: Sparkles },
    { who: "You", what: "exported Q3 Performance report", when: "1h ago", icon: FileBarChart },
    { who: "AutoInsight", what: "completed predictive model training", when: "3h ago", icon: TrendingUp },
];
const tooltipStyle = {
    background: "var(--color-popover)",
    border: "1px solid var(--color-border)",
    borderRadius: 8,
    fontSize: 12,
    boxShadow: "var(--shadow-md)",
};
function DashboardPage() {
    return (_jsxs(DashboardLayout, { children: [_jsxs(PageHeader, { title: "Welcome back, Ada", description: "Here's an overview of your workspace today.", children: [_jsx(Button, { asChild: true, variant: "outline", size: "sm", children: _jsxs(Link, { to: "/chat", children: [_jsx(MessageSquare, { className: "mr-1.5 h-4 w-4" }), " Ask AI"] }) }), _jsx(Button, { asChild: true, size: "sm", children: _jsxs(Link, { to: "/upload", children: [_jsx(Upload, { className: "mr-1.5 h-4 w-4" }), " New dataset"] }) })] }), _jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s) => (_jsxs(Card, { className: "border-border bg-card p-5 shadow-xs hover-lift", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: s.label }), _jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-md bg-primary-soft text-primary", children: _jsx(s.icon, { className: "h-3.5 w-3.5" }) })] }), _jsxs("div", { className: "mt-3 flex items-baseline gap-2", children: [_jsx("span", { className: "text-2xl font-semibold tracking-tight", children: s.value }), _jsxs("span", { className: `flex items-center gap-0.5 text-xs font-medium ${s.up ? "text-success" : "text-destructive"}`, children: [s.up ? _jsx(ArrowUpRight, { className: "h-3 w-3" }) : _jsx(ArrowDownRight, { className: "h-3 w-3" }), s.change] })] }), _jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: "vs. last week" })] }, s.label))) }), _jsxs("div", { className: "mt-5 grid gap-4 lg:grid-cols-3", children: [_jsxs(Card, { className: "border-border bg-card p-5 shadow-xs lg:col-span-2", children: [_jsxs("div", { className: "mb-4 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Insights generated" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Last 7 days" })] }), _jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: _jsxs(Link, { to: "/insights", children: ["View all ", _jsx(ArrowUpRight, { className: "ml-1 h-3 w-3" })] }) })] }), _jsx("div", { className: "h-64", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(AreaChart, { data: trend, margin: { top: 5, right: 5, left: -15, bottom: 0 }, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "dashGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "0%", stopColor: "var(--color-chart-1)", stopOpacity: 0.25 }), _jsx("stop", { offset: "100%", stopColor: "var(--color-chart-1)", stopOpacity: 0 })] }) }), _jsx(CartesianGrid, { stroke: "var(--color-border)", strokeDasharray: "3 3", vertical: false }), _jsx(XAxis, { dataKey: "d", stroke: "var(--color-muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }), _jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }), _jsx(Tooltip, { contentStyle: tooltipStyle }), _jsx(Area, { type: "monotone", dataKey: "v", stroke: "var(--color-chart-1)", strokeWidth: 2, fill: "url(#dashGrad)" })] }) }) })] }), _jsxs(Card, { className: "border-border bg-card p-5 shadow-xs", children: [_jsx("h3", { className: "mb-4 font-semibold", children: "By category" }), _jsx("div", { className: "h-64", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(BarChart, { data: cats, margin: { top: 5, right: 5, left: -15, bottom: 0 }, children: [_jsx(CartesianGrid, { stroke: "var(--color-border)", strokeDasharray: "3 3", vertical: false }), _jsx(XAxis, { dataKey: "name", stroke: "var(--color-muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }), _jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }), _jsx(Tooltip, { contentStyle: tooltipStyle, cursor: { fill: "var(--color-muted)" } }), _jsx(Bar, { dataKey: "a", fill: "var(--color-chart-1)", radius: [4, 4, 0, 0] })] }) }) })] })] }), _jsxs("div", { className: "mt-5 grid gap-4 lg:grid-cols-3", children: [_jsxs(Card, { className: "border-border bg-card p-5 shadow-xs lg:col-span-2", children: [_jsxs("div", { className: "mb-4 flex items-center justify-between", children: [_jsx("h3", { className: "font-semibold", children: "Recent activity" }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: "Live" })] }), _jsx("ul", { className: "divide-y divide-border", children: activity.map((a, i) => (_jsxs("li", { className: "flex items-center gap-3 py-3 first:pt-0 last:pb-0", children: [_jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-md bg-primary-soft text-primary", children: _jsx(a.icon, { className: "h-4 w-4" }) }), _jsx("div", { className: "min-w-0 flex-1", children: _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: a.who }), " ", _jsx("span", { className: "text-muted-foreground", children: a.what })] }) }), _jsx("span", { className: "text-xs text-muted-foreground", children: a.when })] }, i))) })] }), _jsxs(Card, { className: "border-border bg-card p-5 shadow-xs", children: [_jsx("h3", { className: "mb-4 font-semibold", children: "Quick actions" }), _jsx("div", { className: "space-y-2", children: [
                                    { to: "/upload", label: "Upload new dataset", icon: Upload },
                                    { to: "/cleaning", label: "Run auto-cleaning", icon: Sparkles },
                                    { to: "/visualizations", label: "Create visualization", icon: TrendingUp },
                                    { to: "/reports", label: "Generate report", icon: FileBarChart },
                                ].map((a) => (_jsx(Button, { asChild: true, variant: "outline", className: "w-full justify-start font-normal", children: _jsxs(Link, { to: a.to, children: [_jsx(a.icon, { className: "mr-2 h-4 w-4 text-primary" }), " ", a.label] }) }, a.to))) })] })] })] }));
}
