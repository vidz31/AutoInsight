import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Upload, Sparkles, BarChart3, FileText, Settings, MessageSquare, Wand2, TrendingUp, Bell, Search, } from "lucide-react";
import { Logo } from "./Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
const navSections = [
    {
        label: "Overview",
        items: [
            { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
        ],
    },
    {
        label: "Data pipeline",
        items: [
            { to: "/upload", label: "Upload Data", icon: Upload },
            { to: "/cleaning", label: "Cleaning", icon: Wand2 },
        ],
    },
    {
        label: "Analytics",
        items: [
            { to: "/insights", label: "Insights", icon: Sparkles },
            { to: "/visualizations", label: "Visualizations", icon: BarChart3 },
            { to: "/predictions", label: "Predictions", icon: TrendingUp },
        ],
    },
    {
        label: "Workspace",
        items: [
            { to: "/reports", label: "Reports", icon: FileText },
            { to: "/chat", label: "AI Chat", icon: MessageSquare },
            { to: "/settings", label: "Settings", icon: Settings },
        ],
    },
];
const flatNav = navSections.flatMap((s) => s.items);
export function DashboardLayout({ children }) {
    const { location } = useRouterState();
    const path = location.pathname;
    return (_jsxs("div", { className: "flex min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.06),_transparent_35%),linear-gradient(180deg,rgba(248,250,252,1),rgba(255,255,255,1))]", children: [_jsxs("aside", { className: "sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/70 bg-sidebar/90 backdrop-blur-xl lg:flex", children: [_jsx("div", { className: "flex h-18 items-center border-b border-border/70 px-6", children: _jsx(Logo, {}) }), _jsx("nav", { className: "flex-1 overflow-y-auto px-3 py-5", children: navSections.map((section) => (_jsxs("div", { className: "mb-6", children: [_jsx("div", { className: "px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70", children: section.label }), _jsx("div", { className: "space-y-1", children: section.items.map((item) => {
                                        const active = path === item.to;
                                        return (_jsxs(Link, { to: item.to, className: cn("flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-smooth", active
                                                ? "bg-primary text-primary-foreground shadow-sm-soft"
                                                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"), children: [_jsx(item.icon, { className: cn("h-4 w-4", active ? "text-primary-foreground" : "text-muted-foreground") }), item.label] }, item.to));
                                    }) })] }, section.label))) }), _jsxs("div", { className: "m-3 rounded-xl border border-border bg-card p-4 shadow-xs", children: [_jsx("div", { className: "text-xs font-semibold text-foreground", children: "Free trial" }), _jsx("div", { className: "mt-0.5 text-xs text-muted-foreground", children: "12 days remaining" }), _jsx("div", { className: "mt-3 h-1.5 overflow-hidden rounded-full bg-muted", children: _jsx("div", { className: "h-full w-[60%] rounded-full bg-primary" }) }), _jsx(Button, { asChild: true, size: "sm", className: "mt-3 w-full rounded-full", children: _jsx(Link, { to: "/settings", children: "Upgrade plan" }) })] })] }), _jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [_jsxs("header", { className: "sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-border/70 bg-background/85 px-4 backdrop-blur-xl sm:px-6", children: [_jsx("div", { className: "lg:hidden", children: _jsx(Logo, {}) }), _jsxs("div", { className: "relative ml-auto hidden max-w-md flex-1 sm:block", children: [_jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), _jsx(Input, { placeholder: "Search datasets, insights…", className: "h-10 rounded-full border-border/70 bg-card pl-9 shadow-xs" })] }), _jsxs(Button, { variant: "ghost", size: "icon", className: "relative rounded-full text-muted-foreground hover:bg-muted hover:text-foreground", children: [_jsx(Bell, { className: "h-[18px] w-[18px]" }), _jsx("span", { className: "absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" })] }), _jsx("div", { className: "hidden h-8 w-px bg-border sm:block" }), _jsxs("div", { className: "hidden items-center gap-2.5 sm:flex", children: [_jsx(Avatar, { className: "h-8 w-8 border border-border", children: _jsx(AvatarFallback, { className: "bg-primary text-primary-foreground text-xs font-semibold", children: "AL" }) }), _jsxs("div", { className: "hidden flex-col leading-tight md:flex", children: [_jsx("span", { className: "text-sm font-medium", children: "Ada Lovelace" }), _jsx("span", { className: "text-xs text-muted-foreground", children: "Head of Data" })] })] })] }), _jsx("nav", { className: "flex gap-1 overflow-x-auto border-b border-border/70 bg-card/50 p-2 lg:hidden", children: flatNav.map((item) => {
                            const active = path === item.to;
                            return (_jsxs(Link, { to: item.to, className: cn("flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-smooth", active ? "bg-primary text-primary-foreground shadow-sm-soft" : "text-muted-foreground hover:bg-muted hover:text-foreground"), children: [_jsx(item.icon, { className: "h-3.5 w-3.5" }), item.label] }, item.to));
                        }) }), _jsx("main", { className: "flex-1 px-4 py-6 sm:px-6 lg:px-8", children: children })] })] }));
}
export function PageHeader({ title, description, children }) {
    return (_jsxs("div", { className: "mb-6 flex flex-col gap-3 border-b border-border/70 pb-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground sm:text-2xl", children: title }), description && _jsx("p", { className: "mt-1 max-w-2xl text-sm leading-6 text-muted-foreground", children: description })] }), children && _jsx("div", { className: "flex flex-wrap gap-2", children: children })] }));
}
