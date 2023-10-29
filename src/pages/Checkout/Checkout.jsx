import { useLoaderData, useParams } from "react-router-dom";


const Checkout = () => {
    const loadedData = useLoaderData();
    const { service_id, title, price } = loadedData;
    return (
        <div>
            <h2>Book Service: {title}  </h2>

            <form className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    
                </div>

                <div className="form-control mt-6">
                        <button>Login</button>
                        <input type="submit" className="btn btn-primary btn-block" value="Order confirm" />
                    </div>

            </form>
        </div>

    );
};

export default Checkout;