import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import "./contact.scss";

const links = [
    {
        href: "https://github.com/criscode97",
        label: "GitHub",
        Icon: FaGithub,
        download: false,
    },
    {
        href: "https://www.linkedin.com/in/cristopher-soto-870106224/",
        label: "LinkedIn",
        Icon: FaLinkedinIn,
        download: false,
    },
    {
        href: "mailto:criscodesnyc@gmail.com",
        label: "Email",
        Icon: FaRegEnvelope,
        download: false,
    },
    {
        href: "assets/resume.pdf",
        label: "Resume",
        Icon: HiOutlineDownload,
        download: "CrisSoto.pdf",
    },
];

function Contact() {
    return (
        <aside className="contact-rail" aria-label="Contact links">
            <ul>
                {links.map(({ href, label, Icon, download }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            {...(download ? { download } : {})}
                        >
                            <Icon aria-hidden="true" />
                            <span className="contact-rail__tooltip">{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Contact;
