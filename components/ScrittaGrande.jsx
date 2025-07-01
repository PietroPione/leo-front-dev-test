export default function ScrittaGrande({ data }) {
    return (
        <section className="flex justify-center items-center container  ">
            <div className="text-blue font-bold text-center leading-[120%] max-w-[66vw] text-5xl">
                {data}
            </div>
        </section>
    );
}