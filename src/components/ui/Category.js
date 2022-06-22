

export default function Category({category : {id, title, image}}) {
  return (
    <a href="#" className="flex flex-col items-center text-center text-gray-500 p-4 gap-y-2 hover:bg-gray-300 
                        hover:text-primary-brand-color transition-all">
        <img src={image} alt={title} className="w-12 h-12 rounded-lg border border-gray-200"/>
        <span className="text-sm font-semibold mt-3 tracking-tight whitespace-nowrap">{title}</span>
    </a>
  )
}
