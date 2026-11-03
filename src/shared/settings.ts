export interface Settings {
  enabled: boolean;
  cafePopup: boolean;
  cafeMobileRedirect: boolean;
}

const DEFAULT_SETTINGS: Settings = { enabled: true, cafePopup: true, cafeMobileRedirect: true };

export async function getSettings(): Promise<Settings> {
  return (await chrome.storage.sync.get(DEFAULT_SETTINGS)) as Settings;
}

export function setSettings(patch: Partial<Settings>): Promise<void> {
  return chrome.storage.sync.set(patch);
}
