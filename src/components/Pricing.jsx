import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@material-tailwind/react'

const tiers = [
  {
    name: 'Affiliate',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$19',
    description: "The perfect plan if you're just getting started with our product.",
    features:
     [ '2-Day exhibition',
    '35+ live speeches, panels & Q&As',
    '5+ Mixers + 2 Happy Hours',
    'Official Networking Event',
    'Official Closing Party',
    '5+ Tracks covering the industry\'s hottest trends',
    'Live chat with attendees via the AW App',
    'Exclusive access to the First-Timers\' Affiliate Meetup',
    'Affiliate World 2024 Ticket Bundle available on next step',],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$49',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
       'Identified as a company',
    'Your logo on badge (black & white)',
    'Company & job title on your app profile',
    'Company name, logo & description on the Featured Companies page',
    '2-Day exhibition',
    '35+ live speeches, panels & Q&As',
    '5+ Mixers + 2 Happy Hours',
    'Official Networking Event',
    'Official Closing Party',
    '5+ Tracks covering the industry\'s hottest trends',
    'Live chat with attendees via the AW App',
    'Exclusive access to the First-Timers\' Affiliate Meetup',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Princing() {
  return (
    <div className="relative isolate bg-black px-6 py-8 ">
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#635c33] to-[#ffffff] opacity-30 mt-12"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2> */}
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
          The right price for you, whoever you are
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
        Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo reprehenderit in aliquid fugiat dolorum
        voluptatibus.
      </p>
      <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-12 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/70 sm:mx-8 lg:mx-0 drop-shadow-2xl',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-white decoration-white' : 'text-gray-900 decoration-black',
                'text-2xl font-bold leading-7 underline decoration-2 underline-offset-4'
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-bold tracking-tight'
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-200', 'text-base drop-shadow-md')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-200', 'mt-6 text-base leading-7 drop-shadow-md')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-200',
                'mt-8 space-y-3 text-sm leading-6 sm:mt-10 drop-shadow-md'
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className={classNames(tier.featured ? 'text-yellow-400' : 'text-gray-900', 'h-6 w-5 flex-none')}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              href={tier.href}
              aria-describedby={tier.id}
              variant='gradient'
              color={tier.featured ? 'yellow' : 'black'}
              className='my-4'
            //   className={classNames(
            //     tier.featured
            //       ? 'bg-yellow-500 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline-yellow-500'
            //       : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
            //     'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
            //   )}
            >
              Get started today
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
