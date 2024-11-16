/**
 * @see https://codepen.io/webs95/pen/ZERPWdO
 */
export function isMacOS(): boolean {
	const platforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"];
	const current = navigator?.userAgentData?.platform || navigator.platform;

	return platforms.includes(current)
}
