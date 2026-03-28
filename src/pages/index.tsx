import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const stats = [
  { label: 'Modules', value: '7' },
  { label: 'Agents', value: '19' },
  { label: 'Commands', value: '88+' },
  { label: 'Workflows', value: '72+' },
];

const modules = [
  {
    name: 'bmad-core',
    emoji: '🧙',
    description: 'Foundation module with setup, help, brainstorming, reviews, and workflow orchestration.',
    agents: 0,
    commands: 10,
  },
  {
    name: 'bmad-bmm',
    emoji: '📋',
    description: 'Complete product development lifecycle — PRDs, sprints, stories, code review, architecture.',
    agents: 9,
    commands: 32,
  },
  {
    name: 'bmad-gds',
    emoji: '🎮',
    description: 'Game development studio — GDD creation, game architecture, playtesting, automated game QA.',
    agents: 7,
    commands: 36,
  },
  {
    name: 'bmad-cis',
    emoji: '💡',
    description: 'Creative intelligence — innovation strategy, design thinking, storytelling, brainstorming coaching.',
    agents: 6,
    commands: 10,
    badge: 'Coming Soon',
  },
  {
    name: 'bmad-bmb',
    emoji: '🔧',
    description: 'BMAD Builder tools — create, edit, and validate agents, workflows, and modules.',
    agents: 3,
    commands: 15,
    badge: 'Coming Soon',
  },
  {
    name: 'bmad-tea',
    emoji: '🧪',
    description: 'Test engineering and architecture — ATDD, CI/CD pipelines, test design, traceability.',
    agents: 1,
    commands: 10,
    badge: 'Coming Soon',
  },
  {
    name: 'bmad-edu',
    emoji: '🎓',
    description: 'Education module — two modes: Normal development + Instructor mode with full course creation pipeline.',
    agents: 3,
    commands: 15,
    badge: 'Instructor',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/getting-started/installation">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/modules/bmad-core" style={{marginLeft: '1rem'}}>
            Browse Modules
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className="row">
          {stats.map((stat, idx) => (
            <div key={idx} className="col col--3 text--center">
              <Heading as="h2" style={{fontSize: '3rem', marginBottom: '0.25rem'}}>{stat.value}</Heading>
              <p style={{fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-600)'}}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({name, emoji, description, agents, commands, badge}: any) {
  return (
    <div className="col col--4" style={{marginBottom: '1.5rem'}}>
      <div className="card" style={{height: '100%', opacity: badge === 'Coming Soon' ? 0.7 : 1}}>
        <div className="card__header">
          <Heading as="h3">
            {emoji} {name}
            {badge && (
              <span style={{
                fontSize: '0.65rem',
                background: badge === 'Coming Soon' ? '#666' : '#4a90d9',
                color: '#fff',
                padding: '2px 8px',
                borderRadius: '4px',
                marginLeft: '8px',
                verticalAlign: 'middle',
                fontWeight: 'normal',
              }}>{badge}</span>
            )}
          </Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <span style={{marginRight: '1rem'}}>{agents} agents</span>
          <span>{commands} commands</span>
          <div style={{marginTop: '0.5rem'}}>
            <Link className="button button--outline button--sm button--primary" to={`/docs/modules/${name}`}>
              View Docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModulesSection() {
  return (
    <section style={{padding: '3rem 0'}}>
      <div className="container">
        <Heading as="h2" className="text--center" style={{marginBottom: '2rem'}}>
          Modular Architecture
        </Heading>
        <p className="text--center" style={{marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
          Install only what you need. A game developer selects <code>gds</code>.
          A product team selects <code>bmm</code>. An instructor selects the Instructor profile.
        </p>
        <div className="row">
          {modules.map((mod, idx) => (
            <ModuleCard key={idx} {...mod} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section style={{padding: '3rem 0', background: 'var(--ifm-color-emphasis-100)'}}>
      <div className="container">
        <Heading as="h2" className="text--center" style={{marginBottom: '2rem'}}>
          How It Works
        </Heading>
        <div className="row">
          <div className="col col--4 text--center">
            <Heading as="h3">1. Install</Heading>
            <code>npx @mousasoutari/mosaic-setup</code>
            <p style={{marginTop: '0.5rem'}}>One command sets up BMAD Method, agents, workflows, and MCP servers.</p>
          </div>
          <div className="col col--4 text--center">
            <Heading as="h3">2. Setup</Heading>
            <code>/bmad-init</code>
            <p style={{marginTop: '0.5rem'}}>Initialize your project with config, output dirs, and CLAUDE.md rules.</p>
          </div>
          <div className="col col--4 text--center">
            <Heading as="h3">3. Build</Heading>
            <code>/bmad-help</code>
            <p style={{marginTop: '0.5rem'}}>Get guided advice, launch agents, and run workflows directly in Claude Code.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstructorSection() {
  return (
    <section style={{padding: '3rem 0'}}>
      <div className="container">
        <Heading as="h2" className="text--center" style={{marginBottom: '1rem'}}>
          Instructor Mode
        </Heading>
        <p className="text--center" style={{marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem'}}>
          Create complete Unity courses with a single pipeline. Define your course, build the project with auto-captures,
          generate all materials, and produce interactive Essentials Pathway tutorials.
        </p>
        <div className="row">
          <div className="col col--3 text--center">
            <Heading as="h4">Phase A</Heading>
            <code>/edu-define-course</code>
            <p>Define duration, audience, features, weekly plan</p>
          </div>
          <div className="col col--3 text--center">
            <Heading as="h4">Phase B</Heading>
            <code>/edu-build-project</code>
            <p>Build with screenshots and GIFs at every step</p>
          </div>
          <div className="col col--3 text--center">
            <Heading as="h4">Phase C</Heading>
            <code>/edu-generate-course</code>
            <p>Syllabus, labs, quizzes, slides, material book</p>
          </div>
          <div className="col col--3 text--center">
            <Heading as="h4">Phase D</Heading>
            <code>/edu-create-tutorial-project</code>
            <p>Interactive IET Essentials Pathway tutorials</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="AI-Driven Development for Claude Code"
      description="19 specialized agents, 88+ commands, and 72+ workflows for Claude Code. Product management, game development, testing, creative intelligence, and education.">
      <HomepageHeader />
      <main>
        <StatsSection />
        <ModulesSection />
        <WorkflowSection />
        <InstructorSection />
      </main>
    </Layout>
  );
}
