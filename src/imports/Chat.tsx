import svgPaths from "./svg-0nid74xoow";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";

interface UserMessage {
  id: string;
  text: string;
  timestamp: string;
}

interface AIMessage {
  id: string;
  text: string;
  timestamp: string;
}

interface InputCardMessage {
  id: string;
  question: string;
  options: string[];
  timestamp: string;
  selectedOption?: string;
}

type ChatMessage =
  | { type: "user"; data: UserMessage }
  | { type: "ai"; data: AIMessage }
  | { type: "input_card"; data: InputCardMessage }
  | { type: "worked_with_agents"; data: { id: string; agentCount: number } }
  | { type: "creating_workspace"; data: { id: string } }
  | { type: "workspace_complete"; data: { id: string; text: string; buttonLabel: string; timestamp: string } }
  | { type: "offer_live"; data: { id: string; text: string; timestamp: string; selectedAction?: string } };

/** Matches timestamps on user/AI bubbles (12h, en-US). */
function formatChatTime(date: Date = new Date()): string {
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

/** Shared copy: live thinking trail + “Worked with agents” replay. */
const AGENT_TRAIL_LINES: readonly { label: string; detail: string }[] = [
  {
    label: "Performance Insights Agent",
    detail: "pulled catalog-wide sales, traffic, and conversion vs. peers. Narrowing waits on your budget goal.",
  },
  {
    label: "Promotions Agent",
    detail: "drafted promo options under alternate goals. Depth follows what you pick next.",
  },
  {
    label: "Ads Agent",
    detail: "sketched Sponsored Products + Target ROAS cuts; ads vs. promos split needs your priority.",
  },
];

function AgentTrailReplay() {
  return (
    <div
      style={{
        border: "1px solid #D5B9DF",
        borderRadius: "8px",
        padding: "12px",
        backgroundColor: "#FAFAFA",
        width: "100%",
        marginTop: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
      data-name="Agent Trail Replay"
    >
      {AGENT_TRAIL_LINES.map((line) => (
        <div
          key={line.label}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            width: "100%",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
            <circle cx="7" cy="7" r="6" stroke="#7B189F" strokeWidth="1.2" />
            <path d="M4.5 7L6.5 9L10 5" stroke="#7B189F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "var(--partnerhome-font-size-500)",
              lineHeight: "16px",
              color: "#646266",
              fontStyle: "italic",
              fontWeight: "normal",
              minWidth: 0,
              flex: "1 1 0",
            }}
          >
            Checked with{" "}
            <span style={{ fontWeight: "bold", color: "#211e22", fontStyle: "normal", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px" }}>{line.label}</span>
            {": "}
            {line.detail}
          </span>
        </div>
      ))}
    </div>
  );
}

function Vector() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Vector">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Vector">
          <path d={svgPaths.p3bab4b72} fill="url(#paint0_linear_2005_1264)" id="Vector_2" />
          <path d={svgPaths.p16776880} fill="var(--fill-0, #F5E8FA)" id="Vector_3" stroke="url(#paint1_linear_2005_1264)" strokeLinejoin="round" strokeWidth="1.64074" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_1264" x1="18.8305" x2="18.8305" y1="1.36189" y2="6.91484">
            <stop stopColor="#7B189F" />
            <stop offset="1" stopColor="#D5B9DF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_1264" x1="11.3383" x2="11.3383" y1="1" y2="20.4619">
            <stop stopColor="#7A2798" />
            <stop offset="1" stopColor="#DFC1EA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function BetaContainer2() {
  return (
    <span
      style={{
        fontFamily: "'Lato', 'Inter', sans-serif",
        fontWeight: "var(--partnerhome-font-weight-normal)",
        fontSize: "var(--partnerhome-font-size-1000)",
        lineHeight: "var(--partnerhome-line-height-base)",
        color: "var(--partnerhome-text-color-disabled)",
        whiteSpace: "nowrap",
      }}
      data-name="Beta Container"
    >
      beta
    </span>
  );
}

function BetaContainer() {
  return <BetaContainer2 />;
}

function LogoAndTitle() {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        fontFamily: "'Lato', 'Inter', sans-serif",
      }}
      data-name="Logo and Title"
    >
      <Vector />
      <span
        style={{
          fontSize: "var(--partnerhome-font-size-2000)",
          fontWeight: "var(--partnerhome-font-weight-bold)",
          lineHeight: "var(--partnerhome-line-height-base)",
          color: "var(--partnerhome-text-color-base)",
          fontFamily: "'Lato', 'Inter', sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        Partner Assistant
      </span>
    </div>
  );
}

function HistoryIcon({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[20px] cursor-pointer group" data-name="History Icon" onClick={onClick}>
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="7" stroke="#646266" strokeWidth="1.4" />
        <path d="M10 6.5V10L12.5 12" stroke="#646266" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </svg>
    </div>
  );
}

function HeaderIcon() {
  return (
    <div className="relative shrink-0 size-[20px] cursor-pointer group" data-name="New Chat">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <path d="M14.5 2.5l3 3M3.5 13.5l-1 4 4-1 10-10-3-3-10 10z" stroke="#646266" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </svg>
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: "calc(100% + 6px)", backgroundColor: "#211E22", color: "#FFFFFF", fontSize: "var(--partnerhome-font-size-500)", fontFamily: "'Lato', sans-serif", padding: "4px 8px", borderRadius: "4px", whiteSpace: "nowrap", opacity: 0, pointerEvents: "none", transition: "opacity 0.15s", zIndex: 50 }} className="group-hover:!opacity-100">
        New Chat
      </div>
    </div>
  );
}

function TasksIcon({ badgeCount, onClick }: { badgeCount?: number; onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[20px] cursor-pointer group" data-name="Tasks Icon" onClick={onClick}>
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <path d="M7.5 9.5l2.5 2.5L18 4" stroke="#646266" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        <path d="M17 10v5.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 15.5v-11A1.5 1.5 0 014.5 3H13" stroke="#646266" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </svg>
      {badgeCount != null && badgeCount > 0 && (
        <div
          style={{
            position: "absolute",
            top: "-6px",
            right: "-8px",
            minWidth: "16px",
            height: "16px",
            borderRadius: "8px",
            backgroundColor: "#EBEBEB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 4px",
            zIndex: 10,
          }}
        >
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", fontWeight: "bold", color: "#646266", lineHeight: "1" }}>3</span>
        </div>
      )}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: "calc(100% + 6px)", backgroundColor: "#211E22", color: "#FFFFFF", fontSize: "var(--partnerhome-font-size-500)", fontFamily: "'Lato', sans-serif", padding: "4px 8px", borderRadius: "4px", whiteSpace: "nowrap", opacity: 0, pointerEvents: "none", transition: "opacity 0.15s", zIndex: 50 }} className="group-hover:!opacity-100">
        Tasks
      </div>
    </div>
  );
}

function AgentsIcon({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[20px] cursor-pointer group" data-name="Agents Icon" onClick={onClick}>
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="6.5" r="3" stroke="#646266" strokeWidth="1.4" />
        <path d="M4.5 17.5v-1a4 4 0 014-4h3a4 4 0 014 4v1" stroke="#646266" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        <circle cx="16" cy="6.5" r="1.75" stroke="#646266" strokeWidth="1.1" />
        <path d="M17.5 12a2.5 2.5 0 00-2-1.25" stroke="#646266" strokeLinecap="round" strokeWidth="1.1" />
      </svg>
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: "calc(100% + 6px)", backgroundColor: "#211E22", color: "#FFFFFF", fontSize: "var(--partnerhome-font-size-500)", fontFamily: "'Lato', sans-serif", padding: "4px 8px", borderRadius: "4px", whiteSpace: "nowrap", opacity: 0, pointerEvents: "none", transition: "opacity 0.15s", zIndex: 50 }} className="group-hover:!opacity-100">
        Agents
      </div>
    </div>
  );
}

function Icon({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[20px] cursor-pointer" data-name="Icon" onClick={onClick}>
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <path d="M14 8.5L10 12.5L6 8.5" stroke="#646266" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </svg>
    </div>
  );
}

function HeaderIconsContainer({ onClose, taskBadgeCount, onTasksClick, onAgentsClick, onHistoryClick }: { onClose?: () => void; taskBadgeCount?: number; onTasksClick?: () => void; onAgentsClick?: () => void; onHistoryClick?: () => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }} data-name="Header Icons Container">
      <TasksIcon badgeCount={taskBadgeCount} onClick={onTasksClick} />
      <AgentsIcon onClick={onAgentsClick} />
      <HistoryIcon onClick={onHistoryClick} />
      <Icon onClick={onClose} />
    </div>
  );
}

function Header({ onClose, taskBadgeCount, onTasksClick, onAgentsClick, onHistoryClick }: { onClose?: () => void; taskBadgeCount?: number; onTasksClick?: () => void; onAgentsClick?: () => void; onHistoryClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center self-stretch">
        <LogoAndTitle />
      </div>
      <HeaderIconsContainer onClose={onClose} taskBadgeCount={taskBadgeCount} onTasksClick={onTasksClick} onAgentsClick={onAgentsClick} onHistoryClick={onHistoryClick} />
    </div>
  );
}

function Top({ className, onClose, taskBadgeCount, onTasksClick, onAgentsClick, onHistoryClick }: { className?: string; onClose?: () => void; taskBadgeCount?: number; onTasksClick?: () => void; onAgentsClick?: () => void; onHistoryClick?: () => void }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col items-start px-[12px] py-[12px] relative shrink-0 w-full"} data-name="top">
      <div aria-hidden="true" className="absolute border-[#d7d7d7] border-b border-solid inset-0 pointer-events-none" />
      <Header onClose={onClose} taskBadgeCount={taskBadgeCount} onTasksClick={onTasksClick} onAgentsClick={onAgentsClick} onHistoryClick={onHistoryClick} />
    </div>
  );
}

