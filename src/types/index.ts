export interface Business {
  id: string;
  name: string;
  description: string;
  industry: string;
  aiContext: string;
  logo?: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'business' | 'visitor';
  businessId?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}