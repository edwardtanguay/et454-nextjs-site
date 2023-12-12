import Link from "next/link"

export const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-4 bg-slate-700 text-white p-2 font-semibold rounded mb-4">
				<li>
					<Link href="/">Welcome</Link>
				</li>
				<li>
					<Link href="/techskills">Tech Skills</Link>
				</li>
				<li>
					<Link href="/techbooks">Tech Books</Link>
				</li>
			</ul>
		</nav>
	)
}