function MessageInfoIcons() {
  const iconStroke = "var(--partnerhome-neutral-50)";
  const strokeW = "0.7";
  return (
    <div style={{ display: "inline-flex", gap: "var(--partnerhome-spacing-500)", alignItems: "center" }} data-name="Message Info Icons">
      <svg width="12" height="12" viewBox="-0.5 -0.5 11.2 11.2" fill="none" style={{ display: "block", flexShrink: 0 }}>
        <path d={svgPaths.p2f507300} stroke={iconStroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeW} />
      </svg>
      <svg width="12" height="12" viewBox="-0.5 -0.5 11.2 11.2" fill="none" style={{ display: "block", flexShrink: 0 }}>
        <path d={svgPaths.p16bd5f00} stroke={iconStroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeW} />
      </svg>
      <svg width="12" height="12" viewBox="-0.5 -0.5 10 11.2" fill="none" style={{ display: "block", flexShrink: 0 }}>
        <path d={svgPaths.p3a351780} stroke={iconStroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeW} />
      </svg>
    </div>
  );
}

function MessageInfoContainer() {
  const [welcomeTime] = useState(() => formatChatTime(new Date()));
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }} data-name="Message Info Container">
      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "1", color: "#646266", whiteSpace: "nowrap", margin: 0 }}>{welcomeTime}</p>
    </div>
  );
}

function MessageContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0 w-full" data-name="Message Container">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <div className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#211e22] whitespace-pre-wrap" style={{ fontSize: "var(--partnerhome-font-size-500)" }}>
          <p className="font-['Lato:Bold',sans-serif] mb-0" style={{ fontWeight: "bold", fontSize: "var(--partnerhome-font-size-500)" }}>{`Hi Liberty, I'm Partner Assistant.`}</p>
          <p className="mb-0" style={{ fontSize: "var(--partnerhome-font-size-500)" }}>{`I can help you spot what needs attention, compare your options, and turn your goals into action.`}</p>
          
          <p className="font-['Lato:Bold',sans-serif]" style={{ fontWeight: "bold", fontSize: "var(--partnerhome-font-size-500)" }}>What would you like to do today?</p>
        </div>
      </div>
      <MessageInfoContainer />
    </div>
  );
}

function UserMessageBubble({ message }: { message: UserMessage }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full" data-name="Content section">
      <div className="bg-[#f1e9f1] flex items-start justify-end px-[16px] py-[8px] relative rounded-[4px]" style={{ maxWidth: "85%" }} data-name="Text">
        <p
          className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative text-[#211e22] text-right"
          style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", margin: 0, fontSize: "var(--partnerhome-font-size-500)" }}
        >
          {message.text}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} data-name="Paragraph container">
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "1", color: "#646266", whiteSpace: "nowrap", margin: 0 }}>{message.timestamp}</p>
      </div>
    </div>
  );
}

function ThinkingIndicator() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    // Show first line immediately
    setVisibleLines(1);
    const timer2 = setTimeout(() => setVisibleLines(2), 2000);
    const timer3 = setTimeout(() => setVisibleLines(3), 4000);
    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div
      style={{
        border: "1px solid #D5B9DF",
        borderRadius: "8px",
        padding: "12px",
        backgroundColor: "#FAFAFA",
      }}
      className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full"
      data-name="Thinking Indicator"
    >
      {AGENT_TRAIL_LINES.map((line, i) => {
        if (i >= visibleLines) return null;
        const isLatest = i === visibleLines - 1;
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              opacity: isLatest ? 1 : 0.5,
              transition: "opacity 0.4s ease",
              width: "100%",
            }}
          >
            {isLatest ? (
              <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0, marginTop: "2px" }}>
                {[0, 1, 2].map((d) => (
                  <div
                    key={d}
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "#7B189F",
                      animation: `thinkingDot 1.4s ease-in-out ${d * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                <circle cx="7" cy="7" r="6" stroke="#7B189F" strokeWidth="1.2" />
                <path d="M4.5 7L6.5 9L10 5" stroke="#7B189F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "var(--partnerhome-font-size-500)",
                lineHeight: "16px",
                color: "#646266",
                fontStyle: "italic",
                fontWeight: "normal",
                minWidth: 0,
                flex: "1 1 0",
              }}
            >
              Checking with{" "}
              <span style={{ fontWeight: "bold", color: "#211e22", fontStyle: "normal", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px" }}>{line.label}</span>{" "}
              {line.detail}
            </span>
          </div>
        );
      })}
      <style>{`
        @keyframes thinkingDot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

function SimpleThinkingIndicator() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
      className="content-stretch relative shrink-0 w-full"
      data-name="Simple Thinking Indicator"
    >
      <Vector />
      <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
        {[0, 1, 2].map((d) => (
          <div
            key={d}
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "#7B189F",
              animation: `thinkingDot 1.4s ease-in-out ${d * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes thinkingDot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

function AIMessageBubble({ message, hideFooter }: { message: AIMessage; hideFooter?: boolean }) {
  const renderBoldInSegment = (segment: string, keyPrefix: string): React.ReactNode[] => {
    const boldRegex = /\*\*(.+?)\*\*/g;
    const out: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let k = 0;
    while ((match = boldRegex.exec(segment)) !== null) {
      if (match.index > lastIndex) {
        out.push(segment.slice(lastIndex, match.index));
      }
      out.push(
        <span key={`${keyPrefix}-b-${k++}`} style={{ fontFamily: "'Lato', sans-serif", fontWeight: "bold" }}>
          {match[1]}
        </span>
      );
      lastIndex = boldRegex.lastIndex;
    }
    if (lastIndex < segment.length) {
      out.push(segment.slice(lastIndex));
    }
    if (out.length === 0 && segment.length > 0) {
      out.push(segment);
    }
    return out;
  };

  const renderText = (text: string) => {
    const parts: React.ReactNode[] = [];
    const lines = text.split("\n");
    lines.forEach((line, lineIdx) => {
      if (lineIdx > 0) {
        parts.push(<br key={`br-${lineIdx}`} />);
      }
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const lineparts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;
      let linkKey = 0;
      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          lineparts.push(
            ...renderBoldInSegment(line.slice(lastIndex, match.index), `${lineIdx}-t-${linkKey}`)
          );
        }
        lineparts.push(
          <a
            key={`${lineIdx}-a-${match.index}`}
            href={match[2]}
            onClick={(e) => e.preventDefault()}
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "var(--partnerhome-font-size-500)",
              lineHeight: "16px",
              color: "var(--partnerhome-text-color-primary, #7B189F)",
              textDecoration: "underline",
              cursor: "pointer",
              fontWeight: "normal",
            }}
          >
            {match[1]}
          </a>
        );
        lastIndex = linkRegex.lastIndex;
        linkKey += 1;
      }
      if (lastIndex < line.length) {
        lineparts.push(...renderBoldInSegment(line.slice(lastIndex), `${lineIdx}-end`));
      }
      if (lineparts.length === 0) {
        lineparts.push(...renderBoldInSegment(line, `${lineIdx}-plain`));
      }
      parts.push(...lineparts);
    });
    return parts;
  };

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0 w-full" data-name="AI Message">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            lineHeight: "16px",
            color: "#211e22",
            margin: 0,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            fontWeight: "normal",
          }}
        >
          {renderText(message.text)}
        </p>
      </div>
      {!hideFooter && (
      <div style={{ display: "flex", gap: "var(--partnerhome-spacing-1500)", alignItems: "center" }} data-name="Message Info Container">
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "1", color: "#646266", whiteSpace: "nowrap", margin: 0 }}>{message.timestamp}</p>
        <MessageInfoIcons />
      </div>
      )}
    </div>
  );
}

function InputCardBubble({
  message,
  onSelect,
}: {
  message: InputCardMessage;
  onSelect: (cardId: string, option: string) => void;
}) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0 w-full"
      data-name="Input Card"
    >
      <div
        style={{
          border: "1px solid #D5B9DF",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "#FFFFFF",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            lineHeight: "16px",
            color: "#211e22",
            fontWeight: "bold",
          }}
        >
          {message.question}
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {message.options.map((option, idx) => {
            const isSelected = message.selectedOption === option;
            const isHovered = hoveredIdx === idx;
            const isDisabled = !!message.selectedOption && !isSelected;

            return (
              <button
                key={idx}
                onClick={() => {
                  if (!message.selectedOption) {
                    onSelect(message.id, option);
                  }
                }}
                onMouseEnter={() => !message.selectedOption && setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: isSelected
                    ? "1.5px solid #66256A"
                    : isHovered
                    ? "1px solid #7B189F"
                    : "1px solid #D1D1D6",
                  backgroundColor: isSelected
                    ? "#F1E9F1"
                    : isHovered
                    ? "#FAFAFA"
                    : "#FFFFFF",
                  cursor: message.selectedOption ? "default" : "pointer",
                  opacity: isDisabled ? 0.45 : 1,
                  transition: "all 0.15s ease",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "var(--partnerhome-font-size-500)",
                  lineHeight: "16px",
                  fontWeight: "normal",
                  color: "#211e22",
                  textAlign: "left",
                  boxShadow: "none",
                  width: "100%",
                }}
              >
                {/* Radio circle */}
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    border: isSelected ? "1.5px solid #66256A" : "1.5px solid #93939A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "border-color 0.15s ease",
                  }}
                >
                  {isSelected && (
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#66256A",
                      }}
                    />
                  )}
                </div>
                {option}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }} data-name="Message Info Container">
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "1", color: "#646266", whiteSpace: "nowrap" }}>{message.timestamp}</span>
      </div>
    </div>
  );
}

function WorkedWithAgentsBubble({ agentCount }: { agentCount: number }) {
  const [hovered, setHovered] = useState(false);
  const [trailOpen, setTrailOpen] = useState(false);

  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Worked With Agents"
    >
      <button
        type="button"
        aria-expanded={trailOpen}
        aria-label={trailOpen ? "Hide agent trail" : "Show agent trail"}
        onClick={() => setTrailOpen((o) => !o)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          background: "none",
          border: "none",
          padding: 0,
          margin: 0,
          cursor: "pointer",
          fontFamily: "'Lato', sans-serif",
          fontSize: "var(--partnerhome-font-size-500)",
          lineHeight: "16px",
          fontWeight: "normal",
          color: hovered ? "#4D4A4F" : "#93939A",
          boxShadow: "none",
          transition: "color 0.15s ease",
        }}
      >
        Worked with {agentCount} agents
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }} aria-hidden>
          {trailOpen ? (
            <path
              d="M2.5 7.75L6 4.25L9.5 7.75"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M2.5 4.25L6 7.75L9.5 4.25"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>
      {trailOpen ? <AgentTrailReplay /> : null}
    </div>
  );
}

function CreatingWorkspaceBubble({ id }: { id: string }) {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 w-full"
      data-name="Creating Workspace"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            lineHeight: "16px",
            color: "#646266",
            fontStyle: "italic",
            fontWeight: "normal",
          }}
        >
          Assembling your Under Performing Products Recovery workspace from that part-number list…
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
          {[0, 1, 2].map((d) => (
            <div
              key={d}
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#7B189F",
                animation: `thinkingDot 1.4s ease-in-out ${d * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes thinkingDot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

function WorkspaceCompleteBubble({ id, text, buttonLabel, timestamp, onExpand }: { id: string; text: string; buttonLabel: string; timestamp: string; onExpand?: () => void }) {
  const [btnHovered, setBtnHovered] = useState(false);

  const showIntro = text.trim().length > 0;

  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full"
      data-name="Workspace Complete"
    >
      {showIntro ? (
      <p
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "var(--partnerhome-font-size-500)",
          lineHeight: "16px",
          color: "#211e22",
          margin: 0,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          fontWeight: "normal",
        }}
      >
        {text}
      </p>
      ) : null}
      <button
        onClick={() => onExpand?.()}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--partnerhome-spacing-1000)",
          padding: "var(--partnerhome-spacing-1500) var(--partnerhome-spacing-2000)",
          borderRadius: "var(--partnerhome-radius-base)",
          border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-primary)",
          backgroundColor: btnHovered ? "var(--partnerhome-surface-color-primarysubtle)" : "#FFFFFF",
          cursor: "pointer",
          transition: "all 0.15s ease",
          fontFamily: "'Lato', sans-serif",
          fontSize: "var(--partnerhome-font-size-500)",
          lineHeight: "var(--partnerhome-line-height-base)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          color: "var(--partnerhome-text-color-primary)",
          textAlign: "left",
          boxShadow: "none",
          width: "100%",
        }}
      >
        {/* Expand icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: "var(--partnerhome-text-color-primary)" }}>
          <path d="M10 2H14V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 14H2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 2L9.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 14L6.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {buttonLabel}
      </button>
      <div style={{ display: "flex", gap: "var(--partnerhome-spacing-1500)", alignItems: "center" }} data-name="Message Info Container">
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "1", color: "#646266", whiteSpace: "nowrap", margin: 0 }}>{timestamp}</p>
        <MessageInfoIcons />
      </div>
    </div>
  );
}

function OfferLiveActionCard({ message, onAction }: { message: { id: string; text: string; timestamp: string; selectedAction?: string }; onAction: (id: string, action: string) => void }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const options = ["Create a Task", "Skip"];

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0 w-full" data-name="Offer Live">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            lineHeight: "16px",
            color: "#211e22",
            margin: 0,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            fontWeight: "normal",
          }}
        >
          {message.text}
        </p>
      </div>
      <div
        style={{
          border: "1px solid #D5B9DF",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "#FFFFFF",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            lineHeight: "16px",
            color: "#211e22",
            fontWeight: "bold",
          }}
        >
          Track SPRING coupon performance on the selected products
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {options.map((option, idx) => {
            const isSelected = message.selectedAction === option;
            const isHovered = hoveredIdx === idx;
            const isDisabled = !!message.selectedAction && !isSelected;

            return (
              <button
                key={idx}
                onClick={() => {
                  if (!message.selectedAction) {
                    onAction(message.id, option);
                  }
                }}
                onMouseEnter={() => !message.selectedAction && setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: isSelected
                    ? "1.5px solid #66256A"
                    : isHovered
                    ? "1px solid #7B189F"
                    : "1px solid #D1D1D6",
                  backgroundColor: isSelected
                    ? "#F1E9F1"
                    : isHovered
                    ? "#FAFAFA"
                    : "#FFFFFF",
                  cursor: message.selectedAction ? "default" : "pointer",
                  opacity: isDisabled ? 0.45 : 1,
                  transition: "all 0.15s ease",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "var(--partnerhome-font-size-500)",
                  lineHeight: "16px",
                  fontWeight: "normal",
                  color: "#211e22",
                  textAlign: "left",
                  boxShadow: "none",
                  width: "100%",
                }}
              >
                {/* Radio circle */}
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    border: isSelected ? "1.5px solid #66256A" : "1.5px solid #93939A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "border-color 0.15s ease",
                  }}
                >
                  {isSelected && (
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#66256A",
                      }}
                    />
                  )}
                </div>
                {option}
              </button>
            );
          })}
        </div>
        {/* Collaborating Agent */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#646266", fontWeight: "normal" }}>Collaborating Agent:</span>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#66256A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", fontWeight: "bold", color: "#FFFFFF", lineHeight: "1" }}>PI</span>
            </div>
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#211e22", fontWeight: "normal" }}>Performance Insights Agent</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "var(--partnerhome-spacing-1500)", alignItems: "center", marginTop: "4px" }} data-name="Message Info Container">
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "1", color: "#646266", whiteSpace: "nowrap", margin: 0 }}>{message.timestamp}</p>
        <MessageInfoIcons />
      </div>
    </div>
  );
}

