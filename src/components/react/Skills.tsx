import { useEffect } from 'react'
import { InfiniteScroll } from './InfiniteScroll'
import { getIcon } from './SkillsIconLoader'

type Category = {
  text: string
  logo: string
}

type Technologies = {
  'Backend': Category[]
  'Frontend': Category[]
  'Datenbank & Messaging': Category[]
  'DevOps & Tools': Category[]
  'Protokolle & APIs': Category[]
}

const technologies: Technologies = {
  'Backend': [
    { text: 'Java 17', logo: 'simple-icons:openjdk' },
    { text: 'Spring Boot', logo: 'simple-icons:springboot' },
    { text: 'Spring Security', logo: 'simple-icons:springsecurity' },
    { text: 'Spring Cloud Gateway', logo: 'simple-icons:spring' },
    { text: 'GraphQL', logo: 'simple-icons:graphql' },
    { text: 'gRPC', logo: 'lucide:zap' },
    { text: 'Maven', logo: 'simple-icons:apachemaven' },
    { text: 'JUnit 5', logo: 'lucide:test-tube' },
  ],
  'Frontend': [
    { text: 'Angular 18', logo: 'simple-icons:angular' },
    { text: 'TypeScript', logo: 'simple-icons:typescript' },
    { text: 'Angular Material', logo: 'simple-icons:materialdesign' },
    { text: 'Apollo GraphQL', logo: 'simple-icons:apollographql' },
    { text: 'Chart.js', logo: 'simple-icons:chartdotjs' },
    { text: 'PWA', logo: 'simple-icons:pwa' },
    { text: 'PowerShell CLI', logo: 'simple-icons:powershell' },
    { text: 'jsPDF', logo: 'lucide:file-text' },
  ],
  'Datenbank & Messaging': [
    { text: 'PostgreSQL 16', logo: 'simple-icons:postgresql' },
    { text: 'RabbitMQ', logo: 'simple-icons:rabbitmq' },
    { text: 'JWT', logo: 'simple-icons:jsonwebtokens' },
    { text: 'BCrypt', logo: 'lucide:lock' },
    { text: 'Testcontainers', logo: 'lucide:container' },
    { text: 'Lombok', logo: 'lucide:code' },
  ],
  'DevOps & Tools': [
    { text: 'Docker', logo: 'simple-icons:docker' },
    { text: 'Kubernetes', logo: 'simple-icons:kubernetes' },
    { text: 'nginx', logo: 'simple-icons:nginx' },
    { text: 'Git', logo: 'simple-icons:git' },
    { text: 'GitHub', logo: 'simple-icons:github' },
    { text: 'Swagger', logo: 'simple-icons:swagger' },
  ],
  'Protokolle & APIs': [
    { text: 'REST', logo: 'lucide:globe' },
    { text: 'GraphQL', logo: 'simple-icons:graphql' },
    { text: 'gRPC', logo: 'lucide:zap' },
    { text: 'Protocol Buffers', logo: 'lucide:file-code' },
    { text: 'AMQP', logo: 'lucide:radio' },
    { text: 'OpenAPI', logo: 'simple-icons:openapiinitiative' },
  ],
}

const categories = Object.keys(technologies)
const groupSize = Math.ceil(categories.length / 3)
const categoryGroups = [
  categories.slice(0, groupSize),
  categories.slice(groupSize, groupSize * 2),
  categories.slice(groupSize * 2),
]

const Skills: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('.tech-badge').forEach((badge) => {
      badge.classList.add('tech-badge-visible')
    })
  }, [])

  return (
    <div className="z-30 mt-12 flex w-full flex-col max-w-[calc(100vw-5rem)] mx-auto lg:max-w-full">
      <div className="space-y-2">
        {categoryGroups.map((group, groupIndex) => (
          <InfiniteScroll
            key={groupIndex}
            duration={50000}
            direction={groupIndex % 2 === 0 ? 'normal' : 'reverse'}
            showFade={true}
            className="flex flex-row justify-center"
          >
            {group.flatMap((category) =>
              technologies[category as keyof Technologies].map(
                (tech: Category, techIndex: number) => {
                  const IconComponent = getIcon(tech.logo)
                  return (
                    <div
                      key={`${category}-${techIndex}`}
                      className="tech-badge repo-card border-border bg-card text-muted-foreground mr-5 flex items-center gap-3 rounded-full border p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                      data-tech-name={`${category}-${techIndex}`}
                    >
                      <span className="bg-muted flex h-10 w-10 items-center justify-center rounded-full p-2 text-lg shadow-inner">
                        <IconComponent className="tech-icon text-primary" />
                      </span>
                      <span className="text-foreground font-medium">
                        {tech.text}
                      </span>
                    </div>
                  )
                },
              ),
            )}
          </InfiniteScroll>
        ))}
      </div>
    </div>
  )
}

export default Skills
