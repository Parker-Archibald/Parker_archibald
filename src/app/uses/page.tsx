import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software and hardware that I use or recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software and hardware that I use or recommend."
      intro='It can often be hard to stay productive or get into a "flow" state. Here are some of the technologies, tools and gadgets that I use to stay productive.'
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Custom built PC, 64GB DDR5 RAM, Intel I9, Geforce RTX 3080">
            This high end personal computer has done wonders for my work environment.
            It handles intense multi-tasking like a pro, whether editing images or videos, gaming or coding
            I always have enough power.
          </Tool>
          <Tool title="Samsung Odyssey G9">
            I love this 49", 240hz monitor. There is plenty of real estate to have several programs open at once.
            Multi-tasking on this monitor is seamless and I tend to use the full 49" everytime I turn on my computer.
          </Tool>
          <Tool title="Variuos range of custom keyboards">
            It's true, I like to build my own keyboards. This includes picking out a case and configuring it for certain sound signatures.
            I then select switches for a desired typing feel, then add on keycaps to spruce up the look!
          </Tool>
          <Tool title="Logitech MX Master 3S">
            I've always enjoyed logitech hardware, there is a certain refinement that they provide that just feels great.
            The MX Master 3S is no exception, it is ergonomic, quiet and adds an additional scroll wheel for horizontal scrolling, which adds to my productivity.
          </Tool>
          <Tool title="Samsung Galaxy Tab S8">
            The battery life here is amazing! I mostly use this tablet for taking notes and drawing out rough sketches for new projects.
          </Tool>
          <Tool title="Logitech Gfit earbuds">
            These ear buds are super enjoyable to use. The sound quality is great and they mold to my ears perfectly. I used to use headphones
            as ear buds would hurt my ears, but since I started using these I haven't gone back.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            Simple and easy to use, probably the most popular IDE.
          </Tool>
          <Tool title="Postman">
            I mainly use this for testing API endpoints, whether internal or external.
          </Tool>
          <Tool title="DB Forge Studio">
            This is a great tool for MySQl queries. It's awesome that you can write queries in one place and access them from another.
            It's been big help when I want to work from a laptop in bed.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Figma has been a total game changer for me. I was originally designing new projects by hand. I know can accuratly show customers what
            an example of their website would look like. Getting approval on these wireframes has enabled me to make changes before even starting to code.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Trello">
            Been a great tool for me, allows for clear communication with the customer or with my team. Allows for accurate tracking of tasks.
          </Tool>
          <Tool title="Asana">
            Really helps me to stay organized. Gives me the ability to schedule reocurring tasks and really plan my day and even week out.
          </Tool>
          <Tool title="Slack">
            Great tool for communicating internally. Keeps track of certain conversations and allows conversations to be organized by "Channels."
          </Tool>
          <Tool title="Spotify">
            I'm one of those people who loves to work with music in the background, a soft song can make all the difference in how quickly I enter a "Flow" state.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