function MessageContainer({ className, chatMessages, isThinking, thinkingMode, onInputCardSelect, onExpandWorkspace, onOfferAction }: { className?: string; chatMessages: ChatMessage[]; isThinking: boolean; thinkingMode: "agents" | "simple"; onInputCardSelect: (cardId: string, option: string) => void; onExpandWorkspace?: () => void; onOfferAction?: (id: string, action: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages, isThinking]);
  return (
    <div ref={scrollRef} className={className || "bg-white content-stretch flex flex-col flex-1 items-start pt-[24px] px-[24px] relative w-full overflow-y-auto"} data-name="Message Container">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Message Container">
        <MessageContainer2 />
        {chatMessages.map((msg, idx) => {
          if (msg.type === "user") {
            return <UserMessageBubble key={msg.data.id} message={msg.data} />;
          }
          if (msg.type === "ai") {
            const nextMsg = chatMessages[idx + 1];
            const isFollowedByWorkspace = nextMsg?.type === "creating_workspace" || nextMsg?.type === "workspace_complete";
            return <AIMessageBubble key={msg.data.id} message={msg.data} hideFooter={isFollowedByWorkspace} />;
          }
          if (msg.type === "input_card") {
            return (
              <InputCardBubble
                key={msg.data.id}
                message={msg.data}
                onSelect={onInputCardSelect}
              />
            );
          }
          if (msg.type === "worked_with_agents") {
            return (
              <WorkedWithAgentsBubble
                key={msg.data.id}
                agentCount={msg.data.agentCount}
              />
            );
          }
          if (msg.type === "creating_workspace") {
            return (
              <CreatingWorkspaceBubble key={msg.data.id} />
            );
          }
          if (msg.type === "workspace_complete") {
            return (
              <WorkspaceCompleteBubble key={msg.data.id} {...msg.data} onExpand={onExpandWorkspace} />
            );
          }
          if (msg.type === "offer_live") {
            return (
              <OfferLiveActionCard key={msg.data.id} message={msg.data} onAction={onOfferAction} />
            );
          }
          return null;
        })}
        {isThinking && thinkingMode === "agents" && <ThinkingIndicator />}
        {isThinking && thinkingMode === "simple" && <SimpleThinkingIndicator />}
      </div>
    </div>
  );
}

function Frame1({ value, onChange, onKeyDown }: { value: string; onChange: (v: string) => void; onKeyDown?: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="flex-1 h-full relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Type your message here"
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "var(--partnerhome-font-size-500)",
          lineHeight: "1",
          color: "#211e22",
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          padding: "0 8px 0 16px",
          margin: 0,
          boxShadow: "none",
        }}
      />
    </div>
  );
}

function Content() {
  return (
    <div className="h-[24px] relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[3px] isolate items-center justify-center px-[3px] relative size-full">
          <div className="relative shrink-0 size-[18px] z-[3]" data-name="Icon, Left">
            <div className="absolute inset-0 overflow-clip" data-name="Icon">
              <div className="absolute bottom-[20.83%] flex items-center justify-center left-1/4 right-1/4 top-[20.83%]">
                <div className="flex-none h-[9px] rotate-90 w-[10.5px]">
                  <div className="relative size-full" data-name="Vector">
                    <div className="absolute inset-[-6.25%_-5.36%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.625 10.125">
                        <path d={svgPaths.p254ddb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Layout({ disabled }: { disabled?: boolean }) {
  return (
    <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
      <Content />
      <div
        className="absolute inset-0 rounded-[50px] z-[1]"
        style={{ backgroundColor: disabled ? "#D1D1D6" : "#66256a", transition: "background-color 0.15s" }}
        data-name="Background"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0.75px] border-solid inset-0 pointer-events-none rounded-[50px]"
          style={{ borderColor: disabled ? "#B8B8BE" : "#7b189f" }}
        />
      </div>
    </div>
  );
}

function Frame({ disabled, onClick }: { disabled?: boolean; onClick?: () => void }) {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center pl-[8px] pr-[16px] py-[8px] relative">
          <button
            onClick={onClick}
            disabled={disabled}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
              cursor: disabled ? "default" : "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
              overflow: "clip",
              boxShadow: "none",
            }}
            data-name="Button"
          >
            <Layout disabled={disabled} />
          </button>
        </div>
      </div>
    </div>
  );
}

