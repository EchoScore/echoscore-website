import { Twitter, Instagram, Linkedin, Facebook, Youtube, Search, Heart } from "lucide-react"

export function SupportedPlatforms() {
  const platforms = [
    { name: "Twitter (X)", icon: Twitter },
    {
      name: "TikTok",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    { name: "Instagram", icon: Instagram },
    {
      name: "Reddit",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm6 7.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .221.049.431.136.621-.822.567-1.908.958-3.136 1.057V9.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.678c-1.228-.099-2.314-.49-3.136-1.057.087-.19.136-.4.136-.621 0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .635.396 1.177.953 1.398.067.027.138.046.209.06C5.276 13.187 5 13.576 5 14c0 1.657 3.134 3 7 3s7-1.343 7-3c0-.424-.276-.813-.662-1.042.071-.014.142-.033.209-.06.557-.221.953-.763.953-1.398zM8.5 15c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm7 0c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
        </svg>
      ),
    },
    { name: "LinkedIn", icon: Linkedin },
    { name: "Facebook", icon: Facebook },
    { name: "YouTube", icon: Youtube },
    { name: "Google Results", icon: Search },
    {
      name: "Dating Apps",
      icon: () => (
        <div className="relative">
          <Heart className="w-6 h-6" />
          <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">+4</div>
        </div>
      ),
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Supported Platforms</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 justify-items-center max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-2">
                <platform.icon className="w-6 h-6 text-[#0087C7]" />
              </div>
              <span className="text-xs text-center">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
