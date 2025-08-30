// Global type declarations

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: {
        send_to?: string;
        value?: number;
        currency?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export {};