function SuggestionChips({ onSelect }: { onSelect?: (text: string) => void }) {
  const suggestions = [
    "What's most urgent on my account this week?",
    "Where am I underperforming vs. similar suppliers?",
    "How should I balance ads, promos, and events?",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end", width: "100%" }} data-name="Suggestion Chips">
      {suggestions.map((text) => (
        <button
          key={text}
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-primary)",
            backgroundColor: "transparent",
            border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-primary)",
            borderRadius: "var(--partnerhome-radius-base)",
            padding: "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-2000)",
            cursor: "pointer",
            whiteSpace: "normal",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            boxShadow: "none",
            textAlign: "left",
            maxWidth: "100%",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--partnerhome-surface-color-primarysubtle)";
            e.currentTarget.style.borderColor = "var(--partnerhome-border-color-primary-hover)";
            e.currentTarget.style.color = "var(--partnerhome-text-color-primary-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "var(--partnerhome-border-color-primary)";
            e.currentTarget.style.color = "var(--partnerhome-text-color-primary)";
          }}
          onClick={() => onSelect?.(text)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

function Bottom({ onSend, showSuggestions }: { onSend: (text: string) => void; showSuggestions: boolean }) {
  const [inputValue, setInputValue] = useState("");
  const hasText = inputValue.trim().length > 0;

  const handleSend = () => {
    if (hasText) {
      onSend(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && hasText) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white relative shrink-0 w-full" data-name="bottom">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-end pb-[16px] pt-[8px] px-[16px] relative w-full">
          {showSuggestions && <SuggestionChips onSelect={(text) => onSend(text)} />}
          <div className="bg-white content-stretch flex h-[48px] items-center justify-between relative rounded-[8px] shrink-0 w-full" data-name="textinput">
            <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <Frame1 value={inputValue} onChange={setInputValue} onKeyDown={handleKeyDown} />
            <Frame disabled={!hasText} onClick={handleSend} />
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Caveat">
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                fontSize: "var(--partnerhome-font-size-500)",
                lineHeight: "var(--partnerhome-line-height-base)",
                color: "var(--partnerhome-text-color-disabled)",
                whiteSpace: "nowrap",
              }}
            >
              Partner Assistant can make mistakes. Please verify information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TaskCardData {
  title: string;
  description: string;
  status: string;
  statusColor: string;
  collaboratorInitials: string;
  collaboratorName: string;
  collaboratorColor: string;
  ctaLabel?: string;
  progress?: { current: number; total: number };
}

const TASK_CARDS: TaskCardData[] = [
  {
    title: "Track SPRING coupon",
    description: "Monitoring sales, conversion, and promo cost",
    status: "No activity yet",
    statusColor: "#646266",
    collaboratorInitials: "PI",
    collaboratorName: "Performance Insights",
    collaboratorColor: "#66256A",
    ctaLabel: "View Offer",
  },
  {
    title: "Optimize underperforming listings",
    description: "Updating titles, images, and descriptions for 3 products",
    status: "2 of 3 updated",
    statusColor: "#B8860B",
    collaboratorInitials: "CA",
    collaboratorName: "Catalog",
    collaboratorColor: "#1A8C5E",
    ctaLabel: "Review Changes",
    progress: { current: 2, total: 3 },
  },
  {
    title: "Review ad spend efficiency",
    description: "Analyzed performance and suggested improvements",
    status: "Completed",
    statusColor: "#1A8C5E",
    collaboratorInitials: "AA",
    collaboratorName: "Ads",
    collaboratorColor: "#2B6CB0",
    ctaLabel: "View Results",
  },
];

function TaskCard({ task }: { task: TaskCardData }) {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #E5E5E7",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        position: "relative",
      }}
    >
      {/* Title row + agent metadata */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-1000)", lineHeight: "20px", color: "#211e22", fontWeight: "bold" }}>
          {task.title}
        </span>
        <span
          title={task.collaboratorName}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "'Lato', sans-serif",
            fontSize: "11px",
            lineHeight: "14px",
            color: "#646266",
            fontWeight: "normal",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: task.collaboratorColor,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "9px", fontWeight: "bold", color: "#FFFFFF", lineHeight: "1" }}>{task.collaboratorInitials}</span>
          </span>
          {task.collaboratorName}
        </span>
      </div>

      {/* Description */}
      <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "13px", lineHeight: "18px", color: "#4D4A4F", fontWeight: "normal" }}>
        {task.description}
      </span>

      {/* Progress / state line */}
      {task.progress ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div
            style={{
              width: "100%",
              height: "4px",
              borderRadius: "2px",
              backgroundColor: "#EFEFF1",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(task.progress.current / Math.max(task.progress.total, 1)) * 100}%`,
                height: "100%",
                borderRadius: "2px",
                backgroundColor: task.statusColor,
                transition: "width 0.3s ease",
              }}
            />
          </div>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "normal" }}>
            {task.status}
          </span>
        </div>
      ) : (
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", lineHeight: "16px", color: task.statusColor, fontWeight: "normal" }}>
          {task.status}
        </span>
      )}

      {/* CTA */}
      {task.ctaLabel && (
        <button
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            padding: 0,
            border: "none",
            background: "none",
            cursor: "pointer",
            fontFamily: "'Lato', sans-serif",
            fontSize: "13px",
            lineHeight: "18px",
            fontWeight: "normal",
            color: "#66256A",
            textAlign: "left",
            boxShadow: "none",
            textDecoration: btnHovered ? "underline" : "none",
            transition: "all 0.15s ease",
            alignSelf: "flex-start",
          }}
        >
          {task.ctaLabel}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
            <path d="M4.5 3L7.5 6L4.5 9" stroke="#66256A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

function TaskFilterDropdown({ label, options, selectedValue, onApply }: {
  label: string;
  options: { id: string; label: string }[];
  selectedValue: string;
  onApply: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [tempSelected, setTempSelected] = useState(selectedValue);
  const [btnHovered, setBtnHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setTempSelected(selectedValue);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, selectedValue]);

  useEffect(() => { setTempSelected(selectedValue); }, [selectedValue]);

  const selectedLabel = options.find(o => o.id === selectedValue)?.label || label;

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => { setIsOpen(!isOpen); setTempSelected(selectedValue); }}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-1000)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          lineHeight: "18px",
          color: btnHovered || isOpen ? "#7B189F" : "#66256A",
          backgroundColor: "transparent",
          border: "none",
          borderRadius: 0,
          height: "auto",
          padding: 0,
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          cursor: "pointer",
          boxSizing: "border-box",
          boxShadow: "none",
          outline: "none",
          whiteSpace: "nowrap",
          transition: "color 200ms ease",
        }}
      >
        <span style={{ color: btnHovered || isOpen ? "#7B189F" : "#66256A", textDecoration: "underline" }}>{selectedLabel}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ color: btnHovered || isOpen ? "#7B189F" : "#66256A", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms ease", flexShrink: 0 }}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0,
          minWidth: "180px",
          background: "var(--partnerhome-bg-color-base)",
          border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
          borderRadius: "var(--partnerhome-radius-base)",
          boxShadow: "var(--partnerhome-shadow-30)",
          padding: "var(--partnerhome-spacing-1000) 0",
          zIndex: 1000,
        }}>
          {options.map((option) => {
            const isSelected = tempSelected === option.id;
            const isHovered = hoveredId === option.id;
            return (
              <div
                key={option.id}
                onClick={() => setTempSelected(option.id)}
                onMouseEnter={() => setHoveredId(option.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  padding: "6px var(--partnerhome-spacing-1000)",
                  margin: "0 var(--partnerhome-spacing-1000)",
                  borderRadius: "var(--partnerhome-radius-medium)",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  color: "var(--partnerhome-text-color-base)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: isSelected
                    ? (isHovered ? "var(--partnerhome-bg-color-secondaryhover)" : "var(--partnerhome-bg-color-secondaryidle)")
                    : (isHovered ? "var(--partnerhome-bg-color-tertiaryhover)" : "var(--partnerhome-bg-color-tertiaryidle)"),
                  boxShadow: isHovered
                    ? `inset 0 0 0 var(--partnerhome-stroke-weights-small) ${isSelected ? "var(--partnerhome-border-color-secondaryhover)" : "var(--partnerhome-border-color-tertiaryhoversubtle)"}`
                    : "none",
                  transition: "background 150ms ease",
                }}
              >
                {/* Radio dot */}
                <div style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  border: isSelected ? "5px solid var(--partnerhome-border-color-primary)" : "1.5px solid var(--partnerhome-border-color-base)",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  background: "var(--partnerhome-bg-color-base)",
                }} />
                <span>{option.label}</span>
              </div>
            );
          })}
          {/* Footer */}
          <div style={{
            display: "flex",
            gap: "8px",
            padding: "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-1000) 0",
            borderTop: "1px solid var(--partnerhome-border-color-base)",
            marginTop: "var(--partnerhome-spacing-1000)",
          }}>
            <button
              onClick={() => { setIsOpen(false); setTempSelected(selectedValue); }}
              style={{
                flex: 1,
                height: "32px",
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-primary)",
                background: "var(--partnerhome-surface-color-base)",
                border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-primary)",
                borderRadius: "var(--partnerhome-radius-button)",
                cursor: "pointer",
                boxShadow: "none",
                outline: "none",
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => { onApply(tempSelected); setIsOpen(false); }}
              style={{
                flex: 1,
                height: "32px",
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-inverse)",
                background: "var(--partnerhome-bg-color-button-primary)",
                border: "none",
                borderRadius: "var(--partnerhome-radius-button)",
                cursor: "pointer",
                boxShadow: "none",
                outline: "none",
              }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const TASK_FILTER_OPTIONS = [
  { id: "waiting", label: "Waiting" },
  { id: "in-progress", label: "In progress" },
  { id: "completed", label: "Completed" },
];

const AGENT_FILTER_OPTIONS = [
  { id: "performance", label: "Performance Insights" },
  { id: "catalog", label: "Catalog" },
  { id: "ads", label: "Ads" },
];

const MY_AGENTS = [
  {
    name: "Performance Insights",
    initials: "PI",
    color: "#66256A",
    description: "Tracks sales trends, flags anomalies, and recommends actions to boost performance.",
    currently: "Watching sales and conversion",
    lastAction: "Identified 4 underperforming products",
    activityIcon: "monitor",
    tier: "Free",
  },
  {
    name: "Ads",
    initials: "AA",
    color: "#2B6CB0",
    description: "Analyzes ad spend efficiency and optimizes sponsored campaign budgets.",
    currently: "Evaluating visibility opportunities",
    lastAction: "Suggested a Sponsored Products campaign",
    activityIcon: "execute",
    tier: "Free",
  },
  {
    name: "Catalog",
    initials: "CA",
    color: "#1A8C5E",
    description: "Improves listing quality by reviewing titles, images, and descriptions.",
    currently: "Reviewing product content",
    lastAction: "Flagged missing content on 2 products",
    activityIcon: "learn",
    tier: "Free",
  },
];

function TeachTaskView({ agentName, onBack }: { agentName: string; onBack: () => void }) {
  const [backHovered, setBackHovered] = useState(false);
  const [uploadHovered, setUploadHovered] = useState(false);
  const [screenHovered, setScreenHovered] = useState(false);
  const [uploadState, setUploadState] = useState<"idle" | "dragging" | "uploaded">("idle");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [screenState, setScreenState] = useState<"idle" | "recording" | "recorded">("idle");
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (screenState !== "recording") return;
    const interval = setInterval(() => setRecordingSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [screenState]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  const handleFileSelect = (file: File) => {
    setUploadedFileName(file.name);
    setUploadState("uploaded");
  };

  const cardBase: React.CSSProperties = {
    border: "1.5px solid #E0D6E3",
    borderRadius: "12px",
    padding: "20px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, backgroundColor: "#FFFFFF", width: "100%", overflow: "hidden" }}>
      {/* Screen recording border overlay */}
      {screenState === "recording" && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          border: "3px solid #C62828",
          borderRadius: "4px",
          pointerEvents: "none",
          boxShadow: "inset 0 0 0 1px rgba(198,40,40,0.3)",
          animation: "recordingBorderPulse 2s ease-in-out infinite",
        }}>
          <div style={{
            position: "absolute", top: "12px", left: "50%", transform: "translateX(-50%)",
            display: "flex", alignItems: "center", gap: "6px",
            padding: "4px 12px", borderRadius: "20px",
            backgroundColor: "#C62828", color: "#FFFFFF",
            fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", fontWeight: "bold",
            lineHeight: "16px", boxShadow: "0 2px 8px rgba(198,40,40,0.4)",
            pointerEvents: "none",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FFFFFF", animation: "pulseCurrently 1s ease-in-out infinite" }} />
            REC {formatTime(recordingSeconds)}
          </div>
          <style>{`@keyframes recordingBorderPulse { 0%, 100% { border-color: #C62828; } 50% { border-color: #EF5350; } }`}</style>
        </div>
      )}

      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        padding: "12px 24px", borderBottom: "1px solid #D7D7D7",
        flexShrink: 0, backgroundColor: "#FAFAFA",
      }}>
        <button
          onClick={onBack}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "20px", height: "20px",
            border: "1px solid transparent",
            background: backHovered ? "#EEEEEE" : "none",
            borderRadius: "6px", cursor: "pointer", padding: 0, margin: 0,
            boxShadow: "none", flexShrink: 0, transition: "all 0.15s",
            borderColor: backHovered ? "#D1D1D6" : "transparent",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#211e22" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-1000)", fontWeight: "bold", lineHeight: "20px", color: "#211e22" }}>
            Teach a Task
          </span>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "14px", color: "#93939A" }}>
            {agentName}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "18px", color: "#646266" }}>
          Choose how you'd like to teach <span style={{ fontWeight: "bold" }}>{agentName}</span> a new task:
        </span>

        {/* Option 1: Upload a Skill File */}
        <div
          onMouseEnter={() => setUploadHovered(true)}
          onMouseLeave={() => setUploadHovered(false)}
          onClick={() => {
            if (uploadState === "idle") fileInputRef.current?.click();
          }}
          onDragOver={(e) => { e.preventDefault(); if (uploadState === "idle") setUploadState("dragging"); }}
          onDragLeave={() => { if (uploadState !== "uploaded") setUploadState("idle"); }}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            if (file) handleFileSelect(file);
          }}
          style={{
            ...cardBase,
            borderColor: uploadState === "dragging" ? "#66256A" : uploadState === "uploaded" ? "#2E7D32" : uploadHovered ? "#D5B9DF" : "#E0D6E3",
            backgroundColor: uploadState === "dragging" ? "#FAF5FC" : uploadState === "uploaded" ? "#F6FBF6" : uploadHovered ? "#FDFBFE" : "#FFFFFF",
            borderStyle: uploadState === "dragging" ? "dashed" : "solid",
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".md,.txt,.json,.yaml,.yml"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileSelect(file);
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "10px",
              backgroundColor: uploadState === "uploaded" ? "#E8F5E9" : "#F3ECF4",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {uploadState === "uploaded" ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10L9 14L15 6" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3V13M10 3L6.5 6.5M10 3L13.5 6.5" stroke="#66256A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 13V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V13" stroke="#66256A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1 }}>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#211e22", fontWeight: "bold" }}>
                Upload a Skill File
              </span>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#777279" }}>
                {uploadState === "uploaded"
                  ? uploadedFileName
                  : "Drag & drop or click to upload a .md, .txt, .json, or .yaml file"
                }
              </span>
            </div>
          </div>

          {uploadState === "uploaded" && (
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "8px 12px", borderRadius: "8px", backgroundColor: "#E8F5E9",
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 7L6 9.5L10.5 4.5" stroke="#2E7D32" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "14px", color: "#2E7D32", fontWeight: "bold" }}>
                Skill file uploaded — agent will learn from it on next run
              </span>
            </div>
          )}

          {uploadState === "idle" && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {[".md", ".txt", ".json", ".yaml"].map(ext => (
                <span key={ext} style={{
                  fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "12px", fontWeight: "bold",
                  color: "#93939A", backgroundColor: "#F5F5F5", padding: "2px 6px", borderRadius: "4px",
                }}>
                  {ext}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#E0D6E3" }} />
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "14px", color: "#93939A", fontWeight: "bold" }}>OR</span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#E0D6E3" }} />
        </div>

        {/* Option 2: Share your Screen */}
        <div
          onMouseEnter={() => setScreenHovered(true)}
          onMouseLeave={() => setScreenHovered(false)}
          onClick={() => {
            if (screenState === "idle") setScreenState("recording");
          }}
          style={{
            ...cardBase,
            borderColor: screenState === "recording" ? "#C62828" : screenState === "recorded" ? "#2E7D32" : screenHovered ? "#D5B9DF" : "#E0D6E3",
            backgroundColor: screenState === "recording" ? "#FFF8F8" : screenState === "recorded" ? "#F6FBF6" : screenHovered ? "#FDFBFE" : "#FFFFFF",
            cursor: screenState === "recording" ? "default" : "pointer",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "10px",
              backgroundColor: screenState === "recording" ? "#FFEBEE" : screenState === "recorded" ? "#E8F5E9" : "#F3ECF4",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {screenState === "recorded" ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10L9 14L15 6" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : screenState === "recording" ? (
                <div style={{
                  width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "#C62828",
                  animation: "pulseCurrently 1.5s ease-in-out infinite",
                }} />
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="3" width="16" height="11" rx="2" stroke="#66256A" strokeWidth="1.5" />
                  <path d="M7 17H13" stroke="#66256A" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 14V17" stroke="#66256A" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="8.5" r="2" stroke="#66256A" strokeWidth="1.3" />
                </svg>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1 }}>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#211e22", fontWeight: "bold" }}>
                {screenState === "recording" ? "Recording your screen..." : screenState === "recorded" ? "Screen recording saved" : "Share your Screen"}
              </span>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#777279" }}>
                {screenState === "recording"
                  ? `Show the agent how to perform the task — ${formatTime(recordingSeconds)}`
                  : screenState === "recorded"
                  ? "Agent will analyze the recording to learn the task"
                  : "Walk through a task live so the agent can watch and replicate it"
                }
              </span>
            </div>
          </div>

          {screenState === "recording" && (
            <button
              onClick={(e) => { e.stopPropagation(); setScreenState("recorded"); setRecordingSeconds(0); }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                padding: "8px 16px", borderRadius: "8px",
                border: "1.5px solid #C62828", backgroundColor: "#FFFFFF",
                cursor: "pointer", transition: "all 0.15s ease",
                fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px",
                fontWeight: "bold", color: "#C62828", boxShadow: "none", width: "100%",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="2.5" y="2.5" width="7" height="7" rx="1" fill="#C62828" />
              </svg>
              Stop Recording
            </button>
          )}

          {screenState === "recorded" && (
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "8px 12px", borderRadius: "8px", backgroundColor: "#E8F5E9",
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 7L6 9.5L10.5 4.5" stroke="#2E7D32" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "14px", color: "#2E7D32", fontWeight: "bold" }}>
                Recording saved — agent will learn the task pattern
              </span>
            </div>
          )}

          {screenState === "idle" && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1V11M1 6H11" stroke="#93939A" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "14px", color: "#93939A" }}>
                Browser will ask for screen sharing permission
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ToggleSwitch({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      style={{
        width: "32px", height: "18px", borderRadius: "9px", border: "none",
        backgroundColor: enabled ? "#66256A" : "#D1D1D6", cursor: "pointer",
        position: "relative", transition: "background-color 0.2s ease",
        padding: 0, boxShadow: "none", flexShrink: 0,
      }}
    >
      <div style={{
        width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "#FFFFFF",
        position: "absolute", top: "2px", left: enabled ? "16px" : "2px",
        transition: "left 0.2s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }} />
    </button>
  );
}

function RuleRow({ label, description, enabled, onToggle }: { label: string; description: string; enabled: boolean; onToggle: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: "12px",
        padding: "12px 14px", borderRadius: "8px",
        backgroundColor: hovered ? "#FAFAFA" : "transparent",
        transition: "background-color 0.15s ease",
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#211e22", fontWeight: "bold" }}>{label}</span>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#777279" }}>{description}</span>
      </div>
      <ToggleSwitch enabled={enabled} onToggle={onToggle} />
    </div>
  );
}

function SelectRow({ label, description, value, options, onChange }: { label: string; description: string; value: string; options: string[]; onChange: (v: string) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column", gap: "8px",
        padding: "12px 14px", borderRadius: "8px",
        backgroundColor: hovered ? "#FAFAFA" : "transparent",
        transition: "background-color 0.15s ease",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#211e22", fontWeight: "bold" }}>{label}</span>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#777279" }}>{description}</span>
      </div>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            style={{
              padding: "4px 10px", borderRadius: "6px",
              border: `1.5px solid ${value === opt ? "#66256A" : "#D1D1D6"}`,
              backgroundColor: value === opt ? "#F3ECF4" : "#FFFFFF",
              color: value === opt ? "#66256A" : "#646266",
              fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px",
              fontWeight: value === opt ? "bold" : "normal",
              cursor: "pointer", boxShadow: "none", transition: "all 0.15s ease",
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function AgentRulesView({ agent, onBack }: { agent: typeof MY_AGENTS[number]; onBack: () => void }) {
  const [backHovered, setBackHovered] = useState(false);
  const [saved, setSaved] = useState(false);

  const [requireReviewPriceChanges, setRequireReviewPriceChanges] = useState(true);
  const [requireReviewBudget, setRequireReviewBudget] = useState(true);
  const [requireReviewContent, setRequireReviewContent] = useState(false);
  const [requireReviewCampaigns, setRequireReviewCampaigns] = useState(true);
  const [notifyOnAnomalies, setNotifyOnAnomalies] = useState(true);
  const [notifyOnCompletion, setNotifyOnCompletion] = useState(true);
  const [taskScope, setTaskScope] = useState("Monitor & Recommend");
  const [budgetLimit, setBudgetLimit] = useState("$100/day");

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, backgroundColor: "#FFFFFF", width: "100%", overflow: "hidden" }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        padding: "12px 24px", borderBottom: "1px solid #D7D7D7",
        flexShrink: 0, backgroundColor: "#FAFAFA",
      }}>
        <button
          onClick={onBack}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "20px", height: "20px",
            border: "1px solid transparent",
            background: backHovered ? "#EEEEEE" : "none",
            borderRadius: "6px", cursor: "pointer", padding: 0, margin: 0,
            boxShadow: "none", flexShrink: 0, transition: "all 0.15s",
            borderColor: backHovered ? "#D1D1D6" : "transparent",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#211e22" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-1000)", fontWeight: "bold", lineHeight: "20px", color: "#211e22" }}>
            Agent Rules
          </span>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "14px", color: "#93939A" }}>
            {agent.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "auto", padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: "20px" }}>

        {/* Section: Task Scope */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingLeft: "14px" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="#66256A" strokeWidth="1.3" />
              <circle cx="7" cy="7" r="2" fill="#66256A" />
            </svg>
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#211e22", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Task Scope
            </span>
          </div>
          <SelectRow
            label="Operating Mode"
            description="What level of autonomy this agent has"
            value={taskScope}
            options={["Monitor Only", "Monitor & Recommend", "Auto-Execute"]}
            onChange={setTaskScope}
          />
          <SelectRow
            label="Spending Limit"
            description="Max budget the agent can commit per day"
            value={budgetLimit}
            options={["$25/day", "$50/day", "$100/day", "$500/day", "Unlimited"]}
            onChange={setBudgetLimit}
          />
        </div>

        <div style={{ height: "1px", backgroundColor: "#E0D6E3" }} />

        {/* Section: Requires Your Review */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingLeft: "14px" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5V7L10 9" stroke="#66256A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="7" cy="7" r="5.5" stroke="#66256A" strokeWidth="1.3" />
            </svg>
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#211e22", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Requires Your Review
            </span>
          </div>
          <RuleRow label="Price changes" description="Notify me before adjusting any product pricing" enabled={requireReviewPriceChanges} onToggle={() => setRequireReviewPriceChanges(v => !v)} />
          <RuleRow label="Budget allocation" description="Ask approval before reallocating ad spend" enabled={requireReviewBudget} onToggle={() => setRequireReviewBudget(v => !v)} />
          <RuleRow label="Content edits" description="Review title, image, or description changes" enabled={requireReviewContent} onToggle={() => setRequireReviewContent(v => !v)} />
          <RuleRow label="Campaign creation" description="Approve new sponsored campaigns before launch" enabled={requireReviewCampaigns} onToggle={() => setRequireReviewCampaigns(v => !v)} />
        </div>

        <div style={{ height: "1px", backgroundColor: "#E0D6E3" }} />

        {/* Section: Notifications */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingLeft: "14px" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1C4.79 1 3 2.79 3 5V7.5L1.5 10H12.5L11 7.5V5C11 2.79 9.21 1 7 1Z" stroke="#66256A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 10.5C5.5 11.33 6.17 12 7 12C7.83 12 8.5 11.33 8.5 10.5" stroke="#66256A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px", color: "#211e22", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Notifications
            </span>
          </div>
          <RuleRow label="Anomaly alerts" description="Get notified when the agent detects unusual patterns" enabled={notifyOnAnomalies} onToggle={() => setNotifyOnAnomalies(v => !v)} />
          <RuleRow label="Task completion" description="Notify me when the agent finishes a task" enabled={notifyOnCompletion} onToggle={() => setNotifyOnCompletion(v => !v)} />
        </div>
      </div>

      {/* Save footer */}
      <div style={{
        padding: "12px 24px", borderTop: "1px solid #D7D7D7",
        flexShrink: 0, display: "flex", alignItems: "center", gap: "10px",
      }}>
        <button
          onClick={handleSave}
          style={{
            flex: 1, padding: "10px", borderRadius: "8px", border: "none",
            backgroundColor: saved ? "#2E7D32" : "#66256A", color: "#FFFFFF",
            fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "16px",
            fontWeight: "bold", cursor: "pointer", boxShadow: "none",
            transition: "all 0.2s ease",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
          }}
        >
          {saved && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3.5 7L6 9.5L10.5 4.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {saved ? "Rules Saved" : "Save Rules"}
        </button>
      </div>
    </div>
  );
}

function AgentCard({ agent, onTeachTask, onUpdateRules }: { agent: typeof MY_AGENTS[number]; onTeachTask: () => void; onUpdateRules: () => void }) {
  const [updateHovered, setUpdateHovered] = useState(false);
  const [teachHovered, setTeachHovered] = useState(false);
  const [kebabHovered, setKebabHovered] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const activityColor =
    agent.activityIcon === "execute" ? "#66256A" :
    agent.activityIcon === "monitor" ? "#B8860B" :
    "#2E7D6F";

  return (
    <div
      style={{
        border: "1px solid #E5E5E7",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        position: "relative",
      }}
    >
      {/* Kebab */}
      <button
        onMouseEnter={() => setKebabHovered(true)}
        onMouseLeave={() => setKebabHovered(false)}
        style={{
          position: "absolute", top: "12px", right: "12px",
          display: "flex", alignItems: "center", justifyContent: "center",
          width: "24px", height: "24px", border: "none",
          background: kebabHovered ? "#F5F5F5" : "none",
          borderRadius: "4px", cursor: "pointer", padding: 0, margin: 0, boxShadow: "none",
          transition: "background 0.15s",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="3.5" r="1.25" fill="#646266" />
          <circle cx="8" cy="8" r="1.25" fill="#646266" />
          <circle cx="8" cy="12.5" r="1.25" fill="#646266" />
        </svg>
      </button>

      {/* Agent identity row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingRight: "32px" }}>
        <div
          style={{
            width: "36px", height: "36px", borderRadius: "50%",
            backgroundColor: agent.color,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}
        >
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", fontWeight: "bold", color: "#FFFFFF", lineHeight: "1" }}>{agent.initials}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", paddingTop: "1px" }}>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-1000)", lineHeight: "20px", color: "#211e22", fontWeight: "bold" }}>
            {agent.name}
          </span>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "13px", lineHeight: "18px", color: "#4D4A4F", fontWeight: "normal" }}>
            {agent.description}
          </span>
        </div>
      </div>

      {/* Tier */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "bold" }}>
          Tier:
        </span>
        <span style={{
          fontFamily: "'Lato', sans-serif", fontSize: "11px", lineHeight: "14px", fontWeight: "bold",
          color: "#2E7D32", backgroundColor: "#E8F5E9", padding: "2px 8px", borderRadius: "10px",
        }}>
          Free
        </span>
      </div>

      {/* Currently & Last Action */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px", animation: "pulseCurrently 2s ease-in-out infinite" }}>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "bold" }}>
            Currently:
          </span>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "normal" }}>
            {agent.currently}<span style={{ display: "inline-block", width: "12px", textAlign: "left" }}><span>{dots}</span><span style={{ visibility: "hidden" }}>{"...".slice(dots.length)}</span></span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "bold" }}>
            Last action:
          </span>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "normal" }}>
            {agent.lastAction}
          </span>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "2px" }}>
        <button
          onClick={onUpdateRules}
          onMouseEnter={() => setUpdateHovered(true)}
          onMouseLeave={() => setUpdateHovered(false)}
          style={{
            display: "inline-flex", alignItems: "center", gap: "4px",
            padding: 0, border: "none", background: "none", cursor: "pointer",
            fontFamily: "'Lato', sans-serif", fontSize: "13px", lineHeight: "18px",
            fontWeight: "normal", color: "#66256A", textAlign: "left",
            boxShadow: "none", textDecoration: updateHovered ? "underline" : "none",
            transition: "all 0.15s ease",
          }}
        >
          Update Rules
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
            <path d="M4.5 3L7.5 6L4.5 9" stroke="#66256A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={onTeachTask}
          onMouseEnter={() => setTeachHovered(true)}
          onMouseLeave={() => setTeachHovered(false)}
          style={{
            display: "inline-flex", alignItems: "center", gap: "4px",
            padding: 0, border: "none", background: "none", cursor: "pointer",
            fontFamily: "'Lato', sans-serif", fontSize: "13px", lineHeight: "18px",
            fontWeight: "normal", color: "#66256A", textAlign: "left",
            boxShadow: "none", textDecoration: teachHovered ? "underline" : "none",
            transition: "all 0.15s ease",
          }}
        >
          Teach a Task
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
            <path d="M4.5 3L7.5 6L4.5 9" stroke="#66256A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function MyAgentsView({ onBack }: { onBack: () => void }) {
  const [backHovered, setBackHovered] = useState(false);
  const [exploreHovered, setExploreHovered] = useState(false);
  const [teachingAgent, setTeachingAgent] = useState<string | null>(null);
  const [rulesAgent, setRulesAgent] = useState<typeof MY_AGENTS[number] | null>(null);

  if (rulesAgent) {
    return <AgentRulesView agent={rulesAgent} onBack={() => setRulesAgent(null)} />;
  }

  if (teachingAgent) {
    return <TeachTaskView agentName={teachingAgent} onBack={() => setTeachingAgent(null)} />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, backgroundColor: "#FFFFFF", width: "100%", overflow: "hidden" }}>
      {/* Header */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: "8px",
          padding: "16px 24px 8px",
          flexShrink: 0, backgroundColor: "#FFFFFF",
        }}
      >
        <button
          onClick={onBack}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "28px", height: "28px",
            border: "1px solid transparent",
            background: backHovered ? "#EEEEEE" : "none",
            borderRadius: "6px", cursor: "pointer", padding: 0, margin: 0,
            boxShadow: "none", flexShrink: 0, transition: "all 0.15s",
            borderColor: backHovered ? "#D1D1D6" : "transparent",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#211e22" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-1000)", fontWeight: "bold", lineHeight: "20px", color: "#211e22" }}>
          My Agents
        </span>
      </div>

      {/* Subtext */}
      <div style={{ padding: "0 24px 12px", flexShrink: 0 }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "13px", lineHeight: "18px", color: "#646266", fontWeight: "normal" }}>
          Partner Home Assistant is currently connected to the following sub-agents
        </span>
      </div>

      {/* Agent Cards */}
      <div style={{ flex: 1, overflow: "auto", padding: "4px 24px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {MY_AGENTS.map((agent, idx) => (
          <AgentCard key={idx} agent={agent} onTeachTask={() => setTeachingAgent(agent.name)} onUpdateRules={() => setRulesAgent(agent)} />
        ))}
      </div>

      {/* Sticky footer - primary marketplace CTA */}
      <div
        style={{
          flexShrink: 0,
          padding: "12px 24px 16px",
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #EFEFF1",
        }}
      >
        <button
          onMouseEnter={() => setExploreHovered(true)}
          onMouseLeave={() => setExploreHovered(false)}
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            height: "44px",
            padding: "0 20px",
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            color: "#66256A",
            background: exploreHovered ? "#FAFAFA" : "#FFFFFF",
            border: exploreHovered ? "1px solid #7B189F" : "1px solid #D1D1D6",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "none",
            outline: "none",
            transition: "all 0.15s ease",
          }}
        >
          Explore more agents on the Marketplace
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
            <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ConversationHistoryView({ onBack, onOpenWorkspace }: { onBack: () => void; onOpenWorkspace?: () => void }) {
  const [backHovered, setBackHovered] = useState(false);
  const [itemHovered, setItemHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const historySessionTime = useMemo(
    () => `Today, ${formatChatTime(new Date(Date.now() - 2 * 60 * 60 * 1000))}`,
    []
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, backgroundColor: "#FFFFFF", width: "100%", overflow: "hidden" }}>
      <div
        style={{
          display: "flex", alignItems: "center", gap: "8px",
          padding: "16px 24px 8px",
          flexShrink: 0, backgroundColor: "#FFFFFF",
        }}
      >
        <button
          onClick={onBack}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "28px", height: "28px",
            border: "1px solid transparent",
            background: backHovered ? "#EEEEEE" : "none",
            borderRadius: "6px", cursor: "pointer", padding: 0, margin: 0,
            boxShadow: "none", flexShrink: 0, transition: "all 0.15s",
            borderColor: backHovered ? "#D1D1D6" : "transparent",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#211e22" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-1000)", fontWeight: "bold", lineHeight: "20px", color: "#211e22" }}>
          Conversation History
        </span>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <div
          onMouseEnter={() => setItemHovered(true)}
          onMouseLeave={() => setItemHovered(false)}
          style={{
            border: "1px solid #D7D7D7",
            borderRadius: "8px",
            padding: "14px 16px",
            backgroundColor: itemHovered ? "#FAFAFA" : "#FFFFFF",
            display: "flex", flexDirection: "column", gap: "10px",
            transition: "background-color 0.15s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-1000)", lineHeight: "20px", color: "#211e22", fontWeight: "bold" }}>
                "I have $1,000 to spend"
              </span>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-1000)", lineHeight: "18px", color: "#646266", fontWeight: "normal" }}>
                {historySessionTime}
              </span>
            </div>
            <span style={{
              fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-500)", lineHeight: "14px",
              fontWeight: "bold", color: "#2E7D32", backgroundColor: "#E8F5E9",
              padding: "2px 8px", borderRadius: "10px", flexShrink: 0,
            }}>
              Active
            </span>
          </div>

          <button
            onClick={() => onOpenWorkspace?.()}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: "flex", alignItems: "center", gap: "var(--partnerhome-spacing-1000)",
              padding: "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-2000)",
              borderRadius: "var(--partnerhome-radius-base)",
              border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-primary)",
              backgroundColor: btnHovered ? "var(--partnerhome-surface-color-primarysubtle)" : "#FFFFFF",
              cursor: "pointer", transition: "all 0.15s ease",
              fontFamily: "'Lato', sans-serif", fontSize: "var(--partnerhome-font-size-1000)", lineHeight: "var(--partnerhome-line-height-base)",
              fontWeight: "var(--partnerhome-font-weight-normal)", color: "var(--partnerhome-text-color-primary)", textAlign: "left",
              boxShadow: "none", width: "100%",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: "var(--partnerhome-text-color-primary)" }}>
              <path d="M10 2H14V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 14H2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 2L9.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 14L6.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Open Under Performing Products Recovery Workspace
          </button>
        </div>
      </div>
    </div>
  );
}

