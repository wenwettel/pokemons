import ButtonStyle from "./PaginationButtonStyle";
import Link from "next/link";
import Button from "components/Button";
function PaginationButtons({ prevHref, nextHref }) {
  return (
    <ButtonStyle>
      {prevHref && (
        <Link href={prevHref}>
          <a>
            <Button color="#000000">PREVIOUS</Button>
          </a>
        </Link>
      )}
      {nextHref && (
        <Link href={nextHref}>
          <a className="next">
            <Button color="#000000">NEXT</Button>
          </a>
        </Link>
      )}
    </ButtonStyle>
  );
}

export default PaginationButtons;
