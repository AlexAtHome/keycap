import "./xbox-series.css"
import { useSelector } from "react-redux"
import clsx from "clsx"
import type { RootState } from "../../store"

const isChrome = 'chrome' in window

enum XboxButton {
	A,
	B,
	Y = isChrome ? 3 : 2,
	X = isChrome ? 2 : 3,
	LB = 4,
	RB,
	LT,
	RT,
	View,
	Menu,
	LSB,
	RSB,
	DPadUp,
	DPadDown,
	DPadLeft,
	DPadRight,
	Xbox,
	Share,
	P1 = 17,
	P2,
	P3,
	P4
}

enum XboxAxis {
	LS_X,
	LS_Y,
	RS_X,
	RS_Y,
	LT,
	RT,
	LTRT,
}

export const XboxGamepadLayout = () => {
	return <div className="grid lg:grid-cols-2 grid-auto-rows gap-8">
		<div>
			<GraphicalXboxController />
		</div>
		<div>
			<div>
				<h3 className="font-bold text-2xl mb-2">Caveats:</h3>
				<ol className="pl-6 list-decimal">
					<li>The Share button on Xbox Series controllers is not recognized in Chromium based browsers, but recognized in Firefox.</li>
					<li>Back buttons on Xbox Elite Controllers are not recognoized in Chromium based browsers, but recognized in Firefox.</li>
					<li>To be able to test out the back buttons on a Xbox Elite Controller, switch off the profile.</li>
					<li>The Xbox button may not be recognized by some browsers.</li>
					<li>Vibration is not supported by Firefox.</li>
				</ol>
			</div>
		</div>
	</div>
}

