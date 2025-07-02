import Acqua from "./Acqua";
import Lorem from "./Lorem";

export default function Benefici({ data }) {
    const BackgroundComponent = data.background ? require(`./${data.background}`).default : null;

    return (
        <section className="container relative min-h-[75vh]">
            {BackgroundComponent && (
                <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-center pointer-events-none ">
                    <div className="hidden md:block">
                        <BackgroundComponent className="w-auto h-screen " />
                    </div>
                </div>
            )}
            <div className="space-y-10 md:space-y-0">
                <Acqua data={data} />
                <Lorem data={data} />
            </div>

        </section>
    );
}