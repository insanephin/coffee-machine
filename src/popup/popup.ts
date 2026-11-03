import { getSettings, setSettings } from "../shared/settings";

const SWITCHES = ["enabled", "cafePopup", "cafeMobileRedirect"] as const;

getSettings().then((settings) => {
  for (const key of SWITCHES) (document.getElementById(key) as HTMLInputElement).checked = settings[key];
});

for (const key of SWITCHES) {
  const input = document.getElementById(key) as HTMLInputElement;
  input.addEventListener("change", () => setSettings({ [key]: input.checked }));
}
