import { useState, lazy, Suspense } from 'react'
import website_data from '../data/website_data.json'
import Navbar from './components/Navbar'
import Section from './components/sections/Section'

function App() {
  const [sections, setSections] = useState(website_data.sections)

  return (
    <main className="min-h-screen min-w-screen bg-neutral-800">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Navbar website_data={website_data} />
        </div>
        <div className="w-full md:w-1/2">
          {sections.map(section => {
            const SectionComponent = lazy(() => import(`./components/sections/${section.component}`))
            return (
              <Suspense key={section.id}>
                <Section id={section.id} name={section.name}>
                  <SectionComponent />
                </Section>
              </Suspense>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
