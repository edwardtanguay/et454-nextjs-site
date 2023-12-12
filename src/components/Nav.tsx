import Link from "next/link"

export const Nav = () => {
	return (
		<nav>
			<ul>
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