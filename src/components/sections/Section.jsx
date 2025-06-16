/**
 * Section component
 * @param {string} id 
 * @param {string} name 
 * @param {React.ReactNode} children 
 * @returns {JSX.Element}
 */
export default function Section({ id, name, children }) {
    return (
        <section id={id} className="flex flex-col justify-center align-center m-10">
            <h1 className="text-5xl font-semibold text-lime-400 my-5">{name}</h1>
            {children}
        </section>
    );
}