function TasksView({ onBack }: { onBack: () => void }) {
  const [backHovered, setBackHovered] = useState(false);
  const [taskFilter, setTaskFilter] = useState("");
  const [agentFilter, setAgentFilter] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "kanban">("list");
  const [createHovered, setCreateHovered] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, backgroundColor: "#FFFFFF", width: "100%", overflow: "hidden" }}>
      {/* Tasks Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "16px 24px 8px",
          flexShrink: 0,
          backgroundColor: "#FFFFFF",
        }}
      >
        <button
          onClick={onBack}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            border: "1px solid transparent",
            background: backHovered ? "#EEEEEE" : "none",
            borderRadius: "6px",
            cursor: "pointer",
            padding: 0,
            margin: 0,
            boxShadow: "none",
            flexShrink: 0,
            transition: "all 0.15s",
            borderColor: backHovered ? "#D1D1D6" : "transparent",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#211e22" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "bold",
            lineHeight: "20px",
            color: "#211e22",
          }}
        >
          Tasks
        </span>
      </div>

      {/* Subtext */}
      <div style={{ padding: "0 24px 12px", flexShrink: 0 }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "13px", lineHeight: "18px", color: "#646266", fontWeight: "normal" }}>
          Work the assistant is tracking or running with sub-agents.
        </span>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "0 24px 12px", flexShrink: 0 }}>
        <TaskFilterDropdown
          label="Status"
          options={TASK_FILTER_OPTIONS}
          selectedValue={taskFilter}
          onApply={setTaskFilter}
        />
        <TaskFilterDropdown
          label="Agent"
          options={AGENT_FILTER_OPTIONS}
          selectedValue={agentFilter}
          onApply={setAgentFilter}
        />
        <div style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", backgroundColor: "#F5F5F7", border: "1px solid #E5E5E7", borderRadius: "6px", padding: "2px", gap: "2px" }}>
          {([
            { key: "list" as const, label: "List", icon: (
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <circle cx="2" cy="3.5" r="1" fill="currentColor" />
                <circle cx="2" cy="7" r="1" fill="currentColor" />
                <circle cx="2" cy="10.5" r="1" fill="currentColor" />
                <rect x="4.5" y="3" width="8" height="1" rx="0.5" fill="currentColor" />
                <rect x="4.5" y="6.5" width="8" height="1" rx="0.5" fill="currentColor" />
                <rect x="4.5" y="10" width="8" height="1" rx="0.5" fill="currentColor" />
              </svg>
            )},
            { key: "kanban" as const, label: "Kanban", icon: (
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="3.5" height="12" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
                <rect x="5.25" y="1" width="3.5" height="8.5" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
                <rect x="9.5" y="1" width="3.5" height="10" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            )},
          ]).map((opt) => {
            const isActive = viewMode === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setViewMode(opt.key)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "3px 8px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: isActive ? "#FFFFFF" : "transparent",
                  color: isActive ? "#211e22" : "#646266",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "var(--partnerhome-font-size-500)",
                  fontWeight: isActive ? "bold" : "normal",
                  lineHeight: "16px",
                  cursor: "pointer",
                  boxShadow: isActive ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
                  transition: "all 0.15s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {opt.icon}
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Task Cards */}
      <div style={{ flex: 1, overflow: "auto", padding: "4px 24px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {TASK_CARDS.map((task, idx) => (
          <TaskCard key={idx} task={task} />
        ))}
      </div>

      {/* Sticky footer - Create New Task secondary CTA */}
      <div
        style={{
          flexShrink: 0,
          padding: "12px 24px 16px",
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #EFEFF1",
        }}
      >
        <button
          onMouseEnter={() => setCreateHovered(true)}
          onMouseLeave={() => setCreateHovered(false)}
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            height: "44px",
            padding: "0 20px",
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            color: "#66256A",
            background: createHovered ? "#FAFAFA" : "#FFFFFF",
            border: createHovered ? "1px solid #7B189F" : "1px solid #D1D1D6",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "none",
            outline: "none",
            transition: "all 0.15s ease",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
            <path d="M7 2.5V11.5M2.5 7H11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          Create New Task
        </button>
      </div>
    </div>
  );
}

