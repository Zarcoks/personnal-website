import aboutData from '../../../data/about.json';

function About() {
    const { skills = [] } = aboutData;

    return (
        <>
            <p className="text-neutral-100 my-3">
            Salut ! Moi c'est Victor, étudiant en Informatique généraliste à l'IUT de Montpellier.
            </p>
            <p className="text-neutral-100 my-3">
            Ma passion, aujourd'hui, c'est la danse swing. L'informatique pour moi, c'est un domaine d'intérêt secondaire dans lequel je suis doué et qui me permet de me rendre utile auprès de la société.  
            </p>
            <p className="text-neutral-100 my-3">
            J'ai dans mon parcours souvent croisé des personnes qui ont besoin d'aide pour développer leurs sites web. C'est ainsi que j'ai commencé à acquérir de bonnes compétences en développement web.
            </p>
            <p className="text-neutral-100 my-3">
            Voici un bref résumé des technologies sur lesquelles j'ai pu travailler.
            </p>
            <div className="flex flex-wrap gap-7 mt-4 justify-center">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 bg-lime-400 text-neutral-900 font-semibold rounded-md transition-colors duration-300 hover:bg-transparent hover:text-lime-400"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </>
    )
}

export default About
