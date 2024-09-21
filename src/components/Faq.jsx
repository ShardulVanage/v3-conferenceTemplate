
const faqs = [
  {
    value: "1",
    title: "1) How many tickets are in Company Pass?",
    content: "Please contact us for more information about Company Pass tickets."
  },
  {
    value: "2",
    title: "2) Is there an after party / networking event?",
    content: "Yes, Zep Research features an after-party and networking events. Check the event schedule for details."
  },
  {
    value: "3",
    title: "3) Do you offer additional discounts?",
    content: "Discounts may be available for students, military personnel, or groups. Contact us for more information."
  },
  {
    value: "4",
    title: " 4) Who attends Zep Research?",
    content: "Researchers, professionals, and industry experts attend Zep Research."
  },
   {
    value: "5",
    title: "5) I need a visa to attend, can you send me an invitation letter?",
    content: "Please contact us with your ticket confirmation and visa requirements, and we'll assist with an invitation letter."
  },
   {
    value: "6",
    title: "6) How can I purchase a ticket bundle?",
    content: "Contact us for information on purchasing ticket bundles or Company Passes."
  }
];
export  function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black text-left">Frequently asked questions</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            sending us an email
          </a>{' '}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.value}>
                <dt className="text-base font-semibold leading-7 text-gray-900 ">{faq.title}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.content}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Faq;
