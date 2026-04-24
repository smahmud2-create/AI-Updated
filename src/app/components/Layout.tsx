import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";
import Avatar from "../../imports/Avatar";
import Chat from "../../imports/Chat";
import { WorkspacePanel } from "./WorkspacePanel";

interface LayoutProps {
  children?: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Layout({ children, currentPage, setCurrentPage }: LayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isWorkspaceExpanded, setIsWorkspaceExpanded] = useState(false);
  const [offerCompleted, setOfferCompleted] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleExpandWorkspace = () => {
    setIsWorkspaceExpanded(true);
  };

  const handleCloseWorkspace = () => {
    setIsWorkspaceExpanded(false);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setIsWorkspaceExpanded(false);
  };

  return (
    <div className="flex flex-row min-h-screen bg-[var(--partnerhome-bg-color-global-body)] font-[var(--partnerhome-font-family-base)] overflow-hidden">
      {/* Sidebar - Fixed Left */}
      <div className="h-screen sticky top-0 z-20 shadow-[var(--partnerhome-shadow-10)]">
         <Sidebar
            isCollapsed={isCollapsed}
            toggleCollapse={toggleCollapse}
            activeItem={currentPage}
            setActiveItem={setCurrentPage}
            setCurrentPage={setCurrentPage}
         />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Navigation */}
        <div className="shrink-0 z-10 relative">
           <TopNav isSidebarExpanded={!isCollapsed} setCurrentPage={setCurrentPage} />
        </div>

        {/* Page Content + Workspace Panel + Chat Panel */}
        <div className="flex-1 flex flex-row overflow-hidden relative">
          {/* Main page content - hidden when workspace is expanded */}
          {!isWorkspaceExpanded && (
            <div className="flex-1 overflow-auto relative bg-white">
              {children}
            </div>
          )}

          {/* Workspace Panel - opens to the left of chat */}
          {isWorkspaceExpanded && (
            <div
              style={{
                flex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <WorkspacePanel onClose={handleCloseWorkspace} onCardCompleted={() => setOfferCompleted(true)} />
            </div>
          )}

          {/* Chat Side Panel - always stays on the right */}
          {isChatOpen && (
            <div
              style={{
                width: isWorkspaceExpanded ? 360 : 440,
                minWidth: isWorkspaceExpanded ? 360 : 440,
                height: "100%",
                borderLeft: "1px solid var(--partnerhome-border-color-base)",
                display: "flex",
                flexDirection: "column",
                transition: "width 0.3s ease, min-width 0.3s ease",
              }}
            >
              <Chat onClose={handleCloseChat} onExpandWorkspace={handleExpandWorkspace} offerCompleted={offerCompleted} />
            </div>
          )}
        </div>
      </div>

      {/* AI Assistant FAB */}
      {!isChatOpen && (
        <div
          onClick={() => setIsChatOpen(true)}
          style={{
            position: "fixed",
            bottom: "var(--partnerhome-spacing-3000)",
            right: "var(--partnerhome-spacing-3000)",
            width: 52,
            height: 52,
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 1000,
            transition: "transform 200ms ease, box-shadow 200ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(148, 37, 188, 0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
          title="AI Assistant"
        >
          <Avatar />
        </div>
      )}
    </div>
  );
}