import { useState, useRef, useEffect } from 'react'
import { SKILLS, SKILL_CATEGORIES } from '../constants'

export default function SkillSelector({ selected, onChange }) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const categories = ['All', ...SKILL_CATEGORIES]

  const filtered = SKILLS.filter(s => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory
    const matchSearch = s.label.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const toggle = (skill) => {
    if (selected.find(s => s.value === skill.value)) {
      onChange(selected.filter(s => s.value !== skill.value))
    } else {
      onChange([...selected, skill])
    }
  }

  const remove = (val) => onChange(selected.filter(s => s.value !== val))

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Selected tags */}
      <div
        onClick={() => setOpen(true)}
        style={{
          minHeight: '40px',
          background: 'var(--surface2)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '6px 10px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          cursor: 'pointer',
          transition: 'border-color 0.15s',
          borderColor: open ? 'var(--accent)' : undefined,
        }}
      >
        {selected.length === 0 && (
          <span style={{ color: 'var(--text3)', lineHeight: '26px', fontSize: '14px' }}>
            Select skills...
          </span>
        )}
        {selected.map(s => (
          <span
            key={s.value}
            style={{
              background: 'var(--accent-light)',
              color: '#60a5fa',
              border: '1px solid rgba(10,102,194,0.3)',
              borderRadius: '4px',
              padding: '2px 8px',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {s.label}
            <span
              onClick={(e) => { e.stopPropagation(); remove(s.value) }}
              style={{ cursor: 'pointer', opacity: 0.7, lineHeight: 1 }}
            >×</span>
          </span>
        ))}
      </div>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          right: 0,
          background: 'var(--surface)',
          border: '1px solid var(--border2)',
          borderRadius: 'var(--radius-lg)',
          zIndex: 100,
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          overflow: 'hidden',
        }}>
          {/* Search */}
          <div style={{ padding: '10px' }}>
            <input
              autoFocus
              placeholder="Search skills..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              onClick={e => e.stopPropagation()}
              style={{ fontSize: '13px' }}
            />
          </div>

          {/* Category tabs */}
          <div style={{
            display: 'flex',
            gap: '4px',
            padding: '0 10px 8px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontSize: '11px',
                  padding: '3px 9px',
                  borderRadius: '20px',
                  background: activeCategory === cat ? 'var(--accent)' : 'var(--surface2)',
                  color: activeCategory === cat ? '#fff' : 'var(--text2)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill list */}
          <div style={{ maxHeight: '200px', overflowY: 'auto', padding: '0 6px 8px' }}>
            {filtered.length === 0 ? (
              <p style={{ color: 'var(--text3)', fontSize: '13px', padding: '8px 10px' }}>
                No skills found
              </p>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', padding: '4px' }}>
                {filtered.map(s => {
                  const isSelected = !!selected.find(sel => sel.value === s.value)
                  return (
                    <button
                      key={s.value}
                      onClick={() => toggle(s)}
                      style={{
                        fontSize: '12px',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        background: isSelected ? 'var(--accent)' : 'var(--surface2)',
                        color: isSelected ? '#fff' : 'var(--text)',
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--accent)' : 'var(--border)',
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                    >
                      {s.label}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {selected.length > 0 && (
            <div style={{
              borderTop: '1px solid var(--border)',
              padding: '8px 12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '12px', color: 'var(--text2)' }}>
                {selected.length} selected
              </span>
              <button
                onClick={() => onChange([])}
                style={{
                  fontSize: '12px',
                  color: '#f87171',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
