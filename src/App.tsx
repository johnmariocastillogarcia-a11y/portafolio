import { motion, useReducedMotion } from 'framer-motion'
import { useState, type ReactNode } from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp, FaDownload } from 'react-icons/fa'
import { perfil, ficha, cifras, sobreMi, habilidades, experiencia, formacion, proyectos, aprendizaje, redes } from './data'
import { icono } from './icons'

const menu = [['sobre-mi', 'Sobre mí'], ['habilidades', 'Habilidades'], ['experiencia', 'Experiencia'], ['formacion', 'Formación'], ['proyectos', 'Proyectos'], ['contacto', 'Contacto']]

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const quieto = useReducedMotion()
  if (quieto) return <>{children}</>
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

const Chip = ({ n }: { n: string }) => { const I = icono(n); return <li><I aria-hidden /> {n}</li> }

export default function App() {
  const [abierto, setAbierto] = useState(false)
  return (
    <>
      <header className="nav">
        <a href="#inicio" className="logo">JC</a>
        <button className="burger" aria-label="Menú" aria-expanded={abierto} onClick={() => setAbierto(!abierto)}>{abierto ? '✕' : '☰'}</button>
        <nav className={abierto ? 'abierto' : ''}>{menu.map(([id, t]) => <a key={id} href={`#${id}`} onClick={() => setAbierto(false)}>{t}</a>)}</nav>
      </header>
      <main>
        <section id="inicio" className="hero wrap">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="muted">Hola, soy</p>
            <h1>{perfil.nombre}</h1>
            <p className="lead">{perfil.rol}. {perfil.intro}</p>
            <div className="row">
              <a className="btn" href="#contacto">Contáctame</a>
              <a className="btn ghost" href={perfil.cv} download><FaDownload aria-hidden /> Descargar hoja de vida</a>
            </div>
          </motion.div>
          <motion.div className="lado" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <img className="foto" src="foto.jpg" alt="Foto de John Mario Castillo García" width={520} height={697} decoding="async" />
            <dl className="ficha" aria-label="Ficha técnica">
              <dt className="ficha-t">ficha_tecnica</dt>
              {ficha.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          </motion.div>
        </section>

        <div className="cifras"><div className="wrap">
          {cifras.map(([n, t], i) => <Reveal key={t} delay={i * 0.08}><div className="cifra"><strong>{n}</strong><span>{t}</span></div></Reveal>)}
        </div></div>

        <section id="sobre-mi" className="wrap"><Reveal>
          <h2>Sobre mí</h2>
          <div className="prose">{sobreMi.map(p => <p key={p}>{p}</p>)}</div>
        </Reveal></section>

        <section id="habilidades" className="wrap"><Reveal>
          <h2>Habilidades</h2>
          {Object.entries(habilidades).map(([g, items]) => (
            <div key={g} className="group">
              <h3>{g}</h3>
              <ul className="chips">{items.map(i => <Chip key={i} n={i} />)}</ul>
            </div>
          ))}
        </Reveal></section>

        <section id="experiencia" className="wrap"><Reveal>
          <h2>Experiencia</h2>
          <ol className="line">
            {experiencia.map(([e, c, l, d]) => <li key={l}><span className="tag">{e}</span><strong>{c}</strong><span className="muted">{l}</span><p>{d}</p></li>)}
          </ol>
        </Reveal></section>

        <section id="formacion" className="wrap"><Reveal>
          <h2>Formación</h2>
          <ol className="line">
            {formacion.map(([e, t, l]) => <li key={t}><span className="tag">{e}</span><strong>{t}</strong><span className="muted">{l}</span></li>)}
          </ol>
          <div className="group">
            <h3>Mi ruta de aprendizaje continuo</h3>
            <ul className="chips">{aprendizaje.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        </Reveal></section>

        <section id="proyectos" className="wrap"><Reveal>
          <h2>Proyectos</h2>
          <div className="grid">
            {proyectos.map(p => (
              <a key={p.t} className="card" href={p.url} target="_blank" rel="noreferrer">
                <h3>{p.t}</h3><p>{p.d}</p><small>{p.tec}</small>
              </a>
            ))}
          </div>
        </Reveal></section>

        <section id="contacto" className="wrap"><Reveal>
          <h2>Contacto</h2>
          <p className="lead">¿Quieres hablar de tecnología, trabajo o música? Escríbeme.</p>
          <div className="row">
            <a className="btn" href={`mailto:${perfil.correo}`}><FaEnvelope aria-hidden /> {perfil.correo}</a>
            <a className="btn ghost" href={`tel:${perfil.tel}`}><FaPhone aria-hidden /> {perfil.telefono}</a>
            <a className="btn ghost" href={`https://wa.me/${perfil.tel.slice(1)}`} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden /> WhatsApp</a>
            <a className="btn ghost" href={perfil.cv} download><FaDownload aria-hidden /> Hoja de vida</a>
          </div>
          <ul className="chips links">{redes.map(([n, u]) => { const I = icono(n); return <li key={n}><a href={u} target="_blank" rel="noreferrer"><I aria-hidden /> {n}</a></li> })}</ul>
        </Reveal></section>
      </main>
      <footer className="wrap muted">© {new Date().getFullYear()} {perfil.nombre}. Hecho con React y TypeScript.</footer>
    </>
  )
}
