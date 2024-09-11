const stats = [
  { name: 'Attendees', stat: '7,500+' },
  { name: 'Speakers', stat: '35+' },
  { name: 'Countries', stat: '110+' },
  { name: 'Advertisers', stat: '160+' },
  { name: 'Traffic Sources', stat: '60+' },
  { name: 'Affiliate Networks', stat: '180+' },

]

export default function Stats() {
  return (
    <div className="bg-black px-16 py-12">
      <h3 className="text-3xl font-semibold leading-6 text-gray-100 text-center">THE WORLD’S #1🏆 PERFORMANCE MARKETING CONFERENCE</h3>
      <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white/90 px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-md  text-gray-700 font-semibold">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
