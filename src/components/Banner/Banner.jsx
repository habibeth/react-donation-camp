import bannerBg from '../../assets/bannerBg.jpg'

const Banner = () => {
    return (
        <div className="mb-24"  style={{ background: `url(${bannerBg})`, backgroundSize: 'cover', }}>
            <div className="hero bg-white pt-32 pb-52 bg-opacity-90">
                <div className="hero-content text-center">
                    <div className="max-w-full">
                        <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="">
                            <input type="text" placeholder="Search here...." className="input input-bordered w-[470px] rounded-none rounded-l-lg mt-10" />
                            <button className="btn btn-error rounded-none rounded-r-lg text-white">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;