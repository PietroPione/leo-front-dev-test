import Acqua from "./Acqua";
import Lorem from "./Lorem";

export default function Benefici({ data }) {
    const BackgroundComponent = data.background ? require(`./${data.background}`).default : null;

    return (
        <section className="container relative  lg:min-h-[75vh]">
            {BackgroundComponent && (
                <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-center pointer-events-none ">
                    <div className="hidden lg:block">
                        <BackgroundComponent className="w-auto h-screen " />
                    </div>
                </div>
            )}
            <div className="space-y-10 md:space-y-0 flex flex-col md:flex-row justify-between">
                <Acqua data={data} />
                <Lorem data={data} />
            </div>

        </section>
    );
}