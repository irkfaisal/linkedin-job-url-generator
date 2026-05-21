import { useState } from 'react'
import SkillSelector from './components/SkillSelector'
import {
  TIME_OPTIONS, WORK_MODE, JOB_TYPE, EXPERIENCE_LEVEL,
  SORT_BY, SALARY_RANGE, INDUSTRY, COMPANY_SIZE
} from './constants'

const Field = ({ label, required, children, hint }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
    <label style={{
      fontSize: '12px',
      fontWeight: '500',
      color: 'var(--text2)',
      letterSpacing: '0.02em',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    }}>
      {label.toUpperCase()}
      {required && <span style={{ color: '#f87171', fontSize: '11px' }}>*</span>}
    </label>
    {children}
    {hint && <p style={{ fontSize: '11px', color: 'var(--text3)', marginTop: '1px' }}>{hint}</p>}
  </div>
)

const Select = ({ value, onChange, options }) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {options.map(o => (
      <option key={o.value} value={o.value}>{o.label}</option>
    ))}
  </select>
)

export default function App() {
  const [form, setForm] = useState({
    keywords: '',
    location: '',
    timePosted: 'r3600',
    workMode: '',
    jobType: 'F',
    experienceLevel: '',
    sortBy: 'DD',
    salaryRange: '',
    industry: '',
    companySize: '',
    companyId: '',
    geoId: '',
    distance: '',
  })
  const [skills, setSkills] = useState([])
  const [generatedUrl, setGeneratedUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [errors, setErrors] = useState({})

  const set = (key) => (val) => setForm(f => ({ ...f, [key]: val }))
  const setInput = (key) => (e) => set(key)(e.target.value)

  const validate = () => {
    const errs = {}
    if (!form.keywords.trim()) errs.keywords = 'Job title is required'
    return errs
  }

  const buildUrl = () => {
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})

    const params = new URLSearchParams()
    if (form.keywords.trim()) params.set('keywords', form.keywords.trim())
    if (form.location.trim()) params.set('location', form.location.trim())
    if (form.timePosted) params.set('f_TPR', form.timePosted)
    if (form.workMode) params.set('f_WT', form.workMode)
    if (form.jobType) params.set('f_JT', form.jobType)
    if (form.experienceLevel) params.set('f_E', form.experienceLevel)
    if (form.sortBy) params.set('sortBy', form.sortBy)
    if (form.salaryRange) params.set('f_SB2', form.salaryRange)
    if (form.industry) params.set('f_I', form.industry)
    if (form.companySize) params.set('f_CS', form.companySize)
    if (form.companyId.trim()) params.set('f_C', form.companyId.trim())
    if (form.geoId.trim()) params.set('geoId', form.geoId.trim())
    if (form.distance.trim()) params.set('distance', form.distance.trim())
    if (skills.length > 0) params.set('f_SK', skills.map(s => s.value).join(','))

    setGeneratedUrl(`https://www.linkedin.com/jobs/search/?${params.toString()}`)
  }

  const copy = async () => {
    if (!generatedUrl) return
    await navigator.clipboard.writeText(generatedUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const open = () => {
    if (generatedUrl) window.open(generatedUrl, '_blank')
  }

  const reset = () => {
    setForm({
      keywords: '', location: '', timePosted: 'r3600',
      workMode: '', jobType: 'F', experienceLevel: '',
      sortBy: 'DD', salaryRange: '', industry: '',
      companySize: '', companyId: '', geoId: '', distance: '',
    })
    setSkills([])
    setGeneratedUrl('')
    setErrors({})
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '32px 20px 60px' }}>

      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '6px',
            background: 'var(--accent)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </div>
          <h1 style={{ fontSize: '18px', color: 'var(--text)', fontWeight: '500' }}>
            LinkedIn Job URL Builder
          </h1>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--text3)', paddingLeft: '38px' }}>
          Build a precise LinkedIn job search URL. Open it in your browser anytime.
        </p>
      </div>

      {/* Form */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>

        {/* Section: Core */}
        <SectionLabel>Core Search</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Field label="Job Title" required>
            <input
              placeholder="e.g. Software Engineer"
              value={form.keywords}
              onChange={setInput('keywords')}
              style={{ borderColor: errors.keywords ? '#f87171' : undefined }}
            />
            {errors.keywords && (
              <span style={{ fontSize: '11px', color: '#f87171' }}>{errors.keywords}</span>
            )}
          </Field>
          <Field label="Location" hint="City, country, or leave blank for global">
            <input
              placeholder="e.g. India, Delhi, Remote"
              value={form.location}
              onChange={setInput('location')}
            />
          </Field>
        </div>

        {/* Section: Filters */}
        <SectionLabel>Filters</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Field label="Posted Within">
            <Select value={form.timePosted} onChange={set('timePosted')} options={TIME_OPTIONS} />
          </Field>
          <Field label="Work Mode">
            <Select value={form.workMode} onChange={set('workMode')} options={WORK_MODE} />
          </Field>
          <Field label="Job Type">
            <Select value={form.jobType} onChange={set('jobType')} options={JOB_TYPE} />
          </Field>
          <Field label="Experience Level">
            <Select value={form.experienceLevel} onChange={set('experienceLevel')} options={EXPERIENCE_LEVEL} />
          </Field>
          <Field label="Sort By">
            <Select value={form.sortBy} onChange={set('sortBy')} options={SORT_BY} />
          </Field>
          <Field label="Salary Range (USD/yr)">
            <Select value={form.salaryRange} onChange={set('salaryRange')} options={SALARY_RANGE} />
          </Field>
          <Field label="Industry">
            <Select value={form.industry} onChange={set('industry')} options={INDUSTRY} />
          </Field>
          <Field label="Company Size">
            <Select value={form.companySize} onChange={set('companySize')} options={COMPANY_SIZE} />
          </Field>
        </div>

        {/* Skills */}
        <Field label="Skills" hint="LinkedIn skill IDs — narrows results to jobs that list these skills">
          <SkillSelector selected={skills} onChange={setSkills} />
        </Field>

        {/* Section: Advanced */}
        <SectionLabel>Advanced (Optional)</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          <Field label="Company ID" hint="LinkedIn company numeric ID">
            <input
              placeholder="e.g. 1441"
              value={form.companyId}
              onChange={setInput('companyId')}
            />
          </Field>
          <Field label="Geo ID" hint="LinkedIn geo region ID">
            <input
              placeholder="e.g. 102713980"
              value={form.geoId}
              onChange={setInput('geoId')}
            />
          </Field>
          <Field label="Distance (km)" hint="Radius around location">
            <input
              placeholder="e.g. 25"
              value={form.distance}
              onChange={setInput('distance')}
            />
          </Field>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '10px', paddingTop: '4px' }}>
          <button
            onClick={buildUrl}
            style={{
              flex: 1,
              padding: '10px 20px',
              background: 'var(--accent)',
              color: '#fff',
              borderRadius: 'var(--radius)',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--accent-hover)'}
            onMouseLeave={e => e.target.style.background = 'var(--accent)'}
          >
            Generate URL
          </button>
          <button
            onClick={reset}
            style={{
              padding: '10px 16px',
              background: 'var(--surface2)',
              color: 'var(--text2)',
              borderRadius: 'var(--radius)',
              fontSize: '14px',
              border: '1px solid var(--border)',
              transition: 'all 0.15s',
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Generated URL */}
      {generatedUrl && (
        <div style={{
          marginTop: '20px',
          background: 'var(--surface)',
          border: '1px solid var(--border2)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease',
        }}>
          <div style={{
            padding: '12px 16px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: 'var(--green)',
                boxShadow: '0 0 6px var(--green)',
              }} />
              <span style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text2)' }}>
                Generated URL
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={copy}
                style={{
                  padding: '5px 12px',
                  fontSize: '12px',
                  background: copied ? 'var(--green-light)' : 'var(--surface2)',
                  color: copied ? 'var(--green)' : 'var(--text2)',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: copied ? 'var(--green)' : 'var(--border)',
                  transition: 'all 0.15s',
                }}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
              <button
                onClick={open}
                style={{
                  padding: '5px 12px',
                  fontSize: '12px',
                  background: 'var(--accent)',
                  color: '#fff',
                  borderRadius: '6px',
                  border: 'none',
                  transition: 'background 0.15s',
                }}
              >
                Open ↗
              </button>
            </div>
          </div>
          <div style={{ padding: '14px 16px' }}>
            <p style={{
              fontSize: '12px',
              fontFamily: 'DM Mono, monospace',
              color: '#93c5fd',
              wordBreak: 'break-all',
              lineHeight: '1.7',
            }}>
              {generatedUrl}
            </p>
          </div>
          <div style={{
            padding: '10px 16px',
            borderTop: '1px solid var(--border)',
            background: 'rgba(10,102,194,0.05)',
          }}>
            <p style={{ fontSize: '11px', color: 'var(--text3)' }}>
              💡 Bookmark this URL. Refresh it every hour to see new jobs with your filters applied.
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      margin: '4px 0 -4px',
    }}>
      <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text3)', letterSpacing: '0.06em' }}>
        {children.toUpperCase()}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}
