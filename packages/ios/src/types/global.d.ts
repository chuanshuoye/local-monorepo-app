declare namespace UniApp {
  interface Uni {
    getSystemInfoSync(): SystemInfo;
  }

  interface SystemInfo {
    platform: string;
    [key: string]: any;
  }
}

declare const uni: UniApp.Uni; 