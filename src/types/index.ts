// Export all sidebar-related types
export * from "./sidebar";

// Re-export commonly used types with shorter names
export type {
  SidebarData as SidebarDataConfig,
  NavigationItem as NavItem,
  NavigationGroup as NavGroup,
  UserInfo as SidebarUser,
  SidebarSettings as SidebarConfig,
} from "./sidebar";
