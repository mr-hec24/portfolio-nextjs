export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                Hello world, this is the main place!
                <a href='/about/page.tsx'>About me</a>
                    <a href='/contact/page/tsx'>Contact Me</a>
                    <a href='/portfolio/page.tsx'>Portfolio</a>
                </main>
                    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                        Hello world, this is the footer
                    </footer>
                </div>
                );
}
