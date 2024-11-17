/** @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData */
type ExperimentalNavigator = Navigator & {
	userAgentData?: {
		platform: string;
	}
}

/**
 * @see https://codepen.io/webs95/pen/ZERPWdO
 */
export function isMacOS(): boolean {
	const nav = navigator as ExperimentalNavigator;
	const platforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"];
	const current = nav.userAgentData?.platform || nav.platform;

	return platforms.includes(current)
}