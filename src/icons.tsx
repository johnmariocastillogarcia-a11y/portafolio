import type { IconType } from 'react-icons'
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook, FaMicrochip, FaDesktop, FaNetworkWired, FaDatabase, FaCode, FaFileWord, FaFileInvoice, FaHeadset, FaCloud, FaPlug, FaShieldAlt, FaRobot, FaCheck } from 'react-icons/fa'
import { SiHtml5, SiJavascript, SiPhp, SiTypescript, SiReact, SiNodedotjs, SiPython, SiGithub, SiLinux, SiDocker, SiPostgresql, SiCplusplus } from 'react-icons/si'

const map: Record<string, IconType> = {
  'Mantenimiento de hardware': FaMicrochip, 'Instalación de software': FaDesktop, 'Redes y configuración': FaNetworkWired,
  HTML: SiHtml5, JavaScript: SiJavascript, 'SQL y bases de datos': FaDatabase, PHP: SiPhp, ASP: FaCode, 'C++ y Visual Basic': SiCplusplus,
  'Word, Excel, PowerPoint, Access': FaFileWord, 'Facturación e inventarios': FaFileInvoice, 'Servicio al cliente': FaHeadset,
  TypeScript: SiTypescript, React: SiReact, 'Node.js': SiNodedotjs, Python: SiPython, 'Git y GitHub': SiGithub, Linux: SiLinux, Docker: SiDocker,
  'Cloud (AWS, Azure)': FaCloud, 'APIs REST': FaPlug, Ciberseguridad: FaShieldAlt, 'Inteligencia artificial': FaRobot, 'PostgreSQL y MongoDB': SiPostgresql,
  YouTube: FaYoutube, Instagram: FaInstagram, TikTok: FaTiktok, Facebook: FaFacebook, Adoradores: FaFacebook,
}
export const icono = (n: string): IconType => map[n] ?? FaCheck
