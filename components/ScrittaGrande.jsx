export default function ScrittaGrande({ data }) {
    return (
        <section className="flex justify-center items-center container  ">
            <div className="text-blue font-bold text-center leading-[120%] md:max-w-[66vw] text-3xl md:text-5xl">
                {data}
            </div>
        </section>
    );
}