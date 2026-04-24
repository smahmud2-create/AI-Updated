import React from 'react';
import { HomePage } from './HomePage';
import { ComponentsPage } from './ComponentsPage';
import { DataTableSamplesPage } from './DataTableSamplesPage';
import { AnalyticsLibraryPage } from './AnalyticsLibraryPage';

interface PageContentProps {
  currentPage: string;
}

export function PageContent({ currentPage }: PageContentProps) {
  // Map of all available pages - you can add real content components later
  const pageComponents: Record<string, React.ReactNode> = {
    'home': <HomePage />,
    
    // Profile menu pages
    'components': <ComponentsPage />,
    'data-table-samples': <DataTableSamplesPage />,
    'analytics-library': <AnalyticsLibraryPage />,
    
    // Customer Orders
    'dropship-orders': <PlaceholderPage title="Dropship Orders" />,
    'castlegate-orders': <PlaceholderPage title="CastleGate Orders" />,
    'order-entry': <PlaceholderPage title="Order Entry" />,
    'multi-channel-order-entry': <PlaceholderPage title="Multi-Channel Order Entry" />,
    'multi-channel-retailers': <PlaceholderPage title="Multi-Channel Retailers" />,
    'order-alerts': <PlaceholderPage title="Order Alerts" />,
    'castlegate-returns': <PlaceholderPage title="CastleGate Returns" />,
    'pickup-center': <PlaceholderPage title="Pickup Center" />,
    
    // Products
    'product-management': <PlaceholderPage title="Product Management" />,
    'libraries': <PlaceholderPage title="Libraries" />,
    'update-product-details': <PlaceholderPage title="Update Product Details" />,
    'pricing-home': <PlaceholderPage title="Pricing Home" />,
    'shipping-dimensions': <PlaceholderPage title="Shipping Dimensions" />,
    'accelerated-product-review': <PlaceholderPage title="Accelerated Product Review" />,
    'advertising-campaigns': <PlaceholderPage title="Advertising Campaigns" />,
    'wayfair-sponsored-products': <PlaceholderPage title="Wayfair Sponsored Products" />,
    'wayfair-sponsored-shops': <PlaceholderPage title="Wayfair Sponsored Shops" />,
    'product-compliance': <PlaceholderPage title="Product Compliance" />,
    'brand-page-management': <PlaceholderPage title="Brand Page Management" />,
    'premium-shelf': <PlaceholderPage title="Premium Shelf" />,
    
    // Inventory
    'inventory-integration-score': <PlaceholderPage title="Inventory Integration Score" />,
    'inventory-alerts': <PlaceholderPage title="Inventory Alerts" />,
    'inventory-management': <PlaceholderPage title="Inventory Management" />,
    'confirm-stock-status': <PlaceholderPage title="Confirm Stock Status" />,
    'product-discontinuation': <PlaceholderPage title="Product Discontinuation" />,
    'castlegate-inventory': <PlaceholderPage title="CastleGate Inventory" />,
    'inbound-orders': <PlaceholderPage title="Inbound Orders" />,
    'castlegate-dashboard': <PlaceholderPage title="CastleGate Dashboard" />,
    'castlegate-products': <PlaceholderPage title="CastleGate Products" />,
    'stocking-orders': <PlaceholderPage title="Stocking Orders" />,
    
    // Finance
    'finance-dashboard': <PlaceholderPage title="Finance Dashboard" />,
    'deductions': <PlaceholderPage title="Deductions" />,
    'ar-summary': <PlaceholderPage title="Accounts Receivable Summary" />,
    'invoice-summary': <PlaceholderPage title="Invoice Summary" />,
    'ap-summary': <PlaceholderPage title="Accounts Payable Summary" />,
    'invoice-processing': <PlaceholderPage title="Invoice Processing" />,
    
    // Reports
    'sales-dashboard': <PlaceholderPage title="Sales Dashboard" />,
    'forecast': <PlaceholderPage title="Forecast" />,
    'consumer-insights': <PlaceholderPage title="Consumer Insights" />,
    'supplier-registration-compliance': <PlaceholderPage title="Supplier Registration Compliance" />,
    'operations-performance': <PlaceholderPage title="Operations Performance" />,
    'report-center': <PlaceholderPage title="Report Center" />,
    
    // Developer
    'partner-marketplace': <PlaceholderPage title="Partner Marketplace" />,
    'documentation': <PlaceholderPage title="Documentation" />,
    'application': <PlaceholderPage title="Application" />,
    'testing': <PlaceholderPage title="Testing" />,
    'graphiql': <PlaceholderPage title="GraphiQL" />,
    'supplier-integration-status': <PlaceholderPage title="Supplier Integration Status" />,
    
    // Download Center
    'download-history': <PlaceholderPage title="Download History" />,
    'files': <PlaceholderPage title="Files" />,
    
    // Help & Support
    'help-center': <PlaceholderPage title="Help Center" />,
    'my-tickets': <PlaceholderPage title="My Tickets" />,
    'submit-a-ticket': <PlaceholderPage title="Submit a Ticket" />,
    'system-health': <PlaceholderPage title="System Health" />,
    'contact-us': <PlaceholderPage title="Contact Us" />,
    
    // Parent pages (groups)
    'orders': <PlaceholderPage title="Customer Orders" />,
    'products': <PlaceholderPage title="Products" />,
    'inventory': <PlaceholderPage title="Inventory" />,
    'finances': <PlaceholderPage title="Finance" />,
    'accounts-receivable': <PlaceholderPage title="Accounts Receivable" />,
    'accounts-payable': <PlaceholderPage title="Accounts Payable" />,
    'reports': <PlaceholderPage title="Reports" />,
    'developer': <PlaceholderPage title="Developer" />,
    'download-center': <PlaceholderPage title="Download Center" />,
    'help-support': <PlaceholderPage title="Help & Support" />,
  };

  return pageComponents[currentPage] || <PlaceholderPage title="Page Not Found" />;
}

// Simple placeholder component for pages without custom content
function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-[var(--partnerhome-spacing-4000)]">
      <h1
        className="text-[var(--partnerhome-font-size-4000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)] mb-[var(--partnerhome-spacing-2000)]"
        style={{ fontFamily: "var(--partnerhome-font-family-base)" }}
      >
        {title}
      </h1>
      <p
        className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
        style={{ fontFamily: "var(--partnerhome-font-family-base)" }}
      >
        This page is ready for your content.
      </p>
    </div>
  );
}