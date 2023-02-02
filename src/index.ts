import { smartHighlight } from "./smartHighlight";

chrome.contextMenus.create({
	id: "smart_highlight",
	title: "Analyze with smart highlight",
	contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(
	({ menuItemId, selectionText }: chrome.contextMenus.OnClickData) => {
		if (menuItemId !== "smart_highlight" || !selectionText) return;
		smartHighlight(selectionText);
	}
);
