

const Popular = ({ populer }) => {
    const { name, email, picture, rating } = populer;
    return (
        <div className="">
            <div className="card w-96 bg-base-100 p-3 shadow-xl ">
                <div className="">
                    <img className="w-full h-44 rounded-lg" src={picture} alt="" />
                </div>
                <div className="">
                    <h2 className="text-2xl">{name}</h2>
                    <h3 className="text-2xl">{email}</h3>
                    <h3 className="text-2xl">{rating}</h3>
                </div>
            </div>
        </div>
    );
};

export default Popular;