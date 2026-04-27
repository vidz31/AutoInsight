import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Send, User, BarChart3 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
export const Route = createFileRoute("/chat")({
    component: ChatPage,
});
const suggestions = [
    "Show revenue trends by quarter",
    "Why is APAC churn increasing?",
    "Predict Q4 sales for top 5 customers",
    "Find anomalies in last 30 days",
];
const initial = [
    { role: "ai", content: "Hi! I'm your AI data analyst. Ask me anything about your dataset — trends, anomalies, predictions, or just 'what changed this week'." },
];
const tooltipStyle = {
    background: "var(--color-popover)",
    border: "1px solid var(--color-border)",
    borderRadius: 8,
    fontSize: 12,
    boxShadow: "var(--shadow-md)",
};
function ChatPage() {
    const [messages, setMessages] = useState(initial);
    const [input, setInput] = useState("");
    const [thinking, setThinking] = useState(false);
    const endRef = useRef(null);
    useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, thinking]);
    const send = (text) => {
        if (!text.trim())
            return;
        setMessages((m) => [...m, { role: "user", content: text }]);
        setInput("");
        setThinking(true);
        setTimeout(() => {
            const reply = {
                role: "ai",
                content: "Based on your dataset, revenue grew 23% in Q3 driven by EMEA enterprise. The top contributing month was August (+34% vs July). Here's a quick breakdown:",
                chart: [
                    { name: "Q1", v: 180 }, { name: "Q2", v: 220 },
                    { name: "Q3", v: 271 }, { name: "Q4 (proj)", v: 340 },
                ],
            };
            setMessages((m) => [...m, reply]);
            setThinking(false);
        }, 900);
    };
    return (_jsx(DashboardLayout, { children: _jsxs("div", { className: "mx-auto flex h-[calc(100vh-10rem)] max-w-3xl flex-col", children: [_jsxs("div", { className: "mb-4 border-b border-border pb-4", children: [_jsx("h1", { className: "text-xl font-semibold tracking-tight", children: "AI data chat" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Ask questions about your data in plain English." })] }), _jsxs(Card, { className: "flex flex-1 flex-col overflow-hidden border-border bg-card shadow-xs", children: [_jsxs("div", { className: "flex-1 space-y-4 overflow-y-auto p-5", children: [messages.map((m, i) => (_jsxs("div", { className: `flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`, children: [_jsx("div", { className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${m.role === "ai" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`, children: m.role === "ai" ? _jsx(Sparkles, { className: "h-4 w-4" }) : _jsx(User, { className: "h-4 w-4" }) }), _jsxs("div", { className: `max-w-[80%] rounded-lg px-4 py-3 text-sm ${m.role === "ai" ? "border border-border bg-background" : "bg-primary text-primary-foreground"}`, children: [_jsx("p", { className: "leading-relaxed", children: m.content }), m.chart && (_jsxs("div", { className: "mt-3 h-44 rounded-md border border-border bg-card p-2", children: [_jsxs("div", { className: "mb-1 flex items-center gap-1.5 text-xs text-muted-foreground", children: [_jsx(BarChart3, { className: "h-3 w-3" }), " Quarterly revenue"] }), _jsx(ResponsiveContainer, { width: "100%", height: "85%", children: _jsxs(BarChart, { data: m.chart, margin: { top: 0, right: 0, left: -25, bottom: 0 }, children: [_jsx(CartesianGrid, { stroke: "var(--color-border)", strokeDasharray: "3 3", vertical: false }), _jsx(XAxis, { dataKey: "name", stroke: "var(--color-muted-foreground)", fontSize: 10, tickLine: false, axisLine: false }), _jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 10, tickLine: false, axisLine: false }), _jsx(Tooltip, { contentStyle: tooltipStyle, cursor: { fill: "var(--color-muted)" } }), _jsx(Bar, { dataKey: "v", fill: "var(--color-chart-1)", radius: [3, 3, 0, 0] })] }) })] }))] })] }, i))), thinking && (_jsxs("div", { className: "flex gap-3", children: [_jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground", children: _jsx(Sparkles, { className: "h-4 w-4" }) }), _jsxs("div", { className: "flex items-center gap-1 rounded-lg border border-border bg-background px-4 py-3", children: [_jsx("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-primary", style: { animationDelay: "0ms" } }), _jsx("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-primary", style: { animationDelay: "150ms" } }), _jsx("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-primary", style: { animationDelay: "300ms" } })] })] })), _jsx("div", { ref: endRef })] }), messages.length <= 1 && (_jsxs("div", { className: "border-t border-border px-5 py-3", children: [_jsx("div", { className: "mb-2 text-xs font-medium text-muted-foreground", children: "Try asking:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: suggestions.map((s) => (_jsx("button", { onClick: () => send(s), className: "rounded-full border border-border bg-background px-3 py-1 text-xs transition-smooth hover:border-primary/40 hover:bg-primary-soft", children: s }, s))) })] })), _jsxs("form", { onSubmit: (e) => { e.preventDefault(); send(input); }, className: "flex gap-2 border-t border-border p-3", children: [_jsx(Input, { value: input, onChange: (e) => setInput(e.target.value), placeholder: "Ask anything about your data\u2026", className: "bg-background" }), _jsx(Button, { type: "submit", size: "icon", disabled: !input.trim(), children: _jsx(Send, { className: "h-4 w-4" }) })] })] })] }) }));
}
