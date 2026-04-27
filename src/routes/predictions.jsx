import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout, PageHeader } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Brain, Zap, Target } from "lucide-react";
import { ResponsiveContainer, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, Area, AreaChart } from "recharts";
export const Route = createFileRoute("/predictions")({
    component: PredictionsPage,
});
const forecast = [
    { m: "Jul", actual: 110, predicted: null, low: null, high: null },
    { m: "Aug", actual: 132, predicted: null, low: null, high: null },
    { m: "Sep", actual: 148, predicted: null, low: null, high: null },
    { m: "Oct", actual: null, predicted: 162, low: 150, high: 175 },
    { m: "Nov", actual: null, predicted: 178, low: 158, high: 198 },
    { m: "Dec", actual: null, predicted: 195, low: 168, high: 222 },
    { m: "Jan", actual: null, predicted: 210, low: 175, high: 245 },
];
const models = [
    { name: "Linear Regression", accuracy: 89.2, suggested: false },
    { name: "Random Forest", accuracy: 94.7, suggested: false },
    { name: "Gradient Boost", accuracy: 97.4, suggested: true },
    { name: "Neural Network", accuracy: 96.1, suggested: false },
];
const tooltipStyle = {
    background: "var(--color-popover)",
    border: "1px solid var(--color-border)",
    borderRadius: 8,
    fontSize: 12,
    boxShadow: "var(--shadow-md)",
};
function PredictionsPage() {
    return (_jsxs(DashboardLayout, { children: [_jsxs(PageHeader, { title: "Predictive analytics", description: "Forecast outcomes and discover what drives them.", children: [_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Brain, { className: "mr-1.5 h-4 w-4" }), " Retrain"] }), _jsxs(Button, { size: "sm", children: [_jsx(Zap, { className: "mr-1.5 h-4 w-4" }), " Run new prediction"] })] }), _jsx("div", { className: "grid gap-4 sm:grid-cols-3", children: [
                    { label: "Best model", value: "Gradient Boost", icon: Brain },
                    { label: "Accuracy", value: "97.4%", icon: Target, success: true },
                    { label: "Forecast horizon", value: "4 months", icon: TrendingUp },
                ].map((s) => (_jsxs(Card, { className: "border-border bg-card p-5 shadow-xs", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: s.label }), _jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-md bg-primary-soft text-primary", children: _jsx(s.icon, { className: "h-3.5 w-3.5" }) })] }), _jsx("div", { className: "mt-3 text-xl font-semibold tracking-tight", children: s.success ? _jsx("span", { className: "text-success", children: s.value }) : s.value })] }, s.label))) }), _jsxs(Card, { className: "mt-5 border-border bg-card p-5 shadow-xs", children: [_jsxs("div", { className: "mb-4 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Revenue forecast \u2014 next 4 months" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "95% confidence interval shown in shade" })] }), _jsx(Badge, { variant: "outline", className: "border-success/30 bg-success/10 text-success", children: "+38% projected growth" })] }), _jsx("div", { className: "h-80", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(AreaChart, { data: forecast, margin: { top: 5, right: 5, left: -15, bottom: 0 }, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "confGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "0%", stopColor: "var(--color-chart-3)", stopOpacity: 0.25 }), _jsx("stop", { offset: "100%", stopColor: "var(--color-chart-3)", stopOpacity: 0 })] }) }), _jsx(CartesianGrid, { stroke: "var(--color-border)", strokeDasharray: "3 3", vertical: false }), _jsx(XAxis, { dataKey: "m", stroke: "var(--color-muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }), _jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }), _jsx(Tooltip, { contentStyle: tooltipStyle }), _jsx(ReferenceLine, { x: "Sep", stroke: "var(--color-muted-foreground)", strokeDasharray: "4 4", label: { value: "Today", fill: "var(--color-muted-foreground)", fontSize: 11 } }), _jsx(Area, { type: "monotone", dataKey: "high", stroke: "none", fill: "url(#confGrad)" }), _jsx(Area, { type: "monotone", dataKey: "low", stroke: "none", fill: "var(--color-card)" }), _jsx(Line, { type: "monotone", dataKey: "actual", stroke: "var(--color-chart-1)", strokeWidth: 2, dot: { r: 3 } }), _jsx(Line, { type: "monotone", dataKey: "predicted", stroke: "var(--color-chart-3)", strokeWidth: 2, strokeDasharray: "6 4", dot: { r: 3 } })] }) }) })] }), _jsxs("div", { className: "mt-5 grid gap-4 lg:grid-cols-2", children: [_jsxs(Card, { className: "border-border bg-card p-5 shadow-xs", children: [_jsx("h3", { className: "mb-4 font-semibold", children: "Model comparison" }), _jsx("div", { className: "space-y-3", children: models.map((m) => (_jsxs("div", { className: "rounded-lg border border-border bg-background p-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm font-medium", children: m.name }), m.suggested && _jsx(Badge, { className: "bg-primary text-primary-foreground hover:bg-primary/90", children: "Suggested" })] }), _jsxs("span", { className: "text-sm font-mono text-muted-foreground", children: [m.accuracy, "%"] })] }), _jsx(Progress, { value: m.accuracy, className: "mt-2 h-1.5" })] }, m.name))) })] }), _jsxs(Card, { className: "border-border bg-card p-5 shadow-xs", children: [_jsx("h3", { className: "mb-4 font-semibold", children: "Top features driving predictions" }), _jsx("div", { className: "space-y-3", children: [
                                    { feat: "marketing_spend", imp: 92 },
                                    { feat: "seasonality", imp: 78 },
                                    { feat: "active_customers", imp: 65 },
                                    { feat: "avg_deal_size", imp: 54 },
                                    { feat: "support_tickets", imp: 31 },
                                ].map((f) => (_jsxs("div", { children: [_jsxs("div", { className: "mb-1 flex justify-between text-sm", children: [_jsx("span", { className: "font-mono text-xs", children: f.feat }), _jsxs("span", { className: "text-muted-foreground", children: [f.imp, "%"] })] }), _jsx("div", { className: "h-1.5 overflow-hidden rounded-full bg-muted", children: _jsx("div", { className: "h-full bg-primary", style: { width: `${f.imp}%` } }) })] }, f.feat))) })] })] })] }));
}
