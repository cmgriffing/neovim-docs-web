export interface HelpSection {
  title: string;
  anchor: string;
  extraAnchor?: string;
  content: string;
}

export interface HelpPage {
  title: string;
  slug: string;
  sections: HelpSection[];
}
