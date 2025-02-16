import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const detail = useLoaderData();
  const idInt = parseInt(id);
  console.log(typeof idInt, typeof detail);

  // const { id } = useParams();
  // const details = useLoaderData();

  // // Find the detail with the matching id
  // const detail = details.find((detail) => detail.id === parseInt(id));

  // If detail is not found, render a message
  // if (!detail) {
  //   return (
  //     <div>
  //       <Helmet>
  //         <title>View Details</title>
  //       </Helmet>
  //       <h2 className="text-center text-3xl">Details not found</h2>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Helmet>
        <title>View Details </title>
      </Helmet>
      <h2 className="text-center text-3xl">View Details of {id}</h2>

      {/* <div>
        <p>Estate Title: {detail.estate_title}</p>
        <p>Description: {detail.description}</p>
        <p>Price: {detail.price}</p>
        <p>Status: {detail.status}</p>
        <p>Area: {detail.area}</p>
        <p>Location: {detail.location}</p>
        <p>Facilities: {detail.facilities.join(", ")}</p>
      </div> */}
    </div>
  );
};

export default ViewDetails;
