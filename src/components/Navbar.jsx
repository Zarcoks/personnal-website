import SocialIcon from './social/SocialIcon';

function Navbar({ website_data }) {
    return (
        <nav className="h-screen justify-center flex flex-col">
            <h1 className="text-5xl font-semibold text-lime-400">{website_data.name}</h1>
            <div className='mt-5'>
                <h2 className="text-2xl font-bold my-3 text-neutral-100">{website_data.role}</h2>
                <p className="text-md my-3 text-neutral-100">{website_data.description}</p>
            </div>

            <ul className="hidden md:flex flex-col mt-3">
                {website_data.sections.map((section) => (
                    <li key={section.key} className="my-3">
                        <a href={`#${section.key}`} className="text-lime-400 font-semibold text-2xl">{section.name}</a>
                    </li>
                ))}
            </ul>
            <ul className="flex mt-7">
                {website_data.social.map((social) => (
                    <li key={social.name} className="mr-10">
                        <SocialIcon 
                            color="lime-400" 
                            url={social.url} 
                            svg_path={social.svg_path}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar