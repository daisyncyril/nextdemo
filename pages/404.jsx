import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const Router = useRouter();
  
  useEffect(() => {
    setTimeout(() => {
      // Router.go(-1)
      Router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>ooops</h1>
      <h2>that page cant be found</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>HomePage</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
