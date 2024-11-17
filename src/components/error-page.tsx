import type { FC } from "react"
import { ArrowClockwise, House } from "react-bootstrap-icons"
import { Link, useRouteError } from "react-router-dom"

interface RoutingError {
	status: number
	statusText: string
	internal: boolean
	data: string
	error: Error
}

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error)

	return <section className="min-h-screen flex flex-col justify-center gap-4 xl:max-w-screen-xl m-auto p-4">
		{(error as RoutingError).status === 404 ? <NotFoundErrorPage /> : <OtherErrorPage error={error as Error} />}
	</section>
}

const NotFoundErrorPage = () => {
	return <section className="">
		<h2 className="text-6xl font-bold">404</h2>
		<p>The page haven't been found.</p>
		<div>
			<Link to="/" className="py-2 px-4 inline-flex gap-4 items-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white rounded-full">
				<House /> Front page
			</Link>
		</div>
	</section>
}

const OtherErrorPage: FC<{ error: Error }> = ({ error }) => {
	return <>
		<h2 className="text-6xl font-bold">Oops...</h2>
		<p>I'm terribly sorry, something unexpected just happened.</p>
		<div>
			<button type="button" className="py-2 px-4 inline-flex gap-4 items-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white rounded-full" onClick={() => location.reload()}>
				<ArrowClockwise /> Reload page
			</button>
		</div>
		<section>
			<h3 className="text-2xl mb-2"><code>{error.name}: {error.message}</code></h3>
			<pre className="bg-zinc-700 p-4 rounded-md"><code>{error.stack}</code></pre>
		</section>
	</>
}

export default ErrorPage
