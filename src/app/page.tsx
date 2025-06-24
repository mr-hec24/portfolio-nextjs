import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                Hello world, this is the main place!
                <Link href="/about">About me</Link>
                <Link href="/contact">Contact Me</Link>
                <Link href="/portfolio">Portfolio</Link>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                Hello world, this is the footer
            </footer>
        </div>
    );
}
