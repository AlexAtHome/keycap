import { Link, Outlet } from "react-router-dom"

function Root() {
	return (
		<main className='flex flex-col gap-12 py-8 min-h-screen'>
			<header className='flex flex-row gap-8 relative w-full lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto px-4'>
				<div role="presentation">
					<h1 className='text-4xl mb-2 font-bold'>Keycap</h1>
					<small>The Keyboard Testing Tool</small>
				</div>
				<nav className="flex flex-col justify-center items-stretch pb-6">
					<ul className="flex justify-start items-start gap-8">
						<li className="inline-flex">
							<Link to="/">Keyboard</Link>
						</li>
						<li className="inline-flex">
							<Link to="/gamepad" className="inline-flex flex-col gap-1">
								<span>Gamepad</span>
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<div className="flex flex-col relative w-full lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto px-4">
				<Outlet />
			</div>

			<footer className='flex flex-row justify-end relative w-full lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto mt-auto px-4'>
				<div className="inline-flex items-center gap-2">
					{new Date().getFullYear()} &copy;
					<a className="inline-flex items-center gap-2 hover:underline" href="https://alexalex.dev">
						<img src="https://github.com/AlexAtHome.png?size=64" className="rounded-full w-6" />
						alexalex.dev
					</a>
				</div>
			</footer>
		</main >
	)
}

export default Root