const GraphicalXboxController = () => {
	const gamepad = useSelector((state: RootState) => state.controller)
	const isShareButtonVisible = useSelector((state: RootState) => state.controller.buttons.length === 18)
	const isXboxElite = useSelector((state: RootState) => state.controller.buttons.length > 18)
	const stick = (x: XboxAxis, y: XboxAxis) => `translate(${gamepad.axes[x] * 250}px, ${gamepad.axes[y] * 250}px)`
	const getFill = (color: string, index: XboxButton, axis?: XboxAxis): string | undefined => {
		if (typeof axis !== 'undefined' && typeof gamepad.axes[axis] === 'number') {
			return gamepad.axes[axis] > 0 ? undefined : color
		}
		return !gamepad.touchedButtons[index] ? color : undefined
	}
	const classes = useSelector(({ controller: c }: RootState) => {
		const getClasses = (index: XboxButton, axis?: XboxAxis) => ({
			'fill-blue-700': c.touchedButtons[index] && !c.pressedButtons[index],
			'fill-green-400': typeof axis !== 'undefined' && typeof c.axes[axis] === 'number' ? c.axes[axis] > 0 : c.pressedButtons[index],
		})
		return {
			rb: getClasses(XboxButton.RB),
			lb: getClasses(XboxButton.LB),
			rt: getClasses(XboxButton.RT, XboxAxis.RT),
			lt: getClasses(XboxButton.LT, XboxAxis.LT),
			rsb: getClasses(XboxButton.RSB),
			lsb: getClasses(XboxButton.LSB),
			a: getClasses(XboxButton.A),
			x: getClasses(XboxButton.X),
			y: getClasses(XboxButton.Y),
			b: getClasses(XboxButton.B),
			menu: getClasses(XboxButton.Menu),
			view: getClasses(XboxButton.View),
			xbox: getClasses(XboxButton.Xbox),
			share: getClasses(XboxButton.Share),
			dpadleft: getClasses(XboxButton.DPadLeft),
			dpadright: getClasses(XboxButton.DPadRight),
			dpadup: getClasses(XboxButton.DPadUp),
			dpaddown: getClasses(XboxButton.DPadDown),
			p1: getClasses(XboxButton.P1),
			p2: getClasses(XboxButton.P2),
			p3: getClasses(XboxButton.P3),
			p4: getClasses(XboxButton.P4),
		}
	})

	return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385.082 278.1" className={clsx("controller", { 'shaking': gamepad.isVibrating })}>
		<defs>
			<pattern x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse" viewBox="0 0 100 100" id="pattern-0">
				<rect x="0" y="0" width="50" height="100" style={{ fill: 'oklch(0.146 0 0)' }} />
				<rect x="50" width="50" height="100" style={{ fill: 'oklch(0.217 0 0)' }} />
			</pattern>
			<pattern id="pattern-0-0" href="#pattern-0" patternTransform="matrix(0.475386, 0.87978, -0.879777, 0.475385, 1068.37223, 97.72333)" />
			<linearGradient gradientUnits="userSpaceOnUse" x1="1063.32" y1="-181.447" x2="1063.32" y2="410.773" id="gradient-0" spreadMethod="pad" gradientTransform="matrix(0.999954, -0.009639, 0.00964, 1, -3.910415, 10.249838)">
				<stop offset="0" style={{ stopColor: 'oklch(0 0 0)' }} />
				<stop offset="1" style={{ stopColor: 'oklch(0.226 0 0)' }} />
			</linearGradient>
			<linearGradient gradientUnits="userSpaceOnUse" x1="1063.32" y1="-181.447" x2="1063.32" y2="410.773" id="gradient-1" spreadMethod="pad" gradientTransform="matrix(0.999954, -0.009639, 0.00964, 1, -2088.435434, -1062.104529)">
				<stop offset="0" style={{ stopColor: 'oklch(0 0 0)' }} />
				<stop offset="1" style={{ stopColor: 'oklch(0.226 0 0)' }} />
			</linearGradient>
			<pattern id="pattern-1" href="#pattern-0" patternTransform="matrix(0.475386, 0.87978, -0.879777, 0.475385, -1016.154434, -974.631029)" />
		</defs>
		<g transform="matrix(0.062261, 0, 0, 0.062261, 176.821, 129.98)">
			<path id="rt" className={clsx(classes.rt)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.342 0 107)', XboxButton.RT, XboxAxis.RT), strokeWidth: '16.0614px' }} d="M 1615.65 -1658.1 C 1615.65 -1660.2 1500.26 -1726.5 1500.26 -1726.5 L 1505.86 -1866.3 L 1608.88 -1884.6 L 1681.14 -1954.2 C 1681.14 -1954.2 1752.31 -2052.5 1754.39 -2052.5 C 1756.47 -2052.5 1808.82 -2062.9 1808.82 -2062.9 L 1902.97 -2056.7 L 2036.93 -2010.7 C 2036.93 -2010.7 2070.41 -1977.1 2070.41 -1975.1 C 2070.41 -1973 2129.03 -1870.4 2129.03 -1870.4 L 2170.89 -1788.8 L 2200.18 -1767.9 L 2297.84 -1566.6 L 2263.59 -1520.6 C 2263.59 -1520.6 2179.24 -1519.1 2175.07 -1519.1 C 2170.89 -1519.1 2036.35 -1537 2034.23 -1537 C 2032.15 -1537 1885.33 -1574.4 1885.33 -1574.4 C 1885.33 -1574.4 1615.65 -1656 1615.65 -1658.1 Z">
				<title>Right Trigger</title>
			</path>
			<path id="lt" className={clsx(classes.lt)} style={{ fill: getFill('oklch(0.342 0 107)', XboxButton.LT, XboxAxis.LT), paintOrder: 'stroke', stroke: 'rgb(0, 0, 0)', strokeWidth: '32.1228px', transformOrigin: '-5737.58px -6654.3px' }} d="M -10339 -11636 C -10339 -11634 -10451 -11570 -10451 -11570 L -10445 -11435 L -10346 -11417 L -10276 -11351 C -10276 -11351 -10208 -11254 -10205 -11254 C -10203 -11254 -10153 -11245 -10153 -11245 L -10062 -11251 L -9932.1 -11295 C -9932.1 -11295 -9900.5 -11328 -9900.5 -11330 C -9900.5 -11332 -9843.8 -11431 -9843.8 -11431 L -9803.3 -11510 L -9775.4 -11530 L -9679.9 -11724 L -9712.3 -11769 C -9712.3 -11769 -9796.1 -11770 -9799.7 -11770 C -9803.3 -11770 -9933.9 -11753 -9935.7 -11753 C -9937.5 -11753 -10079 -11716 -10079 -11716 C -10079 -11716 -10339 -11638 -10339 -11636 Z" transform="matrix(-1, 0, 0, -1, 0.000301, -0.000512)">
				<title>Left Trigger</title>
			</path>
			<path id="rb" className={clsx(classes.rb)} style={{ stroke: 'rgb(0, 0, 0)', strokeWidth: '16.0614px', fill: getFill('oklch(0.342 0 107)', XboxButton.RB) }} d="M 1189.15 -1858.1 L 1350.37 -1988.8 L 1402.99 -2000.6 L 1574.39 -1997.3 C 1574.39 -1997.3 1795.03 -1973.5 1893.47 -1934.5 C 1991.91 -1895.4 2059.79 -1868.3 2144.66 -1820.8 C 2144.66 -1820.8 2277.03 -1715.5 2294.01 -1690.1 C 2294.01 -1690.1 2392.43 -1584.8 2407.71 -1528.8 C 2422.98 -1472.8 2414.5 -1442.3 2414.5 -1442.3 L 1189.15 -1858.1 Z">
				<title>Right Bumper</title>
			</path>
			<path id="lb" className={clsx(classes.lb)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.342 0 107)', XboxButton.LB), transformBox: 'fill-box', transformOrigin: '50% 50%', strokeWidth: '16.0614px' }} d="M -1923.6 -1579 L -1762.4 -1448.3 L -1709.8 -1436.5 L -1538.4 -1439.8 C -1538.4 -1439.8 -1317.7 -1463.6 -1219.3 -1502.6 C -1120.9 -1541.7 -1053 -1568.8 -968.12 -1616.3 C -968.12 -1616.3 -835.74 -1721.6 -818.76 -1747 C -818.76 -1747 -720.35 -1852.3 -705.06 -1908.3 C -689.79 -1964.3 -698.27 -1994.8 -698.27 -1994.8 L -1923.6 -1579 Z" transform="matrix(-1, 0, 0, -1, 0.000245, -0.000001)">
				<title>Left Bumper</title>
			</path>
			<path id="silouette" className="xbox-silouette" d="M 240.329 -1880.4 L 241.097 -1880.4 L 241.343 -1880.4 L 1202.85 -1873.6 C 1202.85 -1873.6 1482.516 -1872.492 1658.6 -1839.6 C 1834.684 -1806.708 1931.155 -1776.821 2059.93 -1723.9 C 2325.132 -1614.913 2461.27 -1455.3 2461.27 -1455.3 C 2455.735 -1469.532 2497.681 -1421.739 2604.11 -1160.9 C 2712.758 -894.621 2920.42 -358.2 2920.42 -358.2 L 3124.49 284.609 L 3284.34 961.433 L 3331.95 1417.18 L 3294.54 1726.69 L 3212.91 1934.16 L 3097.28 2097.41 L 2930.62 2219.85 L 2733.36 2287.87 C 2733.36 2287.87 1791.24 1260.73 1791.24 1257.33 C 1791.24 1253.93 1658.6 1134.89 1658.6 1134.89 L 1488.54 1056.66 L 248.895 1019.3 L 248.897 1020.09 L -996.6 1055.45 L -1166.7 1133.68 C -1166.7 1133.68 -1299.3 1252.72 -1299.3 1256.12 C -1299.3 1259.53 -2241.5 2286.72 -2241.5 2286.72 L -2438.7 2218.72 L -2605.4 2096.22 L -2721 1933.02 L -2802.6 1725.52 L -2840 1416.02 L -2792.4 960.221 L -2632.6 283.401 L -2428.5 -359.41 L -2112.2 -1162 C -2112.2 -1162 -2040.927 -1374.128 -1969.3 -1456.4 C -1863.594 -1577.816 -1822.276 -1624.567 -1568 -1725.1 C -1438.536 -1776.286 -1441.177 -1786.585 -1166.7 -1840.8 C -892.223 -1895.015 -710.9 -1874.8 -710.9 -1874.8 L 240.329 -1880.4 Z" />
			<g>
				<title>X button</title>
				<ellipse id="x-btn" className={clsx(classes.x)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.316 0.003 107)', XboxButton.X), strokeWidth: '16.0614px' }} cx="1420.67" cy="-825.12" rx="202.274" ry="200.176" />
				<path style={{ stroke: 'rgb(0, 0, 0)', fill: 'oklch(0.633 0.133 237)', strokeOpacity: 0 }} d="M 1421.435 -861.925 L 1371.253 -948.522 L 1322.848 -946.746 C 1322.848 -946.746 1315.742 -944.97 1319.295 -939.418 C 1322.848 -933.866 1391.015 -824.177 1391.015 -824.177 L 1311.968 -705.828 C 1311.968 -705.828 1310.191 -699.611 1317.741 -698.5 C 1325.291 -697.389 1363.26 -700.055 1363.26 -700.055 L 1420.325 -790.871 C 1420.325 -790.871 1476.502 -698.056 1476.058 -697.834 C 1475.614 -697.612 1521.577 -695.836 1521.577 -695.836 C 1521.577 -695.836 1528.017 -695.836 1526.462 -702.719 C 1524.907 -709.602 1450.523 -823.733 1450.523 -823.733 L 1524.02 -934.533 C 1524.02 -934.533 1527.795 -944.081 1519.579 -944.303 C 1511.363 -944.525 1475.614 -946.524 1475.614 -946.524 L 1421.435 -861.925 Z" />
			</g>
			<g>
				<title>Y button</title>
				<ellipse id="y-btn" className={clsx(classes.y)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.316 0.003 107)', XboxButton.Y), strokeWidth: '16.0614px' }} cx="1834.33" cy="-1236.2" rx="202.274" ry="200.176" />
				<path style={{ stroke: 'rgb(0, 0, 0)', fill: 'oklch(0.846 0.189 104)', strokeOpacity: 0 }} d="M 1839.397 -1241.93 L 1782.833 -1351.073 L 1743.283 -1350.656 C 1743.283 -1350.656 1734.956 -1345.661 1738.703 -1343.579 C 1742.45 -1341.497 1818.221 -1194.952 1818.221 -1194.952 L 1815.723 -1106.276 C 1815.723 -1106.276 1816.972 -1100.864 1821.967 -1101.28 C 1826.962 -1101.696 1855.273 -1101.28 1855.273 -1101.28 C 1855.273 -1101.28 1859.01 -1102.69 1860.266 -1105.956 C 1861.522 -1109.222 1859.02 -1193.287 1859.02 -1193.287 L 1938.954 -1338.167 C 1938.954 -1338.167 1940.619 -1343.163 1934.79 -1346.077 C 1928.961 -1348.991 1896.489 -1347.326 1896.489 -1347.326 C 1896.489 -1347.326 1839.814 -1244.428 1839.397 -1241.93 Z" />
			</g>
			<g>
				<title>A button</title>
				<ellipse id="a-btn" className={clsx(classes.a)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.316 0.003 107)', XboxButton.A), strokeWidth: '16.0614px' }} cx="1836.63" cy="-403.86" rx="202.274" ry="200.176" />
				<path style={{ stroke: 'rgb(0, 0, 0)', fill: 'oklch(0.724 0.17 134)', strokeOpacity: 0 }} d="M 1810.886 -390.593 C 1808.552 -390.398 1808.357 -393.122 1808.357 -393.122 L 1841.622 -489.027 C 1841.622 -489.027 1842.018 -491.332 1844.346 -491.261 C 1846.674 -491.19 1847.069 -489.416 1847.069 -489.416 C 1847.069 -489.416 1878.778 -395.845 1879.751 -392.927 C 1880.724 -390.009 1878.389 -389.62 1878.389 -389.62 L 1845.124 -390.593 C 1844.929 -390.787 1813.22 -390.788 1810.886 -390.593 Z M 1823.33 -543.74 C 1823.33 -543.74 1817.39 -542.82 1816.02 -538.71 C 1814.64 -534.6 1723.26 -292.9 1723.26 -292.9 C 1723.26 -292.9 1721.44 -286.96 1730.12 -286.05 C 1738.8 -285.13 1770.33 -287.42 1770.33 -287.42 C 1770.33 -287.42 1774.89 -289.24 1776.26 -292.44 C 1777.63 -295.64 1796.83 -353.21 1796.83 -353.21 L 1845.71 -352.3 L 1845.71 -352.39 L 1891.852 -351.743 C 1891.852 -351.743 1912.608 -294.397 1913.988 -291.197 C 1915.348 -287.987 1919.695 -285.038 1919.695 -285.038 C 1919.695 -285.038 1951.896 -282.768 1960.576 -283.668 C 1969.256 -284.598 1967.884 -290.09 1967.884 -290.09 C 1967.884 -290.09 1875.375 -534.7 1874.005 -538.8 C 1872.635 -542.91 1866.023 -543.84 1866.023 -543.84 L 1843.33 -543.68 Z" />
			</g>
			<g>
				<title>B button</title>
				<ellipse id="b-btn" className={clsx(classes.b)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.316 0.003 107)', XboxButton.B), strokeWidth: '16.0614px' }} cx="2255.24" cy="-809.22" rx="202.274" ry="200.176" />
				<path style={{ stroke: 'rgb(0, 0, 0)', fill: 'oklch(0.618 0.205 26.4)' }} d="M 2189.756 -813.332 C 2189.756 -815.374 2188.641 -917.402 2188.641 -925.158 C 2188.641 -932.914 2194.528 -932.214 2194.528 -932.214 C 2202.551 -932.112 2268.532 -930.71 2285.752 -927.009 C 2336.906 -916.014 2347.058 -896.455 2349.849 -864.137 C 2352.64 -831.819 2309.555 -813.799 2309.146 -813.799 C 2308.85 -813.799 2337.969 -806.969 2353.307 -783.134 C 2368.645 -759.299 2363.312 -751.867 2363.312 -751.867 C 2359.873 -686.831 2291.71 -679.64 2291.71 -679.64 L 2189.466 -680.265 Z M 2237.616 -828.1 L 2276.294 -827.494 C 2276.294 -827.494 2299.956 -835.078 2302.079 -848.425 C 2304.202 -861.772 2303.596 -868.447 2300.107 -874.059 C 2296.618 -879.671 2292.827 -886.041 2277.204 -890.743 C 2277.204 -890.743 2239.285 -893.777 2237.161 -892.867 Z M 2235.797 -794.121 L 2237.01 -716.614 C 2237.01 -716.614 2282.969 -715.855 2283.424 -716.159 C 2283.879 -716.463 2305.417 -722.226 2307.844 -729.051 C 2307.844 -729.051 2317.854 -738.607 2317.096 -749.528 C 2317.096 -749.528 2317.854 -766.97 2308.754 -775.161 C 2308.754 -775.161 2300.563 -786.233 2286.306 -790.935 C 2286.306 -790.935 2266.588 -795.486 2235.797 -794.121 Z" />
			</g>
			<g>
				<title>Menu button</title>
				<ellipse id="menu-btn" className={clsx(classes.menu)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.316 0.003 107)', XboxButton.Menu), strokeWidth: '16.0614px' }} cx="695.489" cy="-833.39" rx="128.299" ry="126.968" />
				<path d="M 629.33 -803.99 L 764.39 -803.99 L 764.39 -790.739 L 629.33 -790.739 Z M 629.335 -844.87 L 764.395 -844.87 L 764.395 -831.619 L 629.335 -831.619 Z M 629.34 -885.42 L 764.4 -885.42 L 764.4 -872.169 L 629.34 -872.169 Z" style={{ fill: 'rgb(216, 216, 216)', stroke: 'rgb(0, 0, 0)', strokeOpacity: 0, paintOrder: 'fill' }} />
			</g>
			<g>
				<title>View Button</title>
				<ellipse id="view-btn" className={clsx(classes.view)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.316 0.003 107)', XboxButton.View), strokeWidth: '16.0614px' }} cx="-209.15" cy="-834.67" rx="128.299" ry="126.968" />
				<path d="M -267.05 -840.025 L -257.87 -840.025 L -257.87 -826.992 L -279.35 -826.992 L -279.35 -899.14 L -188.394 -899.14 L -188.394 -877.55 L -200.83 -877.55 L -200.83 -887.23 L -267.05 -887.23 L -267.05 -840.025 Z" style={{ fill: 'rgb(216, 216, 216)', strokeOpacity: 0 }} />
				<path d="M -216.34 -837.03 L -149.958 -837.03 L -149.958 -789.826 L -216.34 -789.826 Z M -229.68 -776.968 L -137.606 -776.968 L -137.606 -849.86 L -229.68 -849.86 Z" style={{ fill: "rgb(216, 216, 216)" }} />
			</g>
			{isShareButtonVisible && <g>
				<title>Share button</title>
				<rect id="share-btn" className={clsx(classes.share)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.316 0.003 107)', XboxButton.Share), strokeWidth: '16.0614px' }} x="78.456" y="-581.41" width="332.744" height="187.141" rx="90" ry="90" />
				<path d="M 158.589 -509.84 L 171.763 -509.84 L 171.763 -454.901 L 317.161 -454.901 L 317.161 -509.84 L 329.854 -509.84 L 329.854 -441.88 L 158.589 -441.88 L 158.589 -509.84 Z M 243.705 -546.151 L 217.195 -518.795 L 226.784 -510.758 L 237.36 -521.757 L 237.783 -478.607 L 250.615 -478.748 L 250.192 -521.898 L 261.896 -511.181 L 271.484 -519.782 L 243.705 -546.151 Z" style={{ fill: 'rgb(216, 216, 216)' }} />
			</g>}
			<g id="xbox">
				<title>Xbox Button</title>
				<ellipse className={clsx(classes.xbox)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.979 0 none)', XboxButton.Xbox) }} cx="243.45" cy="-1445.6" rx="234.077" ry="231.649" />
				<path style={{ stroke: 'rgb(0, 0, 0)', fill: 'oklch(0.129 0 107)' }} d="M 400.308 -1619 L 356.122 -1596.5 L 311.236 -1555.9 L 348.407 -1506.1 L 382.774 -1454.9 L 408.023 -1406.5 L 424.154 -1360.2 C 424.154 -1360.2 433.271 -1309.7 433.271 -1309 C 433.271 -1308.6 428.646 -1301.7 423.081 -1295.7 C 417.426 -1289.6 411.634 -1283 411.634 -1283 L 394.538 -1337.8 L 347.241 -1402.6 L 285.518 -1467.4 L 243.821 -1500.359 L 202.898 -1467.2 L 141.175 -1402.4 L 93.878 -1337.6 L 76.782 -1282.9 C 76.782 -1282.9 70.99 -1289.5 65.335 -1295.6 C 59.77 -1301.6 55.145 -1308.5 55.145 -1308.9 C 55.145 -1309.6 64.262 -1360.1 64.262 -1360.1 L 80.393 -1406.3 L 105.642 -1454.7 L 140.009 -1505.9 L 177.18 -1555.7 L 132.294 -1596.4 L 88.108 -1618.9 L 109.123 -1635.7 L 126.072 -1645.8 C 126.072 -1645.8 156.498 -1643.7 156.635 -1643.7 C 156.772 -1643.7 201.181 -1629.9 201.181 -1629.7 C 201.181 -1629.6 240.39 -1610.149 244.14 -1608.449 C 244.14 -1608.449 287.235 -1629.7 287.235 -1629.9 C 287.235 -1630 331.644 -1643.9 331.781 -1643.9 C 331.918 -1643.9 362.344 -1645.9 362.344 -1645.9 L 379.293 -1635.9 L 400.308 -1619 Z" />
			</g>
			<g transform="matrix(1, 0, 0, 0.93868, -2.760599, 15.238671)">
				<title>D-Pad</title>
				<ellipse style={{ stroke: 'rgb(0, 0, 0)', fill: 'oklch(0.316 0.003 107)', strokeWidth: "16.5694px" }} cx="-570.91" cy="188.817" rx="473.078" ry="498.755" />
				<rect x="-733.48" y="37.921" width="318.362" height="309.873" style={{ fill: 'rgb(32, 32, 32)' }} />
				<path id="dpad-left-btn" className={clsx(classes.dpadleft)} d="M -998.47 38.677 L -733.7 38.677 L -733.7 347.113 L -998.47 347.113 C -1008.9 347.113 -1017.4 337.88 -1017.4 326.491 L -1017.4 59.299 C -1017.4 47.91 -1008.9 38.677 -998.47 38.677 Z" style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.242 0 107)', XboxButton.DPadLeft) }} />
				<path id="dpad-right-btn" className={clsx(classes.dpadright)} d="M -395.64 37.863 L -128.53 37.863 L -128.53 346.832 L -395.64 346.832 C -406.12 346.832 -414.75 337.583 -414.75 326.174 L -414.75 58.521 C -414.75 47.112 -406.12 37.863 -395.64 37.863 Z" style={{ stroke: 'rgb(0, 0, 0)', transformBox: 'fill-box', transformOrigin: '50% 50%', fill: getFill('oklch(0.242 0 107)', XboxButton.DPadRight) }} transform="matrix(-1, 0, 0, -1, -0.000085, 0.000012)" />
				<path id="dpad-up-btn" className={clsx(classes.dpadup)} d="M -701.85 -288.29 L -427.6 -288.29 L -427.6 51.092 L -701.85 51.092 C -712.61 51.092 -721.47 40.932 -721.47 28.401 L -721.47 -265.6 C -721.47 -278.13 -712.61 -288.29 -701.85 -288.29 Z" style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '-574.537px -118.6px', fill: getFill('oklch(0.242 0 107)', XboxButton.DPadUp) }} transform="matrix(0, 1.065326, -0.93868, 0, -0.000004, 0.000014)" />
				<path id="dpad-down-btn" className={clsx(classes.dpaddown)} d="M -701.72 672.271 L -427.47 672.271 L -427.47 332.889 L -701.72 332.889 C -712.48 332.889 -721.34 343.049 -721.34 355.58 L -721.34 649.581 C -721.34 662.111 -712.48 672.271 -701.72 672.271 Z" style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '-574.412px 502.581px', fill: getFill('oklch(0.242 0 107)', XboxButton.DPadDown) }} transform="matrix(0, -1.065326, 0.93868, 0, -0.000022, -0.000001)" />
			</g>
			<g>
				<title>Right Stick</title>
				<ellipse id="rsb" className={clsx(classes.rsb)} style={{ transformBox: 'fill-box', transformOrigin: '50% 50%', strokeWidth: '48.1843px', fill: getFill('oklch(0.342 0 107)', XboxButton.RSB), stroke: 'oklch(0.239 0 107)' }} cx="1063.32" cy="114.665" rx="420.819" ry="420.819" />
				<ellipse id="rs" className="will-change-transform" style={{ transform: stick(XboxAxis.RS_X, XboxAxis.RS_Y), transformOrigin: '1063.32px 114.663px', strokeWidth: '112.43px', stroke: 'url("#pattern-0-0")', strokeLinecap: 'square', fill: 'url("#gradient-0")', fillRule: 'nonzero' }} cx="1063.32" cy="114.663" rx="296.11" ry="296.11" />
			</g>
			<g transform="matrix(1, 0, 0, 1, -328.741, 131.973)">
				<title>Left Stick</title>
				<ellipse id="lsb" className={clsx(classes.lsb)} style={{ strokeWidth: '48.1843px', fill: getFill('oklch(0.342 0 107)', XboxButton.LSB), stroke: 'oklch(0.239 0 107)', transformBox: 'fill-box', transformOrigin: '50% 50%' }} cx="-1017.7" cy="-955.46" rx="420.819" ry="420.819" />
				<ellipse id="ls" className="will-change-transform" style={{ transform: stick(XboxAxis.LS_X, XboxAxis.LS_Y), strokeWidth: '112.43px', strokeLinecap: 'square', fillRule: 'nonzero', fill: 'url("#gradient-1")', stroke: 'url("#pattern-1")', transformOrigin: '-1021.2px -957.691px' }} cx="-1021.2" cy="-957.7" rx="296.11" ry="296.11" />
			</g>
			{isXboxElite && [
				<path id="p1" key={0} className={clsx(classes.p1)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.521 0 none)', XboxButton.P1), strokeWidth: '16.0614px' }} d="M 988.636 1089.68 L 1370.98 1098.72 L 1504.48 1134.92 L 1565.56 1130.39 L 1608.54 1162.07 L 1640.21 1241.25 L 1649.27 1336.29 C 1649.27 1336.29 1633.44 1404.16 1631.17 1404.16 C 1628.91 1404.16 1594.97 1447.14 1594.97 1447.14 C 1594.97 1447.14 1563.3 1453.92 1561.03 1453.92 C 1558.77 1453.92 1425.28 1370.22 1425.28 1370.22 L 1350.63 1343.06 L 1278.22 1334.02 L 988.636 1334.02 C 988.636 1334.02 945.64 1324.96 936.597 1284.25 L 938.75 1154.28 C 938.75 1154.28 933.401 1099.4 988.636 1089.68 Z">
					<title>P1</title>
				</path>,
				<path id="p2" key={1} className={clsx(classes.p2)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.521 0 none)', XboxButton.P2), strokeWidth: '16.0614px' }} d="M 985.215 1404.27 L 1326.13 1410.52 L 1412.66 1429.28 L 1490.84 1468.9 L 1608.65 1616.94 L 1754.6 2015.19 L 1767.13 2091.3 L 1762.96 2186.18 L 1743.14 2243.5 L 1708.73 2281.03 L 1665.99 2277.9 L 1613.31 2248.08 C 1613.31 2248.08 1579.98 2192.23 1579.98 2191.94 C 1579.98 2191.64 1545.02 2101.07 1545.02 2101.07 L 1488.82 1878.49 L 1444.75 1733.04 L 1381.95 1676.84 L 1287.17 1643.78 L 1156.06 1637.18 L 1039.25 1634.98 L 989.68 1636.07 C 989.68 1636.07 946.186 1634.55 935.858 1589.01 L 937.288 1457.71 C 937.288 1457.71 935.521 1410.41 985.215 1404.27 Z">
					<title>P2</title>
				</path>,
				<path id="p3" key={2} className={clsx(classes.p3)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.521 0 none)', XboxButton.P3), transformOrigin: '-832.104px 1278.62px', strokeWidth: '16.0614px' }} d="M -1136.4 1460.74 L -754.06 1451.68 L -620.58 1415.48 L -559.5 1420.02 L -516.5 1388.35 L -484.84 1309.15 L -475.78 1214.13 C -475.78 1214.13 -491.62 1146.26 -493.88 1146.26 C -496.13 1146.26 -530.09 1103.26 -530.09 1103.26 C -530.09 1103.26 -561.76 1096.48 -564.01 1096.48 C -566.27 1096.48 -699.76 1180.2 -699.76 1180.2 L -774.43 1207.36 L -846.82 1216.4 L -1136.4 1216.4 C -1136.4 1216.4 -1179.4 1225.44 -1188.4 1266.17 L -1186.3 1396.13 C -1186.3 1396.13 -1191.7 1451.02 -1136.4 1460.74 Z" transform="matrix(-1, 0, 0, -1, 0.000357, 0.000016)">
					<title>P3</title>
				</path>,
				<path id="p4" key={3} className={clsx(classes.p4)} style={{ stroke: 'rgb(0, 0, 0)', fill: getFill('oklch(0.521 0 none)', XboxButton.P4), transformOrigin: '-890.663px 1849.47px', strokeWidth: '16.0614px' }} d="M -1256.9 2287.85 L -916.04 2281.61 L -829.5 2262.85 L -751.32 2223.21 L -633.51 2075.17 L -487.56 1676.93 L -475.05 1600.83 L -479.2 1505.95 L -499.02 1448.61 L -533.43 1411.08 L -576.17 1414.21 L -628.87 1444.04 C -628.87 1444.04 -662.18 1499.88 -662.18 1500.19 C -662.18 1500.48 -697.14 1591.05 -697.14 1591.05 L -753.34 1813.63 L -797.41 1959.09 L -860.21 2015.28 L -954.99 2048.33 L -1086.1 2054.93 L -1202.9 2057.15 L -1252.5 2056.04 C -1252.5 2056.04 -1296 2057.58 -1306.3 2103.1 L -1304.9 2234.4 C -1304.9 2234.4 -1306.6 2281.7 -1256.9 2287.85 Z" transform="matrix(-1, 0, 0, -1, 0.000308, -0.000088)">
					<title>P4</title>
				</path>
			]}
		</g>
	</svg>
}
