export type Testimonial = {
  id: string;
  title: string;
  focus: string;
  quote: string;
};

// Client identities remain anonymous by policy. Testimonial wording is preserved
// from the approved testimonials used on the previous portfolio site.
export const testimonials = [
  {
    id: 'understood-the-assignment',
    title: 'Understood the assignment',
    focus: 'HubSpot setup',
    quote: 'Rahib made our HubSpot setup feel effortless. He figured out what we needed with barely any input and delivered a clean, functional system. Super prepared, super sharp.'
  },
  {
    id: 'more-than-a-demo',
    title: 'More than just a demo',
    focus: 'Training & support',
    quote: 'Rahib didn’t just explain HubSpot — he made sure we understood it. Clear walkthroughs, helpful materials, and actual support between sessions. You could tell he cared.'
  },
  {
    id: 'useful-onboarding',
    title: 'Smooth, actually useful onboarding',
    focus: 'Platform onboarding',
    quote: 'Probably the easiest platform switch we’ve done. Rahib tailored everything to our team, explained what mattered, and left us actually excited to use HubSpot.'
  },
  {
    id: 'real-people',
    title: 'Taught us like real people',
    focus: 'Team enablement',
    quote: 'The live calls were gold. Rahib walked us through real examples, explained things in plain language, and left us with recordings we still use. Onboarding that sticks.'
  },
  {
    id: 'quietly-brilliant',
    title: 'Quietly brilliant',
    focus: 'Problem solving',
    quote: 'Rahib wasn’t the one making noise — he was the one quietly fixing everything while we were still explaining the problem. Calm, thoughtful, and honestly just really good at what he does. Never felt rushed, never felt lost.'
  },
  {
    id: 'young-sharp',
    title: 'Young, sharp, gets it',
    focus: 'Solution delivery',
    quote: 'We weren’t sure what to expect, but Rahib showed up prepared, listened more than he talked, and absolutely nailed the setup. He didn’t oversell or overtalk — just got straight to the point and made things work. Respect.'
  },
  {
    id: 'wise-beyond-his-age',
    title: 'Wise beyond his age',
    focus: 'HubSpot expertise',
    quote: 'Honestly? We were surprised by how young Rahib is. But five minutes in, it was clear — he knew more about HubSpot than people twice his age. No fluff, no ego. Just someone who clearly lives in this stuff and quietly gets things done.'
  }
] satisfies Testimonial[];

const testimonialIdsByPlacement = {
  home: ['quietly-brilliant', 'wise-beyond-his-age'],
  hubspot: ['more-than-a-demo', 'useful-onboarding', 'real-people'],
  contact: ['understood-the-assignment', 'young-sharp']
} as const;

function selectTestimonials(ids: readonly string[]) {
  return ids.map((id) => {
    const testimonial = testimonials.find((item) => item.id === id);

    if (!testimonial) throw new Error(`Unknown testimonial placement: ${id}`);

    return testimonial;
  });
}

export const homeTestimonials = selectTestimonials(testimonialIdsByPlacement.home);
export const hubspotTestimonials = selectTestimonials(testimonialIdsByPlacement.hubspot);
export const contactTestimonials = selectTestimonials(testimonialIdsByPlacement.contact);
