const assets_path = "../assets/"

function Navbar({ website_data }) {
    return (
        <nav className="h-screen justify-center flex flex-col">
            <h1 className="text-5xl font-semibold text-lime-400 my-5">{website_data.name}</h1>
            <h2 className="text-2xl font-bold my-3 text-neutral-100">{website_data.role}</h2>
            <p className="text-md my-3 text-neutral-100">{website_data.description}</p>

            <ul className="my-3">
                {website_data.sections.map((section) => (
                    <li key={section.key} className="my-4">
                        <a href={`#${section.key}`} className="text-lime-400 font-semibold text-2xl">{section.name}</a>
                    </li>
                ))}
            </ul>
            <ul>
                {website_data.social.map((social) => (
                    <li key={social.name} className="my-4">
                        <a href={social.url} className="text-lime-400 font-semibold text-2xl">
                            <img src={assets_path + social.icon_url} alt={social.name}/>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar