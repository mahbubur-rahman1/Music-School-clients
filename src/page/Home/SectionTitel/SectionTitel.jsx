

const SectionTitel = ({subHeading, heading}) => {
    return (
        <div>
            <div className="md:w-3/12 mx-auto mb-10 mt-6">
            <p className="text-yellow-600 text-center mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 text-center py-3">{heading}</h3>
        </div>
        </div>
    );
};

export default SectionTitel;