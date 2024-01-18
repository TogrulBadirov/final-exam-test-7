import { Helmet } from "react-helmet-async";

const NoPage = () => {
  return (
    <div>
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      Error 404
      <p>Something went wrong!</p>
    </div>
  );
};

export default NoPage;
