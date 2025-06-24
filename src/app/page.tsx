export default function Home() {
    return (
        <div>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                Hello world, this is the main place!
                <a href="./about/page.tsx">About me</a>
                <a href="/contact/page/tsx">Contact Me</a>
                <a href="/portfolio/page.tsx">Portfolio</a>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                Hello world, this is the footer
            </footer>
        </div>
    );
}
