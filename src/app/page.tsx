import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play} from "lucide-react"
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-1'>
            <div className='w-3 h-3 bg-red-600 rounded-full'/>
            <div className='w-3 h-3 bg-yellow-600 rounded-full'/>
            <div className='w-3 h-3 bg-green-600 rounded-full'/>
          </div>
          <nav className="space-y-5 mt-5">
            <a href="#" className="flex items-center gap-3 text-xs font-semibold tet-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="#" className="flex items-center gap-3 text-xs font-semibold tet-zinc-200">
              <Search />
              Search
            </a>
            <a href="#" className="flex items-center gap-3 text-xs font-semibold tet-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-1">
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Rap de anime</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hit Brasil</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Funk</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Musica de Corno</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Pagodinho</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Apenas com alcool</a>
          </nav>
        </aside>
        <main className='flex-1 p-6'>
          <div className="flex items-center gap-4">
            <button>
              <ChevronLeft className="w-8 h-8 rounded-full bg-black/40 p-1"/>
            </button>
            <button>
            <ChevronRight className="w-8 h-8 rounded-full bg-black/40 p-1"/>
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group  hover:bg-white120 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
        </main>
      </div>
      <footer className='bg-zing-800 border-t border-zinc-700 p-6'>
        footer
      </footer>
    </div>
  )
}
