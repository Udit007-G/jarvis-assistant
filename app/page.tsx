import { ArrowUpRight, Brain, CodeXml, LockKeyhole, Mic, Sparkles, Wrench } from 'lucide-react'

const capabilities = [
  { icon: Mic, label: 'Understand spoken conversations' },
  { icon: Brain, label: 'Remember information locally' },
  { icon: Sparkles, label: 'Answer questions' },
  { icon: Wrench, label: 'Use tools and interact with your computer' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9fc] text-[#21192b]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-[#e8e1ee] py-6">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-tight" aria-label="Jarvis home">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#6d28a9] text-white shadow-sm shadow-purple-200">
              <Mic aria-hidden="true" />
            </span>
            Jarvis
          </a>
          <a
            href="https://github.com/isair/jarvis"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#dcd0e6] bg-white px-4 py-2 text-sm font-medium text-[#49235f] transition-colors hover:border-[#9b6ac0] hover:bg-[#f7f1fb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d28a9]"
          >
            <CodeXml aria-hidden="true" data-icon="inline-start" />
            View on GitHub
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </a>
        </header>

        <section id="top" className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-24 lg:py-24">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#dfccec] bg-[#f4ecf9] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#6d28a9]">
              <LockKeyhole aria-hidden="true" />
              Private by design
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#2a1538] sm:text-7xl lg:text-[clamp(4.5rem,7vw,7.5rem)]">
              Your voice.<br />
              <span className="text-[#7c3aad]">Your machine.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#675d6e] sm:text-xl">
              Jarvis is a voice-first AI assistant that runs on your own computer — understanding conversations, remembering information locally, answering questions, using tools, and interacting with your computer.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="https://github.com/isair/jarvis" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#6d28a9] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-transform hover:-translate-y-0.5 hover:bg-[#5b208d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d28a9]">
                Explore the project <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
              </a>
              <span className="text-sm text-[#8a7e91]">isair/jarvis</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-full bg-[#ead9f4] opacity-70 blur-3xl" />
            <div className="rounded-[2rem] border border-[#e2d5e9] bg-white p-5 shadow-[0_24px_80px_-32px_rgba(77,31,109,.4)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#eee7f1] pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#f1e5f7] text-[#6d28a9]"><Mic aria-hidden="true" /></span>
                  <div><p className="text-sm font-semibold">Jarvis</p><p className="text-xs text-[#948a99]">Local voice assistant</p></div>
                </div>
                <span className="flex items-center gap-2 text-xs font-medium text-[#6d28a9]"><span className="size-2 rounded-full bg-[#9b59c5]" />On your computer</span>
              </div>
              <div className="flex min-h-[280px] flex-col justify-center gap-8 py-8 sm:min-h-[330px]">
                <div className="mx-auto flex size-28 items-center justify-center rounded-full bg-[#f4ecf9] ring-8 ring-[#faf6fc]">
                  <div className="flex size-20 items-center justify-center rounded-full bg-[#6d28a9] text-white shadow-xl shadow-purple-200"><Mic aria-hidden="true" className="size-8" /></div>
                </div>
                <div className="mx-auto flex items-end gap-1.5" aria-label="Voice activity visualization">
                  {[18, 32, 48, 26, 58, 38, 22, 44, 30, 52, 20].map((height, index) => <span key={index} className="w-1.5 rounded-full bg-[#b887d1]" style={{ height }} />)}
                </div>
              </div>
              <div className="rounded-2xl bg-[#faf7fc] p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#947ca0]">What it can do</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{capabilities.map(({ icon: Icon, label }) => <div key={label} className="flex items-start gap-2.5 text-sm leading-5 text-[#514657]"><Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#7c3aad]" />{label}</div>)}</div></div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-[#e8e1ee] py-14 sm:grid-cols-[.8fr_1.2fr] sm:gap-20 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7c3aad]">Why it matters</p>
          <div><h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#2a1538] sm:text-5xl">A more private way to explore what an AI assistant can be.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#675d6e]">Jarvis shows how AI assistants can be made more private by keeping conversations and AI processing on the user&apos;s own hardware.</p></div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#e8e1ee] py-7 text-sm text-[#8a7e91] sm:flex-row sm:items-center sm:justify-between"><p>Made by Isair and open-source contributors.</p><a href="https://github.com/isair/jarvis" target="_blank" rel="noreferrer" className="font-medium text-[#6d28a9] hover:underline">Read more on GitHub <span aria-hidden="true">↗</span></a></footer>
      </div>
    </main>
  )
}

