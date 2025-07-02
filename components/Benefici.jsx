import Acqua from "./Acqua";
import Lorem from "./Lorem";

export default function Benefici({ data }) {
    const BackgroundComponent = data.background ? require(`./${data.background}`).default : null;

    return (
        <section className="container relative min-h-[75vh]">
            {BackgroundComponent && (
                <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-center pointer-events-none">
                    <BackgroundComponent className="w-auto h-screen" />
                </div>
            )}
            <Acqua data={data} />
            <Lorem data={data} />

        </section>
    );
}