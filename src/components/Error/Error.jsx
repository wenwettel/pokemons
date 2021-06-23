import Button from "components/Button";
import ErrorStyle from "./ErrorStyle";
import Link from "next/link";
function Error() {
  return (
    <ErrorStyle>
      <div>
        <h1>Error</h1>
        <p>
          There was an unexpected error.{" "}
          <strong>Please try again later.</strong>
        </p>
        <Link href="/">
          <a>
            <Button big color="#F51D03">
              TRY AGAIN
            </Button>
          </a>
        </Link>
      </div>
    </ErrorStyle>
  );
}

export default Error;
