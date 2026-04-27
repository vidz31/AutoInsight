import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout, PageHeader } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertCircle, Sparkles, BarChart3, Lightbulb, ArrowRight, Filter } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
export const Route = createFileRoute("/insights")({
    component: InsightsPage,
});
const insights = [
    { tag: "Trend", icon: TrendingUp, tone: "success", title: "Revenue increased by 23% in Q3", desc: "Driven by 47% growth in EMEA. Average deal size rose from $4.2k to $5.1k.", spark: [12, 18, 15, 22, 28, 31, 38] },
    { tag: "Top performer", icon: Sparkles, tone: "primary", title: "Enterprise tier is your top performer", desc: "Generating 62% of revenue from only 18% of customers. Retention is 94%.", spark: [40, 42, 48, 55, 60, 62, 65] },
    { tag: "Anomaly", icon: AlertCircle, tone: "warning", title: "Unusual churn spike on Tuesdays", desc: "3.2× baseline churn rate detected on Tuesdays in the SMB segment over 6 weeks.", spark: [10, 8, 32, 9, 11, 30, 8] },
    { tag: "Decline", icon: TrendingDown, tone: "destructive", title: "APAC conversions dropped 14%", desc: "Funnel drop-off concentrated at the trial-to-paid step. Investigate pricing perception.", spark: [50, 48, 47, 42, 38, 35, 36] },
    { tag: "Opportunity", icon: Lightbulb, tone: "primary", title: "Underserved mid-market segment", desc: "201 leads with high intent score haven't been contacted in 30 days. Est. value: $1.2M.", spark: [20, 25, 28, 30, 35, 40, 45] },
    { tag: "Correlation", icon: BarChart3, tone: "primary", title: "Email engagement → upgrades", desc: "Customers opening 3+ product emails/month upgrade at 4.7× the rate.", spark: [10, 14, 18, 22, 28, 35, 42] },
];
const toneMap = {
    success: "bg-success/10 text-success border-success/20",
    primary: "bg-primary-soft text-primary border-primary/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    destructive: "bg-destructive/10 text-destructive border-destructive/20",
};
function InsightsPage() {
    return (_jsxs(DashboardLayout, { children: [_jsxs(PageHeader, { title: "AI insights", description: "Natural-language insights surfaced from your data automatically.", children: [_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Filter, { className: "mr-1.5 h-4 w-4" }), " Filter"] }), _jsx(Button, { asChild: true, size: "sm", children: _jsxs(Link, { to: "/chat", children: [_jsx(Sparkles, { className: "mr-1.5 h-4 w-4" }), " Ask follow-up"] }) })] }), _jsx(Card, { className: "mb-5 border-border bg-card p-6 shadow-xs", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: _jsx(Sparkles, { className: "h-5 w-5" }) }), _jsxs("div", { children: [_jsxs("div", { className: "mb-1 flex items-center gap-2", children: [_jsx("h3", { className: "font-semibold", children: "Executive summary" }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: "Updated 2m ago" })] }), _jsxs("p", { className: "text-sm leading-relaxed text-muted-foreground", children: ["Your business is growing healthily with ", _jsx("span", { className: "font-medium text-foreground", children: "+23% revenue in Q3" }), ", led by EMEA enterprise. Two areas warrant attention: an unusual ", _jsx("span", { className: "font-medium text-warning", children: "Tuesday churn spike" }), " in SMB, and a ", _jsx("span", { className: "font-medium text-destructive", children: "14% APAC conversion drop" }), ". Acting on the underserved mid-market segment could unlock ", _jsx("span", { className: "font-medium text-success", children: "~$1.2M" }), " in pipeline."] })] })] }) }), _jsx("div", { className: "grid gap-4 md:grid-cols-2", children: insights.map((i) => (_jsxs(Card, { className: "hover-lift border-border bg-card p-5 shadow-xs", children: [_jsxs("div", { className: "flex items-start justify-between gap-3", children: [_jsxs(Badge, { variant: "outline", className: `${toneMap[i.tone]} font-medium`, children: [_jsx(i.icon, { className: "mr-1 h-3 w-3" }), " ", i.tag] }), _jsx("div", { className: "h-9 w-24", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsx(LineChart, { data: i.spark.map((v) => ({ v })), children: _jsx(Line, { type: "monotone", dataKey: "v", stroke: "var(--color-chart-1)", strokeWidth: 1.75, dot: false }) }) }) })] }), _jsx("h3", { className: "mt-3 text-base font-semibold", children: i.title }), _jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: i.desc }), _jsx("div", { className: "mt-4 flex justify-end border-t border-border pt-3", children: _jsxs(Button, { variant: "ghost", size: "sm", children: ["Explore ", _jsx(ArrowRight, { className: "ml-1 h-3 w-3" })] }) })] }, i.title))) })] }));
}
