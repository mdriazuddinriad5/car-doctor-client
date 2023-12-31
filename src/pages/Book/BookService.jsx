import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const BookService = () => {
    const loadedData = useLoaderData();
    const { _id, service_id, title, price, img } = loadedData;
    const { user } = useContext(AuthContext);
   console.log(img);
    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;

        const order = {
            customerName: name,
            email,
            date,
            img,
            price,
            service: title,
            service_id: _id
        }

        console.log(order);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('booked successfully')
                }
            })

    }

    return (
        <div>
            <h2 className="text-center">Book Service: {title}  </h2>

            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>

                </div>

                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary btn-block" value="Order confirm" />
                </div>

            </form>
        </div>
    );
};

export default BookService;