export default function Chat({ onClose, onExpandWorkspace, offerCompleted }: { onClose?: () => void; onExpandWorkspace?: () => void; offerCompleted?: boolean } = {}) {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingMode, setThinkingMode] = useState<"agents" | "simple">("agents");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showTasks, setShowTasks] = useState(false);
  const [showAgents, setShowAgents] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [taskBadgeCount, setTaskBadgeCount] = useState(0);

  // When offer is completed from workspace, show follow-up AI message after 2s delay
  useEffect(() => {
    if (!offerCompleted) return;
    setThinkingMode("simple");
    setIsThinking(true);
    const timeout = setTimeout(() => {
      setIsThinking(false);
      const now = new Date();
      const timestamp = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
      const offerMsg: ChatMessage = {
        type: "offer_live",
        data: {
          id: (Date.now() + 20).toString(),
          text: "Your SPRING coupon is live. Next, I can track its performance over time and flag if it needs changes.",
          timestamp,
        },
      };
      setChatMessages((prev) => [...prev, offerMsg]);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [offerCompleted]);

  const handleExpandWorkspace = useCallback(() => {
    onExpandWorkspace?.();
    // Show thinking indicator for 2 seconds, then add the follow-up AI message
    setThinkingMode("simple");
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
      const now = new Date();
      const timestamp = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
      const aiMsg: AIMessage = {
        id: (Date.now() + 10).toString(),
        text: "I've opened the recovery workspace. You'll see prioritized products with metrics, plus suggested ads and promos within your budget. Review and approve what you want to move forward with.",
        timestamp,
      };
      setChatMessages((prev) => [...prev, { type: "ai", data: aiMsg }]);
    }, 2000);
  }, [onExpandWorkspace]);

  const handleInputCardSelect = useCallback((cardId: string, option: string) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

    // Replace the input card with a user message bubble showing the selected option
    setChatMessages((prev) => {
      const userResponse: ChatMessage = {
        type: "user",
        data: {
          id: cardId + "-response",
          text: option,
          timestamp,
        },
      };
      return prev.map((msg) =>
        msg.type === "input_card" && msg.data.id === cardId
          ? userResponse
          : msg
      );
    });

    // Show thinking state for 2 seconds, then AI response
    setThinkingMode("simple");
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);

      const aiNow = new Date();
      const aiTimestamp = aiNow.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
      const aiMsg: AIMessage = {
        id: (Date.now() + 2).toString(),
        text: "Got it. I'll create a workspace with a plan and recommendations.",
        timestamp: aiTimestamp,
      };
      const workspaceId = (Date.now() + 3).toString();

      setChatMessages((prev) => [...prev, { type: "ai", data: aiMsg }]);

      // Brief beat, then loading line, then expand button (no duplicate intro above button)
      setTimeout(() => {
        const workspaceMsg: ChatMessage = {
          type: "creating_workspace",
          data: { id: workspaceId },
        };
        setChatMessages((prev) => [...prev, workspaceMsg]);

        setTimeout(() => {
          const completeNow = new Date();
          const completeTimestamp = completeNow.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

          setChatMessages((prev) =>
            prev.map((msg) =>
              msg.type === "creating_workspace" && msg.data.id === workspaceId
                ? {
                    type: "workspace_complete" as const,
                    data: {
                      id: workspaceId,
                      text: "",
                      buttonLabel: "Click here to expand the Under Performing Products Recovery workspace",
                      timestamp: completeTimestamp,
                    },
                  }
                : msg
            )
          );
        }, 2000);
      }, 500);
    }, 2000);
  }, []);

  const handleOfferAction = useCallback((id: string, action: string) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

    // Replace the offer_live card with a user response bubble
    setChatMessages((prev) => {
      const userResponse: ChatMessage = {
        type: "user",
        data: {
          id: id + "-response",
          text: action,
          timestamp,
        },
      };
      return prev.map((msg) =>
        msg.type === "offer_live" && msg.data.id === id
          ? userResponse
          : msg
      );
    });

    // Show thinking state, then AI response
    setThinkingMode("simple");
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      const aiNow = new Date();
      const aiTimestamp = aiNow.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
      const isCreateTask = action === "Create a Task";
      const aiMsg: AIMessage = {
        id: (Date.now() + 30).toString(),
        text: isCreateTask
          ? "This offer is now being tracked.\n\nI'll monitor sales, conversion, and coupon cost, and notify you if anything needs attention.\n\nYou'll receive updates via your preferred [notification settings](#)."
          : "Understood. I won't create a tracking task for this offer.",
        timestamp: aiTimestamp,
      };
      setChatMessages((prev) => [...prev, { type: "ai", data: aiMsg }]);
      if (isCreateTask) {
        setTaskBadgeCount(3);
      }
    }, 2000);
  }, []);

  const handleSend = useCallback((text: string) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
    const userMsg: UserMessage = { id: Date.now().toString(), text, timestamp };

    // Add user message and start thinking after a 2-second delay
    setChatMessages((prev) => [...prev, { type: "user", data: userMsg }]);

    // Hide suggestions after first message
    setShowSuggestions(false);

    setTimeout(() => {
      setIsThinking(true);
      setThinkingMode("agents");

      // Wait for all 3 agent lines (0s + 2s + 4s), then input card
      const responseDelay = 6000 + Math.random() * 1000;
      setTimeout(() => {
        const aiNow = new Date();
        const aiTimestamp = aiNow.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

        setIsThinking(false);

        // Show "Worked with 3 agents" line, then the input card
        const workedMsg = {
          type: "worked_with_agents" as const,
          data: { id: (Date.now() + 0.5).toString(), agentCount: 3 },
        };

        // Show the input card instead of a direct AI response
        const inputCard: InputCardMessage = {
          id: (Date.now() + 1).toString(),
          question: "What are you hoping this budget will help with?",
          options: [
            "Grow sales for my best opportunities",
            "Support products that are underperforming",
            "See where this budget could make the biggest difference",
            "Something else",
          ],
          timestamp: aiTimestamp,
        };
        setChatMessages((prev) => [...prev, workedMsg, { type: "input_card", data: inputCard }]);
      }, responseDelay);
    }, 2000);
  }, []);

  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)] size-full" data-name="Chat">
      <Top onClose={onClose} taskBadgeCount={taskBadgeCount} onTasksClick={() => { setShowTasks(!showTasks); setShowAgents(false); setShowHistory(false); }} onAgentsClick={() => { setShowAgents(!showAgents); setShowTasks(false); setShowHistory(false); }} onHistoryClick={() => { setShowHistory(!showHistory); setShowTasks(false); setShowAgents(false); }} />
      {showHistory ? (
        <ConversationHistoryView onBack={() => setShowHistory(false)} onOpenWorkspace={onExpandWorkspace} />
      ) : showAgents ? (
        <MyAgentsView onBack={() => setShowAgents(false)} />
      ) : showTasks ? (
        <TasksView onBack={() => setShowTasks(false)} />
      ) : (
        <>
          <MessageContainer chatMessages={chatMessages} isThinking={isThinking} thinkingMode={thinkingMode} onInputCardSelect={handleInputCardSelect} onExpandWorkspace={handleExpandWorkspace} onOfferAction={handleOfferAction} />
          <Bottom onSend={handleSend} showSuggestions={showSuggestions} />
        </>
      )}
    </div>
  );
}