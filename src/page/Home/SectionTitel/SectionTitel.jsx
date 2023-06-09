

const SectionTitel = ({subHeading, heading}) => {
    return (
        <div>
            <div className=" mx-auto mb-10 mt-6">
            <p className="text-yellow-600 text-center mb-2">{subHeading}</p>
            <h3 className="text-3xl uppercase text-lime-300 font-bold -mb-5 text-center mt-12">{heading}</h3>
        </div>
        </div>
    );
};

export default SectionTitel;