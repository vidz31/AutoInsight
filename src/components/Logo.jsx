import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
export function Logo({ to = "/" }) {
    return (_jsxs(Link, { to: to, className: "flex items-center gap-2.5 group", children: [_jsx("div", { className: "relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-sm-soft", children: _jsx(Sparkles, { className: "h-4 w-4 text-primary-foreground", strokeWidth: 2.5 }) }), _jsxs("span", { className: "text-base font-semibold tracking-tight text-foreground", children: ["AutoInsight", _jsx("span", { className: "text-primary", children: " AI" })] })] }));
}
